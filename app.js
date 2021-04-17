function clearNum(){
    document.getElementById("num").innerHTML = '0';   
}

function remZero(){
    let value = document.getElementById("num").innerHTML;
    if(value==0){
        value = " ";
        document.getElementById("num").innerHTML = value;
    }
}

function displayVal(value){
    remZero();
    document.getElementById("num").innerHTML += value;
}

function solve(){
    remZero();
    var equate = document.getElementById("num").innerHTML;
    var solved = eval(equate);
    document.getElementById("num").innerHTML = solved;
}

//document.getElementById("seven").addEventListener("click", displayVal());