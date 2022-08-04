import { useState } from 'react'
import './AddModuleForm.css'


export default function AddModuleForm(props) {
   // Properties ---------
    //  Hooks ---------
    const [text, setText] = useState('');
    const [url, setUrl] = useState('');
    const [moduleCode, setModuleCode] = useState('');
    const [moduleLevel, setModuleLevel] = useState('');
    const [moduleLeader, setModuleLeader] = useState('');
 
    // Contect ---------
    // Methods ---------
    const handleSubmit = (event) => {
        event.preventDefault();

        const moduleData = {
            ModuleName:  text,
            ModuleImage:  url,
            ModuleCode:  moduleCode,
            ModuleLevel:  moduleLevel,
            ModuleLeader:  moduleLeader
        };


        

        if(!text) {
           alert('Please add module name')
           return
        }

        props.onAdd(moduleData);
      
    }



    return (
        <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-control">
            <label>Module Name:</label>
            <input type='text' placeholder='Enter Module Name' value={text} onChange={(e)=>setText(e.target.value)}/>   
            <label>Module Image:</label>
            <input type='url' placeholder='Enter Module Img' value={url}onChange={(e)=>setUrl(e.target.value)}/>  
            <label>Module Code:</label>
            <input type='text' placeholder='Enter Module Code' value={moduleCode} onChange={(e)=>setModuleCode(e.target.value)}/>  
            <label>Module Level:</label>
            <input type='number' placeholder='Enter Module Level' value={moduleLevel} onChange={(e)=>setModuleLevel(e.target.value)}/>  
            <label>Module Leader:</label>
            <input type='text' placeholder='Enter Module Leader' value={moduleLeader} onChange={(e)=>setModuleLeader(e.target.value)}/>  
        </div>
        <div className="actions">
            <button type="submit" className="cancel" onClick={props.onCancel}>Cancel</button>
            <button type="submit" >Add New Module</button>
        </div>
    </form>
    )
}