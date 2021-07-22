import { Action } from "./actionsTypes";

interface Todo {
    text: string;
}

type State = Todo[];

export const todosReducer = (state:State = [], action: Action) => {
    switch(action.type) {
        case "CREATE_TODO": {
            const  text  = action.payload;
            const newTodo = {
                text
            };
            return state.concat(newTodo)
        }
        case "REMOVE_TODO": {
            const text = action.payload;
            return state.filter(todo => todo.text !== text);
        }
        default:
            return state
    }
}