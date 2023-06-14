// Utility types

interface Todo {
    title: string,
    description: string
}
const todo1: Todo = {
    title: "todo title",
    description: "todo desc"
}

// Partial type
type PartialTodo = Partial<Todo>;
const todo2: PartialTodo = {
    title: "todo title",
    // description: "todo desc",
    // todoID: 12; // eror
}
function updatTodo(todo: Todo, fieldToUpdate: Partial<Todo>) {
    return (...todo, ...fieldToUpdate);
}