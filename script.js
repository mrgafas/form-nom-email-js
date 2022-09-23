
let inputs = document.querySelectorAll("input");
let form = document.querySelector("form");

let message1 = document.querySelector("#msg1");
let message2 = document.querySelector("#msg2");

form.addEventListener("submit",(e) =>{
    e.preventDefault();

if (inputs[0].value.length == 0) {
message1.textContent = "veuillez remplir le nom";
    
}
if (inputs[1].value.length == 0) {
    message2.textContent = "veuillez remplir l'email";
    
}

});