function calculateJsBasicsWeightedScore(passed, failed, skipped) {
  // ADD YOUR CODE HERE
  let score=0
  score = (passed * 2) - (failed * 1) + (skipped * 0);
  console.log(score);
  return score;
}

calculateJsBasicsWeightedScore(5, 2, 1)