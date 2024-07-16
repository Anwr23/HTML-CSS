import './brands.css';
import amazonLogo from './../../img/brands/Amazon.png'
import hmLogo from './../../img/brands/HM.png'
import lacosteLogo from './../../img/brands/Lacoste.png'
import levisLogo from './../../img/brands/Levis.png'
import obeyLogo from './../../img/brands/Obey.png'
import shopifyLogo from './../../img/brands/Shopify.png'

const Brands = () => {
    return ( 
        <section className='brands'>
            <ul className='brands_list'>
                <li><a href="#!"><img src={amazonLogo} alt='AmazonLogo'/></a></li>
                <li><a href="#!"><img src={hmLogo} alt='H&MLogo' /></a></li>
                <li><a href="#!"><img src={lacosteLogo} alt='LacosteLogo' /></a></li>
                <li><a href="#!"><img src={levisLogo} alt='LevisLogo' /></a></li>
                <li><a href="#!"><img src={obeyLogo} alt='ObeyLogo' /></a></li>
                <li><a href="#!"><img src={shopifyLogo} alt='ShopifyLogo' /></a></li>
            </ul>

        </section>
     );
}
 
export default Brands;