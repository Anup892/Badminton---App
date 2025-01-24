let createBtn  = document.querySelector("#create");
let mainBox = document.querySelector("main")

createBtn.addEventListener("click",()=>{
    let create = document.createElement("div");
    create.classList.add("main-div");
    mainBox.appendChild(create);
    create.innerHTML="<button id='cancel'>&#10006;</buttton>";
    let cancel = document.querySelector("#cancel");
cancel.addEventListener("click",()=>{
    create.remove();
})
    
})