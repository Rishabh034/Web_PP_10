const { default: jsPDF } = require("jspdf");

// c
//const doc=new jsPDF();
const doc = new jsPDF();
  
//  

doc.text("/nrishabh",2,3);
doc.save("a4.pdf");