import Card from "./Card";
import './ModuleForm.css'
import { useRef, useState } from "react";
import Select from 'react-select'

export default function ModuleForm({props}) { 

    const [ text, setText] = useState ('')
    const [ url, setUrl] = useState ('')
    const [ moduleCode, setModuleCode] = useState ('')
    const [ moduleLevel, setModuleLevel] = useState ('')
    const [ moduleLeader, setModuleLeader] = useState ('')

   
  


    function handleSubmit(event) {
    
        event.preventDefault();

        if(!text) {
            alert('Please Enter Module Name')
            return
        }

        props.onAdd({text, url, moduleCode, moduleLevel, moduleLeader})

        setText('')
        setUrl('')
        setModuleCode('')
        setModuleLevel('')
        setModuleLeader('')
     }
 /*

      const moduleNameInputRef = useRef();
    const moduleImageInputRef = useRef();
    const moduleCodeInputRef = useRef();
    const moduleLevelInputRef = useRef();
    const moduleLeaderInputRef = useRef(); 
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

    const selectModuleLevel = [
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6'}
      ]

    const selectModuleLeader = [
        { value: 'Graeme', label: 'Graeme' },
        { value: 'Ahmed', label: 'Ahmed' },
        { value: 'David', label: 'David'}
      ]
      */
  return (
    <Card>
        <form className='add-form' onSubmit={handleSubmit}>
            <div className='form-control'>
                <label>Module Name</label>
                <input type='text'  placeholder="Enter Module Name" value={text} onChange={(event) => setText(event.target.value)}></input>

                <label >Module Image</label>
                <input type='url' placeholder="Enter an Img URL"            value={url} onChange={(event) => setUrl(event.target.value)}></input>
           
                <label >Module Code</label>
                <input type='text' placeholder="Enter Module Code" value={moduleCode} onChange={(event) => setModuleCode(event.target.value)} ></input>

                <label >Module Level</label>
                <input type='number' placeholder="Enter Moedul Level" value={moduleLevel} onChange={(event) => setModuleLevel(event.target.value)} ></input>
             
            
                <label>Module Leader</label>
                <input type='text' placeholder="Enter Module Leader" value={moduleLeader} onChange={(event) => setModuleLeader(event.target.value)} ></input>
             
            </div>
            <div className="actions">
                <button type="submit" className="cancel" >Cancel</button>
                <button type="submit" onClick={props.onConfirm}>Add New Module</button>
            </div>

        </form>
    </Card>
   
  );
}

