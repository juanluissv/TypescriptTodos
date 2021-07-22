import { Dispatch } from "redux";
import { Action } from "./actionsTypes";

export const createTodo = (text:string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type:"CREATE_TODO",
           payload:  text 
        })
    }
}

export const removeTodo = (text:string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: "REMOVE_TODO",
            payload: text
        })
    }
}