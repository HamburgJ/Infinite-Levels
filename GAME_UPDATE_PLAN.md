# Infinite Levels — Game Update Plan

> **This is a decision document, not an analysis.** Every item is a specific change to make. Where the DESIGN_IMPROVEMENTS.md listed options, this document picks one and commits.
>
> **Last updated:** February 14, 2026

---

## The Vision (One Paragraph)

The player starts knowing nothing. By Level 10, they know that numbers hidden in text are clickable. By Level 50, they know words, Roman numerals, and sounds can be numbers. By Level 100, they know math expressions, constants, and equations work too. By the time they reach infinity, they realize the game's own UI — hints, achievements, settings, titles — are all navigation surfaces. **The game never tells them any of this directly. Every discovery is earned.** But every discovery must be *reachable* — there must always be a path forward, even if it's not obvious. That's what this plan fixes.

---

## Table of Contents

1. [The Player Journey — What It Should Feel Like](#1-the-player-journey)
2. [Phase 1: Fix the Spine (Critical Path, Levels 0-10)](#2-phase-1-fix-the-spine)
3. [Phase 2: Make Every Surface Alive (Hints, Achievements, Results)](#3-phase-2-make-every-surface-alive)
4. [Phase 3: Build the Discovery Chain (Levels 11-50)](#4-phase-3-build-the-discovery-chain)
5. [Phase 4: Give the Wasteland a Pulse (Levels 51-99)](#5-phase-4-give-the-wasteland-a-pulse)
6. [Phase 5: Fix the Frontiers (100+, Negative, Complex, Infinity)](#6-phase-5-fix-the-frontiers)
7. [Phase 6: Bold Moves (Structural / New Systems)](#7-phase-6-bold-moves)
8. [Bug Fixes (Ship Alongside Any Phase)](#8-bug-fixes)
9. [Full Level-by-Level Spec Sheet](#9-full-level-by-level-spec-sheet)
10. [What NOT to Change](#10-what-not-to-change)

---

## 1. The Player Journey

This is the intended emotional + knowledge arc. Every change in this document serves this arc.

### Chapter 1: "What Is This?" (Levels 0→1→2→3, ~5 min)

**Knowledge gained:** Buttons exist. Buttons can be hidden. Hints are essential. Backtracking is normal.

The player clicks the Level 1 button on Level 0. They find Level 2 and Level 3 hidden in the accordion. Level 2 tells them hints exist. Level 3's hint gives them a button to Level 4. The loop `0→1→3→0` is intentional tension — the hint system breaks them out.

**Feeling:** "Ok, this is a puzzle game about finding hidden buttons. Hints are part of the game."

### Chapter 2: "This Has Depth" (Levels 4→5→6→7, ~15 min)

**Knowledge gained:** Achievements gate content. Exploration earns achievements. Coins and the scale are secret buttons.

Level 4's shrine needs 3 achievements. Player gets LEVEL_5 (visit 5) and LEVEL_6 (visit 6) automatically. BACKTRACKER (visit any level 5 times) comes from natural re-exploration. Shrine opens → wallet + button to Level 7. Level 7 teaches that coins are buttons (left-click navigates) and the scale display is a button. **New: Level 7 also has a button to Level 8.**

**Feeling:** "Whoa, coins are buttons? The scale is a button? What ELSE is secretly a button?"

### Chapter 3: "Everything Is a Button" (Level 8→10, ~10 min)

**Knowledge gained:** Text highlighting creates buttons from ANY number. This is the watershed moment.

Player arrives at Level 8 with 5+ achievements. The shrine (now 🔒5 instead of 🔒15) opens immediately. The tutorial text says: *"Just find some text which has a number in it, highlight, and click it to travel to that level! For example, this text has a 10 in it!"* Player highlights "10", clicks, goes to Level 10. Mind = blown.

Level 10 is the graduation ceremony. It lists all tutorial levels 0-9 with descriptions — every number in that list is now a clickable link thanks to HighlightableText. Player also sees "Level 11" button.

**Feeling:** "OH. I can click ANY number in ANY text. The entire game just changed."

### Chapter 4: "The World Is Strange" (Levels 11→20, ~20 min)

**Knowledge gained:** The game has weird zones — darkness (13), negative space (14), instability (15), temporal anomalies (18), a VIP lounge (17). Numbers are EVERYWHERE in the text of these levels.

Player goes 10→11, which nudges them to re-explore with their new text-highlighting power. Level 12 teaches word-numbers ("dozen"). Level 13 is horror. Level 14 introduces negative levels. Level 15 introduces collapse. Level 16→17 is the VIP lounge hub. Level 18 is chaos. Level 19 is emptiness. Level 20 is the wormhole (now with navigable text).

**Feeling:** "This game is vast and weird. I keep discovering things."

### Chapter 5: "Words Are Numbers" (Levels 12, 25, 30, ~15 min)

**Knowledge gained:** Number words (dozen, twenty, hundred, score, pair) are navigable. This happens naturally as players explore Zone 2-3 and try highlighting words.

Level 12 is redesigned to lean into this: "A dozen choices, a score of options, and a hundred possibilities" — all clickable via word-number parsing. Level 30 (The Outpost) already works as a hub. Level 25 mentions "quarter" which resolves to 25.

**Feeling:** "Wait, English WORDS that mean numbers work too??"

### Chapter 6: "Letters Are Numbers" (Level 50, ~10 min)

**Knowledge gained:** Roman numerals are navigable. L=50, C=100, D=500, M=1000.

Level 50 already shows a giant "L" and mentions Roman numerals. The text is enhanced to be more explicit: "Roman numerals are everywhere in this game. Find an L, a C, a D, or an M." Player realizes single letters in text throughout the entire game are navigation.

**Feeling:** "The parser is insanely deep. What else does it understand?"

### Chapter 7: "Sounds Are Numbers" (Level 55, ~15 min)

**Knowledge gained:** Words that SOUND like numbers work — "ate"→8, "won"→1, "for"→4, "wait"→8.

Level 55 is rebuilt with a sound-alike riddle. This is the most mind-blowing discovery — the text parser understands homophones.

**Feeling:** "This is wizardry. Every piece of English text in this game might secretly be navigation."

### Chapter 8: "Math Is Navigation" (Level 99, ~10 min)

**Knowledge gained:** Mathematical expressions get evaluated — "7+7", "3*3", "two plus three".

Level 99 already has a math puzzle (9○9). The results are now HighlightableText, so the player can click the answer to navigate. This teaches that expressions in text are evaluated.

**Feeling:** "I can write math in text and it resolves. The game understands MATH."

### Chapter 9: "The Universe Expands" (100+, negative, complex, ∞)

**Knowledge gained:** Constants (π, e, φ), complex notation (3+4i), the full number line.

Player reaches 100+ via various means. Level 100 is a milestone hub. Level 30→i enters the complex plane. Level 14 enters negative space. Constants are discovered via text containing "pi", "phi", "e" throughout the game.

**Feeling:** "This game is literally infinite."

### Chapter 10: "Everything Is Connected" (UI surfaces)

**Knowledge gained:** The hint menu, achievement descriptions, settings text, game title — ALL are navigable surfaces.

This isn't a single moment but an ongoing realization. Achievements like HINT_TEXT, ACHIEVEMENT_TEXT, SETTINGS_TEXT, TITLE_TEXT confirm each discovery. The game itself becomes the map.

**Feeling:** "There is no UI element in this game that isn't secretly a button."

---

## 2. Phase 1: Fix the Spine

**Goal:** Make the critical path from Level 0 to Level 10 actually work. A new player must be able to reach every tutorial level through normal play.

**Priority:** 🔴 DO THIS FIRST. Nothing else matters if the tutorial is broken.

### Change 1.1: Level 7 → Add button to Level 8

**File:** `src/components/Levels/Level7.js`

Add a `LevelButton targetLevel={8}` at the bottom, after the scale section. Framing: *"Now that you know the basics, head to Level 8 for advanced techniques!"*

The current lone button goes to Level 4 (backwards). This is fine to keep — backtracking is thematic — but there MUST be a forward path too.

### Change 1.2: Level 8 → Lower shrine from 🔒15 to 🔒5

**File:** `src/components/Levels/Level8.js`

Change `<AchievementShrine requiredCount={15}>` to `requiredCount={5}`.

**Why 5?** Player can earn exactly 5 via the natural tutorial path:
1. LEVEL_5 (auto from visiting Level 5)
2. LEVEL_6 (auto from visiting Level 6)
3. BACKTRACKER (visit any level 5 times — happens naturally)
4. HINT_EXPLORER (open hints in 10 levels) OR WALLET_FOUND (find wallet on Level 4 at 5 achievements)
5. Any one more from natural exploration

This means a thorough player reaches Level 8's tutorial content right when they need it.

### Change 1.3: Level 7 → Fix typos

**File:** `src/components/Levels/Level7.js`

- "is could be a button" → "could be a button"
- "Take look at these coins" → "Take a look at these coins"

### Change 1.4: Level 7 → Add right-click instruction

**File:** `src/components/Levels/Level7.js`

After the coin explanation, add text: *"Left-click a coin to travel to that level. Right-click a coin to collect it into your wallet!"*

The playtest confirmed this is a major source of confusion.

### Change 1.5: Level 2 → Fix typos

**File:** `src/components/Levels/Level2.js`

- "neccisary" → "necessary"
- "in not linear" → "is not linear"

### Change 1.6: Level 3 → Fix typo

**File:** `src/components/Levels/Level3.js`

- "barren then others" → "barren than others"

### Change 1.7: Level 9 → Lower shrine from 🔒30 to 🔒15

**File:** `src/components/Levels/Level9.js`

The Level 9 shrine teaches right-click button collection — a useful but not critical mechanic. 30 is too high now that Level 8 is at 5. Move to 15, which is still a meaningful gate that requires post-tutorial exploration.

### Change 1.8: Level 10 → Add a nudge about text highlighting

**File:** `src/components/Levels/Level10.js`

The recap list already has HighlightableText showing "Levels 0-3:", "Level 7:", "Level 8:", etc. All those numbers are already clickable. But the player might not know yet. Add a line below the list:

*"Tip: Try selecting any number you see on this page. You might discover something!"*

This is a gentle nudge that reinforces Level 8's lesson without being heavy-handed.

---

## 3. Phase 2: Make Every Surface Alive

**Goal:** Every piece of text in the game should be a potential navigation surface. The game promises this; the code must deliver it.

### Change 2.1: LevelHint.js → Wrap ALL hint text in HighlightableText

**File:** `src/components/UI/LevelHint.js`

Currently, ~85 of 90 hints are plain strings like `"Find the hidden button"`. Change ALL of them to `<HighlightableText text="Find the hidden button" />`.

This is the single highest-impact change in the entire plan. It:
- Makes every number word in every hint a navigation target
- Enables the HINT_TEXT achievement (currently nearly impossible)
- Turns hints from passive guidance into active navigation surfaces
- Fulfills the promise Level 2 makes: "the hint system is an important and necessary part of this game"

**Bonus:** Many existing hints already contain navigable content without any rewriting:
- "Three is a magical number" → 3
- "Forty steps deeper" → 40
- "Binary thinking might help here" → has no number, safe
- "The answer to everything... or is it?" → no number, safe
- "Halfway there... or are you?" → no number, safe

Some hints should be rewritten to include intentional breadcrumbs. See the hint rewrite table in the Spec Sheet (Section 9).

### Change 2.2: Rewrite ~20 key hints with intentional breadcrumbs

**File:** `src/components/UI/LevelHint.js`

Instead of vague fortune-cookie hints, make them contain useful navigable information. Examples:

| Level | Current Hint | New Hint |
|-------|-------------|----------|
| 7 | "Time reveals new paths" | "The coins here are secretly buttons. Have you tried right-clicking one? Also — did you notice Level 8 has a button now?" |
| 11 | "The clock shows more than just time" | "The levels beyond ten are sparse, but the text within them is rich. Try highlighting any number you see." |
| 12 | "Collect buttons for later use" | "A dozen is twelve. A score is twenty. A hundred is a hundred. Words that mean numbers are buttons too." |
| 20 | "The journey continues to evolve" | "The wormhole seems empty, but look closely at the title text. Every word is a potential exit." |
| 42 | "The answer to everything... or is it?" | "The answer to life, the universe, and everything is forty-two. Or so they say. Try highlighting that number word." |
| 50 | "Halfway there... or are you?" | "L is fifty in Roman numerals. C is a hundred. D is five hundred. M is a thousand. Find these letters in any text." |
| 69 | "Nice... but focus on the puzzle" | "Your screen resolution, timezone, and platform all contain numbers. Try highlighting them." |
| 77 | "Lucky number! Roll for new level!" | "Roll the die, then try highlighting the result! Every number, even random ones, can be a way forward." |
| 88 | (generic) | "Eight arms, eight hearts, eight brains. The octopus is full of eights. Highlight the word 'eight' to travel there." |
| 99 | (generic) | "Pick an operator, calculate the result, and try highlighting it. Nine times nine is eighty-one. Nine to the power of nine is something much bigger." |
| 100 | "Triple digits open new possibilities" | "You've made it to triple digits! The card box here is a new collectible. Cards have values — and values are numbers." |
| 404 | "Page not found... or is it?" | "The glitch text hides secrets. Look for the number four hundred and four in the chaos. Or just highlight the title." |

### Change 2.3: Level 77 → Make dice results HighlightableText

**File:** `src/components/Levels/Level77.js`

Currently the roll result is rendered as plain interpolated text: `` The die landed on ${roll} ``. Change this to:

```jsx
<HighlightableText text={`The die landed on ${roll}`} />
```

Now rolling a 5 creates a clickable "5" that navigates to Level 5. This is a delightful discovery and reinforces the "everything is a button" principle.

### Change 2.4: Level 99 → Make calculation results HighlightableText

**File:** `src/components/Levels/Level99.js`

The `Result: ${result}` display should be wrapped in HighlightableText. When a player computes 9**9 = 387420489, they can click the result to travel there. 9+9 = 18 → Level 18. 9*9 = 81 → Level 81. The math puzzle becomes a navigation tool.

### Change 2.5: Level 42 → Wrap all text in HighlightableText

**File:** `src/components/Levels/Level42.js`

Currently Level 42 has zero HighlightableText components. The Card.Title "Level 42" and Card.Text are plain. Wrap them. Also add a sentence: *"The answer to life, the universe, and everything. Or is it just a webcam?"*

### Change 2.6: Level 69 → Wrap browser data in HighlightableText

**File:** `src/components/Levels/Level69.js`

The browser data lines contain numbers (screen resolution like "1920x1080", etc.). They're already in HighlightableText. But the Card.Title "I Know You" is not. Wrap it and consider adding: *"Your screen resolution alone contains a multitude of levels."*

---

## 4. Phase 3: Build the Discovery Chain

**Goal:** After the tutorial (Level 10), the player enters a world where each "zone" teaches a new mechanic through natural discovery, not lectures.

### Change 3.1: Level 11 → Expand into a proper gateway

**File:** `src/components/Levels/Level11.js`

Current state: Sparse text, Jester, button back to 10. This is the first post-tutorial level and it's underwhelming.

**New design:** Keep the "sparse" theme but make the text work harder:

> *"The levels become more sparse from here. But don't let that fool you — there are a dozen hidden paths between any two levels, and a hundred secrets you haven't found yet. The Jester ahead might know a thing or two..."*

"dozen" → 12, "two" → 2, "hundred" → 100. Players who learned text-highlighting on Level 8 will discover these are clickable. Players who haven't yet learned word-numbers get their first exposure.

Keep the Jester. Keep the button to Level 10. But also add: `<LevelButton targetLevel={12}>Level 12</LevelButton>` to provide a forward path.

### Change 3.2: Level 12 → The Word-Number Teaching Level

**File:** `src/components/Levels/Level12.js`

Current state: Choose between a dozen eggs or donuts. Cute, but "dozen" self-references to 12.

**New design:** Keep the dozen choice mechanic (it's charming!) but add a paragraph AFTER the choice that teaches word-numbers:

> *"Did you know? A dozen means twelve. A baker's dozen is thirteen. A score is twenty. A pair is two. And a gross is one hundred forty-four. Numbers hide in words!"*

All of those are in the word-number dictionary. This is the explicit teaching moment for Rung 7 of the Knowledge Ladder.

### Change 3.3: Level 19 → Add a subtle lifeline

**File:** `src/components/Levels/Level19.js`

Current state: "This is level 19. Level 19 is a testament to the ability of a level to be vacant of anything." Dead end.

**New design:** Keep the emptiness — it's thematic and intentional. But change the text slightly:

> *"This is level nineteen. Level nineteen is a testament to the ability of a level to be vacant of anything. Nothing to see here. Not even a way out. Or is there?"*

"nineteen" → 19, "nothing" → contains no navigable word, "out" → not navigable. The player must use text highlighting on "nineteen" to escape. This TESTS whether they learned the mechanic.

### Change 3.4: Level 20 → Fix the dead end

**File:** `src/components/Levels/Level20.js`

Current state: WebGL wormhole shader background, title "Level Wormhole", nothing else. Complete dead end — "Wormhole" contains no number.

**New design:** Keep the shader (it's gorgeous). Add HighlightableText body:

> *"You've fallen through a wormhole. The space around you warps and distorts. Somewhere in the swirling chaos, you can see fragments of levels — ten, twenty, thirty, forty, fifty — flickering in and out of existence. You must choose quickly before the wormhole collapses."*

All number words are clickable. The urgency matches the visual. Player has multiple exits.

### Change 3.5: Level 24 → Enhance the clock connection

**File:** `src/components/Levels/Level24.js`

Currently shows a live clock. Add text:

> *"The clock reads {time}. In a world of infinite levels, time itself is just another number. Every hour, every minute — they're all levels too."*

The clock display is already HighlightableText, so the time "14:30" would navigate to Level 14 (or 1430, depending on parsing). This introduces the idea that dynamic, changing content is navigable.

### Change 3.6: Level 25 → Reinforce word-numbers

**File:** `src/components/Levels/Level25.js`

Currently has a quarter coin and football text. Add:

> *"A quarter is twenty-five cents. Two quarters make fifty cents. Four quarters make a dollar — that's one hundred cents!"*

"twenty-five" → 25, "fifty" → 50, "one hundred" → 100. Navigation breadcrumbs disguised as math facts.

### Change 3.7: Level 30 → Already great, minor enhancement

**File:** `src/components/Levels/Level30.js`

Level 30 is already the best hub in the post-tutorial zone with buttons to 0, 10, i, and -30. Keep it. Consider adding one line:

> *"The Outpost stands at the crossroads of thirty paths. From here, fifty lies to the east, and one hundred to the north."*

"thirty" → 30 (self), "fifty" → 50, "one hundred" → 100. Breadcrumbs to forward destinations.

### Change 3.8: Level 42 → Give it a soul

**File:** `src/components/Levels/Level42.js`

Current state: Webcam with zero HighlightableText. A novelty with no game connection.

**New design:** Keep the webcam (it's memorable). Add HighlightableText:

> *"Level forty-two. The answer to the ultimate question of life, the universe, and everything. Douglas Adams would be proud. Though some say the real answer is closer to three point one four one five nine..."*

"forty-two" → 42, "three point one four one five nine" → 3.14159 (π). The pi reference hints at irrational-number levels, planting a seed for future discovery.

### Change 3.9: Level 50 → Explicit Roman numeral teaching

**File:** `src/components/Levels/Level50.js`

Current state: Big "L" and text mentioning Roman numeral L.

**New design:** Make it the definitive Roman numeral teaching level:

> *"L. Fifty in the language of Rome. But L is just the beginning. I is one. V is five. X is ten. L is fifty. C is one hundred. D is five hundred. M is one thousand. Find these letters in any text throughout the game, and they'll carry you to new levels."*

This is the explicit teaching moment for Rung 8.

---

## 5. Phase 4: Give the Wasteland a Pulse

**Goal:** The 51-99 range is mostly auto-generated stubs. Rather than hand-crafting 49 levels, strategically enhance ~8 levels to create a web of connections and teach the remaining mechanics.

### Change 4.1: Level 55 → The Sound-Alike Teaching Level

**File:** `src/components/Levels/Level55.js`

Current state: A balloon you can pop. Cute but teaches nothing.

**New design:** Keep the balloon as a visual element but rebuild the text:

> *"Welcome to a level that's all about sound. Did you know that words which SOUND like numbers can take you places?"*
>
> *"For instance: What if you ATE some food? What if you went on a journey FOR knowledge? What if someone WON a prize? What about a TREE in the forest?"*
>
> *"Try highlighting those words. You might be surprised where they take you."*

"ATE" → 8, "FOR" → 4, "WON" → 1, "TREE" → 3. This is the explicit teaching moment for Rung 9 (sound-alikes). The words are capitalized as a gentle nudge without breaking the narrative.

### Change 4.2: Level 62 → The Math Expression Teaching Level

**File:** `src/components/Levels/Level62.js` (if it's currently a stub, replace it)

New content:

> *"Sixty-two. An unassuming number. But did you know you can navigate using math? Try highlighting 'seven times nine' or 'twelve plus twelve'. The game understands arithmetic. Even something like 'two to the power of ten' will work."*

"seven times nine" → 63, "twelve plus twelve" → 24, "two to the power of ten" → 1024.

This teaches Rung 10 (math expressions) through natural text.

### Change 4.3: Level 77 → Fix dice results (already in Phase 2)

Already covered in Change 2.3.

### Change 4.4: Level 88 → Word-number reinforcement

**File:** `src/components/Levels/Level88.js`

Add to existing text:

> *"Eight sides make an octagon, eight arms make an octopus, eight bits make a byte, and eight eights make sixty-four!"*

"eight" → 8 (self, fine), "sixty-four" → 64. Breadcrumb to another level.

### Change 4.5: Level 99 → Math expression discovery (already in Phase 2)

Already covered in Change 2.4. The key addition is making results HighlightableText. When the player computes 9**9 = 387420489, that becomes a clickable path to a level deep in the number line.

### Change 4.6: Level 72 → Equation-solving hint

**File:** `src/components/Levels/Level72.js` (if currently a stub)

Add to text:

> *"If level squared equals five thousand one hundred eighty-four, what is level? Sometimes the game can solve equations too."*

This hints at Rung 11 (equation solving) — the text parser can solve for "level" when given an equation.

### Change 4.7: Level 82 → Constants teaching

**File:** `src/components/Levels/Level82.js` (has VisitedLevelsDisplay — keep it, add text)

> *"The mathematical constants are levels too. Pi is approximately three point one four. E is approximately two point seven one eight. Phi, the golden ratio, is approximately one point six one eight. Try highlighting any of these."*

This teaches Rung 12 (constants).

### Change 4.8: About the remaining stubs (51-99)

**Do NOT hand-craft all 49 remaining stubs.** The procedural NotImplementedLevel system already generates interesting content for these (number theory facts, year facts, mathematical properties). Instead:

1. Ensure every stub level has HighlightableText wrapping (they already do via NotImplementedLevel)
2. The procedural poems and facts already contain navigable numbers
3. The NotImplementedLevel fallback is actually pretty good — let it be

The 8 enhancements above (55, 62, 72, 77, 82, 88, 99 + the Phase 2 fixes) create enough hand-crafted anchors in the zone. Players will naturally discover the stub levels via text highlighting and find the procedural content charming.

---

## 6. Phase 5: Fix the Frontiers

### Change 5.1: Level 100 → Already good, minor fix

Level 100 is a solid milestone hub with buttons to 0, 10, 20 and a card box behind 🔒20. No structural changes needed.

### Change 5.2: Level 156 → Fix dead end

**File:** `src/components/Levels/Level156.js`

Add a LevelButton back to Level 150:

```
<LevelButton targetLevel={150}>Back to Level 150</LevelButton>
```

### Change 5.3: Level 404 → Add delayed escape

**File:** `src/components/Levels/Level404.js`

Follow Level 13's pattern: after the glitch animation runs for a few seconds, fade in an escape button:

```
<LevelButton targetLevel={0}>Escape the Glitch</LevelButton>
```

Also wrap the GlitchText and Card.Text in HighlightableText so "404" in the title is clickable (self-reference, but it makes the text interactive).

### Change 5.4: Empty files → Add minimal content or remove

**Files:** Level162.js, Level165.js, Level168.js, Level171.js

These are mapped in the router but render nothing. Two options:
- **Option A (preferred):** Remove them from the `levelComponents` dictionary in Level.js. The NotImplementedLevel fallback will handle them with procedural content + a stability bar for complex levels.
- **Option B:** Add minimal content (a sentence + a LevelButton back to the sparse chain).

Go with Option A. The procedural fallback is better than empty files.

### Change 5.5: Level -0 → Fix the routing bug

**File:** `src/components/Levels/Level.js`

The `getLevelKey` function currently has:
```js
if (typeof level === 'number' && Object.is(level, -0)) {
  return '0';
}
```
and
```js
if (level.imag === 0 && Object.is(level.real, -0)) {
  return '0';
}
```

Change both to return `'-0'` and add `'-0': React.lazy(() => import('./LevelNeg0'))` to the levelComponents dictionary. The LevelNeg0.js file already exists but is orphaned.

### Change 5.6: Milestone levels (999, 1000, etc.) → Add escape hatches

For each milestone level that's a dead end, ensure the HighlightableText content contains enough numbers to navigate away. Most already do. The big ones to check:

- **Level 999:** Has an equation puzzle. Ensure HighlightableText wrapping is complete.
- **Level 1000:** Check if it has a LevelButton. If not, add one to Level 100 or Level 0.
- **Level 10000+:** These fall to NotImplementedLevel, which has HighlightableText. Fine.

---

## 7. Phase 6: Bold Moves

These are structural changes that would significantly improve the game. They're not bug fixes — they're features. Implement after Phases 1-5.

### Bold Move 1: Browser Back Button Support

**Why:** The playtest's #1 frustration was getting lost. The browser back button is a universal "undo" that every web user understands. It costs nothing visually.

**Implementation:** In `gameSlice.js`'s `setCurrentLevel` reducer, add `window.history.pushState({level: newLevel}, '', '')`. Add a `popstate` listener in App.js that dispatches `setCurrentLevel` with the previous level.

This is a 15-line change that eliminates the biggest UX pain point without adding any visible UI.

### Bold Move 2: Level Breadcrumb Trail

**Why:** Show the last 5 visited levels as small clickable badges in the bottom-right corner. The store already tracks `levelHistory` (last 10).

**Implementation:** A `<Breadcrumbs />` component that reads `state.game.levelHistory`, renders the last 5 as small pill buttons. Positioned fixed, bottom-right, subtle opacity. Clicking one navigates there.

This is a safety net, not a hub. It only shows where you've been, not where you haven't.

### Bold Move 3: Adaptive Hint Pulsing

**Why:** The playtest AI was stuck for 45+ minutes. Even 5 minutes of being stuck is too long for most humans.

**Implementation:** Track `lastNavigationTime` in the store. If 3+ minutes pass without a level change, make the hint icon pulse subtly. If 5+ minutes pass, auto-expand the hint. If 10+ minutes pass, show a "Return to Level 0" suggestion.

This is a gentle hand-hold that respects player autonomy while preventing frustration spirals.

### Bold Move 4: Number Entry on Level 10

**Why:** The NUMBER_ENTRY mechanic exists but is hidden behind debug mode. Level 10 (graduation) is the perfect place to unlock it — it's a reward for completing the tutorial.

**Implementation:** On Level 10, behind the existing 🔒9 shrine, add a NumberEntry component. Frame it as: *"You've proven yourself worthy. Here's a direct line to any level — just type a number."*

This gives experienced players a fast-travel tool while keeping it gated behind meaningful progress.

### Bold Move 5: Flower System Completion

**Why:** The flower system has a store slice, a component, three flower types with growth stages, but no gameplay trigger. It's the most "almost there" orphaned system.

**Implementation:**
1. Flowers grow by 1 stage each time the player discovers a NEW level (not revisits)
2. Each growth stage changes the flower's weight
3. When fully grown, the flower's `finalLevel` property becomes a navigable destination via the scale
4. This creates a "grow through exploration" meta-loop

### Bold Move 6: The Jester as a Roaming Guide

**Why:** The Jester currently has a 3-stop path (11→8→9→null). Achievements require up to 100 encounters. This is broken.

**Implementation:** After the initial 3-stop path, the Jester appears on every prime-numbered level the player hasn't visited yet. Each encounter gives a cryptic one-line hint about a nearby undiscovered mechanic. The Jester becomes a guiding presence that rewards exploration.

---

## 8. Bug Fixes

Ship these alongside any phase. They're independent of feature work.

| # | Bug | File | Fix |
|---|-----|------|-----|
| 1 | `phi` = `Math.E ** Math.PI` ≈ 23.14 instead of golden ratio ≈ 1.618 | `src/utils/numberText.js` | Change to `(1 + Math.sqrt(5)) / 2` |
| 2 | Level -0 unreachable (router maps -0→0) | `src/components/Levels/Level.js` | Return `'-0'` for `Object.is(val, -0)`, add to dictionary |
| 3 | Copy-paste component names (Level1000 etc. all named `Level10`) | `Level1000.js`, `Level10000.js`, `Level100000.js`, `Level1000000.js`, `Level10000000.js` | Rename exports to match file names |
| 4 | Level999plus999i renders Level 82 content | `Level999plus999i.js` | Fix import or component content |
| 5 | `console.log` in production code | `HighlightableText.js`, `Level.js`, `NotImplementedLevel.js` | Remove or gate behind debug flag |
| 6 | Typo "trecherous" → "treacherous" | `Level3I.js` | Fix spelling |
| 7 | Level161 doesn't use HighlightableText | `Level161.js` | Wrap text content in HighlightableText |
| 8 | Unreachable code in ColorSchemeManager | `ColorSchemeManager.js` | Move `return 'dark'` after infinity check |

---

## 9. Full Level-by-Level Spec Sheet

### Levels 0-10 (Tutorial — The Spine)

| Level | Current State | Changes | New Connections |
|-------|--------------|---------|-----------------|
| **0** | ✅ Good. Entry point. | None | → 1 |
| **1** | ✅ Good. Accordion puzzle. | None | → 2 (hidden), → 3 (hidden) |
| **2** | ⚠️ Typos. | Fix "neccisary", "in not linear" | → 1 |
| **3** | ⚠️ Typo. | Fix "then" → "than" | → 0; hint → 4 |
| **4** | ✅ Good. Shrine tutorial. | None | → 2, → 5; 🔒3→ 10; 🔒5→ 7 |
| **5** | ✅ Good. Auto-achievement. | None | → 6 |
| **6** | ✅ Good. Hub. | None | → 2, 3, 4, 5 |
| **7** | 🔴 No path to 8. Typos. | Fix typos. Add → 8. Add right-click explanation. | → 4, **→ 8 (new)** |
| **8** | 🔴 Gate too high. | Lower shrine 15→5 | → 0-7; 🔒5→ text tutorial |
| **9** | ⚠️ Gate very high. | Lower shrine 30→15 | → 3; 🔒15→ locked box |
| **10** | ⚠️ Missing nudge. | Add text highlighting hint | → 0, → 11; 🔒9→ ChangeMachine |

### Levels 11-20 (Post-Tutorial — The Neighborhood)

| Level | Current State | Changes | New Connections |
|-------|--------------|---------|-----------------|
| **11** | ⚠️ Dead end vibes. | Add word-number text. Add → 12. | → 10, **→ 12 (new)** |
| **12** | ⚠️ Self-referential. | Add word-number teaching paragraph | Word-numbers in text (→ 13, 20, 144, etc.) |
| **13** | ✅ Good. Horror. | None | → 0 (delayed) |
| **14** | ✅ Good. Negative gateway. | None | → -1, -5, -14 |
| **15** | ✅ Good. Instability. | None | → 0-20 (panic buttons) |
| **16** | ✅ Waypoint. | None | → 17 |
| **17** | ✅ Excellent VIP hub. | None | → 0-20 + card |
| **18** | ✅ Fun chaos. | None | → random |
| **19** | ⚠️ Intentional dead end. | Change "19" to "nineteen" in text | Text highlighting → 19 as only escape |
| **20** | 🔴 Complete dead end. | Add HighlightableText body with number words | Word-numbers → 10, 20, 30, 40, 50 |

### Levels 21-50 (Discovery Zone — Teach word-numbers, Roman numerals)

| Level | Current State | Changes |
|-------|--------------|---------|
| **21-23** | Stubs | Leave as NotImplementedLevel procedural |
| **24** | Clock display | Add text about time = numbers |
| **25** | Quarter coin | Add text with "twenty-five", "fifty", "one hundred" |
| **26-29** | Stubs | Leave as procedural |
| **30** | ✅ Hub (Outpost) | Add text breadcrumbs: "fifty", "one hundred" |
| **31-41** | Stubs | Leave as procedural |
| **42** | 🔴 Dead end | Wrap in HighlightableText, add "forty-two", pi reference |
| **43-49** | Stubs | Leave as procedural |
| **50** | Roman numeral L | Enhance with explicit Roman numeral dictionary (I, V, X, L, C, D, M) |

### Levels 51-99 (Mastery Zone — Teach sound-alikes, math expressions)

| Level | Current State | Changes |
|-------|--------------|---------|
| **51-54** | Stubs | Leave as procedural |
| **55** | Balloon | **Rebuild: Sound-alike teaching level** (ATE, FOR, WON, TREE) |
| **56-61** | Stubs | Leave as procedural |
| **62** | Stub | **Rebuild: Math expression teaching level** (seven times nine, etc.) |
| **63-68** | Stubs | Leave as procedural |
| **69** | Browser info | Wrap Card.Title in HighlightableText |
| **70-71** | Stubs | Leave as procedural |
| **72** | Stub | **Rebuild: Equation-solving hint level** |
| **73-76** | Stubs | Leave as procedural |
| **77** | Dice | **Make results HighlightableText** |
| **78-81** | Stubs | Leave as procedural |
| **82** | VisitedLevelsDisplay | **Add constants teaching text** (pi, e, phi) |
| **83-87** | Stubs | Leave as procedural |
| **88** | Octopus | Add word-number text ("eight arms, sixty-four") |
| **89-98** | Stubs | Leave as procedural |
| **99** | Math puzzle | **Make results HighlightableText** |

### Levels 100+ (Frontiers)

| Level | Current State | Changes |
|-------|--------------|---------|
| **100** | ✅ Good hub | None |
| **150-161** | Sparse chain | Fix 156 dead end (add → 150 button) |
| **162, 165, 168, 171** | Empty files | Remove from levelComponents dictionary |
| **404** | 🔴 Dead end | Add delayed escape button |
| **500** | Content exists | Verify HighlightableText wrapping |
| **999+** | Various | Verify escape paths exist |

### Special Levels

| Level | Current State | Changes |
|-------|--------------|---------|
| **-0** | 🔴 Orphaned (router bug) | Fix router to use '-0' key |
| **-13** | Has custom level | None needed |
| **i** | Gateway to complex plane | None needed |
| **3i** | Typo "trecherous" | Fix spelling |
| **999+999i** | Renders wrong content | Fix to render own content |

### Hints to Rewrite (Top 20 Priority)

| Level Key | Current | Proposed |
|-----------|---------|----------|
| "0+0i" | Already HighlightableText + button | ✅ Keep |
| "3+0i" | Already has button → 4 | ✅ Keep |
| "7+0i" | "Time reveals new paths" | "The coins and scale on this level are secretly buttons. Did you spot the button to Level eight?" |
| "8+0i" | "Check your wallet carefully" | "The shrine here unlocks with five achievements. Inside, you'll learn the most powerful technique in the game." |
| "11+0i" | "The clock shows more than just time" | "Twelve is called a dozen. Twenty is called a score. Now that you can highlight text, words like those become buttons." |
| "12+0i" | "Collect buttons for later use" | "A dozen is twelve. But thirteen, twenty, and one hundred are also hidden in words throughout the game." |
| "13+0i" | "Mathematics can transform your journey" | "The darkness will pass. A way out will appear. Patience." |
| "14+0i" | "Enter the negative space" | "Negative levels are mirror versions of positive ones. Try minus one, minus five, minus fourteen." |
| "19+0i" | "Some solutions require a different perspective" | "This level is intentionally empty. Your only way out is the technique you learned on Level eight." |
| "20+0i" | "The journey continues to evolve" | "Read the text carefully. Ten, twenty, thirty, forty, fifty — all ways out." |
| "42+0i" | "The answer to everything... or is it?" | "Forty-two. The answer to life, the universe, and everything. Pi is another kind of answer." |
| "50+0i" | "Halfway there... or are you?" | "L equals fifty. C equals one hundred. D equals five hundred. M equals one thousand. Roman numerals are buttons." |
| "55+0i" | "Look for connections between levels" | "Words that SOUND like numbers are buttons. Ate is eight. For is four. Won is one." |
| "69+0i" | "Nice... but focus on the puzzle" | "The numbers in your browser info are all navigable. Screen width, height — they're all level numbers." |
| "77+0i" | "Lucky number! Roll for new level!" | "Roll the die, then look at the result. Every number you see — even random ones — is a way forward." |
| "88+0i" | (generic) | "Eight arms, eight brains, eight hearts. Sixty-four is eight times eight. Try highlighting number words." |
| "99+0i" | (generic) | "Pick an operator, compute, and highlight the result. Nine times nine is eighty-one. Nine to the ninth is astronomical." |
| "100+0i" | "Triple digits open new possibilities" | "The card box holds collectible cards. Each card has a value, and values are numbers — which means they're buttons." |
| "404+0i" | "Page not found... or is it?" | "Four hundred and four. Even error codes are level numbers. Wait for the escape button to appear." |
| "500+0i" | "Half a thousand possibilities" | "Five hundred. Also known as D in Roman numerals. One thousand is M." |

---

## 10. What NOT to Change

Some things are working well and should be preserved:

1. **Level 0-6 flow** — The tutorial loop is well-designed. Don't add shortcuts that skip the learning.
2. **Level 13 (horror)** — Perfect pacing, perfect surprise. Don't soften it.
3. **Level 14 (negative gateway)** — Clean introduction to a new dimension. Leave it.
4. **Level 15 (instability)** — Good panic moment. Keep the short timer.
5. **Level 17 (VIP lounge)** — Best-designed hub in the game. Don't touch it.
6. **Level 30 (Outpost)** — Already serves as a post-tutorial hub. Only minor additions.
7. **The "no hub" philosophy** — Don't add a level-select screen. The breadcrumb trail (Bold Move 2) and back button (Bold Move 1) are the concessions.
8. **NotImplementedLevel procedural content** — The auto-generated number theory poems are charming. Don't replace them with hand-crafted content for every stub.
9. **AchievementShrine mechanic** — Gates work well. Just lower the specific ones that are too high.
10. **The HighlightableText parser** — It's incredibly deep (15-stage pipeline). Don't simplify it. Instead, teach players to discover its depth gradually.

---

## Implementation Priority Summary

```
WEEK 1: Phase 1 (Fix the Spine) + Bug Fixes
         → 8 code changes, all in level files + numberText.js
         → After this: a new player can reach Level 8 and learn text highlighting

WEEK 2: Phase 2 (Make Every Surface Alive)  
         → LevelHint.js rewrite (biggest single change)
         → 5-6 level file HighlightableText wrapping fixes
         → After this: hints, dice, math results are all navigable

WEEK 3-4: Phase 3 (Build the Discovery Chain)
         → ~10 level file enhancements in the 11-50 range
         → After this: word-numbers, Roman numerals explicitly taught

WEEK 5-6: Phase 4 (Give the Wasteland a Pulse)
         → ~8 level file enhancements in the 51-99 range
         → After this: sound-alikes, math expressions, equations taught

WEEK 7: Phase 5 (Fix the Frontiers)
         → Router fixes, dead-end fixes, empty file cleanup
         → After this: no more dead ends, all zones connected

WEEK 8+: Phase 6 (Bold Moves)
         → Browser back button, breadcrumbs, adaptive hints
         → Flower system, Jester expansion
         → After this: the game is fully playable end-to-end
```

---

*This plan is a living document. Start with Phase 1 — it's the foundation everything else builds on.*
