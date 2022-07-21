import { useState } from "react";
import ModuleList from "../UI/ModuleList";
import listOfModules from "../../data/modules";
import { FaList, FaPlus} from 'react-icons/fa';
import './MyModules.css'
import Modal from "../UI/Modal";
import { FaList} from 'react-icons/fa';

function MyModules() {
    // Properties ---------
    //  Hooks ---------
    const [modules, setModules] = useState(listOfModules);
    const [showModal, setModal] = useState(false);

   // const [favorites, setFavorites] = useState([]);
    // Contect ---------
    // Methods ---------

    const handleFavourite = (id) => {
        setModules (modules.map((module) => (
            module.ModuleID === id ? { ...module, isFavourite:true } : module
        ))
        )

            module.ModuleID === id ? { ...module, isSubscribed:true } : module
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
    
            module.ModuleID === id ? { ...module, isSubscribed:false } : module
        ))
        )

         console.log('unFavourited', id);
    }

    
       

       // setFavorites(favorites.filter((module) => module.ModuleID !== id));
       // setFavorites([...favorites, modules.find(module => module.ModuleID === id)]);
        //if(!copy) setModules(modules.filter(module => module.ModuleID !== id));
       

        //console.log('delete', id);
    
    const handleDelete = (id) => {
        setModules(modules.filter((module) => module.ModuleID !== id));
        //console.log('delete', id);
    }

    const handleModal =() => {
        setModal(true);
    }

    const handleConfirm =(e) => {
        e.preventDefault();

        setModal(false);
    }

    
    // View ---------
    return (
        <section>
            <h1>My Modules</h1>
            <div className="listOfFavourite">
                <div className="actions">
                    <button><FaList/></button>
                    <button  onClick={handleModal} ><FaPlus/> Add</button>
                </div>
            </div>
            <ModuleList modules={modules} onDelete={handleDelete} onFavourite={handleFavourite} onUnfavourite={handleUnfavourite} />
            {showModal && <Modal  onConfirm={handleConfirm} onCancel={handleConfirm}/> }
            
            <div className="listOfFavourite"><FaList/></div>
            <ModuleList modules={modules} onDelete={handleDelete} onFavourite={handleFavourite} onUnfavourite={handleUnfavourite} />
        </section> 
    )
}

export default MyModules;