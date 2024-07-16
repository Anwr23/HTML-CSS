import './promo.css';
import promoImg from './../../img/images/header-img.jpg';

const Promo = () => {
    return ( 
        <section className="promo">

            <div className="container">
                <div className="promo_content">
                    <div className="promo_text">
                        <div className="promo_title">
                        <span className='highlight'>
                                <span>
                                    LET'S
                                </span>
                            </span> 
                            EXPLORE
                            <span className='highlight highlight--yellow'>
                                <span>
                                    UNIQUE
                                </span>
                            </span>
                            CLOTHES.
                        </div>

                        <div className="promo_desc">
                            Live for Ingluential and Innovative fashion!
                        </div>

                        <div className="promo_btn-wrapper">
                            <a href="#!" className="promo_btn">
                                Shop Now
                            </a>
                        </div>
                    </div>

                    <div className="promo_image">
                        <img src={promoImg} alt='promoImg' />
                    </div>
                </div>
            </div>

        </section>
     );
}
 
export default Promo;