import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState: initialState[] = [];
const init = () => {
    return JSON.parse( localStorage.getItem('todos')! ) || [];
}
export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init );

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
       console.log( todos ); 
    }, [todos]);

    const handleNewTodo = ( todo: initialState ) =>{
        const action = {
            type: '[TODO]: Add Todo',
            payload: todo
        };

        dispatch( action );
    }

    const handleDeleteTodo = ( todo: initialState ) => {

        const action = {
            type: '[TODO]: Remove Todo',
            payload: todo
        };
       dispatch( action );
    }
       
    const onToogleTodo = ( todo: initialState ) => {

        const action = {
            type:'[TODO]: Toogle Todo',
            payload: todo
        };
       dispatch( action );
    }
   
  

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    onToogleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter( todo => !todo.done ).length
  }
}

