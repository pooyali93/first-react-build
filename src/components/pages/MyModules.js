import { useState } from "react";
import ModuleList from "../UI/ModuleList";
import listOfModules from "../../data/modules";
import { FaList, FaPlus} from 'react-icons/fa';
import './MyModules.css'
import Modal from "../UI/Modal";
import AddModuleForm from "../UI/AddModuleForm";



function MyModules() {
    // Properties ---------
    //  Hooks ---------
    const [modules, setModules] = useState(listOfModules);
    const [showModalForm, setShowModalForm] = useState(false);
  //  const [showModal, setShowModal] = useState(false);
    

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

    const handleUpdate =(id, newValue) => {
        setModules(modules.map((module) => (
            module.ModuleID === id ? {...module, newValue }: module
            ))

           
        ); 
        
        setShowModalForm(true)
    }

    
    const handleDelete = (id) => {
        setModules(modules.filter((module) => module.ModuleID !== id));
        //console.log('delete', id);
    }


    const handleModal =() => {
        setShowModalForm(prev => !prev) 
    }


    const handleAddModule = (newModule) => {
        newModule.ModuleID = Math.floor(Math.random()*10000) + 1
        setModules([...modules, newModule]);
    }

   
   
    // View ---------
    return (
        <section>
            <h1>My Modules</h1>
            
            {/* <div className="listOfFavourite">
                <div className="actions">
                    <button><FaList/></button>
                    <button  onClick={handleModal} ><FaPlus/> Add</button>
                </div>
            </div> */}
           {showModalForm ? <AddModuleForm onAdd={handleAddModule} onCancel={handleModal} />: null }

            <ModuleList modules={modules} onDelete={handleDelete} onChange={handleUpdate} onFavourite={handleFavourite} onUnfavourite={handleUnfavourite} />

         <Modal />

            
        </section> 
    )
}

export default MyModules;


