'use strict';

var patterns = {
    "emailP" : /[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/,
    "namesP" : /[A-Za-z]{3,15}$/,
    "usernameP" : /[A-Za-z].{8,}$/,
    "passwordP" : /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!$@#%&*]).{8,10}$/,
    "cityP" : /[a-zA-Z].{2,20}$/,
    "addressP" : /[a-zA-Z0-9].{2,100}$/
};




function checkInput(id,elem,warning,pattern,message) {
    if (elem.match(pattern) == null) {
        document.getElementById(id).setCustomValidity(message);
        document.getElementById(warning).innerHTML = message;
        return false;
    }else{
        document.getElementById(id).setCustomValidity("");
        document.getElementById(warning).innerHTML = "";
    }
    return true;
}


function show(elem){
    faceRec.init();
    document.getElementById(elem).style.display = 'block';
    
}

function hide(){
    document.getElementById('vidcanv').style.display ='none';
}


