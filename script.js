let field = document.getElementById('field');

var radioEasy;
var radioHard;

let guesses = 0;

let checkEasy = false;
let checkHard = false;

let x = 0;

function uncheckEasy()
{
    radioEasy = document.getElementById('easy');
    radioEasy.checked = false;
    checkHard = true;
    checkEasy = false;
}
function uncheckHard()
{
    radioHard = document.getElementById('hard');
    radioHard.checked = false;
    checkEasy = true;
    checkHard = false;
}

function generator(){

    guesses = 0;
    field.innerText = '';

    document.getElementById('INPUTS').style.display = '';    

    if(checkEasy == true){
        x = Math.floor(Math.random() * 1001);
    }
    else if(checkHard == true){
        x = Math.floor(Math.random() * 1000000) + 1000;
    }
    else{
        alert('Zaznacz poziom!');
    }       

}

function checkNumber(){

    let colors = ['green', 'red', 'blue', 'orange', 'purple', 'pink', 'yellow', 'aqua', 'bronze', 'gray'];

    let randomColor = Math.floor(Math.random() * colors.length);

    field.style.color = colors[randomColor];

    let userNum = Math.floor(document.getElementById('input-num').value);

    guesses++;

    

    if(userNum == x){
        if(guesses <= 10){
            field.innerText = 'Zgadłeś/aś w ' + guesses + ' próbie!';
        }
        else{
            field.innerText = 'Zgadłeś/aś w ' + guesses + ' próbach!';
        }
        
    }
    else if(userNum > x){
        field.innerText = 'Za wysoko!';
    }
    else{
        field.innerText = 'Za nisko!';
    }
}

// ZROBIE JESZCZE AKTUALIZACJE TEGO I DODAM CZAS W JAKIM ZGADLES/AS LICZBE
// ZAGRAJ ZEBY SPRAWDZIC CZY DZIALA, A JESLI BEDZIESZ KIEPSKI TO DODAJ SOBIE CONSOLE.LOG W MIEJSCU GENEROWANIA LICZBY
// ZEBY SOBIE POMOC :DDDD

