// ```
// $ node start.js 
// The average score for round 1 is 1.78
// The average score for round 2 is 1.56
// The average score for round 3 is 1.56
// The average score for round 4 is 1.33
// The average score for round 5 is 1.39
// The average score for round 6 is 1.61
// The average score for round 7 is 1.06
// The average score for round 8 is 0.83
// The average of averages is 1.39
// ```

/**
 * 1. Declare two functions: calculateGolfAverages and calculateTotalAverages
 */

// *
// * 2. Implement calculateGolfAverages
// * 
// * This function should print out the average score of each round
// * This function should receive the "golfScores" array as a parameter
// * This function should console log the average score of each round in the array
// * Please show only two decimals of accuracy on the averages:
// * 
// * An example of the expected outpulength



function calculateRoundAverages(golfScores) {
   for (i = 0; i < golfScores.length; i++) {
   let golfScore = golfScores[i];
   let roundSum = 0;
      for (j = 0; j < golfScore.length; j++) {
        roundSum = roundSum + golfScore[j];
       }
       const average = roundSum / golfScore.length;
   console.log(`The average score for round  ${i + 1} is ${average.toFixed(2)}`); 
  }   
};

function calculateTotalAverages(golfScores) {
  let sumRoundAverages = 0;
  for (i = 0; i < golfScores.length; i++) {
    let golfScore = golfScores[i];
    let roundSum = 0;

       for (j = 0; j < golfScore.length; j++) {
         roundSum = roundSum + golfScore[j];
        }

        const average = roundSum / golfScore.length;
        sumRoundAverages = sumRoundAverages + average;
    }

    const totalAverage = sumRoundAverages / golfScores.length;
 console.log(`The average of averages is ${(totalAverage).toFixed(2)}`);
};






/**
 * 3. Implement calculateTotalAverages
 * 
 * This function should print out the average of all average scores
 * This function should receive the "golfScores" array as a parameter
 * This function should console log the average of all averages
 * Please show only two decimals of accuracy
 * 
 * An example of the expected output:
 * "The average of averages is 1.39"
 */



///! ----- PLEASE DO NOT EDIT BELOW THIS ---- !///
const golfScores = [
  [1,2,2,-1,5,1,2,1,6,2,1,0,5,3,0,1,1,0],
  [1,1,3,0,3,2,2,1,6,2,1,0,3,1,-1,2,1,0],
  [2,1,2,1,4,1,2,1,6,2,1,0,-1,3,0,2,1,0],
  [0,2,3,0,3,1,1,1,6,2,1,0,0,2,0,1,1,0],
  [0,1,5,-2,3,2,2,1,6,2,1,0,-2,3,0,2,1,0],
  [1,1,3,-1,4,2,1,1,6,2,1,0,-1,4,0,4,1,0],
  [0,2,1,0,3,0,-1,1,6,2,1,0,0,3,-2,2,1,0],
  [0,1,1,0,2,1,-1,1,4,2,1,1,0,2,-1,1,0,0],
];
calculateRoundAverages(golfScores);
calculateTotalAverages(golfScores);