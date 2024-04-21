
function getGrade(degree) {
    if (degree >= 90) {
      return "A";
    } else if (degree >= 80) {
      return "B";
    } else if (degree >= 70) {
      return "C";
    } else if (degree >= 60) {
      return "D";
    } else if (degree >= 50) {
      return "E";
    } else {
      return "F";
    }
  }
  
function convert(){
    const degree= parseInt(document.querySelector(".degree-input").value)
    const grade= getGrade(degree)
    
    document.querySelector('.output-area').textContent=`your degree is ${degree}, then your grade is = ${grade}.`
}

document.querySelector('button').onclick = convert