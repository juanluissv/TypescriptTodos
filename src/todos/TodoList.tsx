import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { createTodo, removeTodo } from './actions';
import NewTodo from './NewTodo';
import TodoItem from './TodoItem';




const TodoList = () => {

    const newTodos = useSelector((state: RootState) => state.todosReducer)
    
    const dispatch = useDispatch();

    const onAddTodo = (todo:string) => {
        dispatch(createTodo(todo))
    }

    const onRemoved = (todo:string) => {
        dispatch(removeTodo(todo))
    }

    return (
        <div>
            <NewTodo addTodo={onAddTodo} />
            {newTodos.map(todo => <TodoItem
            todo={todo}
            removeTodo={onRemoved}
            />)}
        </div>
    )
}

export default TodoList