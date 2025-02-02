import { useState } from "react";
//import PropTypes from 'prop-types';

function AddCategory({setCategories}) {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (e)=>{
        setInputValue(e.target.value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault(); 

        if (inputValue.trim().length > 0) {
            setCategories( prevState=> [ inputValue, ...prevState] );
            setInputValue('');
        }else{
            alert('El valor no puede ir vacio');
        }
    };

    return ( 
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue}
                onChange={handleChange}
             />
        </form>
     );
}

//AddCategory.propTypes {
  //  setCategories: PropTypes.func.isRequired, 
//};

export default AddCategory;
