import React from 'react';
import PropTypes from 'prop-types';
import './Favourite.css'
import { FaHeart} from 'react-icons/fa';


Favourite.propTypes = {
    isFavourite: PropTypes.bool,
    unFavourite:PropTypes.func
};


function Favourite({children, isFavourite, }) {
  return (
    <div className='favouriteIcon'>
        {
            isFavourite &&
            <div className='favourite' ><FaHeart/>
            </div>            
        }
        {children}
    </div>
  );
}

export default Favourite