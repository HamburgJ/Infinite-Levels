# Infinite Levels — Design Improvements Megadoc

> **Purpose:** Comprehensive game design analysis and improvement roadmap, synthesized from code analysis, playtest feedback, and level graph mapping.
>
> **Companion docs:** [LEVEL_GRAPH.md](LEVEL_GRAPH.md) (directed graph of all connections), [PLAYTEST_FEEDBACK.md](PLAYTEST_FEEDBACK.md) (external playtest report)
>
> **Last updated:** February 14, 2026

---

## Table of Contents

1. [Design Philosophy Assessment](#1-design-philosophy-assessment)
2. [Critical Issues (Blockers)](#2-critical-issues-blockers)
3. [The Knowledge Progression System](#3-the-knowledge-progression-system)
4. [Level-by-Level Improvements](#4-level-by-level-improvements)
5. [System-Level Improvements](#5-system-level-improvements)
6. [Content Gaps & Dead Ends](#6-content-gaps--dead-ends)
7. [Incomplete / Orphaned Systems](#7-incomplete--orphaned-systems)
8. [Bugs & Technical Debt](#8-bugs--technical-debt)
9. [Playtest-Driven Fixes](#9-playtest-driven-fixes)
10. [New Feature Ideas](#10-new-feature-ideas)
11. [Prioritized Roadmap](#11-prioritized-roadmap)

---

## 1. Design Philosophy Assessment

### The Core Vision
The game's design philosophy is exceptional: **knowledge is the map.** There is no hub, no level select screen, no minimap. Instead, the player progressively discovers that the entire UI is a navigation surface. A novice sees buttons; an expert sees numbers everywhere — in text, coins, card values, scale weights, clock times, achievement descriptions, settings menus, and even confirmation dialogs.

This creates a beautiful progression arc where the game literally looks different to a new player versus an experienced one. The same screen that feels like a dead end to a beginner is a 50-connection hub to someone who understands text-highlighting, word-numbers, and sound-alikes.

### Where the Vision Falls Short

**The problem isn't the destination — it's the ladder.** The game has 21 distinct navigation mechanics (see LEVEL_GRAPH.md, Mechanic Unlock Sequence), but only teaches 6 of them. The other 15 are "discover it yourself or never know it exists." This is fine for 2-3 hidden mechanics that reward deep curiosity, but 15 untaught mechanics means even dedicated players will miss most of the game.

**The biggest gap is between Mechanic 6 (scale) and Mechanic 7 (text-highlighting).** Text-highlighting is the watershed moment — it's the mechanic that transforms the game from "find the button" to "everything is a button." But it's locked behind 15 achievements on Level 8, and no other path teaches it. The playtest confirmed this: an AI with perfect patience couldn't reach Level 8 after 45 minutes of systematic exploration.

---

## 2. Critical Issues (Blockers)

### 🔴 Issue #1: Level 8 is Unreachable via Normal Play

**Severity:** Game-breaking  
**Confirmed by:** Playtest  
**See:** LEVEL_GRAPH.md → Critical Path Analysis

**The problem:** No level has an explicit LevelButton pointing TO Level 8. The text-highlighting tutorial is ON Level 8, behind a 15-achievement shrine. This is a circular dependency — players need text-highlighting to efficiently earn achievements, but need achievements to learn text-highlighting.

**Possible solutions (pick one or combine):**

**Option A: Lower the gate**
- Reduce Level 8's shrine from 15 → 5 achievements
- Player can earn 5 via: LEVEL_5 (auto), LEVEL_6 (auto), BACKTRACKER (visit a level 5 times), MONEY_MANAGER (find wallet on Level 4 with 5 achievements), and one more from natural exploration

**Option B: Add a direct path to Level 8**
- Add a LevelButton to Level 8 somewhere reachable (Level 6 is a hub, Level 7 teaches items — Level 7 could include a button to 8 since they're consecutive tutorial levels)
- Or: Add a coin worth 8¢ (or a way to get 8 pennies) so stack-count navigation works

**Option C: Teach text-highlighting earlier, on a different level**
- Move the text-highlighting tutorial to Level 7 (combine with "Basic Traveling") or create a new level between 7 and 8
- Make the 15-achievement shrine on Level 8 contain ADVANCED text techniques (word-numbers, sound-alikes) instead

**Option D: Make the Level 10 recap actually work as navigation**
- Level 10 lists "Level 8: Advanced Traveling Techniques" in HighlightableText
- But players reach Level 10 via Level 4's shrine (3 achievements), so they can see the text "8" — they just don't know they can click it yet
- If another hint or nudge on Level 10 said something like "Try selecting a number in this text...", it could bootstrap the discovery

**Recommendation:** Combine A + B. Lower the gate to 5, AND add a LevelButton → 8 on Level 7. This ensures multiple paths to the most critical level in the game.

---

### 🔴 Issue #2: Hint Text is Not Navigable

**Severity:** High — contradicts core design  
**Confirmed by:** Code analysis

**The problem:** Level 2 explicitly tells players "the hint system is an important and necessary part of this game." But 95% of hint body text is plain strings, not wrapped in `HighlightableText`. This means:
- Players trained to interact with text find hints unresponsive
- The `HINT_TEXT` achievement ("Found a level hidden in text in a hint") is nearly impossible to earn
- Hints that contain number words like "Three", "Forty", "Four", "Five", "Six", "million" are wasted navigation opportunities

**The fix:** Wrap all hint body text in `HighlightableText` with `onLevelChange` closing the modal. This is a single-component change in `LevelHint.js` that would:
- Make every number in every hint clickable
- Enable navigation from hints (as the game promises)
- Make the `HINT_TEXT` achievement earnable
- Turn hints into a navigation surface (consistent with the design philosophy)

**Bonus opportunity:** Many hints already contain navigable words:
- "Three is a magical number" → 3
- "Forty steps deeper" → 40
- "Double your efforts" → 2
- "Four digits of complexity" → 4
- "Six digits of challenges" → 6
- "A million possibilities" → 1,000,000

These become navigation breadcrumbs for free once hints use HighlightableText.

---

### 🔴 Issue #3: Level -0 is Unreachable

**Severity:** Medium — hand-crafted content is orphaned  
**Confirmed by:** Code analysis

**The problem:** The router normalizes level key `-0` to `0` (JavaScript treats `-0 === 0`), so `LevelNeg0.js` is never rendered. Level 9's 🔒30 shrine contains a riddle hinting at Level -0, but even if the player figures it out, they can't get there.

**The fix:** Use a string key like `"-0"` that doesn't get normalized, or handle the `-0` case specially in the level router using `Object.is(value, -0)` or a string comparison.

---

### 🔴 Issue #4: Multiple Complete Dead-End Levels

**Severity:** Medium — traps players  

| Level | Issue | Fix |
|-------|-------|-----|
| **20** | No buttons, no items, title "Level Wormhole" — "Wormhole" isn't a number | Add a LevelButton somewhere, or rename to include a number, or add HighlightableText body copy |
| **42** | Zero HighlightableText components — no text interaction possible | Wrap the webcam card text in HighlightableText |
| **404** | No buttons, only glitch text | Add a delayed escape button (like Level 13's pattern) or ensure the glitch text is HighlightableText |
| **162, 165, 168, 171** | Empty files — mapped in router but render nothing | Either add content or remove from router |

---

## 3. The Knowledge Progression System

### Current State

The game currently has a flat two-step teaching model:
1. **Tutorial (Levels 0-10):** Explicit button mechanics
2. **Everything else:** Figure it out yourself

### Proposed Knowledge Ladder

Each rung should be discoverable from the previous one, include an "aha!" moment, and reward the player with an achievement + expanded navigation space.

#### Rung 1: Buttons (Level 0) ✅ Already works
- Taught explicitly: "press the button"
- Achievement: none (this is base knowledge)

#### Rung 2: Hidden Buttons (Level 1) ✅ Already works
- Taught via accordion exploration
- Achievement: none

#### Rung 3: Hints (Level 2) ✅ Already works
- Taught explicitly: "use the hint system"
- Achievement: `HINT_MASTER` (10 hints)
- **Improvement needed:** Make hint text navigable (Issue #2)

#### Rung 4: Achievement Shrines (Level 4) ✅ Already works
- Taught via locked shrine
- Achievement: various shrine-gated ones

#### Rung 5: Numbers as Buttons (Level 7) ✅ Already works
- Taught via coins and scale
- Achievement: `LOOSE_CHANGE`, `WEIGHT_WATCHER`

#### Rung 6: Text Highlighting (Level 8) ⚠️ Gate too high
- **Current gate:** 15 achievements
- **Proposed gate:** 5 achievements + direct LevelButton from Level 7
- Achievement: `MAKING_MY_OWN_PATH`
- **This is the watershed mechanic — it MUST be accessible early**

#### Rung 7: Word Numbers ❌ Never taught
**Proposal:** Add a level in the 20-40 range that contains a sentence like:
> "There are a *dozen* ways to travel, and *twenty* more to discover."

A player who knows text-highlighting will instinctively try to click "dozen" and "twenty." When it works, they learn word-numbers exist.

- Achievement: `WORD_WIZARD` (already exists)
- **Natural placement:** Level 12 already has "A Dozen Choices" — enhance it to make "dozen" more obviously interactive, and add body text with more number words

#### Rung 8: Roman Numerals ❌ Hinted but never taught
**Proposal:** Level 50 already displays a giant "L" and says "Roman numeral L. That's a good way to get here." This hints at the mechanic but doesn't teach it. Add a clearer nudge:
> "Find the letter L anywhere in the game, and it'll bring you here. Roman numerals are buttons too."

- Achievement: `CLASSICAL_SCHOLAR` (already exists)

#### Rung 9: Sound-Alikes ❌ Never taught
**Proposal:** Add a level (maybe Level 55, which currently only has a balloon) with a riddle:
> "What do you get when you *wait* for *fortune* to arrive? *Ate* some food, then went *for* a walk."

Embedding wait(8), fortune(4), ate(8), for(4) as highlighted words. The player discovers that words containing number-sounds are navigable.

- Achievement: `SOUND_DETECTIVE` (already exists)

#### Rung 10: Math Expressions ❌ Never taught
**Proposal:** Level 99 already has a math puzzle (9○9). Enhance it: after solving, display the result in HighlightableText so the player can click it. Or add a new level with:
> "What is 7 times 7? Perhaps 7+7+7+7+7+7+7? The answer lies in the expression itself."

The player highlights "7 times 7" or "7+7+7+7+7+7+7" and discovers that expressions are evaluated.

- Achievement: `CALCULATOR` (already exists)

#### Rung 11: Equations with "Level" ❌ Never taught
**Proposal:** Add a level with:
> "If level squared equals forty-nine, then what is level?"

Highlighting "level squared equals forty-nine" → solved as level² = 49 → level = 7.

- Achievement: `EQUATION_MASTER` (already exists)

#### Rung 12: Constants (π, e, φ) ❌ Never taught
**Proposal:** Add a level referencing mathematical constants:
> "The ratio of a circle's circumference to its diameter is pi. The base of natural logarithms is e. The golden ratio is phi."

All three are in the replacement dictionary and would navigate to irrational number levels.

- Achievement: `IRRATIONAL_EXPLORER` (already exists)

#### Rung 13: Complex Notation ⚠️ Partially taught
- Level 30 provides a button to Level i
- Level i warns about instability
- **Improvement:** Add text somewhere teaching that "3+4i" style notation works in text highlighting

#### Rung 14: Abstract Descriptions ❌ Never taught
**Proposal:** A level with:
> "The speed of light is a number. The number of atoms in the universe is a number. Even the distance to the moon is a number."

All of these are in the abstract-description dictionary.

- Achievement: `DESCRIPTIVE_NUMBERS` (already exists)

#### Rung 15: UI Surfaces as Navigation ❌ Never taught
**Proposal:** This is the ultimate "aha!" moment — discovering that achievements, settings, and hints are ALL navigable. Teach it via a hint that says something like:
> "Numbers hide everywhere — even in places you wouldn't expect. Have you tried selecting text in the achievement menu?"

Or via an achievement description that contains an obvious number breadcrumb.

- Achievements: `ACHIEVEMENT_TEXT`, `SETTINGS_TEXT`, `HINT_TEXT`, `CONFIRMATION_TEXT`, `TITLE_TEXT`, `LEVEL_CEPTION` (all already exist)

---

## 4. Level-by-Level Improvements

### Tutorial Levels (0-10)

| Level | Issue | Suggested Fix |
|-------|-------|---------------|
| **0** | Solid. No changes needed. | — |
| **1** | Accordion could be more inviting | Add subtle animation or color to unexplored branches |
| **2** | Typos: "neccisary", "in not linear" | Fix spelling |
| **2** | Dead end if player doesn't use hints | Add a second exit (e.g., Level 4 button), or make hint usage more obvious |
| **3** | Typo: "barren then others" | Fix to "than" |
| **3** | Creates loop 0→1→3→0 with no forward progress | Hint for Level 3 has a button → 4, which breaks the loop. Ensure this is discoverable. |
| **4** | Good shrine tutorial | Consider lowering the inner shrine from 5→4 to reduce friction |
| **5-6** | Good achievement introduction | No changes needed |
| **7** | Typos: "is could be a button", "Take look" | Fix spelling |
| **7** | Left-click vs right-click on coins not explained | Add instruction: "Left-click a coin to travel. Right-click to collect." |
| **7** | **No path to Level 8** | Add a LevelButton → 8 |
| **8** | 🔒15 gate is too high | Lower to 🔒5 or 🔒7 |
| **8** | Only teaches digit-based text highlighting | Consider adding word-number examples in the tutorial text |
| **9** | 🔒30 + LockedBox is very deep | Consider lowering shrine to 🔒15 (now that 8 is lowered) |
| **10** | Recap list numbers are navigable but player may not know | Add a subtle hint: "Want to revisit? Try selecting any number above." |

### Post-Tutorial (11-20)

| Level | Issue | Suggested Fix |
|-------|-------|---------------|
| **11** | Only links back to 10. Very sparse. | Jester provides narrative hints — ensure they're actionable |
| **12** | "Dozen" is navigable but self-referential (→12) | Add text with OTHER number words: "a pair (2) of eggs and a score (20) of choices" |
| **13** | Horror level works well | No changes needed |
| **14** | Good negative realm gateway | No changes needed |
| **15** | Collapse mechanic introduction is abrupt | Consider a longer timer (15s) or a warning pre-level |
| **16** | Simple waypoint | Add more content or merge with 17's hub |
| **17** | Excellent VIP hub | No changes needed |
| **18** | Temporal anomaly is chaotic | Fun but unpredictable — consider making the button destination visible |
| **19** | Intentionally empty. Dead end without text-highlighting. | Intentional, but consider adding a "...isn't it?" that contains a hidden number |
| **20** | **Complete dead end** | Add at minimum HighlightableText body copy, or a delayed LevelButton |

### Stub Levels (21-99)

**~62 levels are bare stubs** ("This is level N."). These are the biggest content gap in the game. Rather than hand-crafting all 62, consider:

1. **Enhance 10-15 strategically** to teach specific knowledge rungs (see Section 3)
2. **Group the rest thematically** — give them at least a themed sentence:
   - Prime levels: "This is a prime level. Nothing can divide it."
   - Square levels: "A perfect square. Stable and balanced."
   - Fibonacci levels: "Part of an infinite sequence."
3. **Add items/connections to a few** to create breadcrumb trails through the 20-99 range

**Priority enhancements:**

| Level | Why | Suggested Enhancement |
|-------|-----|----------------------|
| **12** | Teach word-numbers (Rung 7) | Add text with "dozen", "pair", "score", "twenty" |
| **21** | Already has cards | Add HighlightableText about blackjack rules with numbers |
| **25** | Has a coin | Add text mentioning "quarter" → 25 |
| **30** | Already a hub | Good as-is |
| **42** | Dead end, needs HighlightableText | Wrap content in HighlightableText |
| **50** | Teach Roman numerals (Rung 8) | Make the teaching more explicit |
| **55** | Teach sound-alikes (Rung 9) | Replace balloon with sound-alike riddle |
| **69** | Dynamic browser info | Fun; add more HighlightableText wrapping for the numbers |
| **77** | Dice game | **Make dice results HighlightableText** — currently plain text! |
| **88** | Octopus theme | Add number words: "Eight arms, eight hearts, eight brains" |
| **99** | Math puzzle | Make puzzle results HighlightableText so they're navigable |

---

## 5. System-Level Improvements

### 5.1 Hint System Overhaul

**Current:** ~90 hints exist, but 95% are plain text strings.  
**Proposed:**
1. Wrap ALL hint body text in `HighlightableText`
2. Rewrite hints to contain intentional number breadcrumbs:
   - Level 7 hint: "The clock on level **twenty-four** shows more than just time" (→ 24)
   - Level 11 hint: "Try looking for the **Jester** — he started at level **eleven**" (→ 11)
   - Level 50 hint: "Roman numerals: **I**=1, **V**=5, **X**=10, **L**=50, **C**=100, **D**=500, **M**=1000"
3. Add dynamic hints that reference the player's current state:
   - "You have {N} achievements. {Required - N} more to unlock the shrine on Level 4."
   - "Have you tried using the scale on Level 7?"

### 5.2 Achievement Description Breadcrumbs

Achievement descriptions are already navigable (they use HighlightableText). Enhance them to be intentional navigation breadcrumbs:

| Achievement | Current Description | Proposed Enhancement |
|-------------|-------------------|---------------------|
| `WORD_WIZARD` | "Found a number written as text" | "Found a number written as text — try *dozen*, *score*, or *hundred*" |
| `SOUND_DETECTIVE` | "Found a sound-alike number" | "Found a sound-alike — try *wait*, *fortune*, or *skeleton*" |
| `CLASSICAL_SCHOLAR` | "Decoded a Roman numeral" | "Decoded a Roman numeral — try L, C, D, or M" |
| `CALCULATOR` | "Evaluated a mathematical expression" | "Evaluated an expression — try *two plus three* or *seven squared*" |
| `RATIONAL_NUMBER` | "like 1/2 or 3.14" | Already great — contains navigable numbers |
| `IRRATIONAL_NUMBER` | "like π or e" | Already great — contains navigable constants |

### 5.3 AchievementShrine Progress Text

**Current:** "Progress: 3/15" is plain text.  
**Proposed:** Wrap in HighlightableText. The numbers 3 and 15 become navigation targets. This is consistent with the "everything is a number" philosophy.

### 5.4 Navigation Safety Net

The playtest identified that getting lost is a major pain point. Without violating the "no hub" philosophy, consider:

**Option A: "Return to Level 0" in settings**
- A single option in the Settings modal: "Return to the beginning (Level 0)"
- Not a level select — just a safety rope

**Option B: Enhanced visited-levels display**
- The `VisitedLevelsDisplay` component exists but is only used on Level 82/999+999i
- Make it accessible from the navbar (e.g., a 📊 icon) after a certain achievement count
- Shows levels you've visited — clicking one in the display navigates there
- This is technically a hub, but it only shows levels you've already discovered, preserving the "knowledge is the map" ethos

**Option C: Browser back button support**
- Currently, level changes don't push to browser history
- Adding `window.history.pushState` for each level change would let players use the browser back button
- Subtle, doesn't break the game's aesthetic, solves the "I'm lost" problem

**Recommendation:** Option C is the most elegant. It doesn't add any visible UI but gives players a familiar escape mechanism.

### 5.5 The Wallet UX

The playtest identified significant confusion around wallet interactions:

| Problem | Fix |
|---------|-----|
| Left-click coin navigates, right-click collects — never explained | Add tooltip or instruction on Level 7 |
| Wallet button vs wallet image have different behaviors | Consolidate: one click to open wallet, "Drop" button inside |
| No visual feedback for coin collection | Add brief animation or sound on right-click collect |
| Scale "Empty" label doesn't suggest interaction | Change to "Place Item" or add a visual drop indicator |

---

## 6. Content Gaps & Dead Ends

### Number Line Coverage

| Range | Hand-crafted | Stubs | Missing | Priority |
|-------|-------------|-------|---------|----------|
| 0-10 | 11 | 0 | 0 | ✅ Complete |
| 11-20 | 10 | 0 | 0 | ⚠️ Needs enhancement |
| 21-50 | 6 (21,24,25,30,42,50) | 24 | 0 | ⚠️ Mostly stubs |
| 51-99 | 7 (55,62,69,72-74,77,88,95-99) | 42 | 0 | 🔴 Mostly stubs |
| 100-149 | 1 (100) | 0 | 49 | 🔴 Big gap |
| 150-171 | 8 | 0 | 4 empty files | ⚠️ Sparse chain |
| 172-403 | 0 | 0 | 232 | Falls to procedural |
| 404-998 | 2 (404,500) | 0 | 593 | Falls to procedural |
| 999-10M | 7 | 0 | millions | Falls to procedural |

### Dead Ends to Fix (Prioritized)

| Priority | Level | Current State | Suggested Fix |
|----------|-------|--------------|---------------|
| 🔴 High | **20** | No escape mechanism at all | Add HighlightableText body or a LevelButton |
| 🔴 High | **42** | No HighlightableText | Wrap webcam card content in HighlightableText |
| 🔴 High | **404** | No escape mechanism | Add delayed escape button (like Level 13) |
| 🟡 Med | **156** | No LevelButton, only a $10000 coin | Add a LevelButton back to 155 or 150 |
| 🟡 Med | **162,165,168,171** | Empty files | Add content or remove from router |
| 🟡 Med | **500** | No navigation | Add a LevelButton or navigable text |
| 🟡 Med | **999, 9999** | Math puzzles but no exit | Make puzzle results navigable via HighlightableText |
| 🟢 Low | **1000, 10000, etc.** | No LevelButton | Add "Return to Level 0" or similar |
| 🟢 Low | **69420** | No LevelButton | Fine as an easter egg — add minimal escape |

### Sparse Chain (150-171) Issues

The chain `161→158→156(dead)` and `155→153→150→7` are disconnected. Suggested fixes:
- Add a LevelButton on 156 (→ 150 or → 155) to close the dead end
- Populate empty files 162, 165, 168, 171 or remove from router
- Consider connecting the two sub-chains (e.g., 156→155)

---

## 7. Incomplete / Orphaned Systems

### 7.1 Flower System 🌸
**Status:** Partially implemented  
**What exists:** Store slice with `growthLevel`, `isGrown`, `flowerType`. FlowerPot component. Three flower types (rose, sunflower, lotus) with growth stages, weights, and `finalLevel`.  
**What's missing:** No trigger for growth. `finalLevel` is defined but never referenced. No gameplay loop.  
**Suggestion:** Flowers grow by visiting N levels. Each growth stage changes the flower's weight (→ different level via scale). At final growth, the flower's `finalLevel` becomes accessible — a new navigation token earned through patience.

### 7.2 Jester Path 🃏
**Status:** Too short  
**What exists:** 3-stop path (11→8→9→null). Encounter counter for achievements (up to 100).  
**What's missing:** Only 3 encounters possible. Achievements require 5/10/20/30/50/100 encounters.  
**Suggestion:** After reaching null, reset the path with a new, longer route. Or make the Jester appear procedurally (e.g., at prime-numbered levels, or levels the player hasn't visited yet). Give the Jester unique dialogue at each location hinting at nearby hidden content.

### 7.3 Mini-Games 🎮
**Status:** Mechanically orphaned  
**What exists:** ArgumentSimulator (troll debate), EmojiGrow (cooking combiner). Both are self-contained.  
**What's missing:** No connection to the main game. No items, achievements, or levels unlocked by playing them.  
**Suggestion:**
- Cooking game: completing a recipe produces a food item with a specific weight (navigable via scale)
- Argument simulator: winning/losing produces a text fragment with a number (navigable via text-highlighting)
- Both: add achievements for engagement

### 7.4 Economy (Spending) 💰
**Status:** Collection without spending  
**What exists:** Wallet, coins/bills, denominations, ChangeMachine for exchange.  
**What's missing:** Nothing to buy. Currency is purely navigational.  
**Suggestion:** This is actually a valid design choice — money IS navigation tokens. But consider:
- A "vending machine" on certain levels that costs coins and dispenses items (cards, keys, flowers)
- A toll gate on a level that requires specific denominations to pass
- The ChangeMachine could be used as a puzzle: "You need a $50 bill to pass. You only have quarters."

### 7.5 Time Mechanics ⏰
**Status:** Scaffolded but unenforced  
**What exists:** TimeController (hour-based accessibility), TimeManager (stability integration), Clock component.  
**What's missing:** The game slice's `setCurrentLevel` doesn't consult TimeManager. Level accessibility is computed but not gated. The Clock component isn't placed on most levels.  
**Suggestion:**
- Place the Clock on Level 24 (which already has a time theme) — clicking it navigates to the current hour
- Level 7's hint says "Time reveals new paths" — make this true by adding a Clock on Level 7
- Consider time-gated secret levels (e.g., Level 12 accessible only at noon, Level 3 at 3 o'clock)

### 7.6 AI Content Pipeline 🤖
**Status:** Disconnected from game  
**What exists:** Gemini-powered Python scripts generating emoji game state machines. 179 abstract states + 31 cooking states in checkpoint files. Root `game_data.json` is empty.  
**What's missing:** Only a manually-simplified version of cooking data made it into the game. Abstract emoji data never integrated.  
**Suggestion:** Either integrate the generated content or remove the pipeline. The cooking game could benefit from the 31+ states in the checkpoint.

### 7.7 Number Entry System 🔢
**Status:** Gated behind discovery  
**What exists:** NumberEntry component. `NUMBER_ENTRY` achievement. Store feature flag `numberEntry`.  
**What's missing:** No clear path to discovering it. The component is conditionally rendered and only visible in debug mode by default.  
**Suggestion:** Place a visible NumberEntry on Level 10 (the graduation level) or unlock it via an achievement. It should feel like a reward for completing the tutorial, not a hidden feature.

---

## 8. Bugs & Technical Debt

### Confirmed Bugs

| # | Bug | Location | Severity |
|---|-----|----------|----------|
| 1 | **Level -0 unreachable** — router normalizes `-0` to `0` | App.js level router | 🔴 High |
| 2 | **`phi` value is wrong** — `Math.E ** Math.PI` ≈ 23.14, should be `(1 + Math.sqrt(5)) / 2` ≈ 1.618 | numberText.js, `replacementDictionary.irrational.phi` | 🔴 High |
| 3 | **Copy-paste component names** — Level1000, Level10000, Level100000, Level1000000, Level10000000 are all named `Level10` internally | Multiple files | 🟡 Medium |
| 4 | **Level999plus999i** renders Level 82 content (VisitedLevelsDisplay) | Level999plus999i.js | 🟡 Medium |
| 5 | **ClickableText has `showAsNumber={true}` hardcoded** — renders numbers in red (debug artifact) | ClickableText.js | 🟡 Medium |
| 6 | **Unreachable code in ColorSchemeManager** — `return 'dark'` before infinity `startsWith('-')` check | ColorSchemeManager.js | 🟢 Low |
| 7 | **Console.log statements in production** | Multiple files | 🟢 Low |
| 8 | **Level161 doesn't use HighlightableText** — plain text only | Level161.js | 🟢 Low |
| 9 | **Level77 dice results not in HighlightableText** — roll results are plain interpolated text | Level77.js | 🟢 Low |
| 10 | **Typo in Level3I** — "trecherous" → "treacherous" | Level3I.js | 🟢 Low |

### Typos (from playtest + code analysis)

| Level | Typo | Fix |
|-------|------|-----|
| 2 | "neccisary" | "necessary" |
| 2 | "the path forward in not linear" | "is not linear" |
| 3 | "barren then others" | "barren than others" |
| 7 | "is could be a button" | "could be a button" |
| 7 | "Take look at these coins" | "Take a look at these coins" |
| 3i | "trecherous" | "treacherous" |

---

## 9. Playtest-Driven Fixes

Based on [PLAYTEST_FEEDBACK.md](PLAYTEST_FEEDBACK.md):

### Priority 1 (Blockers confirmed by tester)

| # | Finding | Fix |
|---|---------|-----|
| 1 | **Can't reach Level 8** after 45+ minutes | Add LevelButton → 8 on Level 7; lower shrine gate |
| 2 | **Right-click mechanic never explained** | Add instruction on Level 7: "Right-click coins to collect them" |
| 3 | **Icon mapping inconsistent** (gear↔trophy swap) | Verify icon assignment in CommonLayout; ensure consistent mapping |

### Priority 2 (Important UX issues)

| # | Finding | Fix |
|---|---------|-----|
| 4 | **Coin count inconsistency** after Money Exchange | Debug the exchange reducer — tester exchanged 5¢→5×1¢ but count was wrong |
| 5 | **Wallet interactions ambiguous** (button vs image) | Consolidate into single click → wallet modal |
| 6 | **No visual feedback for coin collection** | Add brief animation/counter on right-click |
| 7 | **Level 7 hint "Time reveals new paths" is misleading** | Either implement clock on Level 7 or change hint text |
| 8 | **Level 10 recap lists Level 8/9 but player can't reach them** | Make recap entries explicitly clickable, or add hint |

### Priority 3 (Polish from tester)

| # | Finding | Fix |
|---|---------|-----|
| 9 | Fix the 6 typos listed above | Simple text fixes |
| 10 | Achievement names spoil undiscovered items | Hide names of unearned achievements (show "???") until mechanic encountered |
| 11 | No sound effects at all | Add basic click/achievement/navigation sounds |
| 12 | Scale "Empty" label non-obvious | Change to "Place Item" when player has equipped item |
| 13 | No keyboard navigation support | Add keyboard shortcuts or tab navigation |
| 14 | No mobile/touch support for right-click | Add long-press or alternative gesture |

---

## 10. New Feature Ideas

### 10.1 "Numberservatory" — Visited Levels Map
**Concept:** A visual representation of all visited levels on a number line (and complex plane). Accessible from the navbar after earning an achievement.
**Why:** Gives players a sense of progress without being a level-select hub. They can see where they've been but not where they haven't.
**Implementation:** `VisitedLevelsDisplay` already exists — extend it with a zoomable number line visualization.

### 10.2 Scale Puzzles
**Concept:** Certain levels require placing items of a specific total weight on the scale to unlock content.
**Example:** "The shrine requires exactly 42 grams." Player must figure out which combination of items weighs 42g.
**Why:** Gives the scale system more purpose beyond navigation.

### 10.3 Level Breadcrumb Trail
**Concept:** Show the last 3-5 visited levels as small clickable badges in the navbar.
**Why:** Reduces "lost" anxiety without adding a full navigation system. Works like browser history.
**Implementation:** The store already tracks `levelHistory` (last 10 levels).

### 10.4 Adaptive Hints
**Concept:** If the player hasn't navigated to a new level in 3+ minutes, show a subtle pulsing on the hint icon, and make the hint more specific.
**Why:** The tester was stuck for 45+ minutes. Even a "try right-clicking" after 5 minutes would help.
**Implementation:** Track time-since-last-navigation in the store.

### 10.5 "Meta" Achievement Chain
**Concept:** A chain of achievements for discovering navigation surfaces:
1. "Found a level in text" (`MAKING_MY_OWN_PATH`)
2. "Found a level in a hint" (`HINT_TEXT`)
3. "Found a level in an achievement" (`ACHIEVEMENT_TEXT`)
4. "Found a level in the settings" (`SETTINGS_TEXT`)
5. "Found a level in the game title" (`TITLE_TEXT`)
6. **NEW: "Found a level EVERYWHERE" — unlock for completing all 5 above**

The final achievement could unlock a special level or feature.

### 10.6 Number Theory Achievements
**Concept:** Achievements for visiting levels with specific mathematical properties.
**Examples:**
- "Prime Mover" — Visit 10 prime-numbered levels
- "Perfect Balance" — Visit a perfect number (6, 28, 496)
- "Fibonacci Sequence" — Visit 5 consecutive Fibonacci numbers
- "Pythagorean Triple" — Visit a stable complex level (3+4i, 5+12i, etc.)

The `NumberTheory.js` helpers already detect all these properties.

### 10.7 Collectible Encyclopedia Upgrades
**Concept:** The NumberEncyclopedia currently shows math facts. Make it upgrade-able:
- Base: shows basic facts (even/odd, prime)
- Level 2: shows special properties (Fibonacci, perfect, etc.)
- Level 3: shows relationships to other levels ("This number is 7² — have you visited Level 7?")

This turns the encyclopedia into a navigation discovery tool.

---

## 11. Prioritized Roadmap

### Phase 1: Unblock the Critical Path (1-2 days)
1. ✅ Add LevelButton → 8 on Level 7
2. ✅ Lower Level 8's shrine from 🔒15 → 🔒5
3. ✅ Fix Level -0 routing bug
4. ✅ Fix `phi` value in numberText.js
5. ✅ Fix the 6 typos

### Phase 2: Make the Game's Own Promises True (2-3 days)
6. Wrap hint body text in HighlightableText (LevelHint.js)
7. Wrap AchievementShrine progress text in HighlightableText
8. Fix dead-end levels (20, 42, 404) — add escape mechanisms
9. Add right-click instruction on Level 7
10. Fix icon mapping consistency (gear=settings, trophy=achievements)

### Phase 3: Build the Knowledge Ladder (1-2 weeks)
11. Enhance Level 12 to teach word-numbers (Rung 7)
12. Enhance Level 50 to explicitly teach Roman numerals (Rung 8)
13. Create a sound-alike teaching level (Rung 9) — repurpose Level 55
14. Enhance Level 99 to teach math expressions (Rung 10) — make results navigable
15. Add equation-solving teaching content (Rung 11) — new or repurposed level
16. Add constants teaching content (Rung 12) — new or repurposed level

### Phase 4: Fill Content Gaps (2-4 weeks)
17. Enhance 10-15 stub levels in the 21-99 range with themed content
18. Fix empty files (162, 165, 168, 171) — add content or remove
19. Fix sparse chain dead end (Level 156)
20. Add escape mechanisms to milestone dead-end levels (999, 1000, etc.)
21. Fix copy-paste component names

### Phase 5: Deepen Systems (ongoing)
22. Implement flower growth mechanic (grow by visiting levels)
23. Expand Jester path (more stops, procedural appearances)
24. Connect mini-games to main game (items/achievements from outcomes)
25. Add browser history support (back button)
26. Implement Clock on relevant levels (7, 24)
27. Add sound effects
28. Consider adaptive hint system

---

*This document is a living reference. Update it as changes are implemented and new playtests are conducted.*
