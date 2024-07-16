import './payday.css';
import saleImg from './../../img/images/promo-img.jpg';

const Payday = () => {
    return ( 
        <section className="Payday">
            <div className="payday-content">
                <div className="payday_img">
                    <img src={saleImg} alt='SaleImage' />
                </div>
                <div className="payday_text">
                    <div className="payday_text-title">
                        <h1>
                        <span className='highlight'>
                            <span>
                                PAYDAY 
                            </span>
                        </span>
                        <br />
                            SALE NOW
                        </h1>
                    </div>
                    <div className="payday_text-desc">
                        Spend minimal $100 ger 30% off voucher code for your next purchase
                    </div>
                    <div className="payday_text-deadline">
                        1 June - 10 June 2024
                    </div>
                    <div className="payday_btn-wrapper">
                            <a href="#!" className="payday_btn">
                                Shop Now
                            </a>
                        </div>
                </div>
            </div>
        </section>
     );
}
 
export default Payday;