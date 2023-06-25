namespace Chinese {
    export let food = "sushi";
    export class Kitchen {
        make() {
            console.log(' Making Chinese food');
        }
    }
    export function delivery() {
        console.log("Your Chinese is ready");
    }
}

namespace Italian {
    export let foods = "sushi";
    export class Kitchen {
        make() {
            console.log(' Making Chinese food');
        }
    }
    function delivery() {
        console.log("Your Italian is ready");
    }
}

console.log(Chinese.food);
console.log(Italian.foods);