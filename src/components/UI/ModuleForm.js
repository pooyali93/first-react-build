import Card from "./Card";
import './ModuleForm.css'

export default function ModuleForm(props) { 
  return (
    <Card>
        <form className='add-form'>
            <div className='form-control'>
                <label htmlFor="title">Module Name</label>
                <input type='text'  id="title"></input>
            </div>
            <div className='form-control'>
                <label htmlFor="image">Module Image</label>
                <input type='url'  id="image"></input>
            </div>
            <div className='form-control'>
                <label htmlFor="code">Module Code</label>
                <input type='text'  id="code"></input>
            </div>
            <div className='form-control'>
                <label htmlFor="level">Module Level</label>
                <input type='number'  id="level"></input>
            </div>
            <div className='form-control'>
                <label htmlFor="leader">Module Leader</label>
                <input type='text'  id="leader"></input>
            </div>
            <div className="actions">
                <button type="submit" className="cancel" onClick={props.onCancel}>Cancel</button>
                <button type="submit" onClick={props.onClick}>Add New Module</button>
            </div>

        </form>
    </Card>
   
  );
}

