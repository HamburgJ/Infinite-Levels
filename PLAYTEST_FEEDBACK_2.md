# Playtest Feedback 2 — Blind Playtest Session

**Date**: February 14, 2026  
**Playtester**: AI Game Designer (Blind playtest — no code review)  
**Game**: Infinite Levels! (Beta Version 0.0.1)  
**Platform**: Web (localhost:3000, Chrome via Playwright)  
**Duration**: Extended session — explored ~30 unique levels  
**Achievements earned**: ~11 during playtest

---

## Executive Summary

**Infinite Levels!** is a genuinely inventive puzzle-exploration game that teaches mathematical concepts (complex numbers, number theory, Roman numerals) through clever game mechanics. The core design — where the level numbering system IS the puzzle — is brilliant. The progressive revelation from simple buttons → hidden buttons → coins-as-buttons → text selection → negative numbers → imaginary numbers → the complex plane is masterfully paced.

**Overall rating: 8/10** — Inventive, deep, and surprising. Needs polish on some mechanics and content gaps in higher levels.

The difficulty curve is thoughtfully designed but uneven. The early tutorial (Levels 0–6) is almost too gentle — a typical player might feel hand-held — but this pays off starting at Level 7 when the game starts layering mechanics. The real genius is how the game trains you to think a certain way, then keeps expanding what "thinking that way" means. There are genuine moments of feeling stuck, genuine "aha!" breakthroughs, and a satisfying loop of "I learned something → I applied it → I was rewarded."

---

## First Impressions

- **Aesthetic**: Dark, minimalist theme. Near-black background with clean typography. Feels mysterious and inviting.
- **Title**: "Infinite Levels!" immediately sets expectations of depth and exploration.
- **Nav bar**: Three unlabeled icons (Achievements, Settings, Hints) — discovery-oriented, which fits the game perfectly.
- **Overall vibe**: "This game wants me to poke at everything." Great first signal for a puzzle game.

---

## Level-by-Level Notes

### Level 0 — Welcome
- Simple intro text, single "Level 1" button
- **Feedback**: Perfect. No friction, gets you playing immediately.

### Level 1 — Accordion Puzzle
- Nested accordion menus hiding "Level 2" and "Level 3" buttons among dead-end branches ("...")
- **Difficulty**: 🟢 Easy. Any player who clicks around will find the buttons within a minute or two. The accordion structure is familiar UI, so there's no learning curve on the *interaction* — just patience to explore each branch.
- **As a player**: This felt like a warm-up. The dead ends ("...") created small moments of "nope, not this one" which made finding the actual buttons feel earned even though the challenge is minimal. A real player would feel smart finding Level 2, then feel *extra* smart realizing there's ALSO a Level 3 hidden in a different branch. That second discovery is where the game plants its first seed: "always look for more."
- **Feedback**: 
  - Clear, intuitive mechanic. Click stuff → find stuff.
  - Having TWO hidden exits creates a sense of branching paths — nice.
  - Dead ends showing "..." could feel tedious for completionists, but it reinforces the "exploration" message.

### Level 2 — Tutorial Checkpoint
- Congratulatory message. Long text explaining the hint system is REQUIRED, not a cheat.
- Directs player to go to Level 3 and check its hint.
- **Difficulty**: 🟢 No puzzle here — just reading.
- **As a player**: This is where a real player might get impatient. You just had the satisfaction of finding a hidden button, and now you're reading a wall of text. The *information* is critical ("hints aren't cheating, they're part of the game") but many players will skim it. That creates a risk: if they miss the directive to "go check Level 3's hint," they'll be stuck at Level 3 with no idea that the hint dialog contains the path forward. The game is essentially front-loading its most important meta-lesson in the least engaging format.
- **Feedback**: 
  - Important information but feels like a text wall. Could be more concise.
  - No interactivity beyond "Back to Level 1" — momentum killer.
  - **Suggestion**: Break the text into shorter, punchier sentences. Add a small interactive element to maintain engagement.

### Level 3 — The Hint IS the Solution
- The hint dialog contains a hidden "Continue to Level 4" button!
- **Difficulty**: 🟡 Medium — BUT heavily dependent on whether you read Level 2 carefully. If you read Level 2's instruction to "check Level 3's hint," this is trivial. If you skimmed it, this could be a genuine wall. A player who didn't absorb Level 2's message would stare at Level 3's sparse content and have NO idea what to do.
- **As a player**: This is the game's first real "revelation moment." 💡 Opening the hint and finding a BUTTON inside it fundamentally changes your mental model. Before this, hints are something you read. After this, hints are something you *interact with*. Every future hint dialog now carries the possibility of hidden content. That reframing is the game's single most important teaching moment, and it's beautiful when it lands — but the setup (Level 2's text wall) risks losing players before they get here.
- **Feedback**: 
  - Brilliant twist. The meta-lesson that hints are part of gameplay, not external help, is what makes this game special.
  - This is a genuine "aha!" moment.

