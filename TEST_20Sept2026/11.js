function summarizeJsBasicsMatrix(matrix) {
  let pass = 0;
    let fail = 0;
    let skip = 0;
let total = matrix.length;
let resultSummary = "";
  for (const result of matrix) {
    const resultText = result.join("-").toLowerCase();
    if (resultText.includes("pass")) {
      pass++;
    }
    if (resultText.includes("fail")) {
      fail++;
    }
    if (resultText.includes("skip")) {
      skip++;
    }   
  }
  resultSummary = `"failed":${fail}, "passed":${pass}, "skipped":${skip}, "total":${total}`;
  console.log(resultSummary);
  return {resultSummary};
}

summarizeJsBasicsMatrix([["login-pass"],["checkout-fail"]])