import React, {useState} from 'react';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    // Maneja el cambio visual
    const handleInputChange = (e) => {  
        setInputValue(e.target.value);        
    }

    //maneja el comportamiento por default y controla el submit luego de presionar enter.
    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats]);
            setInputValue('');
        }
    }
    
    return (
        
        <form onSubmit={handleSubmit}>
            {/* <h1>{inputValue}</h1> */}
            <input
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
            
        
    )
}