### Level 4 — Achievement Shrine
- Locked shrine requiring 3 achievements → unlocks Level 10 button and a nested shrine (needs 5).
- **Difficulty**: 🟢 Easy to understand, but requires legwork. You see "3 achievements needed" and the game sends you to Levels 5 and 6 which just hand you two. The third (Backtracker) requires bouncing between levels — which the game has been telling you to do.
- **As a player**: This is a clever "progression gate" that feels fair. You're never stuck wondering *what* to do — the shrine tells you exactly what's needed, and the nearby levels provide the resources. The real satisfaction is the *unlock moment* when the shrine opens. It's a small dopamine hit that teaches you the game's core loop: explore → earn achievements → unlock new content → explore more. Getting this loop into the player's muscle memory early is smart design.
- **Feedback**: 
  - Achievement gating is a satisfying progression mechanic.
  - The nested shrine (shrine within a shrine) creates a sense of deepening mystery.

### Levels 5 & 6 — Achievement Unlocks
- Level 5: "Explorer" achievement. Level 6: "Explorer 2" achievement.
- Level 6 acts as a hub back to Levels 2-5.
- **Feedback**: 
  - Quick wins that feel rewarding. The immediate achievement pop is satisfying.
  - Level 6's warning "It won't come so easily next time" is good expectation-setting.

### Level 7 — "Basic Traveling Techniques"
- Teaches: coins are secret buttons (left-click = navigate, right-click = collect). Scale display is also a button.
- **Difficulty**: 🟢 Easy — the level explicitly tells you what to do and gives you the objects to practice on.
- **As a player**: This is where the game shifts gears from "find the hidden button" to "EVERYTHING is a button." That's a huge conceptual leap, but the level eases you into it beautifully. You read "coins are buttons," you click a coin, it works. You read "the scale is a button," you click the scale, it works. The real learning isn't the mechanics — it's the *mindset shift*. After Level 7, a player starts looking at every element on every level and thinking "is THAT a button too?" That paranoia-curiosity is the game's engine, and this level installs it perfectly.
- **Feedback**: 
  - Excellent tutorial design. Each mechanic is introduced with clear text AND immediate practice.
  - The coin mechanics are delightful — "wait, I can click COINS?"
  - The scale as a navigation tool is a nice surprise.

### Level 8 — "Advanced Traveling Techniques"
- Teaches: right-click buttons to hold/carry them, text selection navigation (highlight numbers in text to travel).
- Hint says "Check your wallet carefully" — feels disconnected from the main teaching.
- **Difficulty**: 🟡 Medium. The *concept* of text selection is explained clearly, but actually *executing* it is awkward. How exactly do you "highlight and click" text to navigate? Do you drag-select? Double-click? Click after selecting? The interaction model isn't obvious, and there's no clear feedback when you've done it correctly vs. incorrectly.
- **As a player**: This is where the game introduces its most powerful mechanic — and it's also where a real player is most likely to feel frustrated. The idea ("numbers in any text can be navigation links") is brilliant, but without clear affordance, you're left wondering "am I doing this right?" The "10" in the example text should have SOME visual hint that it's interactive — a faint underline, a subtle color change on hover, anything. Right now, a player could read the instructions, try to interact with the "10," fail, and conclude the feature is broken. That's a huge risk for the game's most important mechanic.
- **Feedback**: 
  - The text selection mechanic is the game's most creative innovation. Using the browser's native selection as a game mechanic is genuinely novel.
  - However, the "hold button" mechanic conflicts with the coin equip system — unclear if they share a slot.
  - **Issue**: The Level 8 hint ("Check your wallet carefully") doesn't clearly relate to what the level is teaching. Players may be confused about what wallet interaction is expected.

### Level 9 — "Secrets"
- Locked shrine requiring 15 achievements. Teases a "secret ability."
- **Feedback**: 
  - Excellent gatekeeper level. Creates a strong pull to go explore and earn more achievements.
  - **Grammar issues**: "there another secret ability" → "there's another secret ability", "The secret lays" → "The secret lies"

