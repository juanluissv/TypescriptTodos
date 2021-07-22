import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { todosReducer } from './todos/reducers'

const rootReducer = combineReducers({
     todosReducer
})


const middleware = [thunk]

const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
)

export type RootState = ReturnType<typeof rootReducer>

export default store;
