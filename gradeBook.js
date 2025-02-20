function getAvarageScore(scores){
    // step 1: Sum up all the scores in the array and store the sum in a variable.
    let totalScore = 0;
    for (let i = 0; i < scores.length; i++) {
        totalScore = totalScore + scores[i];
    }
    // step 2: Calculate the average by dividing the total score by the number of scores.
    let averageScore = totalScore / scores.length;
    return averageScore;
};
const testScores = [90, 80, 70, 85];
const average = getAverage(testScores);
console.log(average);  // Expected output: 81.25

















































































