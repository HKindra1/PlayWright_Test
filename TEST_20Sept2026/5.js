function filterSupportedJsBasicsTopics(topics) {
    const lowercaseTopics = topics.map(topic => topic.trim().toLowerCase());
    const supportedTopics = ["node", "v8", "login","npm"];
    const filteredTopics = [...new Set(
        lowercaseTopics.filter(topic => supportedTopics.includes(topic))
    )];
    console.log(filteredTopics.map(topic => `"${topic}"`).join(", "));
    return filteredTopics;
}

filterSupportedJsBasicsTopics(["npm","node","v8"])