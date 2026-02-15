# Infinite Levels! — Playtest Feedback Report

**Date:** February 14, 2026  
**Build:** Beta Version 0.0.1  
**Tester:** AI Agent (Playwright automation, no code inspection)  
**Session Length:** ~2 hours of continuous play  
**Progress:** 9/50+ achievements, Levels 0–11 + 150, 153, 155 visited

---

## Executive Summary

Infinite Levels! is a clever, layered puzzle game with a strong "discovery" loop. The core mechanic — finding hidden buttons in plain text, coins, scale readouts, and wallet contents — is genuinely inventive. The game rewards curiosity and experimentation in a way that feels fresh.

However, **the game has a significant difficulty cliff between Levels 7 and 8** that is likely to lose most players. Even as an AI with perfect memory, tireless patience, and the ability to systematically try every interactive element on screen, I was unable to reach Level 8 ("Advanced Traveling Techniques") after extensive exploration. A real human player would almost certainly get stuck here and quit.

Below is a detailed breakdown of the experience.

---

## 1. Onboarding & Early Game (Levels 0–6) ✅ Excellent

### What Works Well
- **Level 0** is a clean, friendly intro. The core mechanic ("press the button that displays the level number") is stated clearly.
- **Level 1's nested accordion** is a great "aha!" moment. The player has to dig through collapsible sections to find hidden Level 2 and Level 3 buttons — this teaches the core skill of the game (exploration) through doing.
- **The hint system** is well-implemented. The lightbulb icon is intuitive. Hints are helpful without being spoilers.
- **Achievement unlocks** feel rewarding and are well-paced in the early game. Getting "Explorer" on Level 5 and "Explorer 2" on Level 6 gives a nice dopamine hit.
- **The shrine mechanic on Level 4** is an elegant gate. Requiring 3 achievements to unlock the first shrine, and 5 for the second, gives the player clear goals.
- **Item discovery** (finding the wallet on Level 4) is satisfying. The "Money Manager" achievement reinforces that you did something right.

### Minor Issues
- **Level 2** has a typo: "neccisary" should be "necessary."
- **Level 2** says "the path forward in not linear" — should be "is not linear."
- **Level 3** says "barren then others" — should be "barren than others."
- The accordion on Level 1 requires a very specific exploration path. A player who clicks the wrong branch first might not realize there are other branches to explore. Consider a subtle visual hint that there are multiple branches (e.g., a slight animation or color difference).

---

## 2. Core Mechanics Introduction (Level 7) ✅ Good, With Issues

### What Works Well
- Level 7 ("Basic Traveling Techniques") is where the game really opens up. The idea that **any number on screen can be a button** is a brilliant core mechanic.
- The coins (5¢, 1¢, 1¢) are a great teaching tool — they look like decorations but are actually buttons.
- The scale mechanic is inventive. Placing your wallet on the scale to see its weight, and then clicking the weight readout to travel to that level number, is a genuinely creative puzzle.

### Issues
- **Typo:** "is could be a button" should be "could be a button."
- **Typo:** "Take look at these coins" should be "Take a look at these coins."
- **Left-click vs. right-click on coins is confusing.** Left-clicking a coin navigates to its denomination level (5¢ → Level 5). Right-clicking a coin *collects* it into your wallet. This distinction is never explained to the player. I accidentally navigated away from Level 7 multiple times before figuring out that right-click is the collection action. A real player would be even more confused.
  - **Suggestion:** Add a tooltip or instruction like "Right-click coins to collect them. Left-click to travel to their denomination level."
- **The wallet equip/use interaction is ambiguous.** There's a wallet button and a wallet image next to it. Clicking the button opens a "Drop Wallet" confirmation dialog. Clicking the image opens the wallet contents. These two click targets are very close together, and the difference is not communicated. I frequently opened the wrong one.
  - **Suggestion:** Make the wallet contents accessible from a clearly labeled button, not a mysterious secondary image.

---

## 3. The Level 8 Wall 🚫 Critical Blocker

### The Problem
Level 8 is described on Level 10 as "Advanced Traveling Techniques." After 45+ minutes of focused exploration, **I could not find any path to Level 8.** This is the single biggest issue with the game.

