import React from 'react';

interface Todo {
    text: string
}

interface TodoProps {
    removeTodo(todo: string): void;
    todo: Todo
}

const TodoItem: React.FC<TodoProps> = ({todo, removeTodo}) => {

    const onRemoveTodo = (todo:string) => {
        removeTodo(todo)
    }
    

    return (
        <div>
            <h3>{todo.text}</h3>
            <button onClick={() => onRemoveTodo(todo.text)}>
                x
            </button>
        </div>
    )
}


export default TodoItem;