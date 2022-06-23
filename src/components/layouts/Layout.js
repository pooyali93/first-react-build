import Header from './Header.js'
import Navbar from './Navbar.js';
import Footer from './Footer.js'

import './Layout.css';


function Layout(props) {
    // Properties ---------
    //  Hooks ---------
    // Contect ---------
    // Methods ---------
    // View ---------
    return (
        <div className='centerWrapper'>
          <Header />
          <Navbar />
            <main>
                {props.children}
            </main>
            <Footer/>
        </div>
    )

}

export default Layout;