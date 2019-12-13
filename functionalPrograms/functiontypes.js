
//normal function
function calculatePay(salaray, tax){
    const pay = salaray + tax;
    return pay;
}
const totalPay = calculatePay(5000, 200);
console.log(totalPay);

//function with fat arrow
const totalPay = (salaray, tax) => {
    return salaray + tax;
};

//function with fat arrow and implicit return
const totalPay = (salaray, tax) =>  salaray + tax;

//function with default argument
const totalPay = (salaray, tax = 500) =>  salaray + tax;

//function returning an object
function babyDetails (firstName, lastName, dob){
    const baby = {
        name :`${firstName} ${lastName}`,
        age : `${dob}`
    }
    return baby;
};

//Simplying the function returing an onject, 1. stick in a vairable. 2. Convert it into => 3. make the return implicit
const babyDetails1 = (firstName, lastName, dob) => ({name :`${firstName} ${lastName}`,age : `${dob}`});

//IIFE -> Immediately invoked function expression
(function() {
    console.log('Running the Ano function');
    return 'You are cool';
})()

//Passing an arrgument to IIFE
(function(age) {
    console.log('Running the Ano function'+ age);
    return `You are cool ${age}`;
})(25);

//Methods
const name ={
    firstName: 'Vinutha',
    lastName: function() {
        console.log('Hi Vinutha');
        return lastName;
    }
};

//callBack function, click callback
const button = document.querySelector('.click');
console.log(button);
button.addEventListener('click', calculatePay(salaray, tax));

//TimerCallback
setTimeout(calculatePay(salaray, tax),1000);