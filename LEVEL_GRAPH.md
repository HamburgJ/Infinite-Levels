# Infinite Levels — Directed Level Graph

> **Purpose:** This document tracks every navigational connection between levels. Use it to reason about player flow, identify dead ends, plan new content, and ensure the progression is coherent.
>
> **Last updated:** February 14, 2026

---

## How to Read This Document

Each level entry lists its **outgoing edges** (where the player can go FROM this level). Edges are classified by type:

| Symbol | Type | Meaning |
|--------|------|---------|
| `→` | **EXPLICIT** | A LevelButton the player can click directly |
| `🪙→` | **ITEM** | Navigation via item interaction (coin, card, scale weight) |
| `📝→` | **TEXT** | Number embedded in HighlightableText (requires text-highlighting knowledge) |
| `🔒→` | **GATED** | Behind an AchievementShrine (number = required achievements) |
| `⏱→` | **TIMED** | Appears only after a time delay or animation |
| `🎲→` | **RANDOM** | Destination is randomized |
| `💀→` | **COLLAPSE** | Triggered by level instability reaching 0% |

**Mechanic prerequisites** are noted in brackets: `[TEXT]` = requires text-highlighting knowledge, `[WALLET]` = requires wallet equipped, `[RIGHT-CLICK]` = requires right-click knowledge, etc.

---

## Table of Contents

