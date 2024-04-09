import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  //'http://localhost:3000/api/send-email'
  //'https://api-g36q5boh2q-uc.a.run.app/api/send-email'

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Retrieve the token from localStorage
    const token = localStorage.getItem('driverToken');
    if (!token) {
      alert('You are not logged in.');
      return;
    }
  
    // The API endpoint for sending emails
    const apiEndpoint = 'http://localhost:3000/api/send-email';
  
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Add the token in the Authorization header
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Thank you for your message!');
      } else {
        const errorMessage = await response.text();
        console.error('Error sending message:', errorMessage);
        alert('There was a problem sending your message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending your message.');
    }
  };
  
  

  return (
    <div className="contact-container">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

<button type="submit" style={{ backgroundColor: '#01860f', color: 'white' }}>Send Message</button>
      </form>
      <div className="number">
      <h2 className="text-0xl font-semibold text-gray-800 mb-4">Call this number for emergenices: 070 123 45 67</h2>
         </div>
    </div>
  );
}

export default Contact;
