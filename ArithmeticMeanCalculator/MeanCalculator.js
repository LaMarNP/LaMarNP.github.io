let numbers = [];


function addValue(){
let input = parseFloat(document.getElementById('UserInput').value);
if(!isNaN(input)) {
    numbers.push(input);
    document.getElementById('shownList').innerHTML = numbers.join (", ");
    meanOfNumbers();
} else{
    alert('Please enter a valid number.');
    }
}

function removeValue(){
let input = parseFloat(document.getElementById('UserInput').value);
if (!isNaN(input)){
    let location = numbers.indexOf(input);
    if (location !== -1) {
        numbers.splice(location, 1);
        document.getElementById('shownList').innerHTML = numbers.join(", ");
        meanOfNumbers();
    } else{
        alert('Value not found in the list.');
    }
   } else {
   alert('Please enter a valid number.');
   }
}

function meanOfNumbers(){
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
    }
    let meanAnswer = sum/numbers.length;
    document.getElementById("mean").innerHTML = meanAnswer;
}


