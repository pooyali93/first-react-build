import Card from "./Card";
import './ModuleForm.css'
import { useRef } from "react";
import Select from 'react-select'

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

        const moudleData = {
            ModuleName:  inputModuleName,
            ModuleImage:  inputModuleImage,
            ModuleCode:  inputModuleCode,
            ModuleLevel:  inputModuleLevel,
            ModuleLeader:  inputModuleLeader
        };

        props.onConfirm(moudleData);
        
    }
/*
    const selectMoudleLevel = [
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6'}
      ]

    const selectMoudleLeader = [
        { value: 'Graeme', label: 'Graeme' },
        { value: 'Ahmed', label: 'Ahmed' },
        { value: 'David', label: 'David'}
      ]
      */
  return (
    <Card>
        <form className='add-form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label htmlFor="ModuleName">Module Name</label>
                <input type='text'  placeholder="Enter Module Name" id="ModuleName" ref={moduleNameInputRef}></input>

                <label htmlFor="ModuleImage">Module Image</label>
                <input type='url' placeholder="Enter an Img URL" id="ModuleImage" ref={moduleImageInputRef}></input>
           
                <label htmlFor="ModuleCode">Module Code</label>
                <input type='text' placeholder="Enter Module Code" id="ModuleCode" ref={moduleCodeInputRef}></input>

                <label htmlFor="ModuleLevel">Module Level</label>
                <input type='number' placeholder="Enter Moedul Level" id="ModuleCode" ref={moduleLevelInputRef}></input>
             
            
                <label htmlFor="ModuleLeader">Module Leader</label>
                <input type='text' placeholder="Enter Module Leader" id="ModuleLeader" ref={moduleLeaderInputRef}></input>
             
            </div>
            <div className="actions">
                <button type="submit" className="cancel" onClick={props.onCancel}>Cancel</button>
                <button type="submit" onClick={props.onClick}>Add New Module</button>
            </div>

        </form>
    </Card>
   
  );
}

