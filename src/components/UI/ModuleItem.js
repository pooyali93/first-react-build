import Card from './Card';
import  './ModuleItem.css';
import { FaCheck, FaEdit, FaTrash} from 'react-icons/fa';
import Favourite from './Favourite';
//import Tooltips from './ToolTips';


// function
function ModuleItem (props) {
    return (
        <div className="item">
            <Card>
                <Favourite
                    isFavourite={props.module.isFavourite}
                    unFavourite={() => props.onUnfavourite(props.module.ModuleID)}
                 />
                <div className="image">
                    <img src={props.module.ModuleImage} alt={props.module.ModuleName} />
                </div>
                <div className="content">
                    <h4>{props.module.ModuleName}</h4>
                    <h5>({props.module.ModuleCode})</h5>
                    <p>Level {props.module.ModuleLevel}</p>
                </div>
        
                <div className="actions">
                    
                    <button onClick={() => props.onFavourite(props.module.ModuleID)}><FaCheck /></button>
                    <button><FaEdit /></button>
                    <button onClick={() => props.onDelete(props.module.ModuleID)} ><FaTrash /></button>
                </div>
            </Card>
        </div>
    );
}


export default ModuleItem;