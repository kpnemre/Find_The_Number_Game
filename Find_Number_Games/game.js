
let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let number = [Math.floor(Math.random() * 100)];
let test = document.getElementById('test');
let count = 0;

btn.addEventListener('click', function () {

    let input = document.getElementById('userInput').value;
    
    
    count++;

    if (input=="") {
        output.innerHTML = "Write a number";
    }
    else if (input == number) {
        output.innerHTML = "Thanks for game!"
        test.innerHTML = `This is your test number: ${count}`;
        alert(`You are the winner :D. You guest after ${count} times!`);
        alert(`You wanna play again?`);

    } else if (input < number) {
        output.innerHTML = "I am thinking about higher number"
        test.innerHTML = `This is your test number: ${count}`;
    }
    else if (input > number) {
        output.innerHTML = "I am thinking about lower number"
        test.innerHTML = `This is your test number: ${count}`;
    };
    

});
