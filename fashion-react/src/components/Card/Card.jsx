import './card.css';
import arrowImg from './../../img/icons/arrow.svg';

const Card = (props) => {
    
    return ( 
        <div className="card">
            <a href="#!" className="card_link"></a>
            <img className='card_img' src={props.img} alt='Category ...' />
            <div className="card_body">
                <div className="card_text">
                    <div className="card_title">
                        {props.title}
                    </div>
                    <div className='card_muted'>
                        Explore Now!
                    </div>
                </div>

                <div className="card_icon">
                    <img src={arrowImg} alt='Open' />
                </div>
            </div>
        </div>
     );
}
 
export default Card;