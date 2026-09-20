function buildJsBasicsChecklist(items) {
    let i = 0;
  let checklist = items
    .filter(item => item.trim() !== "")
    .map(item => `${++i}. ${item} - TODO`);
  console.log(checklist);
  return checklist;
}

buildJsBasicsChecklist(["Practice switch"," ","Push code"]);