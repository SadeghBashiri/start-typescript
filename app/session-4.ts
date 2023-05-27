// NaN
console.log(4 - 'hello');

// Infinity
console.log(2 / 0);

// Any
let b: any;
let c;

// Arrays
let aar1 = []; // any
let aar2: [] = [];
let arr3: number[] = [1, 2, 3];
let arr4: Array<number> = [1, 2, 3];
let arr5: Array<any> = [1, 2, 'hello'];
arr5.push('string');
arr5.push(false);
arr5.push(5)
console.log(arr5[1])

let images: number [][] = [[255, 255, 255], [250, 14, 15]];

// Tuple
let tup1: [string, number, boolean];
tup1 = ['hello', 2, true];
let num1 = tup1[2];
// different with array type of Any
let arr6 = [1, 'hello', false];
arr6 = [1, 'hello', false, 555];

// Object key-value
let obj = {name: "jack", age: 18, id: 15};
console.log(obj.name);
obj.age = 19 // edit

let user: {
    name: string,
    age: number,
    isVerified: boolean
} = {
    name: "jack",
    age: 25,
    isVerified: false
}
user.age = 26; // edit