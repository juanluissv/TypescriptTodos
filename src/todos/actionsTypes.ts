interface CreateTodo  {
    type: "CREATE_TODO"
    payload: string
}

interface RemoveTodo {
    type: "REMOVE_TODO"
    payload: string
}


export type Action = CreateTodo | RemoveTodo;