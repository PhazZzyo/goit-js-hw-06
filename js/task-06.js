const textInput = document.querySelector("#validation-input");
const textInputLength = Number(textInput.dataset.length);

textInput.addEventListener("blur", () => {
    textInput.classList.remove("invalid");
    textInput.classList.add("valid");
    if (textInput.value.length > textInputLength) { 
textInput.classList.add('invalid');    
    }    
});



