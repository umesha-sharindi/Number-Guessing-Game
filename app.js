// console.log("Hello");

// let name = true ;
// console.log(typeof name);

// class Customer{
//     name;
//     age;
//     address;

//     constructor(name,age,address){
//         this.name=name;
//         this.age=age;
//         this.address=address;
//     }

//     setName(name) {
//         this.name=name;
//     }
//     getName(){
//         return this.name;
//     }
// }

// let customer01 = new Customer("saman",12,"gamapaha");

// console.log(customer01.getName());

// let randomNumber = Math.floor((Math.random()*10)+1);
// console.log(randomNumber);

let randomNumber = Math.floor((Math.random() * 10) + 1);

document.getElementById('guessButton').onclick = function() {
    let userGuess = document.getElementById('userGuess').value;
    let resultMessage = document.getElementById('resultMessage');

    if (userGuess == randomNumber) {
        resultMessage.textContent = "Congratulations! You win🏆";
        resultMessage.className = "text-success";
    } else if (userGuess > randomNumber) {
        resultMessage.textContent = "Too high!🫥";
        resultMessage.className = "text-danger";
    } else {
        resultMessage.textContent = "Too low!🥲";
        resultMessage.className = "text-danger";
    }

    randomNumber = Math.floor((Math.random() * 10) + 1);
    document.getElementById('userGuess').value = '';
};
