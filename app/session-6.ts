// normal function
function sumOfNumbers(num1: number, num2: number) {
    return num1 + num2;
}

// arrow function
const sumOfNumbers2 = (num1: number, num2: number) => {
    return num1 + num2;
}

// در جاوا اسکریپت تعداد پارامترها مهم نیست!!!

function signUp(email: string, name: string, userType: string) {
    console.log(`User with name '${name}' and '${email}' email added to the system as a ${userType} type`);
}
// optional parammeter in function
function signUp2(email: string, name: string, userType?: string) {
    if(userType === undefined) {
        userType = 'admin';
    }
    console.log(`User with name '${name}' and '${email}' email added to the system as a ${userType} type`);
}
signUp2('sample@gmail.com', 'jack')

function signUp3(email: string, name: string, userType: string = 'admin') {
    console.log(`User with name '${name}' and '${email}' email added to the system as a ${userType} type`);
}
signUp3('sample@gmail.com', 'jack');
signUp3('sample@gmail.com', 'jack', 'panel');

// return
function sumOfNumbers3(num1: number, num2: number) {
    return 'hello';
}
function sumOfNumbers4(num1: number, num2: number): number {
    return num1 + num2;
}

// buil-in function
const fruits = ['banana', 'orange', 'apple'];
// const fruits = [1, 2, 3];
fruits.map(fruit => {
    console.log(`Fruit is ${fruit}`);
});
fruits.map((fruit: string) => {
    console.log(`Fruit is ${fruit}`);
});
fruits.map((fruit: string) => {
    console.log(`Fruit is ${fruit}`);
    return `Fruit is ${fruit}`;
    // return 1;
});
fruits.map((fruit: string): string => {
    console.log(`Fruit is ${fruit}`);
    return `Fruit is ${fruit}`;
    // return 1;
});

// tsconfig => "noUnusedParameters": true
function getFullName(fname: string, lname: string, useId: number) {
    return fname + lname;
}

// tsconfig => "noImplicitReturns": true
function getFullName2(fname: string, lname: string, userType: string = 'panel') {
    if(userType === 'panel') {
        return fname + lname;
    }
}

// tsconfig => "noUnusedLocals": true
function getFullName3(fname: string, lname: string, userType: string = 'panel') {
    let a;
    if(userType === 'panel') {
        return fname + lname;
    }
}