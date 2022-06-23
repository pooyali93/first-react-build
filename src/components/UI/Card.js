import './Card.css';

function Card(props) {

    return(
        <div className='cardWrapper'>
            <div className="card">
                {props.children}
            </div>
         </div>

    )

}

export default Card;