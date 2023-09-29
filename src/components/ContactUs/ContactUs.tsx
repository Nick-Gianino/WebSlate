import React, { FormEvent, useState } from 'react';

const ContactUs: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log(name, email, message);
    };

    return (
        <div className="services-container">
            <div className="service-section">
                <div className="service-header">
                    <h2>Contact Us</h2>
                </div>
            </div>
            <div className="service-section">
                <div className="service-content">
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Your name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                        <input 
                            type="email" 
                            placeholder="Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <textarea 
                            placeholder="Your message" 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)} 
                            required 
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;