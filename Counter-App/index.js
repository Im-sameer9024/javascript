let reasult = document.querySelector("#result");

function Decrement(){
    let value = parseInt( reasult.innerHTML); 
    value = value - 1;
    reasult.innerHTML = value;
}

function Increment(){
    let value = parseInt( reasult.innerHTML); 
    value = value + 1;
    reasult.innerHTML = value;
}

function Reset(){
    let value = parseInt(reasult.innerHTML);
    value = 0;
    reasult.innerHTML = value;
}