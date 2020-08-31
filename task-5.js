const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener("input", changeSpan);

function changeSpan (el){
  if( el.currentTarget.value !== ""){
    outputName.textContent = el.currentTarget.value;
  } else {
    outputName.textContent = "незнакомец";
  }
};