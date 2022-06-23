import ModuleItem from "../UI/ModuleItem";
import ModuleList from "../UI/ModuleList";
import modules from "../../data/modules";


function MyModules() {
    // Properties ---------
    //  Hooks ---------
    // Contect ---------
    // Methods ---------
    // View ---------
    return (
        <section>
        <h1>My Modules</h1>
          <ModuleList modules={modules} />


        </section>


        
        
    )

}

export default MyModules;