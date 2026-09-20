function countPassingJsBasicsChecks(results) {
    let count = 0;
    for (const result of results) {
        if (result.includes("pass") || result.includes("PASS")) {
            count++;
        }
    }
    console.log(count);
    return count;
}

countPassingJsBasicsChecks(["SETUP PASS","CONFIG PASS"]);