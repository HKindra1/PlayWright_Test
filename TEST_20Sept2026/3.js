

function classifyJsBasicsScore(score) {
  // write your code here
  let result = "";
  if (score >= 90) {
    result = "EXCELLENT";
  } 
 else if (score >= 75) {
    result = "GOOD";
  }
  else if (score >= 50) {
    result = "NEEDS_PRACTICE";
  }
  else {
    result = "REVISIT";
  }
  console.log(result);
}

classifyJsBasicsScore(32);
