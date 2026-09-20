function summarizeJsBasicsResults(results) {
  let pass = 0;
    let fail = 0;
    let skip = 0;
let total = results.length;
let resultSummary = "";
  for (const result of results) {
    if (result.includes("pass") || result.includes("PASS")) {
      pass++;
    }
    if (result.includes("fail") || result.includes("FAIL")) {
      fail++;
    }
    if (result.includes("skip") || result.includes("SKIP")) {
      skip++;
    }   
  }
  resultSummary = `"failed:"${fail}, "passed:"${pass}, "skipped:"${skip}, "total:"${total}  `;
  console.log(resultSummary);
  return {resultSummary};
}

summarizeJsBasicsResults([]);