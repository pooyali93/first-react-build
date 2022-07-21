import React from 'react';
import PropTypes from 'prop-types';
import './Favourite.css'
import { FaHeart} from 'react-icons/fa';


Favourite.propTypes = {
    isFavourite: PropTypes.bool,
    unFavourite:PropTypes.func
};

export default function Favourite({isFavourite, unFavourite }) {

function Favourite({children, isFavourite, }) {
  return (
    <div className='favouriteIcon'>
        {
            isFavourite &&
            <div className='favourite' onClick={unFavourite}>
              <FaHeart/>
            </div>            
        }
        
    </div>
  );
}
            <div className='favourite' ><FaHeart/>
            </div>            
        }
        {children}
    </div>
  );
}
