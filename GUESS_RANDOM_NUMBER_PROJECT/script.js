let number;

function generateNumber()
{
    let n1=Math.random()
    number=n1*10;
    number=Math.trunc(number)
    console.log(number)
}
function generateNumber_btn()
{
    var elements = document.getElementsByClassName('section1');
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
    }
    var elements = document.getElementsByClassName('section2');
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
    }
    var elements = document.getElementsByClassName('section3');
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";


    setTimeout(() => {
        generateNumber()
        var elements = document.getElementsByClassName('section1');
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
    }
    var elements = document.getElementsByClassName('section2');
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "block";
    }
    var elements = document.getElementsByClassName('section3');
    for (var i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
    
    }}, 3000);
};
    
}

function check_number()
{
    let num=document.getElementById("num").value
    console.log(num)
    if(num==number)
    {
        alert("Congrats!! You Guessed the Right Number")
    }
    else{
        alert("Sorry!! You Guessed the Wrong Number")
    }
}