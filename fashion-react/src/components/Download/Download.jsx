import './download.css';
import appImg from './../../img/images/vouchers-img.png'
import storeImg from './../../img/icons/app-store.png'
import googleImg from './../../img/icons/google-play.png'

const Download = () => {
    return ( 
        <section className='Download'>
            <div className="download_content">
                <div className="download_text">
                    <h2 className='download_title'>DOWNLOAD APP & GET THE VOUCHER</h2>
                    <div className='download_desc'>Get 30% off for first transaction using Rondovision mobile app for now.</div>
                    <div className="download_links">
                        <div className='appstore_img'>
                            <a href='#!'>
                                <img src={storeImg} />
                            </a>
                        </div>
                        <div className='googleplay_img'>
                            <a href='#!'>
                                <img src={googleImg} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="download_img">
                    <img src={appImg} />
                </div>
            </div>
        </section>
     );
}
 
export default Download;