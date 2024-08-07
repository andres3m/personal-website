// ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Subject:</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div>
                <label>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;
