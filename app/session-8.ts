// union
let uVar1: string | number
uVar1 = 12;
uVar1 = "hello";

let uArr1: (string | boolean)[] = ['a', true];

function applyNewUserDiscount(price: number | string): number {
    // Narrowing
    if(typeof price === "string") {
        price = parseInt(price);
    }
    return price - (price * 0.3);
}

let size: 'S' | 'L' | 'XL';
size = "S";

type Admin = {email: string, id: number, canModify: true};
type Member = {email: string, id: number, canModify: false};
type Manager = Admin | Member;

// Intersection
type z = string & number;
type Colorful = {
    color: string;
}

type Circle = {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;

function draw(circle: ColorfulCircle) {
    console.log(`Color is ${circle.color}`);
    console.log(`Radius is ${circle.radius}`);
}

draw({color: "blue", radius: 14});