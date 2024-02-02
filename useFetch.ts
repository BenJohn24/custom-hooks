import { useEffect, useState } from "react";
import { Info, Result } from '../interfaces/IRickMorty';


interface Data {
    info: Info
    results: Result[]
 }

export const useFetch = ( url: string) => {

    
    const [ state, setState ] = useState({

        data: {} as Data,
        isLoading: true,
        hasError: null
    });

    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true,
           });
        
       const resp = await fetch(url);
       const data  = await resp.json();

       setState({
        data,
        isLoading: false,
        hasError: null
       });
    }

    useEffect(() => {
        getFetch();

    }, [url]);

    return {
         data:      state.data,
         isLoading:  state.isLoading,
         hasError:  state.hasError
    };
}

