namespace Chinese {
    let food = "sushi"; // only in namespace scope
}

namespace Italian {
    export let food = "pizza";
}

console.log(Italian.food);
