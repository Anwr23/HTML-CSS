import { useState } from 'react';
import './emailForm.css';

const EmailForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <form className='emailForm' onSubmit={handleSubmit}>
      <input
        className='emailInput'
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Add your email here"
        required
      />
      <button className='emailButton' type="submit">SEND</button>
    </form>
  );
};


export default EmailForm;
