import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState<any>( initialForm );
;

    const onInputChange = ({ target }:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
         setFormState( ({
            ...formState,
            [ name ]: value
         }))
        // console.log({ name, value})
    };

    const onResetForm = () =>  {
        setFormState( initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
  
}

