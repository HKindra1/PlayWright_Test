function checkJsBasicsReadinessGate(hasSetup, hasPractice, hasNotes) {
  let readiness = "NOT READY";
    if (hasSetup === true && hasPractice === true && hasNotes === true) 
    {
        readiness="READY";    
  }
  else
  { readiness="BLOCKED"; }
  console.log(readiness);
  return readiness;

}

checkJsBasicsReadinessGate(true, true, true)