1. [Tutorial Arc (Levels 0–10)](#tutorial-arc-levels-0-10)
2. [Post-Tutorial (Levels 11–20)](#post-tutorial-levels-11-20)
3. [Mid-Game (Levels 21–50)](#mid-game-levels-21-50)
4. [Stub Zone (Levels 51–99)](#stub-zone-levels-51-99)
5. [Milestones (Levels 100+)](#milestones-levels-100)
6. [Sparse Chain (Levels 150–171)](#sparse-chain-levels-150-171)
7. [Easter Eggs (404, 500, 69420, etc.)](#easter-eggs)
8. [Negative Levels](#negative-levels)
9. [Complex / Imaginary Levels](#complex--imaginary-levels)
10. [Infinity Levels](#infinity-levels)
11. [Procedural Fallback (NotImplementedLevel)](#procedural-fallback)
12. [Unmapped / Orphaned Files](#unmapped--orphaned-files)
13. [Global Navigation Surfaces](#global-navigation-surfaces)
14. [Mechanic Unlock Sequence](#mechanic-unlock-sequence)
15. [Dead Ends](#dead-ends)
16. [Critical Path Analysis](#critical-path-analysis)

---

## Tutorial Arc (Levels 0–10)

### Level 0 — "Infinite Levels!"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| → 1 | EXPLICIT | — | Only explicit button. The intended first action. |
| 📝→ Infinity | TEXT | [TEXT] | "Infinite" appears in title and body text |
| 📝→ 2 | TEXT | [TEXT][SOUND] | Sound-alike: "to" appears multiple times |
| → 10 | EXPLICIT | 🔒 negative version only | Only renders when `isNegative={true}` (i.e., Level -0 context) |

**Items:** None  
**Special:** Barberpole background. Entry point of entire game.

---

### Level 1 — "Hidden Buttons"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| → 2 | EXPLICIT | Accordion (3 tiers deep) | Must expand nested accordion to find |
| → 3 | EXPLICIT | Accordion (3 tiers deep) | Must expand nested accordion to find |
| 📝→ 1 | TEXT | [TEXT] | "Level 1" in title |
| 📝→ 2 | TEXT | [TEXT][SOUND] | "to" in body text |

**Items:** None  
**Special:** NestedAccordion stores open/visited state in Redux.

---

### Level 2 — "Backtracking"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| → 1 | EXPLICIT | — | "Back to level 1" |
| 📝→ 3 | TEXT | [TEXT] | "Level 3" mentioned in body |
| 📝→ 4 | TEXT | [TEXT][SOUND] | "for" in body text |
| 📝→ 2 | TEXT | [TEXT][SOUND] | "to" in body text |

**Items:** None  
**Special:** Teaches hint system verbally. Has typos ("neccisary", "in not linear").

---

### Level 3 — "Reinforcement"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| → 0 | EXPLICIT | — | "Back to level 0" |
| 📝→ 2 | TEXT | [TEXT] | "Level 2" in body |
| 📝→ 1 | TEXT | [TEXT] | "Level 1" in body |
| 📝→ 4 | TEXT | [TEXT][SOUND] | "for" in body text |

**Items:** None  
**Special:** Creates loop 0→1→3→0. Has typo ("barren then others").

---

### Level 4 — "Achievement Shrines"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| → 2 | EXPLICIT | — | Direct button |
| → 5 | EXPLICIT | — | Direct button |
| → 10 | EXPLICIT | 🔒3 | Inside AchievementShrine (3 required) |
| → 7 | EXPLICIT | 🔒3 + 🔒5 | Inside nested shrine (5 required, inside the 3-shrine) |
| 📝→ 10 | TEXT | [TEXT] + 🔒3 | "Level 10" in gated text |
| 📝→ 2 | TEXT | [TEXT][SOUND] | "to" in body |

**Items:** CollectableWallet 🔒5 (inside nested shrine)  
**Special:** First achievement shrine encounter. Nested shrines (3 → 5).

---

### Level 5 — "First Achievement"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| → 6 | EXPLICIT | — | Only forward path |

**Items:** None  
**Special:** Auto-unlocks `LEVEL_5` achievement on visit.

---

### Level 6 — "Hub"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| → 2 | EXPLICIT | — | |
| → 3 | EXPLICIT | — | |
| → 4 | EXPLICIT | — | |
| → 5 | EXPLICIT | — | |
| 📝→ 1 | TEXT | [TEXT][SOUND] | "won" in body |

**Items:** None  
**Special:** Auto-unlocks `LEVEL_6` achievement. First hub-style level with 4 buttons.

---

### Level 7 — "Basic Traveling Techniques"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| → 4 | EXPLICIT | — | Only explicit button |
| 🪙→ 5 | ITEM | — | 5¢ coin left-click |
| 🪙→ 1 | ITEM | — | 1¢ coin left-click (×2 coins) |
| 🪙→ (weight) | ITEM | [SCALE] | Scale display → level matching weight |
| 📝→ 4 | TEXT | [TEXT][SOUND] | "for" in body |
| 📝→ 2 | TEXT | [TEXT][SOUND] | "too" in body |

**Items:** 3× CollectableCoinBill (5¢, 1¢, 1¢), Scale  
**Special:** Teaches "numbers are buttons" concept. Scale weight depends on what's placed on it. Coins can be right-clicked to collect (if wallet equipped).

---

### Level 8 — "Advanced Traveling Techniques"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| → 0 | EXPLICIT | — | |
| → 1 | EXPLICIT | — | |
| → 2 | EXPLICIT | — | |
| → 3 | EXPLICIT | — | |
| → 4 | EXPLICIT | — | |
| → 5 | EXPLICIT | — | |
| → 6 | EXPLICIT | — | |
| → 7 | EXPLICIT | — | |
| 📝→ 7 | TEXT | [TEXT] + 🔒15 | "Level 7" in gated tutorial text |
| 📝→ 10 | TEXT | [TEXT] + 🔒15 | "10" in gated tutorial text |
| 📝→ 1 | TEXT | [TEXT][WORD] + 🔒15 | "one" in gated text |

**Items:** None  
**Special:** Major hub with 8 explicit buttons (0–7). The 🔒15 shrine teaches text-highlighting — **the game's most important mechanic.** Jester may appear here (quest stop #2).

**⚠️ CRITICAL DESIGN ISSUE:** The text-highlighting tutorial is behind 15 achievements, but reaching 15 achievements without text-highlighting is very difficult for a new player.

---

### Level 9 — "Secrets"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| → 3 | EXPLICIT | — | Only explicit button |
| 📝→ Infinity | TEXT | [TEXT][WORD] | "infinite" in body text |
| 📝→ 2 | TEXT | [TEXT][SOUND] | "to" in body |

**Items:** None (LockedBox requires Key)  
**Special:** 🔒30 shrine contains: hint about Level -0 (plain text, not HighlightableText) + LockedBox (requires key_9 item). LockedBox teaches right-click text pickup. Jester quest stop #3 (final).

---

### Level 10 — "Graduation"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| → 0 | EXPLICIT | — | |
| → 11 | EXPLICIT | — | Only forward path |
| 📝→ 10 | TEXT | [TEXT] | "first 10 levels" in body |
| 📝→ 1 | TEXT | [TEXT][WORD] | "first" in body |
| 📝→ 0 | TEXT | [TEXT] | "Levels 0-3" in recap |
| 📝→ -3 | TEXT | [TEXT][MATH] | "0-3" as math expression |
| 📝→ 3 | TEXT | [TEXT] | In "0-3" |
| 📝→ 4 | TEXT | [TEXT] | "Levels 4-6" |
| 📝→ -2 | TEXT | [TEXT][MATH] | "4-6" as math expression |
| 📝→ 6 | TEXT | [TEXT] | In "4-6" |
| 📝→ 7 | TEXT | [TEXT] | "Level 7:" |
| 📝→ 8 | TEXT | [TEXT] | "Level 8:" |
| 📝→ 9 | TEXT | [TEXT] | "Level 9:" |

**Items:** ChangeMachineButton 🔒9  
**Special:** Recap of tutorial levels. Every level number in the recap list is in HighlightableText — this is a major navigation surface for players who know text-highlighting.

**⚠️ PLAYTEST FINDING:** The tester couldn't reach Level 8 at all. The "Level 8:" text on this recap IS navigable via text-highlighting, but the tester hadn't discovered that mechanic yet (because it's taught ON Level 8, behind 🔒15).

---

## Post-Tutorial (Levels 11–20)

### Level 11 — "Sparse Warning"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| → 10 | EXPLICIT | — | Only escape |
| 📝→ 2 | TEXT | [TEXT][SOUND] | "to", "too" in body |

**Items:** None  
**Special:** Jester quest start (stop #1). Jester hints toward Level 8.

---

### Level 12 — "A Dozen Choices"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| 📝→ 12 | TEXT | [TEXT][WORD] | "dozen" → 12 (self-referential) |

**Items:** None  
**Special:** Interactive egg/donut choice (cosmetic only). **No explicit LevelButtons.** First level that requires text-navigation knowledge to escape.

---

### Level 13 — "Are You Afraid?"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| ⏱→ 0 | EXPLICIT | ~20s delay | Button appears after darkness animation completes |
| 📝→ 13 | TEXT | [TEXT] | "Level 13" in title (visible before darkness) |

**Items:** None  
**Special:** Progressive darkness overlay. Red eyes emoji. Time-gated escape.

---

### Level 14 — "Negative Space"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| → -1 | EXPLICIT | — | |
| → -5 | EXPLICIT | — | |
| → -14 | EXPLICIT | — | |
| 📝→ 14 | TEXT | [TEXT] | "Level 14" in title |

**Items:** None  
**Special:** Visually flipped (scaleY(-1)). Gateway to negative realm. Dispatches NEGATIVE_DISCOVERED.

---

### Level 15 — "Instability"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| → 0 through → 20 | EXPLICIT | ~10s timer | 21 LevelButtons, but level collapses after ~10 seconds |
| 💀→ random | COLLAPSE | auto | If stability reaches 0, forces random navigation |
| 📝→ 15 | TEXT | [TEXT] | "Level 15" in title |

**Items:** None  
**Special:** Stability bar drains 100→0 in ~10s. First encounter with collapse mechanic. Unlocks `COLLAPSE` achievement.

---

### Level 16 — "Stability Warning"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| → 17 | EXPLICIT | — | Only forward path |
| 📝→ 16 | TEXT | [TEXT] | "level 16" in body |
| 📝→ 17 | TEXT | [TEXT] | "17" mentioned in body |

**Items:** None

---

### Level 17 — "VIP Lounge"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| → 0 through → 20 | EXPLICIT | — | 21 LevelButtons (hub) |
| 🪙→ 7 | ITEM | — | 7 of Diamonds card (left-click → Level 7 via card value) |
| 📝→ 17 | TEXT | [TEXT] | "Level 17" in body |
| 📝→ 7 | TEXT | [TEXT] | "7 of Diamonds" in body |

**Items:** CollectableCard (7♦)  
**Special:** Butler James drink-ordering interaction. Major hub level.

---

### Level 18 — "Temporal Anomaly"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| 🎲→ {1,11,111,1111,-1,-11,-111} | EXPLICIT (random) | — | Single button with cycling random target |
| 💀→ random | COLLAPSE | auto | Temporal stability can trigger collapse |
| 📝→ 18 | TEXT | [TEXT] | "Level 18" in body |

**Items:** None  
**Special:** Temporal instability mechanic. Button destination cycles randomly.

---

### Level 19 — "Vacant"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| 📝→ 19 | TEXT | [TEXT] | "level 19" in body (self-referential only) |

**Items:** None  
**Special:** Intentionally empty. No interactables. **Dead end without text-highlighting.**

---

### Level 20 — "Wormhole"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| (none) | — | — | **Complete dead end** — no buttons, no items, no navigable text |

**Items:** None  
**Special:** WebGL wormhole shader. Auto-unlocks `LEVEL_20`. **⚠️ Dead end** — no escape mechanism at all. Player must use browser back or text-highlighting on the title "Level Wormhole" (but "Wormhole" isn't a number).

---

## Mid-Game (Levels 21–50)

### Level 21 — "Blackjack"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| 🪙→ 1 or 11 | ITEM | — | Ace of Spades (A = 1 or 11, depends on implementation) |
| 🪙→ 10 | ITEM | — | King of Spades (K = 10) |
| 📝→ 21 | TEXT | [TEXT] | "21" in body |

**Items:** 2× CollectableCard (Ace♠, King♠) with `forceAvailable`

---

### Level 24 — "24 Hours"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| 📝→ 24 | TEXT | [TEXT] | "24" in body |
| 📝→ (dynamic) | TEXT | [TEXT] | Live clock display (HH:MM format) — numbers change every minute |

**Items:** None  
**Special:** Real-time clock with HighlightableText. Dynamic navigation surface.

---

### Level 25 — "Quarter Back"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| 🪙→ 25 | ITEM | — | 25¢ coin left-click |
| 📝→ 25 | TEXT | [TEXT] | "25 yards" in body |

**Items:** CollectableCoinBill (25¢ quarter)

---

### Level 30 — "The Outpost" ⭐ Major Hub
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| → 0 | EXPLICIT | — | Tutorial Levels link |
| → 10 | EXPLICIT | — | Tutorial Levels link |
| → i | EXPLICIT | — | Complex Plane link (target: `{real:0, imag:1}`) |
| → -30 | EXPLICIT | — | Negative Realm link |
| 📝→ 30 | TEXT | [TEXT] | "Level 30" in title |
| 📝→ 0 | TEXT | [TEXT] | "0-10" in body |
| 📝→ 10 | TEXT | [TEXT] | "0-10" in body |

**Items:** None  
**Special:** Named hub with organized links to different game regions. Key gateway to complex plane and negative realm.

---

### Level 42 — "The Answer"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| (none) | — | — | **Dead end** — no HighlightableText at all |

**Items:** None  
**Special:** Webcam/camera feed. Zero HighlightableText components. **⚠️ Complete dead end.**

---

### Level 50 — "L"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| 📝→ 50 | TEXT | [TEXT] | "level 50" in body |

**Items:** None  
**Special:** Giant "L" title (Roman numeral). Hints at Roman numeral navigation mechanic.

---

### Levels 22–23, 26–29, 31–41, 43–49 — Stub Levels
All identical structure:

| Edge | Type | Gate | Notes |
|------|------|------|-------|
| 📝→ N | TEXT | [TEXT] | "This is level N." — self-referential only |

**No explicit buttons, no items, no special elements.** Navigation requires text-highlighting on the level's own number (which goes nowhere useful) or using the achievement/hint/settings surfaces.

---

## Stub Zone (Levels 51–99)

### Notable Levels

| Level | Unique Content | Edges |
|-------|---------------|-------|
| **55** | Pop-a-balloon (cosmetic) | 📝 self only |
| **62** | "Pest control" flavor text | 📝 self only |
| **69** | Browser info display (dynamic numbers: screen resolution, etc.) | 📝 dynamic numbers |
| **72** | ThreeBackground (hyperspace shader) | 📝 self only |
| **73** | ThreeBackground (particle shader) | 📝 self only |
| **74** | ThreeBackground (geometric shader) | 📝 self only |
| **77** | Dice roll game (results NOT in HighlightableText!) | 📝 "77" in body |
| **88** | Octopus theme | 📝 "88" in body |
| **95** | ThreeBackground (fractal shader) | 📝 self only |
| **96** | ThreeBackground (DNA shader) | 📝 self only |
| **97** | ThreeBackground (Sierpinski shader) | 📝 self only |
| **98** | ThreeBackground (organic shader) | 📝 self only |
| **99** | Math puzzle: 9○9 (impossible victory) | 📝 self only |

### All other levels (51-54, 56-61, 63-68, 70-71, 75-76, 78-87, 89-94)
Bare stubs: `"This is level N."` — self-referential 📝 only.

**⚠️ No level in the 51–99 range has ANY explicit LevelButton or any item.**

---

## Milestones (Levels 100+)

### Level 100 — "Woohoo!"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| → 20 | EXPLICIT | — | |
| → 10 | EXPLICIT | — | |
| → 0 | EXPLICIT | — | |
| 📝→ 100 | TEXT | [TEXT] | "Level 100!" in title |
| 📝→ 20 | TEXT | [TEXT] | "20 achievements" in body |

**Items:** CollectableCardBox 🔒20, ChangeMachineButton

---

### Level 999 — "Three Nines?"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| (none) | — | — | **Dead end** |

**Special:** Math puzzle 9○9○9 (likely unsolvable for target 9999)

---

### Level 1000 — "A Thousand Words"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| (none) | — | — | **Dead end** |

**Items:** CollectableCard (Ace♣) 🔒30, ChangeMachineButton  
**⚠️ Bug:** Component named `Level10` (copy-paste artifact)

---

### Level 1001 — "Questionable"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| (none) | — | — | **Dead end** |

**Special:** Meta-commentary about its own purposelessness.

---

### Level 9999 — "Four Nines?"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| (none) | — | — | **Dead end** |

**Special:** Math puzzle 9○9○9○9

---

### Level 10000 — "Are You Cheating?"
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| (none) | — | — | **Dead end** |

**Items:** CollectableCard (3♥) 🔒30  
**⚠️ Bug:** Component named `Level10` (copy-paste artifact)

---

### Levels 69420, 100000, 1000000, 10000000
All are **dead ends** with no explicit LevelButtons. 
- 69420: Fake multiplayer, passive `STRANGE_PRESENCE` achievement
- 100000/1000000/10000000: Copy-paste templates with CollectableCard 🔒20 and ChangeMachineButton. All named `Level10`.

---

## Sparse Chain (Levels 150–171)

A hand-crafted chain of levels, mostly linking backwards:

```
161 → 158 → 156 (DEAD END — has $10000 coin but no button out)
155 → 153 → 150 → 7
159 → 160 → 0  (trick: clown says "don't go to 160" but only button goes to 160)
162, 165, 168, 171 — EMPTY FILES (no content at all)
```

### Level 150 — "Lost Your Wallet?"
| → 7 | EXPLICIT | — | References scale mechanic |

### Level 153 — "Narcissistic Number"
| → 150 | EXPLICIT | — | Math: 1³+5³+3³ = 153 |

### Level 155
| → 153 | EXPLICIT | — | Sparse chain link |

### Level 156 — ⚠️ DEAD END
| (none) | — | — | Has $10,000 CollectableCoinBill but no exit button |

### Level 158
| → 156 | EXPLICIT | — | Links to the dead end |

### Level 159 — "The Clown's Proposition"
| → 160 | EXPLICIT | After dialogue | Trick: clown warns against 160, but it's the only option |

### Level 160 — "The Jester's Trap"
| ⏱→ 0 | EXPLICIT | ~8s delay | Timed escape after reveal phases. Gives Joker card. |

### Level 161
| → 158 | EXPLICIT | — | **Does NOT use HighlightableText** — plain text only |

### Levels 162, 165, 168, 171 — EMPTY
**⚠️ Files exist and are mapped in the router but contain no content at all.**

---

## Easter Eggs

### Level 404 — "Error"
| (none) | — | — | **Dead end** |
**Special:** Glitch aesthetic, random screen inversion. No escape mechanism.

### Level 500 — "D is for Delightful"
| (none) | — | — | **Dead end** |
**Special:** Roman numeral D = 500 theme. Flavor text only.

---

## Negative Levels

### Level -0 (LevelNeg0) — ⚠️ UNREACHABLE
| → 1 | EXPLICIT | — | Mirror of Level 0 |

**⚠️ BUG:** Router maps key `'-0'` → normalized to `'0'`, so this component is never rendered. The file exists but is orphaned.

---

### Level -13 (LevelNeg13)
| ⏱→ 0 | EXPLICIT | ~20s delay | After darkness fades + text reveal |
| 📝→ 13 | TEXT | [TEXT] | "Level 13" visible before darkness |

**Special:** Darkness fade animation. "The dog was inside you all along!" 🐶

---

### All Other Negative Levels
Rendered via `NegativeLevelWrapper` wrapping the positive level's component (or `NotImplementedLevel` if none exists). Navigation works the same as the positive version but visually mirrored with `scaleX(-1)`. Text in HighlightableText is also tried in reverse for the `FLIPPED_REALITY` achievement.

---

## Complex / Imaginary Levels

### Level i — Gateway
| → 0 | EXPLICIT | — | "Return to reality" |
| → 2i | EXPLICIT | — | Forward along imaginary axis |

**Special:** Introduces complex plane. Warns about instability.

---

### Level 3i
| → 0 | EXPLICIT | — | |
| → 4i | EXPLICIT | — | Forward along imaginary axis |

**Special:** Hints at stability patterns. Typo ("trecherous").

---

### Level 999+999i — "Numberservatory"
| (none) | — | — | **Dead end** |

**Special:** VisitedLevelsDisplay showing all visited levels. Component named `Level10` (copy-paste).

---

### All Other Complex Levels (NotImplementedLevel)
- **Stability bar** drains 100→0 in ~10 seconds
- At 0%: `💀→ random` via `handleLevelCollapse` (biased toward real axis)
- **Stable** if magnitude is an integer (Pythagorean triples: 3+4i, 5+12i, 8+15i, etc.)
- Stable complex levels show procedural number-theory content — same dead-end as real NotImplementedLevel

---

## Infinity Levels

All infinity levels share the same structure:

| Level | Edges |
|-------|-------|
| ∞ | → 0 |
| -∞ | → 0 |
| ∞i | → 0 |
| -∞i | → 0 |
| ∞+i | → 0 |
| ∞+∞i | → 0 |
| ∞-∞i | → 0 |
| -∞+∞i | → 0 |
| -∞-∞i | → 0 |

Every infinity level has exactly one exit: **→ 0 ("Return to Reality")**

**Ways to reach infinity:**
- 📝 Highlight "infinite", "infinity", "aleph null", etc. in any HighlightableText
- 📝 Navigate to "largest number" → Infinity
- 🪙 Place a Black Hole on the Scale (weight = ∞) → click weight display

---

## Procedural Fallback (NotImplementedLevel)

For ANY level number without a dedicated component:

### Real Numbers (integers)
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| (none) | — | — | **Dead end** — no LevelButtons generated |

**Content:** Procedural poem based on number theory properties (prime, palindrome, Fibonacci, Keith, Harshad, Kaprekar, etc.). Year fun facts for 1955–2046.

### Complex Numbers (with imaginary part)
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| 💀→ random | COLLAPSE | ~10s | Stability bar drains, then collapses to random nearby level |

### Infinity (detected by ∞ in name)
| Edge | Type | Gate | Notes |
|------|------|------|-------|
| → 0 | EXPLICIT | — | "Return to Reality" |

---

## Unmapped / Orphaned Files

| File | Status | Issue |
|------|--------|-------|
| LevelNeg0.js | 🔴 Unreachable | Router normalizes `-0` to `0` |
| LevelCubeExample.js | 🔴 Not in router | Prototype; raw dispatch to Level 2 |
| Level2Old.js | 🔴 Not in router | Deprecated; has cube navigation |
| Level162.js, Level165.js, Level168.js, Level171.js | 🔴 Empty files | Mapped in router but render nothing |

---

## Global Navigation Surfaces

These are available on EVERY level for players who know text-highlighting:

| Surface | Component | Navigable Numbers | Achievement |
|---------|-----------|-------------------|-------------|
| **Game Title** ("Infinite Levels!") | HighlightableText | "Infinite" → ∞ | `TITLE_TEXT` |
| **Level Indicator** ("Level N") | HighlightableText | Current level number (self-referential) | `LEVEL_CEPTION` |
| **Achievement titles/descriptions** | HighlightableText | See [Achievement Numbers](#achievement-numbers) below | `ACHIEVEMENT_TEXT` |
| **Settings modal text** | HighlightableText | "0.0.1" → 1 (from "Beta Version 0.0.1") | `SETTINGS_TEXT` |
| **Hint modal title** ("Level Hint") | HighlightableText | — | `HINT_TEXT` |
| **Confirmation dialog text** | HighlightableText | — | `CONFIRMATION_TEXT` |

### ⚠️ NOT navigable (but should be):
| Surface | Issue |
|---------|-------|
| **Hint body text** (95% of hints) | Plain strings, not wrapped in HighlightableText |
| **AchievementShrine progress** ("3/15") | Plain text |
| **LevelButton labels** ("Level 1") | Standard button children |

---

### Achievement Numbers

Numbers that appear in achievement descriptions and are navigable via HighlightableText in the AchievementsModal:

| Achievement | Number in Description | Navigates To |
|-------------|---------------------|--------------|
| LEVEL_5 | "level **5**" | 5 |
| LEVEL_6 | "level **6**" | 6 |
| BACKTRACKER | "at least **5** times" | 5 |
| TUTORIAL_COMPLETE | "(**0**-**10**)" | 0, 10 (or -10 as expression) |
| JESTER_FRIEND through JESTER_LEGEND | **5**, **10**, **20**, **30**, **50**, **100** | 5, 10, 20, 30, 50, 100 |
| CENTURION | "level **100**" | 100 |
| MILLENNIUM | "level **1000**" | 1000 |
| MILLIONAIRE | "level **1,000,000**" | 1000000 |
| BILLIONAIRE | "level **1,000,000,000**" | 1000000000 |
| ASTRONOMICAL | "level **10,000,000,000**" | 10000000000 |
| DO_THEY_GO_THAT_FAR | "level **10^100**" | googol |
| HINT_MASTER | "**10** different levels" | 10 |
| HINT_GOD | "**100** different levels" | 100 |
| INFINITE_JOURNEY | "**10** Infinity levels" | 10 |
| RATIONAL_NUMBER | "like **1/2** or **3.14**" | 0.5, 3.14 |
| IRRATIONAL_NUMBER | "like **π** or **e**" | π, e |

---

## Mechanic Unlock Sequence

The intended order in which the player learns navigation mechanics:

| # | Mechanic | Where Taught | Prerequisite | Effect |
|---|----------|-------------|--------------|--------|
| 1 | Click explicit buttons | Level 0 | None | Access to levels with buttons |
| 2 | Explore hidden UI (accordion) | Level 1 | Mechanic 1 | Find hidden buttons |
| 3 | Use hints | Level 2 | Mechanic 1 | Stuck-state recovery |
| 4 | Achievement shrines | Level 4 | 3+ achievements | Access gated content |
| 5 | Coins/numbers as buttons | Level 7 | Mechanic 1 | Money → navigation |
| 6 | Scale weight as button | Level 7 | Mechanic 5 | Item weight → navigation |
| 7 | **Text highlighting** | Level 8 🔒15 | **15 achievements** | **INFINITE levels accessible** |
| 8 | Right-click to pick up buttons | Level 8 🔒15 | Mechanic 7 | Portable navigation tokens |
| 9 | Right-click text pickup | Level 9 🔒30 + Key | Mechanic 7 + Key item | Portable text tokens |
| 10 | Number words ("five") | Never taught | Mechanic 7 | Word → number |
| 11 | Sound-alikes ("fortnight"→4) | Never taught | Mechanic 7 | Phonetic → number |
| 12 | Math expressions ("2+3") | Never taught | Mechanic 7 | Expression → number |
| 13 | Equations ("level = 2x+1") | Never taught | Mechanic 7 | Algebra → number |
| 14 | Roman numerals ("L"→50) | Hinted at Level 50 | Mechanic 7 | Classical notation |
| 15 | Constants (π, e, φ) | Never taught | Mechanic 7 | Irrational levels |
| 16 | Complex notation ("3+2i") | Level i/3i | Mechanic 7 | Complex plane access |
| 17 | Abstract descriptions | Never taught | Mechanic 7 | Science → navigation |
| 18 | UI surfaces are navigable | Never taught | Mechanic 7 | Achievements/settings/hints as portals |
| 19 | Wallet money as navigation | Implicit via Level 7 | Wallet item | Denomination → level |
| 20 | Card value as navigation | Never taught | Card item | Card face → level |
| 21 | Stack count as navigation | Never taught | Wallet + coins | Count → level |

---

## Dead Ends

Levels with **no outgoing edges at all** (no buttons, no items, no navigable text, or only self-referential text):

### Absolute Dead Ends (no escape without external knowledge)
| Level | Issue |
|-------|-------|
| **20** | No buttons, no items, title "Level Wormhole" has no parseable number |
| **42** | No HighlightableText at all — zero text interaction |
| **404** | No buttons, no items, only glitch text |

### Soft Dead Ends (escapable only via text-highlighting self-reference or global surfaces)
| Level | Issue |
|-------|-------|
| **19** | Only "This is level 19." — navigates to self |
| All stub levels (22-49 except 24,25,30) | Only "This is level N." |
| All stub levels (51-99 except 55,62,69,77,88,99) | Only "This is level N." |
| **156** | Has $10000 coin but no button |
| **500** | No buttons, flavor text only |
| **999, 9999** | Math puzzles but no exit |
| **1000, 1001, 10000** | No buttons |
| **69420, 100000, 1000000, 10000000** | No buttons |
| **999+999i** | No buttons |
| **162, 165, 168, 171** | EMPTY FILES |

### Designed Dead Ends (intentional atmosphere)
| Level | Design Intent |
|-------|---------------|
| **13** | Horror level — escape appears after darkness animation (~20s) |
| **-13** | Dark room — escape after slow fade |
| **160** | Jester's Trap — escape after timed reveal |

---

## Critical Path Analysis

### Minimum Path: Level 0 → Level 8 (Unlock Text Highlighting)

**Without text-highlighting (intended path):**
```
0 → 1 → 2 (learn hints) → back to 1 → 3 → 0 → hint → 7
  → from 7: coins lead to 5, 1 or back via button to 4
  → 4 → 5 → 6 (earn LEVEL_5, LEVEL_6, BACKTRACKER = 3 achievements)
  → 4 with 3 achievements: unlock shrine → 5 shrine → collect wallet
  → 7 (collect coins into wallet with right-click... but right-click isn't taught yet)
  → ??? HOW TO REACH 8 ???
```

**⚠️ The path to Level 8 is BROKEN for non-text-highlighting players:**
- Level 8 has buttons 0-7 but no OTHER level has a button TO Level 8
- The only ways to reach 8: text-highlight "8" somewhere, or have exactly 8 of something (stack count), or the clock at 8:00
- But text-highlighting is taught AT Level 8 (circular dependency)
- The Level 10 recap lists "Level 8:" in HighlightableText — but players reach Level 10 via Level 4's 🔒3 shrine, meaning they've already bypassed 8

**Possible intended paths to Level 8:**
1. Level 7 hint says "Time reveals new paths" — possibly the Clock at 8 o'clock?
2. Coin stack count = 8 (need 8 coins of same denomination)
3. Level 10 recap text "Level 8:" via text-highlighting (but this requires already knowing the mechanic)
4. Sound-alike words containing "eight"/"ate" (but requires text-highlighting)

**This is the critical design gap confirmed by the playtest.**

### Minimum Path: Level 0 → Complex Plane
```
0 → ... → 30 (The Outpost) → i
```
But reaching Level 30 requires text-highlighting to jump past 20 (which is a dead end). Alternative: Level 15 or 17 has buttons to 0-20, so from 17 you can reach 18→random→potentially 11/1/etc., but 30 requires text-highlighting "30" or "thirty" somewhere.

### Minimum Path: Level 0 → Infinity
```
Any level with "infinite" in HighlightableText → highlight → Infinity
```
Level 0 itself contains "Infinite" — so a player who knows text-highlighting can reach Infinity from the very first level.

---

## Connection Statistics

| Metric | Count |
|--------|-------|
| Total level files | 143 |
| Levels with ≥1 explicit LevelButton | ~35 |
| Levels with 0 explicit LevelButtons | ~108 |
| Levels that are complete dead ends | ~3 (20, 42, 404) |
| Empty files (mapped but no content) | 4 (162, 165, 168, 171) |
| Orphaned files (not in router) | 3 (Neg0, CubeExample, 2Old) |
| Levels reachable only via text-highlighting | ~100+ |
| Hub levels (5+ outgoing explicit edges) | 6 (6, 8, 15, 17, 30, 100) |
| Achievement-gated content instances | ~12 |

---

*This document should be updated whenever levels are added, modified, or connected.*
