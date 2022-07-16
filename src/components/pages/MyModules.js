import { useState } from "react";
import ModuleList from "../UI/ModuleList";
import listOfModules from "../../data/modules";
import { FaList} from 'react-icons/fa';

function MyModules() {
    // Properties ---------
    //  Hooks ---------
    const [modules, setModules] = useState(listOfModules);
   // const [favorites, setFavorites] = useState([]);
    // Contect ---------
    // Methods ---------

    const handleFavourite = (id) => {
        setModules (modules.map((module) => (
            module.ModuleID === id ? { ...module, isFavourite:true } : module
        ))
        )
         console.log('Favourited', id);
    }

    const handleUnfavourite = (id) => {
        setModules (modules.map((module) => (
            module.ModuleID === id ? { ...module, isFavourite:false } : module
        ))
        )
        // console.log('unFavourited', id);
    }
    
    const handleDelete = (id) => {
        setModules(modules.filter((module) => module.ModuleID !== id));
        //console.log('delete', id);
    }

    // View ---------
    return (
        <section>
            <h1>My Modules</h1>

            <div className="listOfFavourite"><FaList/></div>
            <ModuleList modules={modules} onDelete={handleDelete} onFavourite={handleFavourite} onUnfavourite={handleUnfavourite} />
              
        </section> 
    )
}

export default MyModules;