

function getJsBasicsKeywordMeaning(term) {
  // write your code here
  let result = "";
  if (term === "NODE") {
    result = "runtime";
  } 
  else if (term === " v8 ") {
    result = "engine";
  }
  else if (term === "npm") {
    result = "package-manager";
  } 
  else
  {
    result = "unknown";
  }
  console.log(result);
  return result;
}

getJsBasicsKeywordMeaning("NODE");
