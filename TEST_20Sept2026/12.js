function createUniqueJsBasicsTags(tags) {
 if (!Array.isArray(tags)) {
	return [];
 }
 tags = tags
	.filter(tag => typeof tag === "string" && tag.trim() !== "")
	.map(tag => tag.trim().toLowerCase());
 const uniqueTags = [...new Set(tags)];
 console.log(uniqueTags.map(tag => `"${tag}"`).join(", "));
 return uniqueTags;
}

createUniqueJsBasicsTags([""," API "," ","api"])