import Card from '../Card/Card';
import './favourite.css';
import promo01Img from './../../img/images/promo-01.jpg'
import promo02Img from './../../img/images/promo-02.jpg'

const Favourite = () => {
    return ( 
        <section className='Favourite'>
            <div className="favourite_header">
                <h2 className="title-2">Young's Favourite</h2>
            </div>
            <div className="favourite_cards">
                <Card img={promo01Img} />
                <Card img={promo02Img} />
            </div>
        </section>
     );
}
 
export default Favourite;