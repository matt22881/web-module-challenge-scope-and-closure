// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 *
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 *
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
// function processFirstItem(stringList, callback) {
//     return callback(stringList[0])
// }

// ⭐️ Example Challenge END ⭐️

/// // M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 *
 *counter1 is a variable, set in the global scope,  whose value happens to currently be a function...counter2 is actually a function, outside the scope of counter1
 *
 *
 * 2. Which of the two uses a closure? How can you tell?
 *
 * counter2 uses a closure because it'll need to make reference of the count in counter 1
 *
 *
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 *
 *counter 1 preferable in nearly every instance since it avoids global variables and keeps them contained inside the function...only way 2 would be preferable is if you needed count to have value later in the program
 *
 */

// counter1 code
// function counterMaker () {
//   let count = 0
//   return function counter () {
//     return count++
//   }
// }

// const counter1 = counterMaker ()

// // counter2 code
// let count=0

// function counter2 () {
//   return count++
// }

/* Task 2: inning()

Write a function called `
inning ` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning () {
  const score = Math.floor(Math.random() * 3)
  return score
}

// console.log(inning())

/* Task 3: finalScore()

Write a higher order function called `
finalScore ` that accepts the callback function `
inning ` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example,

finalScore(inning, 9) might return:
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore (func, ins) {
  let homeScore = 0
  let awayScore = 0

  for (let i = 0; i < ins; i++) {
    const inScoreHome = inning()
    homeScore = homeScore + inScoreHome
    const inScoreAway = inning()
    awayScore = awayScore + inScoreAway
  }
  const final = {
    Home: homeScore,
    Away: awayScore
  }
  console.log(final)
}
finalScore(inning, 9)

/* Task 4:

Create a function called `
scoreboard ` that accepts the following parameters:

(1) Callback function `
getInningScore `
(2) Callback function `
inning `
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function getInningScore (func) {
  let homeScore = 0
  let awayScore = 0
  const inScoreHome = func
  homeScore = homeScore + inScoreHome
  const inScoreAway = func
  awayScore = awayScore + inScoreAway

  const inningScore = {
    Home: homeScore,
    Away: awayScore
  }
  return inningScore
}
// console.log(getInningScore(inning))

function scoreboard (func1, func2, ins) {
  let homeTotal = 0
  let awayTotal = 0
  for (let i = 0; i < ins; i++) {
    const homeInn = func1(func2()).Home
    const awayInn = func1(func2()).Away
    homeTotal = homeTotal + homeInn
    awayTotal = awayTotal + awayInn
    if (i === 0) {
      console.log(`${i + 1}st inning: Away: ${awayInn} - Home: ${homeInn}`)
    } else if (i === 1) {
      console.log(`${i + 1}nd inning: Away: ${awayInn} - Home: ${homeInn}`)
    } else if (i === 2) {
      console.log(`${i + 1}rd inning: Away: ${awayInn} - Home: ${homeInn}`)
    } else {
      console.log(`${i + 1}th inning: Away: ${awayInn} - Home: ${homeInn}`)
    }
  }
  console.log(`Final Score Away: ${awayTotal} - Away: ${homeTotal}`)
}
scoreboard(getInningScore, inning, 9)
