import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, like sending the data to a server
    console.log('Form submitted:', formData);
  };

  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '32px',
    fontWeight: '600',
    marginBottom: '16px',
    textAlign: 'center',
    color: '#333',
  };

  const contentStyle = {
    textAlign: 'center',
    marginBottom: '30px',
  };

  const emailLinkStyle = {
    color: '#0073e6',
    textDecoration: 'underline',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const formGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  };

  const labelStyle = {
    fontSize: '14px',
    fontWeight: '500',
    color: '#555',
  };

  const inputStyle = {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    color: '#333',
  };

  const textareaStyle = {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    color: '#333',
    resize: 'vertical',
  };

  const submitButtonStyle = {
    padding: '12px',
    backgroundColor: '#0073e6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const submitButtonHoverStyle = {
    ...submitButtonStyle,
    backgroundColor: '#005bb5',
  };

  return (
    <section style={containerStyle}>
      <h2 style={headingStyle}>Contact Us</h2>

      <div style={contentStyle}>
        <p>
          For any questions or concerns, please email{' '}
          <a href="mailto:hello@hotels-rooftop.com" style={emailLinkStyle}>
            emmasmithstay@gmail.com
          </a>{' '}
          or fill out the form below.
        </p>
        <p>
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={formGroupStyle}>
          <label htmlFor="name" style={labelStyle}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="email" style={labelStyle}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="subject" style={labelStyle}>
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={formGroupStyle}>
          <label htmlFor="message" style={labelStyle}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={textareaStyle}
            rows="4"
          />
        </div>

        <button
          type="submit"
          style={submitButtonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#005bb5')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#0073e6')}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
