let result = document.querySelector('#result-box');
let buttons = document.querySelectorAll('button');

let str = "";

let arr = Array.from(buttons);
arr.forEach( button => { 
    button.addEventListener('click', (e) => {

        if(e.target.innerHTML == '='){
            str = eval(str);
            result.innerHTML = str;
        }

        else if(e.target.innerHTML == 'AC'){
            str = "";
            result.innerHTML = str;
        }
        
        else if(e.target.innerHTML == 'DEL'){
            str = str.substring(0,str.length - 1);
            result.innerHTML = str;
        }
        else{
            str += e.target.innerHTML;
            result.innerHTML = str;
            
        }
    })
})
