function fontRed(){
    var col=document.getElementById("class");
    col.style.color="red";}

function fontBlue(){
    var col=document.getElementById("class");
    col.style.color="blue";}

function fontGreen(){
        var col=document.getElementById("class");
        col.style.color="green";}
   

function changeBground(){

    let selectbackground = document.getElementById("bground-option").value;

    if(selectbackground=="yellowbg"){  
    var bground=document.getElementById("class");
    bground.style.backgroundColor="yellow";
    // console.log("background yellow selected");
    }

    else if(selectbackground=="orangebg"){
        var bground=document.getElementById("class");
        bground.style.backgroundColor="orange";
    }
    else {var bground=document.getElementById("class");
    bground.style.backgroundColor="gray";}

}


