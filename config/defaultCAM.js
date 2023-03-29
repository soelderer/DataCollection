/* default CAM which will be redrawn if CAM is deleted */
function shuffle(queslist) {
    let array_emp = [];
    for (var i = 0; i < queslist.length; i++) {
      array_emp.push(i);
    }
  
    let j, x;
    for (i = array_emp.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = array_emp[i];
      array_emp[i] = array_emp[j];
      array_emp[j] = x;
    }
    return array_emp;
  }

const ConceptsCAM = ["positive feelings", "negative feelings", 
"trust in policitical institutions",
"perceived risks", "perceived benefits"];

const index_ConceptsCAM = shuffle(ConceptsCAM);
console.log("index_ConceptsCAM:", index_ConceptsCAM);


function defaultCAM() {
    CAM.addElement(new NodeCAM(0, "middle concept", {
        x: 600,
        y: 400
    }, true, true, true));



    CAM.draw();
}