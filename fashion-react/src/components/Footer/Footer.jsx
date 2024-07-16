import './footer.css';
import facebookLogo from './../../img/socials/fb.svg';
import instLogo from './../../img/socials/inst.svg';
import tweetLogo from './../../img/socials/tw.svg';
import linkedLogo from './../../img/socials/in.svg';

const Footer = () => {
    return ( 
        <footer className='footer'>
            <div className="footer_content">
                <div className="footer_content-fashion">
                    <h3>FASHION</h3>
                    <p>Complete your style with awesome clothes from us.</p>
                    <div className='messengers'>
                        <div className="messengers-logo"><img src={facebookLogo} /></div>
                        <div className="messengers-logo"><img src={instLogo} /></div>
                        <div className="messengers-logo"><img src={tweetLogo} /></div>
                        <div className="messengers-logo"><img src={linkedLogo} /></div>
                    </div>
                </div>
                <div className='footer_content-links'>
                    <div className="links">
                        <h4>Company</h4>
                        <a href='#!'><p>About</p></a>
                        <a href='#!'><p>Contact Us</p></a>
                        <a href='#!'><p>Support</p></a>
                        <a href='#!'><p>Careers</p></a>
                    </div>
                    <div className="links">
                        <h4>Quick Link</h4>
                        <a href='#!'><p>Share Location</p></a>
                        <a href='#!'><p>Order Location</p></a>
                        <a href='#!'><p>Size Quide</p></a>
                        <a href='#!'><p>FAQs</p></a>
                    </div>
                    <div className='links'>
                        <h4>CLegal</h4>
                        <a href='#!'><p>Terms & conditions</p></a>
                        <a href='#!'><p>Privacy policy</p></a>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;