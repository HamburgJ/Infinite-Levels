import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CenteredContainer } from '../Levels/styles/CommonLevelStyles';
import LevelButton from './LevelButton';
import { useDispatch } from 'react-redux';
import { markHintOpened } from '../../store/slices/gameSlice';
import HighlightableText from './HighlightableText';
import achievements from '../../data/achievements';
import { levelToString, parseStoredLevel } from '../../utils/complex';

const levelHints = {
  "0+0i": <>
    <HighlightableText text="A sense of exploration is key!" achievement={achievements.HINT_TEXT} />
    <CenteredContainer>
      <LevelButton targetLevel={7}>
        Continue to Level 7
      </LevelButton>
    </CenteredContainer>
  </>,
  "1+0i": <HighlightableText text="Find the hidden button in the accordion menu" />,
  "2+0i": <HighlightableText text="Might need to backtrack..." />,
  "3+0i": (
    <>
      <HighlightableText text="Some secrets require persistence... Good work!" />
      <CenteredContainer>
        <LevelButton targetLevel={4}>
          Continue to Level 4
        </LevelButton>
      </CenteredContainer>
    </>
  ),
  "4+0i": <HighlightableText text="Two shrines here. One needs three achievements, one needs five. The five-achievement shrine holds your wallet — and a path to level seven." />,
  "5+0i": <HighlightableText text="Just visiting here earns an achievement. Head back to level four — you might be able to open a shrine now." />,
  "6+0i": <HighlightableText text="A hub! Four buttons, four paths. Level seven has a Scale. Level ten has graduation. Explore them all." />,
  "7+0i": <HighlightableText text="The coins here are secretly buttons. Click one without holding the wallet and it'll transport you. Also — the Scale can weigh anything. Try it." />,
  "8+0i": <HighlightableText text="Advanced traveling! Have you tried selecting text on the page? Right-clicking buttons? The word 'nine' in any sentence is a door to level nine." />,
  "9+0i": <HighlightableText text="Secrets lurk here. Fifteen achievements opens a hint about negative zero. Thirty achievements reveals a locked box — but where's the key? Try exploring below zero." />,
  "10+0i": <HighlightableText text="You've graduated! The number entry lets you type any number — including negative numbers and decimals like three point one four. Try it." />,
  "11+0i": <HighlightableText text="The levels beyond ten are sparse, but the text within them is rich. Try highlighting any number you see — including the word 'dozen'." />,
  "12+0i": <HighlightableText text="After a dozen, what comes next? Thirteen, some say, is unlucky. But fourteen... fourteen is a gateway to levels below zero. Words that mean numbers are buttons too." />,
  "13+0i": <HighlightableText text="The darkness hides a path forward. Beyond thirteen lies fourteen — a gateway to levels below zero. Sometimes you have to go through the dark to find the light. Wait patiently." />,
  "14+0i": <HighlightableText text="The negative gateway! Buttons lead to minus one, minus five, minus fourteen. But have you thought about negative zero? It's a real level — and it holds something important." />,
  "15+0i": <HighlightableText text="The stability bar counts down! When it hits zero, the level collapses and ejects you. Grab what you can before time runs out." />,
  "16+0i": <HighlightableText text="Instability spreads. The complex plane is full of unstable levels — but stable islands exist at certain coordinates." />,
  "17+0i": <HighlightableText text="The VIP Lounge. James the butler, a shiny card, and buttons to everywhere from zero to twenty. A great place to regroup." />,
  "18+0i": <HighlightableText text="The temporal anomaly randomizes things. The button cycles through different destinations — one, eleven, one hundred eleven, even negative one." />,
  "19+0i": <HighlightableText text="The vacant room. It looks empty, but the level title and number are still text — and text is always highlightable." />,
  "20+0i": <HighlightableText text="The wormhole title text hides exits — 'ten', 'twenty', 'thirty', 'forty', 'fifty' are all in there. And there's a button to level thirty." />,
  "21+0i": <HighlightableText text="Blackjack! Two cards here — the Ace and King of Spades. You'll need to find more cards across the game. The Card Box at level one hundred stores them." />,
  "22+0i": <HighlightableText text="Catch twenty-two: you need text navigation to escape, but the text teaches you text navigation. Look for number words like 'twenty-two' in the text itself." />,
  "24+0i": <HighlightableText text="The clock shows the real time — and real time means real numbers. The hour, minute, and second are all navigable. What time is it?" />,
  "25+0i": <HighlightableText text="A quarter is twenty-five cents AND zero point two five. Same word, different levels. Try highlighting 'half' to find the decimal realm." />,
  "27+0i": <HighlightableText text="Three cubed! The cube chain connects twenty-seven to sixty-four to one hundred twenty-five. Try highlighting 'sixty-four' in the text." />,
  "30+0i": <HighlightableText text="The Outpost connects three worlds: the positive line, the negative realm (minus thirty), and the complex plane (level i). Also try 'zero point five' for the decimal realm." />,
  "33+0i": <HighlightableText text="A palindrome! It reads the same forward and backward. Palindromes mirror into negative space — level negative thirty-three exists too." />,
  "34+0i": <HighlightableText text="Part of the Fibonacci sequence: twenty-one, thirty-four, fifty-five. Each number is the sum of the two before it. The golden ratio hides at the end of this chain." />,
  "37+0i": <HighlightableText text="Thirty-seven: the 'most random' number. When people are asked to pick a random number, they choose thirty-seven more than any other. Curious mind, curious level." />,
  "40+0i": <HighlightableText text="Forty is the waypoint before the answer. Level forty-two has a surprise that breaks the fourth wall. And level fifty teaches you Roman numerals." />,
  "42+0i": <HighlightableText text="The answer to life, the universe, and everything is forty-two. The text here mentions three point one four one five nine — highlight it to visit pi." />,
  "44+0i": <HighlightableText text="Another palindrome, another mirror. Level negative forty-four awaits. And somewhere between the whole numbers, level zero point five hides an entire realm." />,
  "50+0i": <HighlightableText text="L in Roman numerals. Now look for I, V, X, C, D, and M in any text throughout the game. Also try the spaces between numbers — level zero point five, or three point one four." />,
  "51+0i": <HighlightableText text="Area fifty-one. The redacted black bars aren't just decoration — click them. Behind the censorship: paths to level four hundred four, one hundred fifty-three, and five plus five i." />,
  "52+0i": <HighlightableText text="The card tracker! It shows which cards you've found. There are cards hidden across every dimension — integers, decimals, and even the complex plane." />,
  "55+0i": <HighlightableText text="Homophones! 'Ate' sounds like eight. 'For' sounds like four. 'Won' sounds like one. Also try going 'half' way — the decimal realm awaits." />,
  "60+0i": <HighlightableText text="Sixty seconds in a minute, sixty minutes in an hour. Base sixty is ancient — the Babylonians knew it. And level seventy-two has equations to solve." />,
  "62+0i": <HighlightableText text="Math expressions as navigation! 'Seven times nine' takes you to level sixty-three. Try highlighting arithmetic in the text." />,
  "63+0i": <HighlightableText text="Seven times nine! The payoff from level sixty-two. From here, level sixty-four is a triple crossroads — a power of two, a perfect square, and a perfect cube." />,
  "64+0i": <HighlightableText text="Two to the sixth, eight squared, four cubed — all the same number. The power-of-two chain leads to one hundred twenty-eight, two hundred fifty-six, five hundred twelve, and beyond." />,
  "66+0i": <HighlightableText text="Route sixty-six! The highway metaphor. The road goes to seventy-seven (dice) and eighty-two (mathematical constants)." />,
  "69+0i": <HighlightableText text="Your screen resolution, timezone, and platform all contain numbers. Try highlighting them — your real-world data becomes navigation." />,
  "72+0i": <HighlightableText text="Equation solving! 'If level squared equals five thousand one hundred eighty-four, what is level?' Solve the equations to find new paths." />,
  "75+0i": <HighlightableText text="Three quarters of one hundred — but also zero point seven five. The decimal realm has a whole chain of fractions between zero and one. And zero point nine nine nine has a proof that will blow your mind." />,
  "77+0i": <HighlightableText text="Roll the die, then try highlighting the result! Every number, even random ones, can be a way forward." />,
  "81+0i": <HighlightableText text="Nine squared! The nines chain continues at level ninety-nine, where a calculator lets you combine nines with operators." />,
  "82+0i": <HighlightableText text="The three constants — pi, e, and phi — are all levels. Highlight 'three point one four' in the text. The word 'point' turns text into decimal navigation. This is the gateway to an entire hidden dimension." />,
  "86+0i": <HighlightableText text="'Eighty-sixed' means thrown out, rejected. But don't be fooled by the fake stability bar — this level isn't actually collapsing. The complex plane, though... that's real instability." />,
  "88+0i": <HighlightableText text="Eight arms, eight hearts, eight brains. The octopus is full of eights. Highlight the word eight to travel there." />,
  "89+0i": <HighlightableText text="The last Fibonacci number below one hundred! The sequence continues: one hundred forty-four, two hundred thirty-three, three hundred seventy-seven... and at the end, the golden ratio at level one point six one eight." />,
  "90+0i": <HighlightableText text="Ninety degrees — where the real axis meets the imaginary axis. Level thirty has a direct button to the complex plane. Or try typing 'i' into the number entry." />,
  "95+0i": <HighlightableText text="Windows ninety-five! The Start menu has paths to level zero, one hundred, one thousand, and four hundred four. Retro computing meets infinite levels." />,
  "97+0i": <HighlightableText text="The last prime under one hundred. The next prime is one hundred one. From here, the number line stretches into the frontier." />,
  "98+0i": <HighlightableText text="Almost there. Level ninety-nine has a calculator puzzle. Level one hundred has a milestone reward. And beyond — one thousand, ten thousand, and infinity itself." />,
  "99+0i": <HighlightableText text="Pick an operator, calculate the result, and try highlighting it. Nine to the power of nine is three hundred eighty-seven million. And this puzzle continues at level nine hundred ninety-nine with three nines." />,
  "100+0i": <HighlightableText text="The Card Box stores cards and has weight for the Scale. Your wallet weighs one hundred fifty grams. Level one hundred fifty-three has a diamond behind a shrine. And the decimal realm — levels like pi and phi — awaits at level eighty-two." />,
  "101+0i": <HighlightableText text="Beyond the century! Level one hundred twenty-three is easy to guess. The Fibonacci chain continues at one hundred forty-four. And the power-of-two chain runs through one hundred twenty-eight." />,
  "123+0i": <HighlightableText text="One two three — the most obvious sequence. The curious mind seeks less obvious paths: one hundred twenty-eight (power of two), one hundred forty-four (Fibonacci), one hundred fifty-three (narcissistic number)." />,
  "128+0i": <HighlightableText text="Two to the seventh! The power-of-two chain: sixty-four, one hundred twenty-eight, two hundred fifty-six, five hundred twelve, one thousand twenty-four. Double to go forward, halve to go back." />,
  "144+0i": <HighlightableText text="A gross! Twelve squared AND a Fibonacci number. The golden chain continues to two hundred thirty-three. And the golden ratio itself lives at level one point six one eight." />,
  "150+0i": <HighlightableText text="Your wallet weighs one hundred fifty grams — that's how you got here! Now weigh other items. The diamond at level one hundred fifty-three weighs three point five two grams..." />,
  "153+0i": <HighlightableText text="One cubed plus five cubed plus three cubed equals one hundred fifty-three. A narcissistic number. Twenty-five achievements opens the shrine — and the diamond inside weighs three point five two grams on the Scale." />,
  "155+0i": <HighlightableText text="The sparse chain. Level one hundred fifty-three is nearby — it has a diamond behind a shrine. And level one hundred fifty-nine has a suspicious clown." />,
  "156+0i": <HighlightableText text="Ten thousand coins! A generous reward. Head back to level one hundred fifty to continue exploring." />,
  "158+0i": <HighlightableText text="Part of the redirect chain. Level one hundred fifty-six has a big reward. Level one hundred sixty has the Jester's old friend." />,
  "159+0i": <HighlightableText text="A clown's proposition... be careful what you agree to. Level one hundred sixty is a trap — but the Joker card inside is worth it." />,
  "160+0i": <HighlightableText text="The Jester's Trap! The Joker card is the reward for following the clown. Cards have rarity tiers — and the Joker is special." />,
  "161+0i": <HighlightableText text="Near the redirect chain. Level one hundred fifty-six has a treasure. Level one hundred fifty-nine has a clown with a deal." />,
  "200+0i": <HighlightableText text="Two hundred! The Card Box weighs two hundred grams — weigh it on the Scale to reach this hub. From here, explore the two hundreds and beyond." />,
  "365+0i": <HighlightableText text="A year! Three hundred sixty-five days, fifty-two weeks, twelve months. The year timeline (levels nineteen fifty-five to two thousand forty-six) maps real history." />,
  "404+0i": <HighlightableText text="Error: level not found. But the Jack of Spades IS found — a dark-holographic rarity card. The glitch text hides it. And the 'Escape' button leads back to zero." />,
  "500+0i": <HighlightableText text="D in Roman numerals. The two of Clubs card is here. Level one thousand is the next major milestone — it has an Ace of Clubs behind a shrine." />,
  "999+0i": <HighlightableText text="Three nines, two operators! The result of your calculation is a level. And level one thousand is just one step away — with a card behind a thirty-achievement shrine." />,
  "1000+0i": <HighlightableText text="A thousand! The Ace of Clubs hides behind a thirty-achievement shrine. Level ten thousand is the next milestone. And the number entry can take you anywhere — even to decimals and negative numbers." />,
  "1001+0i": <HighlightableText text="One thousand and one nights. Head back to one thousand for the shrine, or press onward to ten thousand." />,
  "9999+0i": <HighlightableText text="Four nines, three operators! The nines chain finale. Ten thousand is right next door — with another shrine." />,
  "10000+0i": <HighlightableText text="Ten thousand! A thirty-achievement shrine guards this milestone. The power-of-ten chain continues: one hundred thousand, one million, ten million." />,
  "69420+0i": <HighlightableText text="You typed the meme number. No judgment. The 'do nothing' button really does nothing. Hit 'Return to Reality' to go back to level zero." />,
  "100000+0i": <HighlightableText text="One hundred thousand. Deep in the frontier. Twenty achievements opens the shrine. The power-of-ten highway continues to one million." />,
  "1000000+0i": <HighlightableText text="One million! Twenty achievements opens a shrine here. The journey continues to ten million — but have you explored the dimensions between? Decimals, negatives, the complex plane?" />,
  "10000000+0i": <HighlightableText text="Ten million. The farthest charted milestone. But the game is truly infinite. Have you visited level five plus five i in the complex plane? Or the numberservatory at nine hundred ninety-nine plus nine hundred ninety-nine i?" />,
  "-13+0i": <HighlightableText text="The shadow of thirteen. Darkness inverted. Negative levels mirror their positive counterparts — but darker. Have you visited negative zero?" />,
  "-0+0i": <HighlightableText text="The shadow of zero. Something important hides here — something that unlocks a box on level nine. And something else that only opens for the pure of heart." />,
  "3.14159+0i": <HighlightableText text="You found π! The digits of pi are infinite and non-repeating, just like the levels in this game. From here, visit e at two point seven one eight, or phi at one point six one eight." />,
  "2.718+0i": <HighlightableText text="Euler's number e — the growth constant. From here, pi is at three point one four one five nine, and the golden ratio phi at one point six one eight." />,
  "1.618+0i": <HighlightableText text="The golden ratio! A Queen of Hearts card lives here. The Fibonacci sequence approaches this number but never quite arrives. Beauty is irrational." />,
  "1.414+0i": <HighlightableText text="The square root of two. A man measured a diagonal and they drowned him for it. Visit one point six one eight for the golden ratio." />,
  "0.5+0i": <HighlightableText text="The gateway to the decimal realm! Between zero and one lies an infinite universe. Try 'one third' for zero point three three three, or 'three quarters' for zero point seven five." />,
  "0.25+0i": <HighlightableText text="A quarter — both twenty-five cents and zero point two five. Try visiting zero point three three three (one third) or zero point seven five (three quarters)." />,
  "0.75+0i": <HighlightableText text="Three quarters of the way to one. Head to zero point nine nine nine for a mathematical proof that will change how you think about numbers." />,
  "0.333+0i": <HighlightableText text="One third — repeating forever. Add two thirds (zero point six six six) and you get zero point nine nine nine... which equals one. Or does it? Visit to find out." />,
  "0.666+0i": <HighlightableText text="Two thirds — not the devil's number, that's six hundred sixty-six. Head to zero point nine nine nine to see what happens when you add all the thirds together." />,
  "0.999+0i": <HighlightableText text="Almost one. But IS it one? The proof on this level reveals the truth. And a Queen of Spades card hides here — the fourth spade." />,
  "0.007+0i": <HighlightableText text="Licensed to decimal. A spy-themed bonus level. Fifteen achievements opens a shrine with the ten of Diamonds card." />,
  "0+1i": <HighlightableText text="The imaginary unit! Navigate with complex notation: type 'two i' or 'one plus one i'. Stable islands exist where both parts are zero, one, two, three, or five." />,
  "3+1i": <HighlightableText text="Complex numbers create new paths. Stable islands exist at coordinates like one plus one i, three plus three i, and five plus five i." />,
  "1+1i": <HighlightableText text="A stable island in the complex plane. The Ace of Hearts — a golden card — lives here. You needed the Key from negative zero to find this." />,
  "5+5i": <HighlightableText text="The Black Hole! It weighs infinity. Put it on the Scale and see where infinite weight takes you." />,
  "999+999i": <HighlightableText text="The Numberservatory — a tracker of every level you've ever visited. The ultimate destination for the dedicated explorer." />,
  "Infinity+0i": <HighlightableText text="Beyond numerical bounds. The Black Hole on the Scale brought you here — or the word 'infinity' in any text." />,
  "-Infinity+0i": <HighlightableText text="The depths of negative infinity. A mirror of infinite positive — equally unreachable, equally real." />,
  "Infinity+Infinityi": <HighlightableText text="The ultimate convergence — positive infinity in both dimensions." />,
  "-Infinity-Infinityi": <HighlightableText text="The deepest point possible — negative infinity in every direction." />,
  "Infinity-Infinityi": <HighlightableText text="Opposing infinities create possibilities." />,
  "-Infinity+Infinityi": <HighlightableText text="Infinite complexity awaits." />
};

const LevelHint = ({ levelNumber }) => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(markHintOpened(levelNumber));
  }, [dispatch, levelNumber]);

  // First parse the level number if it's a string
  const parsedLevel = typeof levelNumber === 'string' ? 
    parseStoredLevel(levelNumber) : 
    levelNumber;

  // Then convert to our standard format
  const levelKey = levelToString(parsedLevel);

  const hint = levelHints[levelKey];

  return hint || <HighlightableText text="Explore and discover... Every number is a level. Try highlighting number words in any text, or type a number into the entry on level ten." />;
};

export default LevelHint;