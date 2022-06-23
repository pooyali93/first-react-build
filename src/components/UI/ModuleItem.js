import Card from './Card';
import  './ModuleItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

function ModuleItem(props) {
    return (
    <li className="item">
        <Card>
        <div className="image">
            <img src={props.ModuleImage} alt={props.ModuleName} />
        </div>
        <div className="content">
            <h4>{props.ModuleName}</h4>
            <h5>({props.ModuleCode})</h5>
            <p>Level {props.ModuleLevel}</p>
        </div>

        <div className="actions">
            <button><FontAwesomeIcon icon={faCheck} /></button>
            <button><FontAwesomeIcon icon={faEdit} /></button>
            <button><FontAwesomeIcon icon={faTrash} /></button>
        </div>
        </Card>
    </li>
    )

}


export default ModuleItem;