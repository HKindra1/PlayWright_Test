

function isValidJsBasicsIdentifier(name)
{
    const normalizedLabel = name.trim().toLowerCase();
    const containsReservedWord = /\b(let|const|var|class|function|return)\b/.test(normalizedLabel);
    const isValid = normalizedLabel !== "" && !/^\d/.test(normalizedLabel) && !containsReservedWord;
    console.log(isValid);
    return isValid;
}

isValidJsBasicsIdentifier("let")
