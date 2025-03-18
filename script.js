// lower case starts
function lowerCaseConverter(){
    const caseInput = document.getElementById("caseInput").value;
    document.getElementById("caseInput").value = caseInput.toLowerCase();
    
}

// lower case ends

// uppercase starts
function upperCaseConverter(){
    const caseInput = document.getElementById("caseInput").value;
    document.getElementById("caseInput").value = caseInput.toUpperCase();
}

// uppercase ends

// capitalized function starts
function capitalizedCaseConverter(){

    const caseInput = document.getElementById("caseInput").value;
    const titleCase = caseInput.split(' ').map(word=>{
      return  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }).join(' ');

    document.getElementById("caseInput").value = titleCase;
}
// capitalized function ends

// sentence case converter starts
function sentenceCase() {
    const caseInput = document.getElementById("caseInput").value;    
    const sentences = caseInput.split(/([.?!]+)/);
    for (let i = 0; i < sentences.length; i++) {
      sentences[i] = sentences[i].trim();
  
      
      if (i % 2 === 0 && sentences[i]) {
        if (i === 0) {
         
          sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1).toLowerCase();
        } else {
    
          sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1).toLowerCase();
        }
      }
    }
  
  
    const sentenceCaseText = sentences.join('').replace(/([.?!])(?=\S)/g, '$1 ');
    document.getElementById("caseInput").value = sentenceCaseText;
  }
// sentence case converter ends
  

//copy function starts 
function copyText(){
    const copyText = document.getElementById("caseInput").value;
    navigator.clipboard.writeText((copyText)).then(()=>{
        alert("text copied to clipboard!!!");
    }).catch((error)=>{
        alert("Failed to copy text: " + error);
    });

} 
//copy function ends 


// clear function starts
function clearData(){
    document.getElementById("caseInput").value = "";
}
// clear function ends