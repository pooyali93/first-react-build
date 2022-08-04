import ModuleItem from './ModuleItem';
import './ModuleList.css';


function ModuleList(props) {
    return (
        <div className='list'>
            {
                props.modules.map(module => 
                    <ModuleItem 
                        key={module.ModuleID}  
                        module={module}
                        onDelete={props.onDelete}
                        onChange={props.onChange}
                        onFavourite={props.onFavourite}
                        onUnfavourite={props.onUnfavourite}
                    
                    />
                )
            }
        </div>
    );
}

export default ModuleList;