### Level 10 — Tutorial Completion / Money Exchange
- Congratulations on completing the tutorial. Achievement shrine (9 achievements) unlocks the Money Exchange — type ANY number to travel there.
- **Difficulty**: 🟢 The Money Exchange itself is easy to use — just type a number. But EARNING the 9 achievements to unlock it requires applying everything you've learned across Levels 0-9. That's the real challenge gate.
- **As a player**: This is the game's biggest "the world just got 100x bigger" moment. 💡💡 Typing "42" and actually GOING there... typing "1000" and it WORKS... it's exhilarating. The game essentially hands you a teleporter and says "the entire number line is your playground." But it's also slightly overwhelming — suddenly you have infinite choices and no guidance. The transition from "carefully guided tutorial" to "go anywhere" could use a softer ramp. Level 11 tries to do this ("the levels become more sparse") but something like a suggested destination list would help orient newly-free players.
- **Feedback**: 
  - The Money Exchange is the game's most powerful tool. The moment you realize you can type ANY number is transformative.
  - This is a perfect reward for earning 9 achievements — it feels genuinely earned.
  - "Digital Explorer" achievement for using it is a nice touch.

### Level 11 — Sparse Transition
- "The levels become more sparse." Jester appears.
- **Feedback**: Good transition piece. Sets expectations for less hand-holding going forward.

### Level 12 — "A Dozen Choices"
- Number-word puzzle: dozen=12, score=20, pair=2, baker's dozen=13, gross=144.
- **Difficulty**: 🟡 Medium. The puzzle requires you to connect two previously-learned skills: (1) recognizing that English words can represent numbers, and (2) using the text selection mechanic to navigate to those numbers. If you know "dozen = 12" and remember the text selection trick from Level 8, this is satisfying. If you've forgotten either piece, you're stuck staring at eggs and donuts.
- **As a player**: This is the first level that genuinely tests whether you *internalized* the earlier tutorials vs. just passed through them. It's the game's first real "knowledge application" puzzle — you're not learning a new mechanic, you're combining two old ones. "Baker's dozen = 13" is a great difficulty spike for players who aren't native English speakers or aren't familiar with these idioms. "Gross = 144" will stump many people and might require external knowledge. This is where the game starts to feel like it rewards curiosity and general knowledge, not just clicking.
- **Feedback**: 
  - Clever and educational. The "codebook" of number-words is satisfying to decode.
  - Links naturally with the text selection mechanic from Level 8.

### Level 13 — "Are You Afraid?"
- Goes dark with 👁️👁️ eyes after opening the hint.
- Hint: "Mathematics can transform your journey"
- **Feedback**: 
  - Atmospheric and surprising! The visual change is memorable.
  - The hint is key foreshadowing for the complex number mechanic.

### Level 14 — "Negative Space"
- Introduces negative levels (-1, -5, -14).
- **Feedback**: 
  - Clean introduction of a major concept. "Enter the negative space" is a perfect hint.
  - However, negative levels currently just mirror their positive counterparts — feels incomplete.
  - **Suggestion**: Give negative levels unique flavor (inverted colors? reversed text? mirror-world theme?)

### Level 15 — "Instability" ⭐ STANDOUT MOMENT
- Real-time stability meter decays. At 0% → COLLAPSE → teleports through imaginary levels (15+i → 14+i → ...) before landing on the real line.
- **Difficulty**: 🔴 Not "hard" in a puzzle sense — there's nothing to solve. But it's the game's most *disorienting* moment. The player has no control over the collapse. You just watch the stability drain and then get flung through levels you've never seen with "i" in their names. If you don't know what imaginary numbers are, this is baffling. If you DO know, it's a jaw-drop.
- **As a player**: This is the game's equivalent of a plot twist in a movie. Everything you thought you knew about the game ("levels are numbers on a line") gets shattered. You're suddenly seeing "Level 15+i" and thinking "wait... the levels aren't just integers? They're on a PLANE?" The foreshadowing from Level 13's hint ("Mathematics can transform your journey") and Level 14's negative numbers suddenly clicks into place. This is a revelation moment that rewards attentive players — if you were paying attention to the hints, you'll feel like a genius. If you weren't, you'll feel lost but intrigued. Either way, the game has fundamentally expanded its possibility space in your mind. **This is the moment the game goes from "cute puzzle game" to "whoa, how deep does this go?"**
- **Feedback**: 
  - **This is the game's best moment.** The real-time decay creates genuine tension. The collapse into imaginary numbers is a jaw-dropping reveal.
  - The sensation of being "flung" through the complex plane is thrilling.
  - **Suggestion**: Add a brief narrative beat during the cascade ("You're being pulled into the imaginary dimension...") to help players understand what just happened.

