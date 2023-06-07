class Person {
    name: string;
    email: string;
    phone: string = ""; // اگر مقداردهی اولیه نکنیم باید در سازنده بیاریم
    // readonly phone: string;
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}
const person1 = new Person("ali", "sample@gmail.com");
console.log(person1.email);

class Person2 {
//     private name: string;
//     public email: string;
//     protected phone: string = "";

    constructor(name: string, private email: string) {
        this.name = name;
        this.email = email;
    }
}

// inheritence
class Customer extends Person {
    panelAccess: boolean = true;
}

// get & set
class Person3 {
    public name: string;
    private _email: string;
    protected phone: string = "";
    constructor(name: string, email: string) {
        this.name = name;
        this._email = email;
    }

    // get getEmail(): string {
    //     return this._email;
    // }
    get email(): string {
        return this._email;
    }

    // set setEmail(email: string) {
    //     this._email = email;
    // }
    set email(email: string) {
        this._email = email;
    }
}
const person4 = new Person3("jack", "sample@gmail.com");
// متدهای get و set بعنوان پارامترهایی از کلاس میشوند به همین خاطر در تعریف پراپرتی private از _ استفاده میکنیم
// console.log(person4.getEmail);
// console.log(person4.setEmail);
console.log(person4.email);
console.log(person4.email);