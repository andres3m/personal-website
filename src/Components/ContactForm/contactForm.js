import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./contactForm.css"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_bf5ll1m', 'template_fdvdjn8', formData, 'QD_q3sGt_le202mDG')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Email sent!!")
                // Reset form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            },                                 
            (err) => {
                console.log('FAILED...', err);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul id='labels-container'>
                <li id='name-container'>
                    <input type="text" name="name" value={formData.name} placeholder='Name' onChange={handleChange} required />
                </li>  
                <li id='email-container'>
                    <input type="email" name="email" value={formData.email} placeholder='Email' onChange={handleChange} required />
                </li>
                <li id='subject-container'>
                    <input type="text" name="subject" value={formData.subject} placeholder='Subject' onChange={handleChange} required />
                </li>
                <li id='message-container'>
                    <textarea name="message" value={formData.message} placeholder='Message' onChange={handleChange} required />
                </li>
            </ul>
            <button id='submit-button' type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
