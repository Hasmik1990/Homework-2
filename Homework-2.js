// Task 1

function game(user1, user2) {

    let paper = "paper";
    let rock = "rock";
    let scissors = "scissors";

    if(user1 !== paper && user1 !== rock && user1 !== scissors || user2 !== paper && user2 !== rock && user2 !== scissors){
        return "Invalid input, enter correct value."
    }

    if(user1 === user2){
        return "Draw! Enter new values.";
    }

    if(user1 === rock){
        if(user2 === scissors){
            return "You win";
        }else{
            return "You lose";
        }
    }

    if(user1 === paper){
        if(user2 === scissors){
            return "You win";
        }else {
            return "You lose";
        }
    }

    if(user1 === scissors){
        if(user2 === rock){
            return "You win";
        }else {
            return "You lose";
        }
    }
};

console.log(game("paper", "pen"));

// Task 2(couldn't solve)

// Task 3

function isEmpty(obj) {
    let name;
    for (name in obj) {
        if (obj.hasOwnProperty(name)) {
            console.log(false);
        }
    }
    console.log(true);
}
isEmpty();

// Task 4

function sumAllAges(obj) {
    let sum = 0;
    obj = {
        Aram: 20,
        Samvel: 15,
    };
    for (let key in obj) {
        sum += obj[key];
    }
    // console.log(sum);
}
sumAllAges();

// Task 5

function multiplyNumeric(obj) {

    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
    console.log(obj);
}

multiplyNumeric({age: 20, salery: 1500, name: "Aram"});

// Task 6(couldn't solve)

function findMinForArray(arr){

}

findMinForArray();