### What I Tried
1. **Coin collection → stack counter:** The wallet shows a "stack counter" (the count of coins of the same denomination). With 6 pennies, the counter shows "6" — clicking it navigates to Level 6. I need 8 pennies to get a counter of "8" and reach Level 8. But I can only find coins on Level 7, and they don't re-collect on repeat visits. I'm stuck at 6 pennies.
2. **Money Exchange:** The Change Machine on Level 10 (unlocked at 9 achievements) lets you exchange larger denominations into smaller ones. I exchanged my 5¢ for 5×1¢, which should give 7 pennies. But the wallet inconsistently showed 6 pennies afterward. Even if it worked correctly, 7 pennies gets me to Level 7 (which I can already reach), not Level 8.
3. **Scale weight:** With 6 pennies, the wallet weighs 168g. I can't get it to weigh exactly 8g since the base wallet alone is ~150g.
4. **Clicking "Level 8:" text on Level 10:** The recap page lists "Level 8: Advanced Traveling Techniques" but this text is not a button. (Though the game's own rule is "anything with a number could be a button" — this feels like a violation of the game's own teaching.)
5. **Time/clock mechanic:** Level 7's hint says "Time reveals new paths" and Level 11's hint says "The clock shows more than just time." I searched extensively for a clock element on both levels and found nothing. I waited on levels. Nothing changed.
6. **Exploring high-numbered levels:** Via the scale (wallet weight), I reached Levels 155, 153, and 150. These were interesting but didn't help with Level 8.

### Why This Is Critical
- The game explicitly lists Levels 0–10 as the "tutorial" on the Level 10 recap screen. But Levels 8 and 9 are effectively inaccessible during what should be the tutorial phase. This makes the recap feel taunting rather than celebratory.
- The hint for Level 7 ("Time reveals new paths") is too cryptic. If this refers to a specific mechanic (a clock, a timer, waiting), the player needs at least a nudge toward *what to interact with.* Currently it's a dead end.
- A real human player, lacking my tireless patience, would likely quit at this point. The game goes from "cleverly challenging" to "where do I even start?" with no intermediate steps.

### Suggestions
- **Add coins on other levels** so players can organically collect enough pennies to reach Level 8 via the stack counter. Finding 2 more pennies on Levels 5 or 6 would solve this naturally.
- **Make the "Level 8:" text on the Level 10 recap clickable.** The game's own rule says any number can be a button — honor that rule here.
- **Make the time/clock hint more concrete.** Instead of "Time reveals new paths," try "Have you noticed the clock? Try clicking on it" or "Some things change with time — try revisiting levels you've already seen."
- **Add a "breadcrumb" hint system** for players stuck for more than X minutes. The current hints are static — they don't adapt to the player's progress or struggles.

---

## 4. UI/UX Issues

### Icon Confusion (Settings vs. Achievements)
There are three icons in the top-right: what appears to be a gear/settings icon, a trophy icon, and a lightbulb (hints). During my playtest:
- The **gear icon sometimes opened Achievements** (not Settings).
- The **trophy icon sometimes opened Settings** (not Achievements).
- This mapping was inconsistent across sessions/levels.

**This is very confusing.** Players expect gear = settings and trophy = achievements. If the mapping is intentional (some kind of puzzle), it needs to be signposted. If it's a bug, it should be fixed.

### Wallet Interaction Model
The wallet has three interactions, all triggered by clicking different spots on what looks like a single UI element:
1. **Click the wallet button** → "Drop Wallet" confirmation dialog
2. **Click the wallet image** (slightly to the side) → Wallet Contents dialog
3. **Right-click while wallet is equipped** → Collect nearby coins

None of these interactions are explained. The difference between the button and the image is nearly invisible. A real player would:
- Accidentally drop their wallet when trying to view contents
- Not know right-click is meaningful
- Not discover the wallet contents dialog at all

**Suggestion:** Consolidate wallet interactions. One click to open wallet contents, with "Drop Wallet" as a button inside that dialog.

### Scale Interaction
The scale's clickable area is the "Empty" text label when nothing is on it. This is non-obvious. The word "Empty" doesn't suggest "click me to place your item here."

**Suggestion:** Use "Place Item" or show a visual drop zone indicator when the player has an equippable item.

### Achievement Names as Spoilers
Opening the Achievements panel reveals the names and descriptions of ALL achievements, including unearned ones (e.g., "Precious Stone: Found and collected the diamond," "Card Collector: Found and collected the card box"). This spoils the discovery of items the player hasn't found yet.

**Suggestion:** Keep unearned achievement names hidden (show "???") until the player has at least encountered the relevant mechanic. Currently, ~30+ achievements show as "???" which is good, but named-but-unearned ones like "Precious Stone" give away that a diamond exists and can be collected.

---

## 5. Positive Highlights

