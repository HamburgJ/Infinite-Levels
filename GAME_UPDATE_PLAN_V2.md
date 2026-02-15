# Infinite Levels — Game Update Plan V2

> **This is a decision document, not an analysis.** Every item is a specific change to make, in a specific file, with specific content. Where the DESIGN_IMPROVEMENTS_V2.md listed options, this document picks one and commits.
>
> **Companion docs:** [DESIGN_IMPROVEMENTS_V2.md](DESIGN_IMPROVEMENTS_V2.md), [GAME_UPDATE_PLAN.md](GAME_UPDATE_PLAN.md) (v1), [DESIGN_IMPROVEMENTS.md](DESIGN_IMPROVEMENTS.md) (v1)
>
> **Scope:** Excludes the Flower and Encyclopedia systems (cut from the game). Builds on v1 changes already committed to `game-update-plan` branch.
>
> **Last updated:** February 15, 2026

---

## Table of Contents

1. [The V2 Vision](#1-the-v2-vision)
2. [The Player Journey V2 — Five Acts](#2-the-player-journey-v2)
3. [Phase 1: Fix HighlightableText (The Core)](#3-phase-1-fix-highlightabletext)
4. [Phase 2: Enrich the Procedural Universe](#4-phase-2-enrich-the-procedural-universe)
5. [Phase 3: Make Every Dimension Required](#5-phase-3-make-every-dimension-required)
6. [Phase 4: Forward Chains & Dead End Elimination](#6-phase-4-forward-chains)
7. [Phase 5: Long-Term Arcs & Curiosity Rewards](#7-phase-5-long-term-arcs)
8. [Phase 6: Place Orphaned Systems](#8-phase-6-place-orphaned-systems)
9. [Phase 7: Bug Fixes & Polish](#9-phase-7-bug-fixes)
10. [Complete Routing Map](#10-complete-routing-map)
11. [What NOT to Change](#11-what-not-to-change)
12. [What to Delete](#12-what-to-delete)

---

## 1. The V2 Vision

V1 fixed the **spine** — the tutorial works, the teaching levels teach. V2 fixes three things V1 missed entirely:

1. **The core mechanic is broken.** HighlightableText has four compounding bugs that make text selection unreliable. Every other improvement depends on this working.

2. **The player has no long-term pull.** After Level 10, the player knows HOW to explore but not WHY. V2 creates three mandatory dimension-crossing quests (the Key on Level -0, the Card on a complex level, the Black Hole deep in the game) that give direction without removing freedom.

3. **75% of the game is dead space.** ~53 stub levels, ~11 dead-end levels, and hundreds of procedural levels with no navigation. V2 turns procedural levels into a rich ecosystem where different number families have different behaviors, and every level has at least one exit.

**The design principle:** Curiosity should always be rewarded. A player who thinks "I wonder what Level 37 is like" should find something interesting there. A player who notices "every 13th level is dark" should feel clever. A player who puts a key on a scale and ends up at Level 50 should feel like a genius.

---

## 2. The Player Journey V2 — Five Acts

### Act I: "What Is This?" → "Everything Is a Button" (Levels 0–10, ~30 min)

**Already works from V1.** No changes needed except HighlightableText bug fixes (Phase 1).

Player learns: hidden buttons → hints as gameplay → achievements gate content → coins are buttons → scale is a button → text highlighting creates buttons → NumberEntry (at ≥9 achievements).

**Key moment:** Level 8 teaches text highlighting. Level 10 validates it.

### Act II: "The Three Schools" (Levels 11–55, ~45 min)

The player graduates from the tutorial into three "schools" — each teaching a new language the text parser understands. The schools are reached through the natural forward chain: 10→11→12→20→30→50→55.

| School | Level | Teaches | Example |
|--------|-------|---------|---------|
| **School of Words** | Level 12 | Word-numbers are clickable | "dozen" → 12, "score" → 20 |
| **School of Symbols** | Level 50 | Roman numerals are clickable | "D" → 500, "M" → 1000 |
| **School of Sound** | Level 55 | Sound-alikes are clickable | "ate" → 8, "for" → 4 |

Each school ALSO teaches a forward chain:
- Level 12 → "twenty" → Level 20 → "thirty" → Level 30 (Outpost)
- Level 50 → "C" → 100, "D" → 500, "M" → 1000
- Level 55 → "ate" → 8, "for" → 4, "won" → 1 (revisit early levels with new eyes)

**New in V2:** Level 30 (Outpost) becomes the central hub that connects ALL dimensions. It already has buttons to Level 0, 10, i (complex), and -30 (negative). V2 adds text mentioning Level 42 and Level 100.

### Act III: "The Three Dimensions" (Levels 14, 30, -0, i, ~30 min)

The player discovers that the number line extends in three directions:
1. **Positive reals** — where they've been
2. **Negative reals** — entered via Level 14 or Level 30→-30
3. **Complex plane** — entered via Level 30→i

**New in V2:** Both dimensions are now REQUIRED to progress.

- **Negative required:** Level 9's LockedBox clue says "A level which equates to the 0th level yet its opposite." Answer: Level -0. V2 places a `CollectableKey` on Level -0. Player must navigate to -0, collect the key, return to Level 9, unlock the box. Inside: a clue about the complex plane.
- **Complex required:** The Ace of Hearts card is placed on Level 1+1i (a stable complex island). Completing the card collection requires venturing into the complex plane.

### Act IV: "The Deep Game" (Levels 62–999, ~60+ min)

The player now has all the tools. They explore freely, finding:
- **Level 62** teaches math expressions ("seven times nine" → 63)
- **Level 72** teaches equation solving ("level squared = 5184" → √5184 = 72)
- **Level 82** teaches constants (π, e, φ as navigable targets)
- **Level 99/999/9999** — the calculator puzzles
- **The Jester** roaming on prime levels, dropping cryptic hints
- **Modulus patterns** in procedural levels (every 7th = rest stop, every 13th = dark, every 100th = milestone)
- **The Scale network** — discovering that item weights point to interesting levels

**Key feeling:** "I keep finding new things. Every number family behaves differently."

### Act V: "Everything Is Connected" (100+, ∞, mastery)

The endgame player discovers:
- The Scale is a transportation network (key→50, wallet→150, card-box→200, book→300, black-hole→∞)
- UI surfaces are navigable (hints, achievements, settings, title contain hidden numbers)
- Infinity levels interconnect (∞ → ∞i → -∞ → etc.)
- Power-of-10 milestones form a chain (100→1000→10000→100000→1000000→10000000)
- The Joker card (Level 160) completes the card collection
- Level 999+999i (the Numberservatory) shows their entire journey

---

## 3. Phase 1: Fix HighlightableText (The Core)

**Priority:** 🔴 CRITICAL. Everything else in this plan depends on this.
**Estimated effort:** 4–6 hours
**Files:** `src/components/Items/HighlightableText.js`, `src/utils/findNumberWords.js`, `src/utils/numberText.js`

### Change 1.1: Fix `isValidNumber()` to check ALL dictionaries

**File:** `src/utils/numberText.js` — `isValidNumber()` function

Currently checks: `levelDictionary`, numeric regex, complex pattern, Roman numerals.
Does NOT check: `replacementDictionary` (word-numbers), `soundDictionary` (homophones).

**Fix:** Add checks for `replacementDictionary` and `soundDictionary` to `isValidNumber()`. For each category in `replacementDictionary` (`number-words`, `irrational`, `interpretive-meaning`, `descriptive`), check if the lowercased word is a key. For `soundDictionary`, check if any entry's pattern matches the word.

This single fix makes "dozen", "twenty", "score", "pi", "phi", "ate", "for", etc. all show as clickable.

### Change 1.2: Strip punctuation before token lookup

**File:** `src/components/Items/HighlightableText.js` — `renderText` memo

In the `visibleText.split(/(\s+)/)` pipeline, before checking `isValidNumber(part)`, strip trailing/leading punctuation:

```js
const cleanPart = part.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, '');
const clickable = cleanPart.length > 0 && isValidNumber(cleanPart);
```

This fixes "ten," → "ten" (clickable), "forty." → "forty" (clickable), etc.

### Change 1.3: Replace two-step selection with single-step + confirmation

**File:** `src/components/Items/HighlightableText.js` — `handleMouseUp()`

Remove the `selectionJustMade` flag and two-step logic. Replace with:

1. On `mouseup`, get selected text via `window.getSelection()`
2. Run it through `extractNumberFromText()`
3. If a valid number is found → show a small tooltip/badge near the selection showing "→ Level X" and navigate after a brief delay (300ms) OR on click of the tooltip
4. If no valid number → do nothing (no navigation, no error)

The brief delay approach is simpler to implement and still feels intentional. The tooltip approach is more polished. Either way: ONE action (select text) → ONE result (navigation). No double-selection.

**Simpler alternative:** Skip the tooltip entirely. Just navigate immediately on valid selection. Add a small toast notification "Traveling to Level X..." for feedback. This is faster to implement and still infinitely better than the current two-step.

### Change 1.4: Add visual affordance for interactive words

**File:** `src/components/Items/HighlightableText.js` — `HighlightedSpan` styled component

Currently: `cursor: ${props => props.$isClickable ? 'pointer' : 'default'}` — but `$isClickable` depends on `isValidNumber` which is broken (fixed in 1.1).

After fixing 1.1, this cursor change will automatically work. Additionally:
- Add a subtle bottom-border or underline on `$isClickable` spans: `border-bottom: 1px dotted rgba(0,0,0,0.3)` — this is the universal affordance for "this text does something."
- On hover, change to `border-bottom: 1px solid #007bff` (blue, matching link convention).

### Change 1.5: Remove dead `highlightedText` state

**File:** `src/components/Items/HighlightableText.js`

Remove `const [highlightedText, setHighlightedText] = useState(null)` — it's never set. The `$isHighlighted` prop is always false. Clean up the dead code path.

### Change 1.6: Remove dead Flower/Encyclopedia from LevelDemo

**File:** `src/components/Levels/LevelDemo.js`

Remove imports and renders of `FlowerPot`, `CollectableEncyclopedia`, `NumberEncyclopedia`. These systems are cut from the game.

Also remove `src/components/UI/FlowerPot.js`, `src/components/Items/CollectableEncyclopedia.js`, `src/components/Items/NumberEncyclopedia.js`, `src/data/flowerTypes.js`, `src/store/slices/flowerSlice.js`, and all references to them.

---

## 4. Phase 2: Enrich the Procedural Universe

**Priority:** 🟡 HIGH. This transforms ~200+ levels from dead space into a living ecosystem.
**Estimated effort:** 5–7 hours
**File:** `src/components/Levels/NotImplementedLevel.js` (primary), plus stub removal from `Level.js`

### Design Principle: Number Families

Every procedural level already detects 30+ mathematical properties. V2 makes those properties INTERACTIVE — not just poetic, but functional.

### Change 2.1: Remove pure stubs from `levelComponents`

**File:** `src/components/Levels/Level.js`

Remove all levels from the `levelComponents` dictionary that are pure stubs (≤22 lines, only render "This is level N."). Let `NotImplementedLevel` handle them instead — it generates richer content.

**Stubs to remove (59 levels):**
22, 23, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 70, 71, 75, 76, 78, 79, 80, 81, 83, 84, 85, 86, 87, 89, 90, 91, 92, 93, 94

Also remove the shader-only visual stubs that have no real content:
73, 74, 95, 96, 97, 98

**Keep in dictionary** (non-stubs): 42, 50, 55, 62, 69, 72, 77, 82, 88, 99, 100

Delete the corresponding `LevelNN.js` files for all removed entries. Total: ~65 files deleted.

### Change 2.2: Add escape navigation to every procedural level

**File:** `src/components/Levels/NotImplementedLevel.js` — render function

After the poem text, add two navigation elements:

```jsx
<div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
  <LevelButton targetLevel={nearestHub(levelNumber)}>
    ← Back to Level {nearestHub(levelNumber)}
  </LevelButton>
  <LevelButton targetLevel={levelNumber + 1}>
    Continue →
  </LevelButton>
</div>
```

Where `nearestHub()` maps:
| Level Range | Nearest Hub |
|-------------|-------------|
| 0–10 | 0 |
| 11–30 | 10 |
| 31–50 | 30 |
| 51–100 | 50 |
| 101–150 | 100 |
| 151–500 | 150 |
| 501–1000 | 500 |
| 1001–10000 | 1000 |
| 10001+ | 10000 |

For negative levels: `nearestHub(-N)` → `-N + (N % 10)` (round toward zero to nearest multiple of 10), with Level 0 as ultimate fallback.

For complex levels: always `Level 0` (escape from the complex plane).

### Change 2.3: Modulus-based mechanics

**File:** `src/components/Levels/NotImplementedLevel.js` — add new detection layer

Add a modulus-based system that triggers BEFORE the poem generation:

#### Mod 7: Rest Stops 🛋️
For levels where `absLevel % 7 === 0` (7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112...):

Add text before the poem: *"A rest stop on the seventh mile. The nearest point of interest is Level [nearest handcrafted level]."*

The `nearest handcrafted level` is computed by checking which hand-authored levels are closest. This gives the player a wayfinding hint on every 7th level.

Implementation: Create a `HANDCRAFTED_LEVELS` array of known interesting levels. On mod-7 levels, find the two nearest entries and mention them in the text. The numbers in this text are wrapped in HighlightableText → clickable.

**Skip this mechanic** on levels that already have a handcrafted component (42, 77, etc. — those stay in `levelComponents` and never reach NotImplementedLevel).

#### Mod 13: The Darkness 🌑
For levels where `absLevel % 13 === 0` (13, 26, 39, 52, 65, 78, 91, 104...):

Add a subtle darkness overlay — not the full Level 13 effect, but a darkened background (`rgba(0,0,0,0.3)` overlay) and eerie text: *"Thirteen's shadow falls on this level. The superstitious stay away."*

This creates a recognizable pattern that rewards players who notice "why are some levels darker?" Answer: they're all multiples of 13.

#### Mod 100: Milestones 🎉
For levels where `level % 100 === 0` (200, 300, 400, 500, 600...):

Add a celebration banner and forward/backward chain text:
*"Milestone: Level [N]. You've traveled [N] levels from the origin. The next milestone is Level [N+100]. The previous was Level [N-100]."*

Both numbers are HighlightableText → clickable. This creates a "milestone highway" through the game.

#### Mod 10: Waypoints (lighter touch)
For levels where `level % 10 === 0` but NOT `% 100 === 0`:

Add: *"Waypoint [N]. Level [N-10] is behind you. Level [N+10] is ahead."*

Creates a breadcrumb trail at every 10th level.

### Change 2.4: Special number mechanics

Add these INTERACTIVE mechanics to NotImplementedLevel based on detected properties:

#### Perfect Squares → Root Portals 🌳
For levels that are perfect squares (4, 9, 16, 25, 36, 49, 64, 81, 121, 144, 169, 196, 225, 256, ...):

Add text: *"The square root of [N] is [√N]. They say the root always leads home."*

The √N is HighlightableText → clicking it navigates to Level √N. This creates a "root portal network" where every perfect square connects to its root. Level 144 → 12. Level 256 → 16 → 4 → 2. Squares chain downward through roots.

Additionally, display: *"And [N] is the square of [√N]². Going up: [N²] awaits."* — if N² is reasonable (< 1000000).

#### Fibonacci Levels → Sequence Chain 🌀
For Fibonacci numbers (1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765...):

Add text: *"This level is part of the golden sequence. The next in the chain is [F(n+1)]. The previous was [F(n-1)]."*

Both are HighlightableText. This creates a navigable chain through Fibonacci numbers. A player who discovers this can "ride the Fibonacci spiral" through the game.

**Important:** Levels 8, 13, 21, 55 already have handcrafted components. The Fibonacci chain text only appears on procedural Fibonacci levels (34, 89, 144, 233, 377, 610, 987, 1597...).

#### Powers of 2 → Binary Network ⚡
For powers of 2 (2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192...):

Add text: *"Level [N] — that's 2^[k] in the binary realm. In binary: [binary representation]. The next doubling: Level [2N]. Half of this: Level [N/2]."*

Both are HighlightableText. This creates a binary tree of levels where you can double or halve.

**Important:** Only on procedural levels — 32, 64, 128, 256, 512, 1024, 2048... (skipping hand-authored levels).

#### Prime Levels → Mystery Text 🔮
For prime levels:

Replace the standard poem opener with: *"Level [N] is prime — divisible only by itself and one. Prime levels guard their secrets carefully."*

Add: *"The next prime is [nextPrime]. The previous prime was [prevPrime]."*

Both are HighlightableText. This creates a "prime highway" — you can hop from prime to prime through the entire number line.

#### Palindrome Levels → Mirror Text 🪞
For palindromes (11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111, 121, 131, ...):

Add: *"Level [N] reads the same forwards and backwards. In the mirror: Level -[N]."*

The negative version is HighlightableText → links to the negative palindrome level. Creates a bridge between positive and negative palindromes.

### Change 2.5: Negative level treatment

**File:** `src/components/Levels/NotImplementedLevel.js` + `src/components/Layout/NegativeLevelWrapper.js`

#### Fix the visual treatment
Replace `transform: scaleX(-1)` (unreadable mirrored text) with:
```css
filter: invert(0.85) hue-rotate(180deg);
```
This creates a "photographic negative" — colors inverted, eerie, but TEXT IS READABLE.

#### Shadow poems for negative levels
In NotImplementedLevel, detect negative levels and alter the poem generation:

Instead of the standard poetic templates, use shadow variants:
- Standard: *"This number dances with the digits of time"*
- Shadow: *"This number haunts the shadows of its positive self"*

Add a "mirror portal" link: *"The light version of this level is Level [|N|]."*

Add navigation to nearby negatives: *"Deeper into the darkness: Level [N-1]. Toward the surface: Level [N+1]."*

#### Make negative procedural levels have unique exits
For negative perfect squares: *"The shadow root of [N] is [√|N|]i — an imaginary number."* Links to the complex plane.
For negative primes: *"Even in the negative realm, [|N|] is prime. Its dark twin: Level [-nextPrime]."*

### Change 2.6: Complex level treatment

**File:** `src/components/Levels/NotImplementedLevel.js`

Complex levels already have a stability bar. Enhance them:

#### Stable islands
Define certain complex levels as "stable" — they don't have the collapse timer. Pattern: a complex level `a + bi` is stable if BOTH `a` and `b` are in a small set of "stable coordinates": {0, 1, -1, 2, -2, 3, -3, 5, -5}.

So stable complex levels include: 1+1i, 2+3i, -1+2i, 5+5i, 3-3i, etc. There are ~81 stable complex levels from this set.

On stable complex levels, instead of the stability bar, show: *"A stable island in the complex plane. The imaginary axis stretches from [a+(b-1)i] to [a+(b+1)i]. The real axis from [(a-1)+bi] to [(a+1)+bi]."*

All four neighbors are HighlightableText → clickable. This makes the complex plane NAVIGABLE without collapse fear.

On unstable complex levels, the stability bar remains, but add: *"Warning: This level is unstable! Navigate to a stable island. Hint: levels where both real and imaginary parts are small tend to be stable."*

#### Complex plane achievements
The `COMPLEX_MIND` achievement already exists. Add awareness of it:
When on a complex level, show: *"You've entered the complex plane. The deeper you go, the more unstable it becomes. But stability can be found..."*

### Change 2.7: Year levels enhanced

**File:** `src/components/Levels/NotImplementedLevel.js` — `getYearFunFact()`

The year facts (1955–2046) are already generated but rendered as plain text inside the poem. Ensure the year fact text is included in the HighlightableText-wrapped content so numbers within it are clickable.

Also add: *"Travel to another year: [year-1] or [year+1]."*

This creates a "timeline" you can walk through year by year.

---

## 5. Phase 3: Make Every Dimension Required

**Priority:** 🟡 HIGH. This creates the game's long-term pull.
**Estimated effort:** 3–4 hours

### The Three Keys Design

The game has three "dimensions" — positive, negative, complex. V2 makes all three REQUIRED by placing essential items in each:

### Change 3.1: Place Key on Level -0

**File:** `src/components/Levels/LevelNeg0.js`

Level -0 currently mirrors Level 0 (title screen with button to Level 1). Add a `CollectableKey` to this level:

```jsx
<CollectableKey id="neg-zero-key" />
```

Add text: *"In the shadow of zero, something glints. A key? But to what lock?"*

**The puzzle chain:**
1. Player reaches Level 9 (≥5 achievements needed to reach via Level 4→7→8→9 or similar)
2. Level 9 has a LockedBox with hint (behind 🔒15 shrine): "A level which equates to the 0th level yet its opposite"
3. Player figures out: -0 is "the 0th level yet its opposite"
4. Player navigates to -0 (via Level 14's -1/-5/-14 buttons, then exploring negatives, or via NumberEntry on Level 10 at ≥9 achievements)
5. Player collects Key on -0
6. Player returns to Level 9, uses Key to unlock the box
7. Box contains a clue about the complex plane (V2 update to box content)

### Change 3.2: Update Level 9 LockedBox contents

**File:** `src/components/Levels/Level9.js`

The LockedBox currently contains text about collecting created buttons. Update it to ALSO contain:

*"You've found the secret: any button you create from text can be collected into your inventory by right-clicking it! But that's not all... there's a card that can only be found where the real and imaginary meet. Look for level one plus one i."*

This breadcrumb points to Level 1+1i, which requires understanding complex number navigation.

### Change 3.3: Place Ace of Hearts on Level 1+1i

**File:** Create `src/components/Levels/Level1plus1i.js`

A new hand-authored level at 1+1i:

```jsx
// Level 1+1i — A stable island in the complex plane
<Card.Title>The Heart of Complexity</Card.Title>
<HighlightableText>
  Where one meets the imaginary, the heart reveals itself. 
  You've found a stable island in the complex sea.
</HighlightableText>
<CollectableCard cardId="ace-hearts" value="A" suit="hearts" />
<LevelButton targetLevel={{real: 0, imaginary: 1}}>Level i</LevelButton>
<LevelButton targetLevel={{real: 1, imaginary: 0}}>Level 1</LevelButton>
<LevelButton targetLevel={{real: 2, imaginary: 1}}>Level 2+i</LevelButton>
```

Register `'1+1i'` in the `levelComponents` dictionary in `Level.js`.

**The puzzle chain:**
1. Player reads the Level 9 LockedBox clue: "level one plus one i"
2. Player has learned about complex numbers from Level 30→i
3. Player navigates to 1+1i (via NumberEntry, or via Level i → text navigation)
4. Player collects Ace of Hearts
5. This is needed for the FULL_HOUSE achievement (all 4 Aces)

### Change 3.4: Place Black Hole on Level 5+5i

**File:** Create `src/components/Levels/Level5plus5i.js`

A deep complex level, stable (both coords in stable set), with the Black Hole:

```jsx
// Level 5+5i — The Singularity
<Card.Title>The Singularity</Card.Title>
<HighlightableText>
  At the far edge of the stable complex plane, gravity bends. 
  Something here weighs more than everything. It weighs... infinity.
</HighlightableText>
<CollectableBlackHole id="singularity-black-hole" />
<LevelButton targetLevel={{real: 0, imaginary: 0}}>Escape to Level 0</LevelButton>
```

Register `'5+5i'` in `levelComponents`.

**The puzzle chain:**
1. Player hears about the Black Hole through hints or the Jester
2. Player navigates deep into the complex plane to 5+5i
3. Player collects Black Hole
4. Player puts Black Hole on Scale → weighs Infinity → click scale display → Level ∞
5. This is the "true" path to Infinity (not just typing "infinity" in text)

### Change 3.5: Breadcrumbs pointing to the dimensions

Add these breadcrumbs to existing levels:

**Level 11** (already has Jester): Add Jester dialogue variant when encountering post-tutorial: *"The world extends beyond what you see. Have you tried going below zero? Or... sideways?"*

**Level 14** (negative gateway): Add text: *"Not all treasures are on the positive side. Something valuable lies at the very start of the negative world... at level negative zero."*

**Level 30** (Outpost): Already has button to Level i. Add text: *"Brave explorers say there are stable islands scattered throughout the complex plane. The closest is at one plus one i."*

**Level i** (complex intro): Add text: *"The complex plane is vast and unstable. But some coordinates — where both parts are small whole numbers — form islands of calm. Try navigating to one plus one i."*

---

## 6. Phase 4: Forward Chains & Dead End Elimination

**Priority:** 🟡 HIGH. Eliminates the ~20 dead-end levels and creates a navigable path through the entire game.
**Estimated effort:** 3–4 hours

### Change 4.1: Hub-to-hub forward chains

Every major hub level must point FORWARD to the next hub, not just backward.

| Level | Current Exits | Add Forward Exit | Via |
|-------|--------------|-----------------|-----|
| **12** | None (word-numbers only) | → 13, → 20 | Add text: *"What comes after a dozen? Thirteen, some say, is an unlucky number. Or skip ahead — twenty is where the wormholes open."* |
| **25** | None (word-numbers only) | → 30 | Add text: *"A quarter of the way to one hundred. Thirty levels in, there's an outpost."* |
| **30** | 0, 10, i, -30, (text: 50, 100) | → 42 | Add text: *"Travelers speak of a legendary answer at level forty-two."* |
| **50** | None (word-numbers only) | → 100, add LevelButton to 99 | Add text: *"Now that you know Roman numerals... C is one hundred. But first, ninety-nine has a puzzle worth solving."* + `<LevelButton targetLevel={99}>Level XCIX</LevelButton>` |
| **100** | 20, 10, 0 (backward only!) | → 150, → 1000 | Replace existing exits. Keep Level 0 button. Add: *"Beyond the century mark: one hundred fifty has a secret about your wallet. Or go straight to one thousand."* + `<LevelButton targetLevel={150}>Level 150</LevelButton>` |
| **150** | 7 | → 159 (Jester story) | Add: *"Something strange is happening at level one hundred fifty-nine. A clown wants to talk to you."* |
| **500** | NONE (dead end!) | → 1000 | Add: `<LevelButton targetLevel={1000}>Level M</LevelButton>` + text: *"D leads to M. Five hundred leads to one thousand."* |
| **1000** | NONE (dead end!) | → 10000 | Add: `<LevelButton targetLevel={10000}>Level 10,000</LevelButton>` + text: *"A thousand is just the beginning. Ten thousand awaits."* |
| **10000** | NONE (dead end!) | → 100000 | Add: `<LevelButton targetLevel={100000}>Level 100,000</LevelButton>` |
| **100000** | NONE | → 1000000 | Add: `<LevelButton targetLevel={1000000}>Level 1,000,000</LevelButton>` |
| **1000000** | NONE | → 10000000 | Add: `<LevelButton targetLevel={10000000}>Level 10,000,000</LevelButton>` |
| **10000000** | NONE | → link back to 0 | Add: `<LevelButton targetLevel={0}>Return to the Beginning</LevelButton>` + text: *"Ten million levels traveled. And infinity is still infinitely far away. But you know how to get there, don't you?"* |

### Change 4.2: Fix power-of-10 milestone levels

**Files:** `Level10000.js`, `Level100000.js`, `Level1000000.js`, `Level10000000.js`

Currently these are near-identical (same card, similar shrine). Differentiate them:

| Level | Theme | Unique Content | Card |
|-------|-------|---------------|------|
| **1000** | "A Thousand Words" | Keep as is. Card: Ace of Clubs. Shrine: 🔒30. | Ace of Clubs (already placed) |
| **10000** | "Are You Cheating?" | Keep theme. Change card to unique (e.g., 10 of Diamonds). Fix duplicate card IDs. | 10 of Diamonds (new) |
| **100000** | "Persistence" | Change text: *"One hundred thousand. You're either very persistent or very creative. Either way, impressive."* | Keep card behind shrine |
| **1000000** | "The Millionaire" | Change text: *"A million levels. In binary, that's twenty bits of exploration. In the game of levels, that's a lifetime of curiosity."* Unlock `MILLIONAIRE` achievement on visit. | Keep card |
| **10000000** | "The End of the Road?" | Change text: *"The farthest charted milestone. Beyond here, only infinity remains. Some say the path to infinity isn't forward — it's sideways, through the complex plane, or upward, through the scale."* This is the hint to find the Black Hole. | Keep card |

### Change 4.3: Fix dead-end special levels

| Level | Current State | Fix |
|-------|--------------|-----|
| **Level 21** | Two cards, no exits | Add `<LevelButton targetLevel={17}>VIP Lounge</LevelButton>` + `<LevelButton targetLevel={25}>Level 25</LevelButton>` |
| **Level 999** | Math puzzle, no exits | Add after puzzle solve: `<LevelButton targetLevel={1000}>Level 1000</LevelButton>` |
| **Level 9999** | Math puzzle, no exits | Add after puzzle solve: `<LevelButton targetLevel={10000}>Level 10000</LevelButton>` |
| **Level 1001** | "Questionable level", no exits | Add: `<LevelButton targetLevel={1000}>Back to 1000</LevelButton>` + text: *"One thousand and one nights of wandering. The real treasure is the levels you visited along the way."* |
| **Level 69420** | Meme level, no exits | Add: `<LevelButton targetLevel={0}>Return to Reality</LevelButton>` |
| **Level 999+999i** | Numberservatory, no exits | Add: `<LevelButton targetLevel={0}>Return to Level 0</LevelButton>` + `<LevelButton targetLevel={{real:0, imaginary:0}}>Level 0+0i</LevelButton>` |
| **Level -13** | Has exit to 0 ✅ | Add: `<LevelButton targetLevel={-14}>Deeper into Darkness</LevelButton>` to create a negative chain |

### Change 4.4: Interconnect infinity levels

**Files:** All 8 `LevelInfinity*.js` files

Currently all 8 infinity levels exit ONLY to Level 0. Make them interconnect:

| Level | Add Connection To | Text |
|-------|------------------|------|
| **∞** | ∞i, -∞ | *"Infinity branches. The imaginary infinite awaits. Or perhaps... negative infinity?"* + LevelButtons |
| **-∞** | ∞, -∞i | *"From negative infinity, you can reach the positive... or dive into the imaginary."* |
| **∞i** | ∞, -∞i | *"The imaginary infinite connects to the real."* |
| **-∞i** | -∞, ∞i | *"Even here, paths exist."* |
| **∞+∞i** | ∞, ∞i | *"The real and imaginary infinities converge here."* |
| **∞-∞i** | ∞, -∞i | *"Between positive and negative imaginary infinities."* |
| **-∞+∞i** | -∞, ∞i | *"Negative reality meets positive imagination."* |
| **-∞-∞i** | -∞, -∞i | *"The deepest corner of the infinite complex plane."* |

Also wrap all infinity level text in `HighlightableText` (currently 6 of 8 use plain `Card.Text`).

---

## 7. Phase 5: Long-Term Arcs & Curiosity Rewards

**Priority:** 🟢 MEDIUM-HIGH. This is what makes the game feel deep rather than wide.
**Estimated effort:** 4–5 hours

### Change 5.1: The Scale Network (discoverable item→level transportation)

The Scale is already a brilliant transportation system. Every item has a specific weight, and clicking the scale display navigates to that weight as a level number:

| Item on Scale | Weight | Destination | What's There |
|---------------|--------|-------------|-------------|
| Key | 50g | Level 50 | Roman numerals tutorial! |
| Level Button | 42g | Level 42 | The Answer! |
| Wallet (empty) | 150g | Level 150 | "Lost your wallet?" chain! |
| Card Box (empty) | 200g | Level 200 | Procedural (milestone mod 100) |
| Book | 300g | Level 300 | Procedural (milestone mod 100) |
| Diamond | 3.52g | Level 3.52 | Rational number level! |
| Black Hole | ∞ | Level ∞ | The ultimate destination! |
| Normal card (1g) | 1g | Level 1 | Back to start |
| Gold card (50g) | 50g | Level 50 | Roman numerals again |
| Diamond card (100g) | 100g | Level 100 | Milestone! |
| Dark card (-5g) | -5g | Level -5 | Negative level! |

**This is incredible design that nobody discovers.** Fix this with breadcrumbs:

**Level 7** (where Scale is introduced): Add text after the Scale: *"Everything has a weight. And every weight is a number. And every number... is a level."*

**Level 8** (advanced techniques): Inside the shrine section, add: *"The scale isn't just for weighing. Try putting different items on it and clicking the weight display."*

**Hint for Level 7**: Update to: *"The coins here are secretly buttons. Have you tried right-clicking one? Also — the scale display shows a number. What happens if you click it?"*

### Change 5.2: The Jester's Trail (expanded)

**Files:** `src/components/Characters/Jester.js`, `src/store/slices/jesterSlice.js`

Currently: 3 hardcoded stops (11→8→9→null). 6-tier achievement chain requiring up to 100 encounters. Achievements 2-6 are impossible.

**Expand to roaming Jester on prime-numbered levels after the initial 3-stop tutorial:**

Update the Jester logic:
1. Stops 1-3: Keep as is (11→8→9). This is the tutorial arc.
2. After stop 3: Jester appears on the CURRENT LEVEL if:
   - The level number is prime AND
   - The player hasn't seen the Jester on THIS specific prime yet AND
   - The level is a procedural level (not hand-authored)

This means the Jester shows up on: Level 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 79, 83, 89, 97, 101, 103, 107... — hundreds of primes.

**Each roaming Jester encounter gives a contextual hint:**

Build a hint rotation system. The Jester picks from a pool of hints based on what the player hasn't discovered yet:

| Condition | Jester Says |
|-----------|------------|
| Haven't visited negative level | *"Have you been below zero yet? There's a whole world down there. Try the gateway at level fourteen!"* |
| Haven't visited complex level | *"The number line isn't the only road. At level thirty, you can step sideways into the complex plane."* |
| Haven't found the Scale trick | *"Put something on the scale. Then click the weight. Trust me."* |
| Haven't visited Level 50 | *"The Romans had their own numbers, you know. Level fifty can teach you."* |
| Haven't found any sound-alikes | *"Some words sound like numbers. 'Ate' is a meal... or is it? Level fifty-five knows."* |
| Haven't visited Level 99 | *"What's nine times nine times nine? Level ninety-nine has a calculator that can help."* |
| Haven't found the Black Hole | *"Deep in the complex plane, where five meets five i, something impossible exists. Something that weighs infinity."* |
| Default (player is experienced) | *"You've found [X] of my hiding spots! I love prime numbers — they're just so... indivisible."* |

Each encounter increments `jesterEncounters` → achievement chain progresses naturally.

**With ~50 accessible prime levels between 23-200, the JESTER_MASTER (50) achievement becomes achievable. JESTER_LEGEND (100) requires exploring primes up to ~500+.**

### Change 5.3: The Card Collection quest

**Files:** `src/data/cards.js`, various level files

Current cards and locations:
| Card | Location | Status |
|------|----------|--------|
| Ace of Spades | Level 21 | ✅ Placed |
| King of Spades | Level 21 | ✅ Placed |
| 7 of Diamonds | Level 17 | ✅ Placed |
| Ace of Clubs | Level 1000 (🔒30 shrine) | ✅ Placed |
| Ace of Hearts | NOT PLACED | ❌ |
| Ace of Diamonds | NOT PLACED | ❌ |

**Place the remaining cards:**

| Card | Place On | How to Find |
|------|----------|-------------|
| Ace of Hearts | Level 1+1i | Complex plane quest (Phase 3) |
| Ace of Diamonds | Level -42 | A negative level — requires exploring negatives. Text: *"In the shadow of the answer, a diamond glints."* |

**Add new cards** to `cards.js` to flesh out the collection:

| New Card | Location | How to Find |
|----------|----------|-------------|
| Queen of Hearts | Level 159 (Clown's Proposition) | Already on this level chain — fits the card theme |
| Jack of Spades | Level 404 (Glitch Level) | Hidden in the glitch — reward for finding the error |
| 2 of Clubs | Level 500 (D is for Delightful) | Reward for reaching a dead-end Roman numeral |
| Joker | Level 160 | ✅ Already placed |

**For the FULL_HOUSE achievement** ("Collected all cards of the same suit"):
- Spades: Ace (L21), King (L21), Jack (L404) — need to add more spades OR change achievement to require just the Aces
- Simplest: Change FULL_HOUSE to "Collected all four Aces" — Spades (L21), Hearts (L1+1i), Diamonds (L-42), Clubs (L1000)

### Change 5.4: Curiosity rewards — hidden secrets on "boring" levels

Add small rewards to specific procedural levels that players might visit out of curiosity:

**Level 37** — The most commonly chosen "random" number:
Add to NotImplementedLevel a special case: if `level === 37`, prepend: *"Thirty-seven. The number people pick most often when asked to choose at random. There's nothing random about you being here. As a reward for your curiosity..."* + unlock a new achievement `CURIOUS_MIND` ("Visited the most random number").

**Level 42** — Already hand-authored, but add: an achievement `THE_ANSWER` that unlocks on visit ("Found the answer to life, the universe, and everything").

**Level 69** — Already shows browser data. Add: an achievement `SELF_AWARE` that unlocks ("The game knows more about you than you think").

**Level 100** — Already a milestone. Ensure `CENTURION` achievement unlocks on visit.

**Level 314** — Pi day: Special case in NotImplementedLevel: *"Level three hundred fourteen. March fourteenth. Pi Day. Three point one four one five nine..."* The decimals of pi are HighlightableText → Level 3.14159.

**Level 404** — Already hand-authored (glitch). Add: an achievement `NOT_FOUND` that unlocks ("Found the level that isn't found").

**Level 420** — Special case: *"Level four hundred twenty. The clock always reads 4:20 somewhere. Time reveals new paths."*

**Level 666** — Special case: *"Level six hundred sixty-six. The number of the beast. But in the game of infinite levels, even the beast is just a number."* Slight red tint on the text. Links to 999 ("Invert the beast and you get nine hundred ninety-nine").

**Level 777** — Special case: *"Triple sevens! The luckiest number. If level seventy-seven had a die, this level has the whole casino."* Links to 77 ("seventy-seven"), 7 ("seven"). Give a Gold Shiny coin or similar reward.

**Level 1234** — Special case: *"One, two, three, four. The simplest sequence. But sequences can be more complex — have you found the Fibonacci chain?"* Links to 1, 2, 3, 5, 8.

**Level 2025** — The current year: *"The year you're playing this game. What level were you on when the year started?"* (Uses the year facts system.)

### Change 5.5: Cross-referencing between levels

Add subtle cross-references that reward players who visit related levels:

**Level 42** → *"Some say the real answer is closer to three point one four one five nine..."* → Level 3.14159 (π)
**Level 50** → After Roman numeral teaching: *"The Romans built roads. Their numerals build roads too — every L, C, D, and M you find is a path."*
**Level 69** → Browser info level. Add: *"Your screen resolution is [W]x[H]. Both of those are levels, you know."*
**Level 88** → Octopus level. Add: *"Eight eights make sixty-four. And sixty-four squares make a chessboard. How many levels is that?"* → 64
**Level 99** → After solving: *"9^9 = 387,420,489. That number is so large it might as well be in another dimension. But it IS a level..."*

---

## 8. Phase 6: Place Orphaned Systems

**Priority:** 🟢 MEDIUM. Places the remaining useful orphaned items.
**Estimated effort:** 2–3 hours

### Change 6.1: Place Clock on Level 24

**File:** `src/components/Levels/Level24.js`

Level 24 already has a time theme ("24 Hours in a Day") with a simple clock display. Replace the inline clock with the proper `Clock` component from `src/components/Common/Clock.js`.

The Clock component navigates to the level matching the current hour. At 3 PM → click → Level 3. At 11 AM → click → Level 11.

Add text: *"The clock doesn't just tell time — it tells you where to go. Click it when the hour changes."*

This makes Level 24 the "time travel" level where your destination depends on WHEN you visit.

### Change 6.2: Place Diamond on Level 153

**File:** `src/components/Levels/Level153.js`

Level 153 currently has sparse "penny in the wallet" text. It's the third stop in the 150s chain (155→153→150→7).

Add behind a shrine (🔒25):
```jsx
<AchievementShrine requiredCount={25}>
  <CollectableDiamond id="level-153-diamond" />
  <p>A diamond in the rough. It weighs exactly 3.52 grams.</p>
</AchievementShrine>
```

The weight hint is a breadcrumb: put the Diamond on the Scale → 3.52g → click display → Level 3.52 (a rational number level, unlocks `RATIONAL_MIND` achievement).

### Change 6.3: Fix Scale one-way bug

**File:** `src/components/Storage/Scale.js`

Remove the early `return;` statement (~line 160) that blocks item removal/swap logic. This is dead code that prevents:
- Swapping wallet ↔ currency
- Swapping card-box ↔ card
- General item removal from scale

After fix: clicking the scale with a new item while one is already on it should swap them.

---

## 9. Phase 7: Bug Fixes & Polish

**Priority:** 🟢 MEDIUM. Quality of life.
**Estimated effort:** 2–3 hours

### Bug fixes (ship alongside any phase):

| # | Bug | File | Fix |
|---|-----|------|-----|
| 1 | Hint NaN key for imaginary levels | `LevelHint.js` | Fix `levelToString` conversion for complex number inputs |
| 2 | Level 9 "there another" | `Level9.js` | → "there's another" |
| 3 | Level 9 "The secret lays" | `Level9.js` | → "The secret lies" |
| 4 | Level 9 literal "x" | `Level9.js` | Replace "x" with actual count "15" |
| 5 | Level 16 "anomolies" | `Level16.js` | → "anomalies" |
| 6 | Level 20 "choose quickly" with no timer | `Level20.js` | Remove "quickly" or add a 60-second soft timer |
| 7 | React DOM nesting warnings | Multiple | `<div>` inside `<p>` — restructure JSX |
| 8 | `findNumberWords.js` never imported | `HighlightableText.js` | Either wire it in or remove the file. Decision: wire it in as part of Phase 1 |
| 9 | `items.js` is empty | `src/data/items.js` | Either populate with item definitions or delete. Decision: delete (items are defined implicitly through components) |
| 10 | `getPoetryStyle()` always returns 'limerick' | `NotImplementedLevel.js` | Remove the early return and enable the style variety logic, or delete the function |
| 11 | Duplicate card IDs in milestone levels | `Level10000.js`, `Level100000.js`, etc. | Each uses "3 of Hearts" — give unique IDs |
| 12 | Level -0 doesn't trigger `DOWN_UNDER` achievement | `LevelNeg0.js` | Dispatch `discoverMechanic('negativeNumbers')` on mount |

### Grammar/text polish:

| Level | Current | Fix |
|-------|---------|-----|
| Level 2 | Wall of text (150 words unbroken) | Break into 3 short paragraphs with visual breaks |
| Level 8 hint | "Check your wallet carefully" | → "The text on this page is more interactive than it looks. Try selecting a number." |
| Level 10 | Post-tutorial choice paralysis | Add 1-2 suggested destinations: "🌌 Explore the unknown → Level 20" |
| Level 19 | Self-referencing trap ("nineteen" → 19) | Keep as designed BUT add very faint text (same color as background, visible only when selected): "The exit is at level twenty" |

---

## 10. Complete Routing Map

### Main Path (minimum viable journey)

```
Level 0 (start)
  └→ Level 1 (hidden buttons)
       ├→ Level 2 (hints are gameplay)
       └→ Level 3 (hint → Level 4)
            └→ Level 4 (shrine ≥3)
                 ├→ Level 5 (achievement) → Level 6 (achievement)
                 ├→ Level 7 [≥5 shrine] (coins, scale) → Level 8
                 │    └→ Level 8 [≥5 shrine] (text highlighting!)
                 │         └→ Level 10 (graduation hub)
                 │              ├→ Level 11 → Level 12 (word-numbers)
                 │              │    └→ "twenty" → Level 20 (wormhole)
                 │              │         └→ "thirty" → Level 30 (OUTPOST HUB)
                 │              │              ├→ Level i (complex plane entry)
                 │              │              ├→ Level -30 (negative realm)
                 │              │              ├→ "fifty" → Level 50 (Roman numerals)
                 │              │              │    ├→ "D" → Level 500
                 │              │              │    ├→ "M" → Level 1000
                 │              │              │    └→ "C" → Level 100 (MILESTONE HUB)
                 │              │              │         ├→ Level 150 → ...159 → 160 (Joker)
                 │              │              │         └→ Level 1000 → 10000 → ... → 10M
                 │              │              └→ "forty-two" → Level 42 (The Answer)
                 │              └→ [≥9 shrine] NumberEntry → ANY level
                 └→ Level 9 [≥5 shrine] (LockedBox)
                      └→ [≥15 shrine] clue → Level -0 (KEY!)
                           └→ Key unlocks box → clue to Level 1+1i
                                └→ Level 1+1i (Ace of Hearts)
```

### The Scale Network (hidden transportation)

```
Item on Scale → Weight → Destination
Key (50g) ────────→ Level 50 (Roman numerals)
Button (42g) ─────→ Level 42 (The Answer)
Wallet (150g) ────→ Level 150 (wallet chain)
Card Box (200g) ──→ Level 200 (procedural milestone)
Book (300g) ──────→ Level 300 (procedural milestone)
Diamond (3.52g) ──→ Level 3.52 (rational number!)
Dark Card (-5g) ──→ Level -5 (negative!)
Black Hole (∞) ───→ Level ∞ (THE endgame)
```

### The Card Collection Map

```
♠ Ace of Spades ─── Level 21 (Blackjack)
♠ King of Spades ── Level 21 (Blackjack)
♠ Jack of Spades ── Level 404 (Glitch) [NEW]
♥ Ace of Hearts ─── Level 1+1i (Complex plane) [NEW]
♦ Ace of Diamonds ─ Level -42 (Negative answer) [NEW]
♦ 7 of Diamonds ─── Level 17 (VIP Lounge)
♣ Ace of Clubs ──── Level 1000 (Milestone, 🔒30)
♣ 2 of Clubs ────── Level 500 (D is for Delightful) [NEW]
🃏 Joker ─────────── Level 160 (Jester's Trap)
♥ Queen of Hearts ─ Level 159 (Clown's Proposition) [NEW]
♦ 10 of Diamonds ── Level 10000 (Milestone, 🔒30) [NEW]
```

### Dimension Gateways

```
POSITIVE → NEGATIVE:
  Level 14 → -1, -5, -14
  Level 10 (NumberEntry) → any negative
  Any palindrome procedural level → its negative mirror

POSITIVE → COMPLEX:
  Level 30 → Level i
  Level i → Level 2i → Level 3i → Level 4i → ...
  Level 10 (NumberEntry) → any complex
  Level 9 LockedBox clue → Level 1+1i

NEGATIVE → COMPLEX:
  Negative perfect square roots → imaginary (e.g., √-49 → 7i)
  
COMPLEX → INFINITY:
  Level 5+5i → Black Hole → Scale → Level ∞

INFINITY → INFINITY:
  All 8 infinity levels interconnected (Phase 4.4)
```

### The Jester's Trail

```
Tutorial:  Level 11 → Level 8 → Level 9 → (end of scripted path)
Roaming:   Every prime procedural level (23, 29, 31, 37, 41, 43, 47, ...)
           Each encounter: contextual hint + achievement progress
```

### Procedural Level Networks (from Phase 2)

```
FIBONACCI CHAIN:   ... → 34 → 55* → 89 → 144 → 233 → 377 → 610 → 987 → ...
PRIME HIGHWAY:     ... → 29 → 31 → 37 → 41 → 43 → 47 → 53 → 59 → 61 → ...
SQUARE ROOT TREE:  144 → 12, 256 → 16 → 4 → 2, 625 → 25, 10000 → 100 → 10
POWER-OF-2 CHAIN:  32 → 64 → 128 → 256 → 512 → 1024 → 2048 → ...
MILESTONE HIGHWAY: 100 → 200 → 300 → 400 → ... → 1000 → ... → 10000 → ...
YEAR TIMELINE:     1955 ↔ 1956 ↔ 1957 ↔ ... ↔ 2025 ↔ 2026 ↔ ... ↔ 2046

* = also has handcrafted component (Fibonacci link only on procedural levels)
```

---

## 11. What NOT to Change

These are validated by both playtests and should remain as-is:

| Level | Why |
|-------|-----|
| **Level 0** | Perfect entry point. Clean. |
| **Level 1** | Accordion mechanic is just right. |
| **Level 3** | Hint-as-solution is the game's best teaching moment. |
| **Level 4** | Shrine tutorial pacing is correct. |
| **Level 5/6** | Quick achievement wins, appropriately easy. |
| **Level 7** | Coin tutorial is earned and satisfying. |
| **Level 13** | Darkness mechanic is atmospheric and memorable. |
| **Level 15** | Collapse is the game's emotional peak. |
| **Level 17** | VIP Lounge is charming and unexpected. |
| **Level 18** | Temporal anomaly is delightfully chaotic. |
| **Level 19** | Empty-by-design is a valid puzzle. |
| **Level 69** | Browser data reveal is creepy-fun. |
| **Level 77** | Dice roll is a good surprise mechanic. |
| **Level 99** | Calculator puzzle is the best interactive puzzle. |
| **Level 404** | Glitch aesthetic is perfect. |

---

## 12. What to Delete

### Systems to Remove

| System | Files | Reason |
|--------|-------|--------|
| **Flower system** | `src/data/flowerTypes.js`, `src/components/UI/FlowerPot.js`, `src/components/Games/EmojiGrow.js`, `src/store/slices/flowerSlice.js`, all references in LevelDemo | Frustrating during navigation; doesn't fit game rhythm |
| **Encyclopedia system** | `src/components/Items/CollectableEncyclopedia.js`, `src/components/Items/NumberEncyclopedia.js`, all references in LevelDemo | O(n) effort scaling; not sustainable |
| **Empty items.js** | `src/data/items.js` | Empty file, items defined implicitly through components |

### Stub Level Files to Delete (~65 files)

All pure stubs removed from `levelComponents` in Change 2.1. Delete the corresponding files:
`Level22.js` through `Level98.js` (excluding 42, 50, 55, 62, 69, 72, 77, 82, 88, 99) and shader-only stubs (73, 74, 95, 96, 97, 98).

### Flower-related code to clean

- Remove `flowerSlice` from Redux store registration (`src/store/index.js`)
- Remove flower-related reducers from `inventorySlice` (`rightClickFlower`, `leftClickFlower`)
- Remove `FlowerPot` import/render from `LevelDemo.js`
- Remove `EmojiGrow` import/render from anywhere

---

## Implementation Priority Order

| Phase | Effort | Impact | Dependencies |
|-------|--------|--------|-------------|
| **Phase 1: Fix HighlightableText** | 4-6h | 🔴 CRITICAL | None — do first |
| **Phase 2: Enrich Procedural Universe** | 5-7h | 🟡 HIGH | Phase 1 (text selection must work) |
| **Phase 3: Three Dimensions Required** | 3-4h | 🟡 HIGH | Phase 1 |
| **Phase 4: Forward Chains** | 3-4h | 🟡 HIGH | None (can parallel with Phase 1) |
| **Phase 5: Long-Term Arcs** | 4-5h | 🟢 MEDIUM-HIGH | Phase 1 + Phase 2 |
| **Phase 6: Place Orphaned Systems** | 2-3h | 🟢 MEDIUM | None |
| **Phase 7: Bug Fixes** | 2-3h | 🟢 MEDIUM | None |
| **Deletions** | 1h | 🟢 LOW | None |

**Total estimated effort: ~25–35 hours**

Phases 1 + 4 + 7 can be done first (independent). Then Phase 2 + 3. Then Phase 5 + 6. Deletions anytime.
