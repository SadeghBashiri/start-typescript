interface Users {
    name: string,
    age: number,
    isVerified: boolean,
    googleID: string,
    // startTrial: () => string
    startTrial(): string
}

let user2: Users = {
    name: "jack",
    age: 21,
    isVerified: true,
    googleID: "googleIDXXDE",
    startTrial() {
        return "x";
    }
}

// type قابل ویرایش نیست ولی interface قابل ویرایش است
interface Users {
    gitHubID: string
}

// interface قابل ارث بری میباشد
interface UserAdmin extends Users {
    deleteRole: boolean;
}

let user2: UserAdmin = {
    name: "jack",
    age: 21,
    isVerified: true,
    googleID: "googleIDXXDE",
    startTrial() {
        return "x";
    }
}

// readonly in interface
interface Users2 {
    name: string,
    age: number,
    isVerified: boolean,
    readonly googleID: string,
    // startTrial: () => string
    startTrial(): string
}
let user3: Users2 = {
    name: "jack",
    age: 21,
    isVerified: true,
    googleID: "googleIDXXDE",
    startTrial() {
        return "x";
    }
}
user3.googleID = "321";