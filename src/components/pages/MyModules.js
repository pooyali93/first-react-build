import { useState } from "react";
import ModuleList from "../UI/ModuleList";
import listOfModules from "../../data/modules";
import { FaList, FaPlus} from 'react-icons/fa';
import './MyModules.css'
import Modal from "../UI/Modal";

function MyModules() {
    // Properties ---------
    //  Hooks ---------
    const [modules, setModules] = useState(listOfModules);
    const [showModal, setModal] = useState(false);
    

    // Contect ---------
    // Methods ---------

    const handleFavourite = (id) => {
        setModules (modules.map((module) => (
            module.ModuleID === id ? { ...module, isFavourite:true } : module
        ))
        )
         //console.log('Favourited', id);
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

    const handleModal =() => {
        setModal(true);
    }

    const handleConfirm =(module) => {

        const id = Math.floor(Math.random() * 10000) + 1;
        const newModule =  {id, ...module};
        setModal(false);

        setModules([...modules, newModule])
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
            {showModal && <Modal  onConfirm={handleConfirm} /> }
            
        </section> 
    )
}

export default MyModules;