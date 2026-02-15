# Infinite Levels — Design Improvements V2

> **Purpose:** Second-iteration design analysis incorporating blind playtest #2 feedback, deep code audit findings, and assessment of v1 changes. This document identifies what the v1 game update plan fixed, what it missed, and what the next round of improvements must target.
>
> **Companion docs:** [PLAYTEST_FEEDBACK_2.md](PLAYTEST_FEEDBACK_2.md) (blind playtest #2), [GAME_UPDATE_PLAN.md](GAME_UPDATE_PLAN.md) (v1 implementation plan), [DESIGN_IMPROVEMENTS.md](DESIGN_IMPROVEMENTS.md) (v1 design analysis)
>
> **Last updated:** February 15, 2026

---

## Table of Contents

1. [V1 Changes Assessment — What Landed, What Didn't](#1-v1-changes-assessment)
2. [The Elephant in the Room: HighlightableText is Broken](#2-the-elephant-in-the-room)
3. [Five Complete Systems Sitting in a Dev Page](#3-five-complete-systems-in-dev-page)
4. [The Stub Desert (31–98)](#4-the-stub-desert)
5. [Dead Ends That Kill Momentum](#5-dead-ends-that-kill-momentum)
6. [The Jester Problem](#6-the-jester-problem)
7. [Negative Levels Are a Gimmick, Not a Dimension](#7-negative-levels)
8. [New Bugs and Grammar Issues](#8-new-bugs-and-grammar)
9. [UX Friction Points](#9-ux-friction-points)
10. [The Missing Connective Tissue](#10-missing-connective-tissue)
11. [What the Playtest Validated](#11-what-playtest-validated)
12. [Prioritized Improvement Roadmap V2](#12-prioritized-roadmap-v2)

---

## 1. V1 Changes Assessment — What Landed, What Didn't

### ✅ V1 Wins (Confirmed by Playtest #2)

| Change | Result |
|--------|--------|
| **Level 7→8 button added** | Playtester reached Level 8 with no friction. The tutorial spine works. |
| **Level 8 shrine lowered to 5** | Playtester unlocked the text-highlighting tutorial naturally. Confirmed fix. |
| **Level 9 shrine lowered to 15** | Still a meaningful gate, but achievable. Playtester earned 11 achievements. |
| **Level 10 text-highlighting nudge** | Playtester understood the mechanic existed. Execution issues are separate (see §2). |
| **Typo fixes (Level 2, 3, 7)** | No typos noted in those levels by playtest. Clean. |
| **Level 12 word-number teaching** | Playtester specifically called out "dozen=12, score=20, pair=2" as a good puzzle. The teaching paragraph works. |
| **Level 50 Roman numeral teaching** | Playtester had a revelation moment: "The game has been hiding exits in plain sight THE ENTIRE TIME." Exactly the intended reaction. |
| **Level 20 wormhole text added** | Playtester found the level and read the text. But see below — the text doesn't actually work. |
| **Level 42 HighlightableText added** | Playtester found Level 42, engaged with the Hitchhiker's reference and pi hint. |
| **Breadcrumb trail** | Not explicitly mentioned, but playtester navigated ~30 levels without getting permanently lost. |
| **Browser back button** | Not mentioned as a pain point (it was #1 pain point in playtest #1). Silent success. |

### ❌ V1 Misses

| What V1 Missed | Why It Matters |
|----------------|----------------|
| **HighlightableText has 3 compounding bugs** | The entire text-selection mechanic — the game's core — is fundamentally broken. V1 added more HighlightableText everywhere but never fixed the rendering/interaction bugs. More surface area for the same broken mechanic. |
| **5 complete item systems are orphaned** | Clock, Flower, Encyclopedia, Diamond, Black Hole — all fully coded, none placed on any real level. V1 didn't address any of them. |
| **NotImplementedLevel has no navigation** | The procedural fallback creates text-only dead ends. V1 improved the handcrafted islands but didn't fix the ocean of stubs surrounding them. |
| **The Jester disappears after 3 encounters** | V1 didn't address the Jester's 3-stop path vs. the 100-encounter achievement chain. |
| **Level 40 is still empty** | V1 enhanced Levels 42, 55, 62, 72, 82, 88 — but Level 40 is still "This is level 40." with zero content. Playtester specifically flagged it. |
| **Scale has a one-way bug** | Items go on the scale but can never come off (dead code after `return;`). V1 didn't fix this. |
| **Negative levels are a horizontal flip** | NegativeLevelWrapper does `scaleX(-1)` making text unreadable. Playtester called negative levels "incomplete." V1 didn't touch this. |
| **Hint NaN key for imaginary levels** | Complex plane hints generate "NaN+0i" keys. V1 wrapped all hints in HighlightableText but didn't fix the key generation. |

### 🟡 V1 Partially Landed

| Change | What Happened |
|--------|---------------|
| **Level hints rewritten with breadcrumbs** | The hints are better, but the playtester noted Level 8's hint ("Check your wallet carefully") still doesn't relate to text highlighting. V1 changed the Level 7 hint but may have left the Level 8 hint disconnected. |
| **Level 55 sound-alike teaching** | The mechanic is taught but the playtester never reached Level 55 naturally — there's no chain leading there from the early game. |
| **Level 99 results as HighlightableText** | The playtester found Level 99 and praised the puzzle design, but noted the "highlighting/selection interaction model could use clearer affordance." The wrapping is correct; the underlying interaction is what's broken. |

---

## 2. The Elephant in the Room: HighlightableText is Broken

This is the single most critical finding. **The game's core mechanic doesn't work correctly.** The playtest rated it 8/10 based on the *idea* of text selection, but the actual implementation has three compounding bugs that make it unreliable.

### Bug A: Two-Step Selection (UX Nightmare)

**Code location:** `HighlightableText.js`, `handleMouseUp()` (lines 148-170)

The interaction requires selecting text **twice**:

1. First selection → sets `selectionJustMade = true` → returns early, does nothing
2. Second selection (while text is still highlighted) → falls through → calls `extractNumberFromText` → navigates

No other application in the world works this way. Players will select text once, nothing happens, and conclude the feature is broken. The playtester specifically noted: *"How exactly do you 'highlight and click' text to navigate? Do you drag-select? Double-click? Click after selecting? The interaction model isn't obvious."*

**Root cause:** The `selectionJustMade` flag appears to be an attempt to prevent accidental navigation on first select. The intent is good (don't navigate every time someone copies text), but the implementation makes the core mechanic feel broken.

**Fix approach:** Replace the two-step flow with a single-step interaction that has clear visual feedback. When text is selected, show a tooltip/popup near the selection showing the resolved number and a "Go to Level X" prompt. This is how every "smart text" system works (Wikipedia previews, dictionary lookups on select, etc.).

### Bug B: `isValidNumber()` Doesn't Check Word-Numbers

**Code location:** `HighlightableText.js`, `renderText` memo (line 131)

The `renderText` function splits text into spans and marks each with `$isClickable = isValidNumber(part)`. But `isValidNumber()` in `numberText.js` only checks:
- The `levelDictionary` (infinity variants, imaginary numbers)
- Numeric regex (`/^-?\d*\.?\d+$/`)
- Complex number pattern
- Roman numerals

It does **NOT** check `replacementDictionary` — which is where ALL the word-numbers live ("one", "two", "dozen", "score", "forty", "hundred", etc.). This means:

- "ten" → `isValidNumber("ten")` → `false` → no pointer cursor, no highlight
- "42" → `isValidNumber("42")` → `true` → pointer cursor, highlight

Meanwhile, `extractNumberFromText()` (used in `handleMouseUp`) DOES check `replacementDictionary`. So the navigation works if you manage to select the text, but there's zero visual indication that word-numbers are interactive.

**This explains the Level 20 bug.** The wormhole text says "ten, twenty, thirty, forty, fifty" — these words resolve in `extractNumberFromText` but are invisible to `isValidNumber`, so they have no cursor change, no highlight, no affordance.

**Fix approach:** `isValidNumber()` must also check `replacementDictionary` and `soundDictionary`. Better yet: unify the checking logic so `isValidNumber` and `extractNumberFromText` use the same lookup path.

### Bug C: Punctuation Kills Token Matching

**Code location:** `HighlightableText.js`, `renderText` (line 126)

Text is split by whitespace: `visibleText.split(/(\s+)/)`. This produces tokens like `"ten,"`, `"twenty,"`, `"thirty,"` — with trailing commas/periods/dashes. Neither `isValidNumber` nor `extractNumberFromText` strips punctuation before lookup.

**This affects every level with natural prose.** Any sentence like "There are a dozen hidden paths, and a hundred secrets" will fail to mark "dozen" and "hundred" as clickable because the tokens are "dozen" (clean — works) but "paths," (comma — breaks subsequent matching of surrounding context).

Actually, the split-by-whitespace approach means "dozen" would be its own token (preceded by "a" whitespace "dozen" whitespace), but "forty," would be one token "forty," — not "forty". So punctuation-adjacent words fail.

**Fix approach:** Strip punctuation from each token before running it through `isValidNumber` / `extractNumberFromText`. Regex: `word.replace(/[^a-zA-Z0-9.-]/g, '')` before lookup.

### Bug D: `highlightedText` State is Dead Code

**Code location:** `HighlightableText.js`, line 85

`setHighlightedText` is declared but never called anywhere. The `$isHighlighted` prop on `HighlightedSpan` is always `false`. This means:
- The hover effect (orange background) never activates
- The pointer cursor never shows
- The entire visual feedback system is dead

**Fix approach:** Remove the dead `highlightedText` state OR wire it up properly. The better path is to replace it with the tooltip-on-select approach from Bug A's fix.

### Summary: What "Fixing HighlightableText" Actually Means

| Layer | Current State | Target State |
|-------|--------------|--------------|
| **Detection** | `isValidNumber` misses word-numbers and sound-alikes | Must check all dictionaries |
| **Tokenization** | Punctuation breaks matching | Strip punctuation before lookup |
| **Visual affordance** | Zero (dead CSS, dead state) | Cursor change + subtle underline on hoverable words |
| **Interaction model** | Two-step selection (confusing) | Single selection → tooltip → click to navigate |
| **Feedback** | None (selection either works or silently fails) | Visual confirmation of what was found + where it leads |

This fix is **the single highest-impact change possible.** Every other improvement in this document — every new level, every breadcrumb, every hint rewrite — is built on the assumption that HighlightableText works. Until it does, the game is a beautiful idea undermined by broken execution.

---

## 3. Five Complete Systems Sitting on a Dev Page

The codebase contains five fully-implemented item systems that only exist on `LevelDemo` — a developer test page that normal players never see. Each one is complete enough to add real depth to the game. Leaving them orphaned wastes hundreds of lines of working code and makes the game feel shallower than it actually is.

### 3.1 The Clock ⏰

**What it does:** Real-time clock that navigates to the level matching the current hour (3 PM → Level 3). Marks the `clock` mechanic as discovered.

**Code:** `src/components/Common/Clock.js` — fully functional, never imported by any level.

**Where it should go:** Level 24 already has a clock *display* but renders its own inline timer. Replace it with the proper `Clock` component. Level 24 is themed "24 Hours in a Day" — this is literally its destiny.

**Why it matters:** Two hint texts reference the clock ("Time reveals new paths", "The clock shows more than just time"). Both playtesters searched for the clock and couldn't find it. Placing it fulfills a promise the game already makes.

### 3.2 The Flower System 🌸

**What it does:** Three flower types (Rose, Sunflower, Lotus) with 5-7 growth stages each. Growth progresses through level visits. Each stage has a unique weight for the scale. Flowers have visual emoji progression (🌰→🌱→🌿→🥀→🌹→💮→🏵️).

**Code:** `src/data/flowerTypes.js` (type definitions), `src/components/UI/FlowerPot.js` (component), `src/components/Games/EmojiGrow.js` (growth game), `src/store/slices/flowerSlice.js` (state management). ~400 lines total.

**Where it should go:** A flower pot on Level 5 or Level 6 (the early achievement levels) would introduce the system organically. The growth stages encourage revisiting levels — which is exactly what the game rewards.

**Why it matters:** The flower system is the game's only "long-term pet" mechanic. It gives players a reason to revisit levels beyond achievement hunting. The weight integration with the scale creates a navigation puzzle: grow your flower to change its weight, put it on the scale, navigate to new levels.

### 3.3 The Number Encyclopedia 📖

**What it does:** Modal showing prime factorization, mathematical properties, and special number facts. Handles π, e, complex numbers, and infinity.

**Code:** `src/components/Items/NumberEncyclopedia.js` (modal), `src/components/Items/CollectableEncyclopedia.js` (collectible item).

**Where it should go:** Behind the shrine on Level 9 (currently locked at 15 achievements, reveals a "secret ability"). The encyclopedia IS the secret ability — it makes every number you encounter informative, not just navigable. Frame it as: *"The Encyclopedia of Numbers — every level has a story."*

**Why it matters:** The playtester noted that stub levels are "jarring" — "just 'This is level 40.' Nothing else." The Encyclopedia lets any level become interesting by showing its mathematical properties. It turns dead ends into mini-discoveries.

### 3.4 The Diamond 💎

**What it does:** Collectible item with associated achievement.

**Code:** `src/components/Items/CollectableDiamond.js`

**Where it should go:** Behind a high-achievement shrine on a milestone level (Level 100, Level 153, or a special number level). It's a rare collectible that rewards deep exploration.

**Why it matters:** The `DIAMOND_COLLECTOR` achievement is defined but permanently locked. Placing the diamond makes a previously-impossible achievement achievable.

### 3.5 The Black Hole ⚫ → Level ∞

**What it does:** Collectible item that weighs **Infinity** on the scale. Placing it on the scale navigates to Level Infinity.

**Code:** `src/components/Items/CollectableBlackHole.js`

**Where it should go:** This is the game's most hidden secret. It should be extremely difficult to find — perhaps on a level reachable only through obscure math (Level 69420, Level 9999, or behind a shrine requiring 30+ achievements). The journey to Level Infinity via the Black Hole should feel like an endgame discovery.

**Why it matters:** Level Infinity currently has a single exit (Level 0) and no items. The Black Hole creates a meaningful journey TO infinity, and the scale-weight mechanic is an elegant puzzle that rewards understanding of the item system.

### Placement Summary

| Item | Place On | Gated Behind | Teaching Moment |
|------|----------|-------------|-----------------|
| Clock | Level 24 | None | "Time itself is a navigation tool" |
| Flower Pot | Level 5 or 6 | None (visible early) | "Some things grow with exploration" |
| Encyclopedia | Level 9 | 🔒15 shrine | "Every number has a story" |
| Diamond | Level 153 | 🔒25 shrine | "Some treasures are well-hidden" |
| Black Hole | Level 9999 | 🔒35 shrine | "Even infinity has an address" |

---

## 4. The Stub Desert (31–98)

### The Problem

Between Level 30 (The Outpost) and Level 99 (Two Nines), there are **53 levels** that render nothing but "This is level N." — no interactions, no navigation, no flavor. The playtest called Level 40 specifically "jarring" and noted it "breaks immersion in an otherwise rich game."

V1 enhanced 8 islands in this desert (42, 55, 62, 69, 72, 77, 82, 88). But 45 levels remain as pure stubs. Worse, the `NotImplementedLevel` fallback — which generates number theory poetry and year facts — doesn't apply to these levels because they DO have components in the `levelComponents` dictionary. They're hand-registered but empty, bypassing the (actually decent) procedural fallback.

### The Root Cause

Levels 31-98 have individual files (`Level31.js` through `Level98.js`) that each contain only:

```jsx
<Card.Title>Level {N}</Card.Title>
<Card.Text>"This is level {N}."</Card.Text>
```

These are registered in `Level.js`'s `levelComponents` dictionary. The NotImplementedLevel fallback only triggers when a level is NOT in the dictionary. So these stubs **block** the richer procedural content.

### The Fix: Three-Tier Approach

**Tier 1 — Remove pure stubs from the dictionary (30 minutes)**

For any level between 31-98 that has ≤20 lines and no unique mechanics, remove it from `levelComponents` in `Level.js`. This lets `NotImplementedLevel` handle it — which generates:
- Number theory analysis (prime? palindrome? Fibonacci? Kaprekar?)
- Digit pattern detection (zigzag, mountain, staircase, etc.)
- Procedural poetry from matching properties
- Year facts for levels 1955-2046
- HighlightableText wrapping (numbers in the poem ARE clickable)

The procedural content is actually richer than "This is level 40." The year facts for 1969 (moon landing), 2000 (Y2K), 1984 (Orwell) are genuinely interesting.

**Tier 2 — Add escape hatches to NotImplementedLevel (1 hour)**

The procedural fallback currently renders no navigation elements. Fix:
- Add a `<LevelButton>` back to the nearest handcrafted level (round down to nearest 10)
- Add a "Continue exploring" button to level N+1
- The HighlightableText poem already contains numbers — ensure they work as exits (depends on Bug B fix)

**Tier 3 — Elevate 5-6 mathematically interesting stubs (3 hours)**

Some numbers in the 31-98 range deserve handcrafted content:

| Level | Why It's Special | Content Idea |
|-------|-----------------|--------------|
| **37** | The most common "random" number humans pick. Self-referentially prime. | *"Did you know thirty-seven is the most common number people choose when asked to pick a random one? There's nothing random about you being here."* |
| **42** | ✅ Already done (Hitchhiker's Guide) | — |
| **47** | The quintessential "random" prime. | *"Forty-seven appears in more Star Trek episodes than any other number. Some say it's the most interesting uninteresting number."* |
| **64** | 2⁶, chessboard squares, N64. | *"Sixty-four squares on a chessboard. Sixty-four bits in a modern processor. Two to the power of six. A number that keeps doubling back on itself."* |
| **73** | Sheldon Cooper's number. 73 is the 21st prime; 21 = 7×3; mirror(73) = 37 = 12th prime; mirror(21) = 12. | *"Seventy-three is the best number. It's the twenty-first prime. Its mirror, thirty-seven, is the twelfth prime. Its mirror, twenty-one, is the product of — you guessed it — seven and three. Welcome to the most self-referential number in existence."* |
| **86** | "Eighty-sixed" = removed/killed in slang. | *"To be eighty-sixed is to be removed, erased, gone. This level is eighty-six. Is anything here? Was anything ever here? Try to find out before this level eighty-sixes you too."* (Add a slow stability bar for flavor.) |

---

## 5. Dead Ends That Kill Momentum

The playtest identified dead ends as a core frustration. A dead end isn't just a missing button — it's a broken promise. The game teaches "everything is a button, explore and you'll always find a way forward." Every dead end contradicts this promise.

### Critical Dead Ends to Fix

| Level | Current State | Fix |
|-------|--------------|-----|
| **Level 21** | Two card collectibles, no navigation buttons. Pure dead end. | Add LevelButton to Level 17 (VIP lounge) and Level 25. |
| **Level 40** | "This is level 40." Zero content. | Remove from `levelComponents` → let NotImplementedLevel handle it with number theory. Or: handcraft with "forty winks" sleep theme. |
| **All stubs 31-98** | Single line of text, no exits. | See §4 — remove from dictionary or add escape hatches. |
| **Level Infinity** | "Return to Reality" button only. | Add HighlightableText body about infinity's mathematical properties. Add a collectible or achievement. The endgame level should feel like an ending, not a cul-de-sac. |
| **Level -13** | The only explicitly-coded negative level. Does it have forward paths? | Needs audit. Add paths to other negative levels or back to Level 13. |
| **Level 1001** | "Arabian Nights" theme. | Check if it has exits. If not, add LevelButton to 1000 and HighlightableText with navigable content. |
| **Level 69420** | Meme easter egg. Only way to trigger STRANGE_PRESENCE achievement. | Ensure it has an exit. Add humor: *"nice. You made it to the meme level. Here's your prize: absolutely nothing. Well, maybe one thing..."* → collectible or achievement. |

### The NotImplementedLevel Dead-End Fix

Every `NotImplementedLevel` instance should include:

```jsx
<CenteredContainer>
  <LevelButton targetLevel={nearestHub}>
    Back to Level {nearestHub}
  </LevelButton>
</CenteredContainer>
```

Where `nearestHub` maps to: 0, 10, 30, 100, 150 depending on the level range. This is a safety net that costs 5 lines of code and eliminates hundreds of dead ends.

---

## 6. The Jester Problem

### Current State

The Jester has **3 hardcoded stops** (Level 11 → Level 8 → Level 9 → null). After the third encounter, `jester.nextLevelAppearance` is `null` and the Jester is gone forever.

But the achievement chain has **6 tiers** requiring 5, 10, 20, 30, 50, and 100 encounters:
- `JESTER_FRIEND` (5) — barely achievable by replaying Level 11
- `JESTER_BUDDY` (10) — requires grinding or bug
- `JESTER_COMPANION` through `JESTER_LEGEND` — **permanently impossible**

### The Fix: Roaming Jester

After the 3-stop tutorial path, the Jester should reappear on a rotating basis. Options:

**Option A: Prime-number roaming.** After stop 3, the Jester appears on every prime-numbered level the player visits for the first time. Primes are: 11(done), 13, 17(already has content), 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97. That's 20 potential encounters, which gets to `JESTER_COMPANION` (20). For higher tiers, the Jester reappears on primes even on repeat visits, with diminishing probability.

**Option B: Random appearance.** After stop 3, each level has a 10% chance of the Jester appearing. This is simpler but less thematic.

**Option C: Breadcrumb trail.** Each Jester encounter hints at the next prime: *"I'll be at the next prime number you haven't visited yet. What comes after thirteen?"* This turns the Jester into a prime-number teaching tool that synergizes with the math theme.

**Recommendation:** Option C. It makes the Jester a guide who teaches number theory through play, and the "find the next prime" challenge is exactly the kind of mathematical exploration the game rewards.

Each Jester encounter after stop 3 should give a one-line cryptic hint about a nearby undiscovered mechanic:
- Level 13: *"Spooky! Did you know this number is considered unlucky in many cultures? Speaking of negatives..."* (hints at negative levels)
- Level 17: *"The VIP lounge! I've been waiting for you. Have you tried the refreshments?"*
- Level 19: *"An empty level. Or is it? Words carry numbers, you know..."* (hints at word-number in "nineteen")
- Level 23: *"Almost to a quarter! Twenty-five is special — every quarter tells a story."*

---

## 7. Negative Levels Are a Gimmick, Not a Dimension

### Current State

`NegativeLevelWrapper` applies two effects:
1. `transform: scaleX(-1)` — horizontally mirrors all content (text reads backwards)
2. Dark theme via `!important` overrides on buttons, headings, paragraphs

The playtester called negative levels "incomplete" and suggested "inverted colors, reversed text, mirror-world theme." The current implementation is the worst-case scenario: text is literally mirrored (unreadable), and the dark theme is achieved through brute-force CSS.

### The Problems

1. **Mirrored text is unreadable, not mysterious.** `scaleX(-1)` makes every letter backwards. Players can't read the content. This isn't a puzzle — it's an accessibility failure.
2. **Inconsistent with Level 14.** Level 14 (the negative space intro) uses `scaleY(-1)` (vertical flip), while NegativeLevelWrapper uses `scaleX(-1)`. Two different flip directions for the same concept.
3. **No unique negative content.** Level -13 is the only explicit negative level. All others fall to NotImplementedLevel, which renders the same content as the positive version but mirrored.
4. **The HighlightableText reversal trick.** In `handleMouseUp`, there's code to try `reversedText` if the level is negative. This suggests the designer intended "select text backwards to navigate" — a clever mechanic that's completely broken because you can't read the text to select it.

### The Fix: Make Negatives a Parallel Universe

Replace `scaleX(-1)` with:

```css
filter: invert(0.85) hue-rotate(180deg);
```

This creates a "photographic negative" effect — colors are inverted, creating an eerie parallel-universe feel where text is still readable. Light backgrounds become dark, warm colors become cool.

Additionally:
- **Remove the mirroring entirely.** Text should be readable.
- **Add unique flavor text to negative levels.** NotImplementedLevel should detect negative levels and generate "shadow" descriptions: *"Level -40. The shadow of forty. Everything here is the opposite of what it seems."*
- **Make the reversed-text mechanic explicit.** If the game wants players to select text backwards on negative levels, it needs to TEACH this. Add a note to Level 14 (the negative space intro): *"In the negative space, even words run backwards. Try selecting text from right to left."*

---

## 8. New Bugs and Grammar Issues

### From Playtest #2

| # | Bug | Severity | Location | Fix |
|---|-----|----------|----------|-----|
| 1 | **Number-words not clickable (Bug B above)** | 🔴 Critical | `HighlightableText.js` `isValidNumber()` | Check `replacementDictionary` and `soundDictionary` |
| 2 | **Two-step selection required (Bug A above)** | 🔴 Critical | `HighlightableText.js` `handleMouseUp()` | Replace with single-step + tooltip confirmation |
| 3 | **Punctuation breaks tokenization (Bug C above)** | 🔴 Critical | `HighlightableText.js` `renderText` | Strip punctuation before lookup |
| 4 | **Visual feedback dead code (Bug D above)** | 🟡 Medium | `HighlightableText.js` `highlightedText` state | Remove or rewire |
| 5 | **Hint NaN key for imaginary levels** | 🟡 Medium | `LevelHint.js` level key generation | Fix `levelToString` for imaginary inputs |
| 6 | **Scale one-way bug** | 🟡 Medium | `Scale.js` ~line 160 | Remove early `return;` blocking removal code |
| 7 | **Typo "anomolies"** | 🟢 Low | Level 16 | → "anomalies" |
| 8 | **Grammar "there another"** | 🟢 Low | Level 9 | → "there's another" |
| 9 | **Grammar "The secret lays"** | 🟢 Low | Level 9 | → "The secret lies" |
| 10 | **Literal "x" displayed** | 🟢 Low | Level 9 | Replace placeholder "x" with actual count "15" |
| 11 | **Level 20 "choose quickly" with no timer** | 🟢 Low | Level 20 | Either add a timer or remove urgency language |
| 12 | **React DOM nesting warnings** | 🟢 Low | Multiple levels | `<div>` inside `<p>` — restructure JSX |
| 13 | **`findNumberWords.js` completely disconnected** | 🟡 Medium | Never imported by HighlightableText | Wire it into the rendering pipeline or remove |

### The `findNumberWords.js` Paradox

This file is a well-written utility that correctly identifies number words, sound-alikes, Roman numerals, and complex numbers in text. It's exactly what `HighlightableText.renderText` needs to determine which words are interactive. But **it's never imported by HighlightableText**. The component rolls its own (broken) detection via `isValidNumber`.

**Fix:** Import `findNumberWords` in HighlightableText and use it to determine which tokens are interactive. This eliminates Bugs B and C in one move.

---

## 9. UX Friction Points

### 9.1 Level 2 Text Wall

Playtest quote: *"This is where a real player might get impatient. You just had the satisfaction of finding a hidden button, and now you're reading a wall of text."*

**Current state:** ~150 words of unbroken text explaining the hint system.

**Fix:** Break into 3 short paragraphs with a visual break between each. Add one interactive element — a coin, a highlighted number, or a mini-challenge — to maintain engagement. The critical message ("Go check Level 3's hint") should be the LAST line, not buried in a paragraph.

### 9.2 Level 8 Hint Mismatch

The Level 8 hint says "Check your wallet carefully" — but Level 8 teaches text highlighting. The hint should relate to what the level actually teaches.

**Fix:** Change to: *"The text on this page is more interactive than it looks. Try selecting any number you see."*

### 9.3 Post-Tutorial Choice Paralysis

Playtest quote: *"I can go anywhere" quickly becomes "but where SHOULD I go?"*

**Fix:** Level 10 already has suggested destinations (Level 0, Level 11). Add 1-2 more that create a forward chain:
- "🧭 Explore the unknown → Level 20" (the wormhole — visually impressive, hooks the player)
- "🎲 Try your luck → Level 42" (universally known reference, broadens the world)

### 9.4 Text Selection Affordance

The playtester repeatedly noted that the text selection mechanic has no visual affordance. Players can't tell the difference between "static text" and "interactive text."

**Ideal fix (full):** When hovering over a word that resolves to a number, show a subtle underline and cursor change. When selecting text that contains a number, show a tooltip: "Level 42 →"

**Minimum viable fix:** Add `cursor: help` (question mark cursor) to the `TextContainer` styled component. This signals "there's something interactive here" without revealing what. It's thematic — the game is about discovery.

---

## 10. The Missing Connective Tissue

The playtest revealed a structural problem: **the game has islands of great content separated by seas of nothing.** The handcrafted levels (0-10, 12, 13, 14, 15, 17, 20, 25, 30, 42, 50, 55, 62, 69, 72, 77, 82, 88, 99, 100, 150-161, 999, 1000) are individually good. But there's no chain connecting them.

### Current Navigation Graph (Post-Tutorial)

```
Level 10 → 11 → 12 (word-numbers)
                ↓
         [GAP: 13-19 are mostly sparse]
                ↓
Level 20 (wormhole, broken) → [DEAD END if words don't work]
                ↓
Level 25 (quarter) → [no forward path]
Level 30 (outpost) → 0, 10, i, -30
                ↓
         [DESERT: 31-49 are stubs]
                ↓
Level 50 (Roman numerals) → [no forward path]
                ↓
         [DESERT: 51-98 are stubs with 6 islands]
                ↓
Level 99 (calculator) → via 9⁹ → Level 387,420,489
Level 100 (milestone) → 20, 10, 0
```

### What's Missing: Forward Chains

Every handcrafted level should have at least one forward path (explicit button or HighlightableText word) pointing to the NEXT handcrafted level. Currently:
- Level 12 has no forward path to Level 13, 14, or 20
- Level 25 has no forward path to Level 30
- Level 30 has no forward path to Level 42 or 50
- Level 50 has no forward path to Level 55, 62, or 99
- Level 100 points BACKWARD (to 20, 10, 0) but not forward to 150

**Fix principle:** Every hub level should contain HighlightableText with word-numbers that create a "breadcrumb trail" to the next interesting destination. The player doesn't need to follow it — but it should exist for those who do.

| Level | Add Forward Path To | Via |
|-------|-------------------|-----|
| 12 | 13 or 14 | *"What comes after a dozen? Thirteen, some say, is unlucky..."* |
| 20 | 30 | *"Through the wormhole, thirty paths converge at an outpost..."* (once text highlighting works) |
| 25 | 30 | *"A quarter of the way to one hundred. The outpost at thirty might have more answers."* |
| 30 | 42 or 50 | Already has "fifty lies to the east, one hundred to the north" — ✅ if text highlighting works |
| 50 | 99 or 100 | *"C is one hundred. Can you find it?"* + LevelButton to 99 or 100 |
| 100 | 150 | *"Beyond the century mark, one hundred and fifty levels await..."* + LevelButton to 150 |
| 150 | 999 or 1000 | Add HighlightableText with *"a thousand levels from here..."* |

---

## 11. What the Playtest Validated

Not everything needs to change. The playtest confirmed several design decisions as working well:

### ✅ Core Design Validated

- **Progressive revelation arc** is "masterfully paced" (8/10 overall)
- **Level 1 accordion** — "perfect, no friction"
- **Level 3 hint-as-solution** — "beautiful... the game's single most important teaching moment"
- **Level 7 coin tutorial** — "excellent tutorial design"
- **Level 15 collapse** — "the game's best moment" / "jaw-dropping reveal"
- **Level 17 VIP lounge** — "charming and unexpected, a palette cleanser"
- **Level 99 calculator** — "the best interactive puzzle in the game"
- **Level 50 Roman numerals** — "another brilliant meta-mechanic that applies retroactively"
- **Achievement shrine gating** — "satisfying progression mechanic"
- **Hint system as core mechanic** — "bold and successful design choice"

### ✅ V1 Changes Validated

- **Level 8 reachability** — fixed, no friction noted
- **Level 12 word-number teaching** — specifically praised
- **Level 50 Roman numeral teaching** — caused a revelation moment
- **Browser back button** — silently fixed the #1 pain point from playtest #1
- **Breadcrumbs** — player navigated 30 levels without getting permanently lost

### ✅ Don't Touch These

- Level 0 (perfect entry)
- Level 1 (accordion — just right)
- Level 3 (hint trick — best tutorial moment)
- Level 4 (shrine tutorial — satisfying)
- Level 5/6 (quick wins — appropriately easy)
- Level 7 (coin tutorial — earned moment)
- Level 15 (collapse — emotional peak)
- Level 17 (VIP lounge — charming)

---

## 12. Prioritized Improvement Roadmap V2

### 🔴 Priority 1: Fix the Core Mechanic (HighlightableText)

**Estimated effort:** 4-6 hours  
**Impact:** Affects literally every level in the game  

1. Fix `isValidNumber()` to check `replacementDictionary` and `soundDictionary`
2. Strip punctuation from tokens before lookup
3. Replace two-step selection with single-step + visual confirmation
4. Add minimum affordance (cursor change on hoverable words)
5. Remove dead `highlightedText` state or rewire it
6. Consider importing `findNumberWords.js` as the unified detection layer

### 🟡 Priority 2: Place Orphaned Systems (Clock, Encyclopedia, Flower, Items)

**Estimated effort:** 2-3 hours  
**Impact:** Adds 5 new mechanics and unlocks 10+ achievements  

1. Place Clock on Level 24
2. Place Encyclopedia behind Level 9 shrine
3. Place Flower Pot on Level 5 or 6
4. Place Diamond on Level 153 behind a shrine
5. Place Black Hole on Level 9999 behind a high shrine
6. Fix Scale one-way bug (remove `return;`)

### 🟡 Priority 3: Kill the Stub Desert

**Estimated effort:** 2-3 hours  
**Impact:** Eliminates ~45 dead-end levels  

1. Remove pure stubs from `levelComponents` dictionary (let NotImplementedLevel handle them)
2. Add escape hatches to NotImplementedLevel (LevelButton back + forward)
3. Handcraft 5-6 mathematically interesting levels (37, 47, 64, 73, 86)

### 🟡 Priority 4: Fix Dead Ends and Add Forward Chains

**Estimated effort:** 2-3 hours  
**Impact:** Creates a navigable path through the entire game  

1. Add forward paths from every hub level (see §10 table)
2. Fix Level 21 (add navigation)
3. Fix Level Infinity (add content + collectible)
4. Add escape hatches to Level 69420, Level 1001
5. Fix Level 20's urgency language (add timer or remove "quickly")

### 🟢 Priority 5: Fix the Jester

**Estimated effort:** 2 hours  
**Impact:** Makes 5 achievements possible, adds a recurring guide  

1. Implement roaming Jester on prime-numbered levels
2. Each encounter gives a contextual hint
3. Encounters count toward the achievement chain

### 🟢 Priority 6: Fix Negative Levels

**Estimated effort:** 1-2 hours  
**Impact:** Makes an entire dimension playable  

1. Replace `scaleX(-1)` with `filter: invert(0.85) hue-rotate(180deg)`
2. Remove horizontal mirroring
3. Add shadow-world flavor text to negative NotImplementedLevel output
4. Teach the reversed-text mechanic explicitly on Level 14

### 🟢 Priority 7: Bug Fixes and Polish

**Estimated effort:** 1-2 hours  
**Impact:** Quality of life  

1. Fix hint NaN key for imaginary levels
2. Fix Level 9 grammar (3 issues)
3. Fix Level 16 "anomolies" typo
4. Fix Level 2 text wall (break into shorter paragraphs)
5. Fix Level 8 hint mismatch
6. Add 2-3 forward destinations to Level 10

### 🟢 Priority 8: Content Enrichment

**Estimated effort:** 3-4 hours  
**Impact:** Depth and polish  

1. Add more cards across levels (currently only 3 levels have cards; need enough for FULL_SUIT)
2. Enrich Level Infinity with philosophical text + more exits
3. Add more Level buttons to Level 100 pointing forward (150, 999)
4. Improve NotImplementedLevel rendering (use the number theory + year facts more prominently, add visual variety)
5. Add the EmojiGrow game as a discoverable mini-game on a mid-range level

---

## Summary: The V2 Vision

V1 fixed the **spine** — the tutorial works, the teaching levels teach, the hints have breadcrumbs. V2 needs to fix the **nervous system** — the core interaction (HighlightableText), the orphaned organs (Clock, Flower, Encyclopedia, Diamond, Black Hole), the circulatory system (forward chains between levels), and the dead tissue (stub desert, dead ends, broken negative levels).

The game's core idea remains brilliant. The playtest gave it 8/10 despite all these issues. That means the ceiling is extraordinarily high — a game where every surface is truly interactive, every number is truly navigable, every level has a reason to exist, and every mechanic is discoverable through play. That game is about 20 hours of focused work away from what exists today.
