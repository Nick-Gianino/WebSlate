import React, { useState, FormEvent } from 'react';
import '../../styles.css'; 

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = (e: FormEvent) => {
    e.preventDefault();

    console.log(name, email, message);

    saveContactInfo(name, email, message);

    setName('');
    setEmail('');
    setMessage('');
  };

  const saveContactInfo = (name: string, email: string, message: string) => {
    // Save info to Firebase or other database here
    console.log("aye we tried man");
  };

  return (
    <>
    <div className="contact-background">
    <div>
    <div className='contact-container'>
      <div className="contact-text">
      <h1>Contact us</h1>
      <p>Send a message and we will get back to you within 24 hours.</p>
      </div>
      
      <form className="contact-form" onSubmit={submitForm}>
        <label>Name</label><br />
        <input 
          className="name" 
          type="text" 
          placeholder="name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />
        <label>Email</label><br />
        <input 
          className="email" 
          type="email" 
          placeholder="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <label>Message</label><br />
        <textarea
          className="message"
          cols={30}
          rows={10}
          placeholder="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea><br />
        
        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default ContactUs;