### Level 16 — Safety Warning
- Warning about nearby instability. Directs to Level 17.
- **Feedback**: Good connective tissue. Typo found: "anomolies" → "anomalies"

### Level 17 — "VIP Lounge" ✨
- Butler James 🤵 offers refreshments. Complimentary 7♦ card. VIP buttons to all levels 0-20.
- **Feedback**: 
  - Charming and unexpected! A palette cleanser after the intensity of Level 15.
  - The card collectible hints at a deeper collection system.

### Level 20 — "Level Wormhole" ⭐ VISUAL HIGHLIGHT
- Stunning wormhole shader. Text contains number-words (ten, twenty, thirty, forty, fifty).
- Hint says every word is a potential exit.
- **Feedback**: 
  - Visually breathtaking. The shader alone makes this level memorable.
  - **🔴 CRITICAL BUG**: The number-words in the text are NOT clickable despite the hint saying they should be exits. The `<span>` elements exist but have no click handlers. This makes the level a dead end for players following the hint.
  - This is the most impactful bug found — it blocks the intended pathway to levels 30-50.

### Level 25 — "Quarter Back! 🏈"
- Football/money theme. Clickable 25¢ coin.
- **Feedback**: Fun, whimsical. The pun-based theme is charming. Coin interaction works and triggers "Loose Change" achievement.

### Level 30 — "The Outpost"
- Hub level with labeled destinations: Tutorial (0-10), Complex Plane (i), Negative Realm (-30).
- **Feedback**: 
  - Excellent wayfinding level. Emoji icons make destinations scannable.
  - The flavor text subtly hints at levels 50 and 100 without giving direct buttons — great design.

### Level 40 — Placeholder ⚠️
- Just "This is level 40." Nothing else.
- **Feedback**: 
  - Jarring after the rich content of surrounding levels. Breaks immersion.
  - **Suggestion**: Add themed content. "Forty" has rich associations: 40 winks (sleep), 40 days (quarantine), Ali Baba's 40 thieves.

### Level 42 — "The Answer"
- Hitchhiker's Guide reference. Pi (3.14159) reference. Camera access request!
- **Feedback**: 
  - Perfect pop culture placement. Every player who reaches 42 will smile.
  - The Pi reference tantalizes — does Level π exist?
  - Camera access is a bold fourth-wall break. Could be amazing or could feel invasive depending on the player.

### Level 50 — "L" (Roman Numerals)
- Teaches Roman numeral navigation: I=1, V=5, X=10, L=50, C=100, D=500, M=1000.
- **Difficulty**: 🟡 Medium to understand, but the IMPLICATIONS are hard to fully grasp. You're told that Roman numeral letters anywhere in game text are navigation links. That means every "I" in every sentence, every "M" in every word... the game has been hiding exits in plain sight THE ENTIRE TIME.
- **As a player**: This is another "recontextualization" moment — like Level 7 ("everything is a button") and Level 15 ("levels are on a plane"), Level 50 tells you that the game was even deeper than you realized. You start mentally replaying every level you've visited: "Wait, did Level 12 have the letter 'C' somewhere? That would have been a link to Level 100!" The retroactive nature of this mechanic is what makes it special — it doesn't just open new doors, it makes you realize old doors existed that you walked right past. For puzzle game players, this is catnip.
- **Feedback**: 
  - Another brilliant meta-mechanic that applies retroactively to ALL previously visited levels.
  - The minimal title "L" is evocative and perfectly themed.

### Level 99 — "Two Nines?" ⭐ BEST PUZZLE
- Interactive calculator: 9 ? 9 with operator selection (+, -, *, /, **).
- Results must be highlighted to navigate. 9⁹ = 387,420,489!
- **Difficulty**: 🟡 Medium. The calculator interface is simple, but understanding what to DO with the results requires remembering the text selection mechanic from Level 8. And realizing that exponentiation (9⁹) can blast you to level 387 million — that requires a leap of mathematical imagination that many players won't make on their own.
- **As a player**: This is the game's best "knowledge application" puzzle. It doesn't teach you anything new. Instead, it asks: "Remember everything you've learned? Now combine it creatively." The operators go from safe (9+9=18, a level you've probably seen) to wild (9⁹ = a number so big it doesn't feel real). The moment you compute 9⁹ and realize that level *actually exists* is the game's biggest "the universe is bigger than I thought" moment since Level 15's collapse. It rewards mathematical curiosity — the player who thinks "I wonder what happens with exponents?" gets an astronomical reward, while the player who sticks to addition gets a modest one. That's *exactly* the right incentive structure for a math-exploration game.
- **Feedback**: 
  - The best interactive puzzle in the game. Simple concept, deep implications.
  - Realizing 9⁹ can reach an absurdly high level number is a "wait, WHAT?" moment.
  - Beautifully ties together the text selection mechanic with mathematical creativity.
  - **Issue**: The highlighting/selection interaction model could use clearer affordance. How exactly to activate it isn't obvious.

