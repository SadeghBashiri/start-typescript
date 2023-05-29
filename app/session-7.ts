type animal = string;
type appID = number;
type joinDate = Date;
type bool = boolean;

let d : bool = false;

type User = {
    name: string,
    age: number,
    isVerified: boolean
}
 let user1: User = {
    name: "jack",
    age: 25,
    isVerified: false
 }

// use type in function
// function updateUser({name: string, age: number, isVerified: boolean})
function updateUser(user: User): User {
    user.isVerified = true;
    return user;
}