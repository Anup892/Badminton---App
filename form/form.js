let more = document.querySelector("#more");
let less = document.querySelector("#less");
let players = document.querySelector(".players");
let lock = document.querySelector("#locked");
let counter=5;
let lck = true;

//for locking system
lock.addEventListener("click",()=>{
 if (lck==true) {
    lock.src= "/images/padlock.png";
    let inputs = players.querySelectorAll("input");
    for (const input of inputs) {
        input.readOnly=true;
        input.style.color="rgb(181, 181, 181)";
    }
    lck=false;

 } else {
    lock.src= "/images/unlock.png";
    let inputs = players.querySelectorAll("input");
    for (const input of inputs) {
        input.readOnly=false;
        input.style.color="white";
    }
    lck=true;
 }
})

//for adding more player field and deleting field

    more.addEventListener("click",()=>{
        let inp = document.createElement("input");
        inp.type="text";
        inp.placeholder=`Player ${counter}`;
        players.appendChild(inp);
        counter++;
    })
    less.addEventListener("click", () => {
        // Select the last input element that was added and remove it
        let inputs = players.querySelectorAll("input");
        console.log(inputs.length);
        
        if (inputs.length > 4) {
            inputs[inputs.length - 1].remove();
            counter= inputs.length;
        }
    });
    let inputs = players.querySelectorAll("input");

    