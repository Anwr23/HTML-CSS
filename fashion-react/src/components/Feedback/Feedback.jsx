import EmailForm from '../emailForm/emailForm';
import './feedback.css';

const Feedback = () => {
    return ( 
        <section className='feedback'>
            <div className='feedback_content'>
                <h2 className='feedback_content-title'>
                    JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
                </h2>
                <div className='feedback_content-desc'>
                    Type your email down below and be young wild generation
                </div>
                <div className='feedback__content-form'>
                    <EmailForm />
                </div>
            </div>
        </section>
     );
}
 
export default Feedback;