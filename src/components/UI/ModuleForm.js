import Card from "./Card";
import './ModuleForm.css'
import { useRef } from "react";

export default function ModuleForm(props) { 

    const moduleNameInputRef = useRef();
    const moduleImageInputRef = useRef();
    const moduleCodeInputRef = useRef();
    const moduleLevelInputRef = useRef();
    const moduleLeaderInputRef = useRef(); 


    function handleSubmit(event) {
    
        event.preventDefault();

        const inputModuleName = moduleNameInputRef.current.value;
        const inputModuleImage = moduleImageInputRef.current.value;
        const inputModuleCode = moduleCodeInputRef.current.value;
        const inputModuleLevel = moduleLevelInputRef.current.value;
        const inputModuleLeader = moduleLeaderInputRef.current.value;

        const moduleData = {
            ModuleName:  inputModuleName,
            ModuleImage:  inputModuleImage,
            ModuleCode:  inputModuleCode,
            ModuleLevel:  inputModuleLevel,
            ModuleLeader:  inputModuleLeader
        };

        props.onConfirm(moduleData);
        
    }
  return (
    <Card>
        <form className='add-form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor="ModuleName">Module Name</label>
                <input type='text'  id="ModuleName" ref={moduleNameInputRef}></input>
            </div>
            <div className='form-control'>
                <label htmlFor="ModuleImage">Module Image</label>
                <input type='url'  id="ModuleImage" ref={moduleImageInputRef}></input>
            </div>
            <div className='form-control'>
                <label htmlFor="ModuleCode">Module Code</label>
                <input type='text'  id="ModuleCode" ref={moduleCodeInputRef}></input>
            </div>
            <div className='form-control'>
                <label htmlFor="ModuleLevel">Module Level</label>
                <input type='number'  id="ModuleLevel" ref={moduleLevelInputRef}></input>
            </div>
            <div className='form-control'>
                <label htmlFor="ModuleLeader">Module Leader</label>
                <input type='text'  id="ModuleLeader" ref={moduleLeaderInputRef}></input>
            </div>
            <div className="actions">
                <button type="submit" className="cancel" onClick={props.onCancel}>Cancel</button>
                <button type="submit" onClick={props.onConfirm}>Add New Module</button>
            </div>

        </form>
    </Card>
   
  );
}

