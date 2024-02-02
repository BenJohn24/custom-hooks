import { actionState } from "./interfaces/actionState";
import { initialState } from "./interfaces/initialState";


export const todoReducer = (initialState: initialState[], action: actionState) => {

    switch (action.type) {
        case '[TODO]: Add Todo':
            return [ ...initialState, action.payload ];

        case '[TODO]: Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload.id );

        case '[TODO]: Toogle Todo':
            return initialState.map( todo => {

                 if( todo.id === action.payload.id ){
                    return {
                        ...todo,
                        done: !todo.done
                    }
                 }
                   
                 return todo;
             });

        default:
            return initialState;
    }
}