### Level 100 — Centurion Milestone
- Achievement shrine (20 achievements needed). Links to Levels 20, 10, 0.
- **Feedback**: Satisfying milestone. The 20-achievement gate creates another long-term goal.

### Level 1000 — "A Picture's Worth a Thousand Words"
- Money Exchange, achievement shrine (30 achievements needed).
- Unlocks "Millennium" achievement.
- **Feedback**: A major milestone that feels appropriately grand. The 30-achievement gate suggests enormous depth remains.

### Level i — Complex Plane Gateway
- Atmospheric text: "Reach into the abyss... and the abyss reaches back."
- Buttons to Level 0 and Level 2i.
- **Feedback**: 
  - Beautiful introduction to the complex plane. The tone is perfect — mysterious, slightly ominous.
  - **Bug**: Hint system generates "NaN+0i" as the lookup key for imaginary levels, so no proper hint displays.

### Level 1+i — Unstable Complex Level
- Real-time stability decay. Jester appears. Collapses back to real line at 0%.
- **Feedback**: 
  - The stability mechanic is genuinely tense on complex levels.
  - The collapse cascade (bouncing through multiple levels) is dramatic but disorienting.

---

## Difficulty Curve & Player Experience Analysis

### Overall Difficulty Arc

```
Difficulty
  ▲
  │                                              ★ Level 99
  │                                        (knowledge synthesis)
  │                                  ★ Level 50
  │                            (retroactive mechanic)
  │                    ★ Level 15          ★ Level 20
  │               (disorienting)      (broken mechanic)
  │          ★ Level 8
  │     (text selection UX)      ★ Level 12
  │  ★ L1   ★ L3              (knowledge application)
  │  (easy) (hint trick)
  │★ L0
  └──────────────────────────────────────────────────► Progression
    Tutorial (0-10)    Middle game (11-20)    Open world (20+)
```

The difficulty curve has three distinct phases:

1. **Tutorial Phase (Levels 0–10)**: Gentle, guided, and occasionally too hand-holdy. A real player would breeze through Levels 0–1, potentially get stuck at Level 3 (if they missed Level 2's instructions), then cruise through 4–7. Level 8 is the first genuine friction point. By Level 10, they've earned the Money Exchange and feel powerful.

2. **Middle Game (Levels 11–20)**: The difficulty ramps in an interesting way — it's not that puzzles get *harder*, it's that the game stops telling you what to do. Level 12 is the first puzzle that requires *applying* prior knowledge without being told to. Level 15 is the first experience that happens *to* you rather than being something you *do*. By Level 20, you're expected to figure things out from hints alone.

3. **Open World (20+)**: Difficulty becomes non-linear, like the game itself. Some levels (30, 42) are easy hub/flavor levels. Others (50, 99) require deep synthesis of everything you've learned. The player chooses their own difficulty by choosing where to go.

### Revelation Moments (The "Aha!" Beats)

These are the moments where the player's mental model of the game fundamentally expands. They're the game's greatest asset:

| Moment | Level | What Changes in the Player's Mind |
|--------|-------|-----------------------------------|
| 💡 "Hints are gameplay" | Level 3 | Hints go from "optional help" to "required interaction" |
| 💡 "Everything is a button" | Level 7 | The entire visual field becomes interactive |
| 💡 "Text IS the game" | Level 8 | Browser text selection becomes a navigation tool |
| 💡 "The game is infinite" | Level 10 | The Money Exchange removes all boundaries |
| 💡 "Numbers go left" | Level 14 | The number line extends to negatives |
| 💡💡 "Numbers go UP" | Level 15 | The number line is actually a PLANE (complex numbers) |
| 💡 "Words ARE numbers" | Level 12/50 | English words and Roman numerals are navigation tools |
| 💡 "Math CREATES destinations" | Level 99 | Mathematical operations generate new level numbers |

The pacing of these revelations is excellent. Each one builds on the last, and they're spaced far enough apart that the player has time to absorb and practice each new concept before the next one hits. Level 15's complex plane reveal is the game's emotional peak — it recontextualizes everything and makes the player realize the game's title ("Infinite Levels") is more literal than they thought.

### Where Players Are Most Likely to Get Stuck

1. **Level 3** (if they skimmed Level 2): The hint-as-solution trick requires reading Level 2's instructions carefully. Many players won't. This is the game's biggest early-game churn risk. **Mitigation idea**: Have Level 3 itself contain a more prominent nudge toward opening the hint, rather than relying on Level 2's text wall.

2. **Level 8** (text selection UX): Understanding the *concept* is easy; executing the *interaction* is not. Players will try clicking numbers, try selecting them, try various gestures, and may conclude it's broken. **Mitigation idea**: Add a clear "try it now" exercise with visual feedback — highlight the "10", show a glowing effect, make it obvious when you've done it right.

3. **Level 4 → 5/6 → back to 4** (achievement grinding): Getting the Backtracker achievement requires visiting a level 5+ times. This is the game's first "grind" moment. It's short, but it feels mechanical — you're bouncing between levels not because it's fun, but because the game told you to. **Mitigation idea**: Make the backtracking feel more purposeful — have something change or be revealed on repeated visits.

4. **Post-Level 10 choice paralysis**: The Money Exchange gives you infinite options. Some players will love the freedom. Others will feel lost: "Where should I go? What's worth visiting?" Level 11 tries to address this but is sparse. **Mitigation idea**: Level 10 could suggest 2-3 "interesting" destinations to seed exploration.

5. **Level 20's broken mechanic**: If the number-word clicking worked, Level 20 would be a satisfying hub. Instead, players who reach it through the hint system will get stuck and lose trust in the game. This is the #1 priority bug.

### Knowledge Application & Learning Design

The game has an unusually thoughtful learning design. Here's how it teaches and tests:

| What's Taught | Where It's Taught | Where It's First Tested | Where It's Mastered |
|---|---|---|---|
| Exploration/clicking | Level 1 | Level 1 (accordion) | Level 7 (coins) |
| Hints as gameplay | Level 2-3 | Level 3 (hint button) | Every level after |
| Achievement → unlock loop | Level 4 | Level 4 (shrine) | Level 9, 100, 1000 |
| Items as navigation | Level 7 | Level 7 (coins, scale) | Level 25 (quarter) |
| Text selection | Level 8 | Level 12 (number words) | Level 99 (calculator results) |
| Non-linear thinking | Level 2 | Level 14 (negatives) | Level 15 (complex plane) |
| Number-word vocabulary | Level 12 | Level 20 (wormhole) | Level 50 (Roman numerals) |
| Mathematical creativity | Level 99 | Level 99 (operators) | Open-ended |

The pattern is: **Teach → Practice → Test in a new context → Combine with other skills.** This is good pedagogical design. The game never asks you to do something you haven't been prepared for — but it does ask you to make connections the game didn't explicitly spell out. That's the sweet spot for puzzle game difficulty.

### What's Too Easy

- **Levels 4–6**: The achievement-earning loop is almost trivial. Visit Level 5 → achievement. Visit Level 6 → achievement. Bounce a few times → Backtracker. This takes about 60 seconds and requires zero puzzle-solving. Consider adding a small challenge to at least one of these achievements.
- **Level 30 (The Outpost)**: It's a hub with clearly-labeled buttons. No puzzle, no discovery. Fine as a breather, but it could have one small hidden element to reward thorough explorers.

### What's Too Hard / Unclear

- **Text selection everywhere**: The core interaction model for the game's most important mechanic (highlighting text to navigate) is never clearly demonstrated with feedback. Players can't tell the difference between "I'm doing this wrong" and "this level doesn't support it." This is the game's biggest UX gap.
- **Level 8's hint ("Check your wallet carefully")**: Completely opaque. What does this mean? What am I looking for in the wallet? This hint fails to guide the player toward anything actionable.
- **Reaching Level 9 without Money Exchange**: There's no obvious "Level 9" button on Level 8. The intended path seems to be text selection of the number 9 somewhere, but that requires mastery of the exact mechanic being taught. Catch-22.
- **15-achievement gate on Level 9**: After the tutorial, earning 15 achievements requires significant exploration. The gap between "just finished tutorial" (maybe 8-10 achievements) and "need 15" feels like a sudden wall. The game could benefit from a few more easily-discoverable achievements in the 10-15 range.

### What's Just Right ✅

- **Level 1's accordion**: Low-stakes exploration that trains the right instincts.
- **Level 3's hint trick**: Requires one specific insight, delivered with a satisfying payoff.
- **Level 7's coin tutorial**: Hands-on, immediate, and fun. The "aha" of clicking a coin is earned.
- **Level 12's number words**: Requires combining two skills (vocabulary + text selection) without being told to. This is where the game starts trusting the player.
- **Level 15's collapse**: Not a puzzle, but the emotional and intellectual impact is perfectly calibrated. You feel *something happened* even if you don't fully understand it yet.
- **Level 99's calculator**: Open-ended, creative, and rewards mathematical curiosity. The difficulty scales with the player's ambition — safe operators give small numbers, bold operators give astronomical ones.

---

## Bugs Found

| # | Bug | Severity | Location |
|---|-----|----------|----------|
| 1 | **Number-words not clickable on Level 20** | 🔴 Critical | Level 20's hint says words are exits but they have no click handlers |
| 2 | **Hint system NaN key for imaginary levels** | 🟡 Medium | Level i and other imaginary levels generate "NaN+0i" hint keys |
| 3 | **Collapse cascade visits unintended levels** | 🟡 Medium | Collapsing from -1+i bounces through intermediate levels before settling |
| 4 | **Typo: "anomolies"** | 🟢 Low | Level 16 — should be "anomalies" |
| 5 | **Grammar: "there another" / "lays"** | 🟢 Low | Level 9 — "there's another" / "lies" |
| 6 | **Fake timer on Level 20** | 🟢 Low | "Choose quickly before the wormhole collapses" but no time pressure exists |
| 7 | **React DOM nesting warnings** | 🟢 Low | `<div>` inside `<p>` across multiple levels |
| 8 | **styled-components prop warnings** | 🟢 Low | Unknown props passed to DOM elements throughout |

---

## Design Strengths

### 1. Progressive Revelation is Masterful
The game unfolds its mathematical depth layer by layer:
- Levels 0-3: Simple buttons and exploration
- Levels 4-6: Achievement-gated progression
- Level 7: "Anything with a number is a button"
- Level 8: Text selection — the browser IS the game
- Level 10: Type any number — the game IS infinite
- Level 14: Negative numbers exist
- Level 15: COLLAPSE into imaginary numbers — the game is on the COMPLEX PLANE
- Level 50: Roman numerals work retroactively everywhere
- Level 99: Mathematical operations CREATE level numbers

Each layer recontextualizes everything before it. This is rare and excellent design.

### 2. The Hint System as Core Mechanic
Making hints a required game mechanic (not a crutch) is a bold and successful design choice. Level 3's "the hint IS the solution" moment reframes the player's relationship with the hint system for the entire game.

### 3. Achievements Drive Exploration
The shrine system creates natural goal-setting: "I need 3 more achievements to unlock this." Players organically revisit and explore old levels, which is exactly the behavior the game wants.

### 4. Mathematical Education Disguised as Fun
The game teaches complex numbers, Roman numerals, number words, and mathematical operations without ever feeling like a lesson. Players WANT to understand these concepts because they're keys to new levels.

### 5. Memorable Moments
- Level 15's collapse into the imaginary plane (jaw-drop)
- Level 20's wormhole shader (visual stunner)
- Level 17's VIP Lounge (charming breather)
- Level 99's 9⁹ = 387 million realization (mind-expanding)
- Level 42's Hitchhiker's Guide reference (delightful)

---

## Design Weaknesses / Suggestions

### 1. Text Selection Mechanic Needs Better Affordance
The text selection → navigation is the game's most creative mechanic but also the least discoverable. There's no visual feedback that text IS selectable as a navigation tool. **Suggestion**: Add a subtle glow, underline, or cursor change on hoverable number-words.

### 2. Level 2 is a Text Wall
Level 2 has important information but zero interactivity. It kills momentum after the satisfying Level 1 discovery. **Suggestion**: Break into shorter sentences. Add a small interactive element (coin, highlighting exercise).

### 3. Negative Levels Feel Incomplete
Negative levels currently mirror positive counterparts with no unique content. **Suggestion**: Add mirror-world theming — inverted colors, reversed text, shadow versions of puzzles.

### 4. Content Gaps in Higher Levels
Level 40 is an empty placeholder. Other levels may have similar gaps. **Suggestion**: Prioritize adding content to milestone levels (multiples of 10, mathematically interesting numbers like 37, 73, 101).

### 5. Collapse Cascade is Disorienting
When a complex level collapses, players bounce through multiple intermediate levels. **Suggestion**: Add a brief narrative beat or "dimensional shift" animation.

### 6. The Wormhole (Level 20) is Broken
The most visually stunning level has a non-functional core mechanic. Number-words should be clickable exits but aren't. **This is the highest-priority fix.**

### 7. Wallet/Inventory System is Opaque
The wallet, coin equipping, and button-holding mechanics are introduced but never clearly unified. It's unclear how items interact or what "checking your wallet" achieves.

---

## Player Journey Map

```
Level 0 (Welcome)
  → Level 1 (Accordion — find hidden buttons)
    → Level 2 (Hints are required, game is non-linear)
    → Level 3 (Hint IS the solution → Level 4)
      → Level 4 (Achievement shrine → earn 3 achievements)
        → Level 5 (Achievement: Explorer)
        → Level 6 (Achievement: Explorer 2, hub)
        ← Backtrack for "Backtracker" achievement
      → Level 4 shrine UNLOCKS → Level 10
        → Level 7 (Coins as buttons, scale)
        → Level 8 (Text selection, button holding)
        → Level 9 (Locked — need 15 achievements)
        → Level 10 (Money Exchange → type ANY number)
          → Level 11-12 (Number words)
          → Level 13-14 (Negative numbers)
          → Level 15 (COLLAPSE → imaginary plane!)
          → Level 17 (VIP Lounge)
          → Level 20 (Wormhole → 30, 40, 50)
          → Level 25, 42, 50 (Special themed)
          → Level 99 (Math calculator puzzle)
          → Level 100, 1000 (Milestones)
          → Level i, 1+i (Complex plane)
```

---

## Achievements Earned This Session

| Achievement | Trigger |
|---|---|
| Explorer | Reached Level 5 |
| Explorer 2 | Reached Level 6 |
| Backtracker | Visited a level 5+ times |
| Tutorial Master | Completed tutorial levels 0-10 |
| Weight Watcher | Clicked the scale display |
| Loose Change | Clicked a coin to navigate |
| Making My Own Path | Used text number to navigate |
| Hint Master | Opened hints in 10+ levels |
| Jester Friend | Found the Jester 5 times |
| Centurion | Reached Level 100+ |
| Millennium | Reached Level 1000+ |

---

## Final Thoughts

**Infinite Levels!** is a game with a genuinely original core idea: the level numbering system IS the game. Every mechanic ties back to numbers — clicking them, selecting them, calculating them, discovering them in Roman numerals and English words. The progressive revelation from "click a button" to "you're exploring the complex number plane" is one of the most satisfying arcs I've seen in a puzzle game.

### On Difficulty & Player Experience

The game gets something fundamentally right that many puzzle games miss: **it respects the player's intelligence while still guiding them.** The tutorial never feels condescending (except possibly the Level 2 text wall), and the post-tutorial game never feels unfairly opaque (except the text selection UX). The difficulty curve follows the ideal pattern: learn → practice → apply → combine → be surprised → repeat at a higher level.

The revelation moments are the game's crown jewels. Level 3 (hints are gameplay), Level 7 (everything is a button), Level 15 (the complex plane exists), and Level 99 (math creates destinations) are each moments where the player's understanding of the game *permanently expands*. These are the moments players will tell their friends about. They're also paced well — you never get two major revelations in a row, and there's always time to absorb and apply before the next one hits.

The biggest risk to player retention is the gap between "I understand the mechanic" and "I can execute the mechanic" — specifically for text selection. The game introduces a genuinely novel interaction (browser text selection as gameplay), but doesn't provide enough feedback for players to know they're doing it right. One player might figure it out immediately; another might try for five minutes, fail, and quit. Closing that gap with visual affordance (glow, underline, cursor change) would dramatically improve retention without reducing the cleverness of the mechanic.

The second risk is the post-tutorial open world. The Money Exchange is exhilarating but also slightly terrifying. "I can go anywhere" quickly becomes "but where SHOULD I go?" A gentle nudge system (suggested destinations, breadcrumbs, or a "places of interest" list) would help players who thrive on structure without constraining players who love pure exploration.

### Top Priority Fixes
1. **Level 20 number-word click handlers** — blocks intended progression, highest-impact bug
2. **Text selection visual affordance** — the game's most important mechanic is also its hardest to discover
3. **Hint system NaN key for imaginary levels** — complex plane exploration is hobbled without proper hints  
4. **Post-tutorial wayfinding** — help players transition from guided tutorial to open exploration
5. **Level 40 and other placeholder content** — content gaps break immersion in an otherwise rich game

This game has the bones of something truly special. The difficulty is mostly well-calibrated, the revelation moments are genuinely thrilling, and the way it teaches mathematical thinking through gameplay (rather than lectures) is rare and valuable. With polish on the interaction feedback and some content gaps, this could be a standout indie puzzle experience that players genuinely learn from while having fun.