### Things That Really Work
1. **The "anything can be a button" philosophy** is the game's strongest feature. It trains players to look at every number on screen as a potential interaction point. This is genuinely fun.
2. **The scale mechanic** is brilliantly creative. Placing your wallet on a scale, reading the weight, and clicking the weight to travel to Level 155 — that's a memorable puzzle moment.
3. **The Money Exchange / Change Machine** is a cool meta-puzzle. Converting denominations to change your stack counter or wallet weight adds a strategic layer.
4. **Context-aware messages** (e.g., Level 150 saying "Lost your wallet?" when you left it on the scale) make the game feel alive and responsive.
5. **The narcissistic number puzzle** (Level 153: 1³+5³+3³ = 153, hint: "Some numbers have special properties") is a lovely math easter egg.
6. **The achievement system** provides good intermediate goals and the shrine unlocking mechanic gives achievements tangible value.
7. **The Jester character** appearing on Level 11 is a nice surprise. Having an NPC that moves around adds personality.

### Emotional Arc
- **Levels 0–3:** Curious, engaged. "Oh, I need to explore these accordions!"
- **Levels 4–6:** Rewarded, progressing. "Shrines! Items! Achievements!"
- **Level 7:** Excited. "Whoa, the coins are buttons! The scale weight is a button! This game is so clever."
- **Levels 8–9:** Frustrated, stuck. "I've tried everything. Where are these levels?"
- **Level 10:** Bittersweet. "Nice recap, but I literally can't complete the tutorial because I can't find Levels 8 and 9."
- **Level 11+:** Deflated. "The game says levels are more sparse from here, but I haven't even finished the basics."

---

## 6. Bugs & Technical Issues

| Issue | Severity | Details |
|-------|----------|---------|
| Coin count inconsistency after Money Exchange | Medium | Exchanged 5¢ for 5×1¢ (expected 7 total pennies), but wallet showed only 6 pennies afterward. |
| Icon-to-function mapping inconsistent | Medium | Gear icon sometimes opens Achievements; Trophy sometimes opens Settings. |
| Coins don't re-collect on revisit | Low/Design? | Revisiting Level 7 and right-clicking coins again doesn't increase count. If intentional, this isn't communicated. If a bug, it blocks progression to Level 8. |
| No visual feedback for right-click collection | Low | Right-clicking a coin to collect it gives no visual/audio feedback — the coin just stays in place. Player has no idea if it worked. |

---

## 7. Accessibility & Polish

- **No keyboard navigation support** observed. All interactions require mouse clicks (including right-clicks). This is an accessibility concern.
- **No audio/sound effects.** The game is completely silent. Even simple click sounds or achievement jingles would significantly improve the experience.
- **The 3D background cube** is a nice visual touch but may cause performance issues on low-end devices.
- **Text contrast** is generally good against the dark background.
- **Mobile compatibility** is unclear — right-click mechanics would be problematic on touch devices. How would a mobile player collect coins?

---

## 8. Recommendations Summary

### Priority 1 (Blockers)
1. **Fix the Level 8 accessibility gap.** Either add more coin sources, make the Level 10 recap entries clickable, or provide a clearer path.
2. **Explain the right-click mechanic** somewhere before Level 7. Players who don't discover right-click are permanently stuck.
3. **Fix the icon mapping** (gear → settings, trophy → achievements, consistently).

### Priority 2 (Important)
4. **Fix the coin count inconsistency** after using the Money Exchange.
5. **Consolidate wallet interactions** into a single, clear UI.
6. **Add visual feedback** for coin collection (animation, counter popup, sound).
7. **Make the time/clock hints actionable.** If there's a clock mechanic, make it discoverable.

### Priority 3 (Polish)
8. Fix the three typos on Levels 2 and 7.
9. Add sound effects for key moments (achievement unlock, item collection, level transition).
10. Consider a "breadcrumb" adaptive hint system for stuck players.
11. Hide spoilery achievement names until the mechanic is discovered.
12. Consider mobile/touch compatibility for right-click actions.

---

## 9. Final Thoughts

Infinite Levels! has a genuinely great core concept. The "everything is a button" philosophy, combined with the wallet/scale/exchange economy, creates a unique puzzle experience I haven't seen before. The first 7 levels are well-paced and satisfying.

But the game currently suffers from a classic puzzle-game pitfall: **the designer knows the solution, so they underestimate how obscure it feels to a fresh player.** The jump from Level 7's clear mechanics to Level 8's hidden solution is too large. The hints are too cryptic. And the lack of visual feedback for key actions (right-click collecting, wallet interactions) means players can't even tell when they're making progress.

With better signposting, feedback, and a smoother difficulty curve from Level 7 to Level 8, this could be a really compelling puzzle game. The foundation is excellent — it just needs guardrails.

---

*End of playtest report.*
