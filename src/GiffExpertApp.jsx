import { useState } from "react";
import AddCategory from "./componets/AddCategory";
import {GifGrid} from "./componets/GifGrid";


function GiffExpertApp() {

    const [categories, setCategories] = useState(['One Punch']);

//    const handleAdd = ()=>{
  //      setCategories([...categories,'Naruto']);
    //};

    return ( 
        <>
            <h2>GiffExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(category=>{
                       return (
                        <GifGrid 
                            key={category}
                            category = {category}
                        />
                       );
                    })
                }
            </ol>
        </>
     );
}

export default GiffExpertApp;