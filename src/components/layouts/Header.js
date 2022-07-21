import { Link } from "react-router-dom";

import './Header.css'

function Header(props) {
    // Properties ---------
    //  Hooks ---------
    // Contect ---------
    // Methods ---------
    // View ---------
    return (
        <header>
            <Link to="/">
                <img src="https://img.icons8.com/small/50/undefined/gender-neutral-user.png" alt="Logo"></img>
            </Link>
            <Link to="/">
             <h1>React First App</h1>
            </Link>
            <div className="login">
                <p>Welcome Pooya</p>
            </div>
        </header>
    )

}

export default Header;