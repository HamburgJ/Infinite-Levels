# The level game - an in-browser puzzle game which has the user discovering about the interesting mechanics of the world
to traverse an infinite set of levels. Levels are 'pages' (not specifically routed to... just a seperate page), all pages have a common, cool vector graphic style

- first set of levels as tutorial for getitng into it
- levels 1-9 are the tutorial. Level 5 has a number entry device, which initially is used to solve a puzzle which answer just so happens to be 6, but then when they go back they realize they can use it to get to any level 1-9
-levels 1-12 gotton to from a digital clock with button
- levels 1,5,10,25,20,100, found from finding money in a wallet
- levels 1-59 unlocked when button put in digital clock
- introduce inventory system, taking level buttons into inventory
- introduce 'hidden' buttons, whichas actually any number in the menus can be used to travel levels. there are some levels hidden in previous texts, in menus, and other strange places
- level which only exists for certain amount of time for some reason (perhaps there is a clock, perhaps the current level only exists within the menu then hide it. when no button leading to a level exists, the level ceases to exist and the player is taken to the closest integer level.
- introduce weird level transport mechanics. For example, you can hold numbers in your inventory, then input into a level's texct which says 2x that, to go to double that level. 
- introduce complex number and imaginary number levels. the colour scheme reflects the angle of the number when represented as e^i*theta
- negative number levels, where the colour layout is flipped

# The Level Game

A minimalist puzzle game that challenges players to discover the hidden mechanics governing an infinite set of interconnected levels. Each level is presented as a distinct page with a clean, vector-graphic style that evolves as players progress deeper into the game's mathematical mysteries.

## Core Game Design

### Level Structure
- Each level exists as a distinct "page" with its own puzzle elements
- Levels are connected through discoverable numerical relationships
- Visual style evolves based on level properties (discovered later in the game)

### Progressive Discovery System

#### Tutorial Phase (Levels 0-9)
- Level 0: Introduction to basic navigation
- Level 1: First cube interaction
- Level 5: Number entry device introduction
  - Initially appears as a simple puzzle solution
  - Later becomes a universal navigation tool

#### Early Game Mechanics
- Digital Clock Interface
  - Initially provides access to levels 1-12
  - Numbers change every minute, affecting level accessibility
  - Hidden mechanic: Clock face becomes permanent navigation tool
- Wallet Discovery System
  - Special levels (1,5,10,20,25,100) accessed through found "money", money can be exchanged in a change machine to delete and create levels

#### Mid-Game Systems
- Inventory System
  - Collect and store level buttons
  - Buttons can be:
    - Used for navigation
    - Combined with level modifiers
    - Destroyed (affecting level stability), when you are in a level that doesn't have a button going to it, it is destroyed and you get teleported to nearest integer level
- Hidden Number Navigation
  - Numbers found in level text become navigation points
  - Menu elements contain hidden level references
  - Certain UI elements double as navigation tools

#### Late Game Mechanics
- Level Instability
  - Levels can become unstable when:
    - Their access button is destroyed
    - Required conditions are no longer met
    - Time-based conditions expire
  - Unstable levels collapse to the nearest stable point
- Mathematical Transformations
  - Level modifiers (e.g., 2x multiplier)
  - Button combinations
  - Advanced numerical relationships

### Hidden Mechanics
(Not explicitly revealed to players)
- Complex number plane navigation
- Imaginary level access through instability
- Level color schemes reflecting mathematical properties
- Negative number space with inverted mechanics

## Design Philosophy
- Every discovered mechanic becomes a tool for further exploration
- Solutions create new possibilities rather than just obstacles
- Multiple solution paths encourage experimentation
- Progressive complexity through mathematical discovery

next mechanics to implement:
- button storing in inventory
- 2x level tp
- 1/2 level tp
- multiplier level
- adder level
- 2 digit concat = 10a+b 
- easter egg levels in menus
- change exchange
- items in wallet is a level

# Level planning
# Level accessability chart
# 1 - Initial clock access, also via 1¢ coin
# 2 - Initial clock access
# 3 - Initial clock access
# 4 - Initial clock access
# 5 - Initial clock access, also via 5¢ coin
# 6 - Initial clock access
# 7 - Initial clock access
# 8 - Initial clock access, wallet introduction level
# 9 - Initial clock access
# 10 - Initial clock access, also via 10¢ coin
# 11 - Initial clock access
# 12 - Initial clock access
# 13 - Appears when clock shows 13:00 (1:00 PM)
# 14 - Appears when clock shows 14:00 (2:00 PM)
# 15 - Appears when clock shows 15:00 (3:00 PM)
# 16 - Appears when clock shows 16:00 (4:00 PM)
# 17 - Appears when clock shows 17:00 (5:00 PM)
# 18 - Appears when clock shows 18:00 (6:00 PM)
# 19 - Appears when clock shows 19:00 (7:00 PM)
# 20 - Access via 20$ bill
# 21 - Appears when clock shows 21:00 (9:00 PM)
# 22 - Appears when clock shows 22:00 (10:00 PM)
# 23 - Appears when clock shows 23:00 (11:00 PM)
# 24 - Appears when clock shows 24:00 (12:00 AM)
# 25 - Access via 25¢ coin
# 26-99 - Each accessible by combining appropriate coins/bills to match number
# 100 - Access via 100$ bill

# Special levels:
# -1 - destroying level 1 button while in it
# i - destroying an unstable level
# 1+i - destroying level 1 button while in level i
# 2i - destroying level 2i-1 button while in level i
# 3i - destroying level 3i-2 button while in level 2i
# Complex plane can be navigated by destroying appropriate buttons while in imaginary levels

# Negative levels:
# Can be accessed by destroying positive level buttons while in negative space
# Have inverted mechanics (buttons float up instead of down, text reads backwards, etc)
# -2 through -100 accessible this way

# todo:



Easy
- collecables hidden more around
- buy a hint
- black hole item - 
- level negative 0
-achievement for visinting a conjugate pair
- hint buying 
- grow flower by waiting, it grows once per level change
- search boxes
- item which you can put the other items in (scale)
- tutorials which explains navigation
- to teach parsing, put the strings on buttons
- max to coins and bills
- diamond item
- deck of cards
- collect planets
- black hole
Hard
- negative levels
- time based level
- grow
- ways to get to conjugate levels
-


# hint system
# late game, allow arbirtary string level entry
share achievements
# fix parsing