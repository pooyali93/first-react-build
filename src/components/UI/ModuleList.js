import ModuleItem from './ModuleItem';
import './ModuleList.css';


function ModuleList(props) {

    return (
        <ul className='list'>
        {props.modules.map(module => <ModuleItem key={module.ModuleID}  ModuleID={module.ModuleID} ModuleImage={module.ModuleImage} ModuleName={module.ModuleName} ModuleCode={module.ModuleCode} ModuleLevel={module.ModuleLevel} />)}

        </ul>

    )


}

export default ModuleList;