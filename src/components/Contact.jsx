import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_fgg4lhf',
      'template_e4euu84',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'aobakwemodillane27@gmail.com'
      },
      '5CSk5EYfxucnaf1Wb'
    )
    .then(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error(error);
      setStatus('Failed to send message. Please try again.');
    });
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name"
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input 
          type="email" 
          name="email"
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea 
          name="message"
          placeholder="Your Message" 
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send</button>
        {status && <p style={{marginTop: '1rem', textAlign: 'center'}}>{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
