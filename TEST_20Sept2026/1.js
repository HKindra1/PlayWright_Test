

function normalizeJsBasicsLabel (label)
{
    const normalizedLabel = label.trim().toLowerCase()
        .replace(/@@/g, '-')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    const normalizedResult = normalizedLabel ? "js-basic-" + normalizedLabel : "js-basic";
    console.log(normalizedResult);
    return normalizedResult;
}

normalizeJsBasicsLabel(" ")
