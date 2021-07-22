import React, { useState } from "react";


interface NewTodoProps {
    addTodo(todo: string): void
}

const NewTodo: React.FC<NewTodoProps> = ({addTodo}) => {

    const [inputValue, setInputValue] = useState<string>('');

    const updateTodo = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setInputValue(event.target.value)
    }

    const createNew = () => {
        addTodo(inputValue)
        setInputValue('')
    }

    return (
        <div>
            <input
                type="text"
                placeholder="new task"
                value={inputValue}
                onChange={updateTodo}
            />
            <button onClick={createNew}>
                Create
            </button>

        </div>
    )
}

export default NewTodo;