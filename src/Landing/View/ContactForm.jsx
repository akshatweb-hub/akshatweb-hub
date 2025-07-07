import React, { useState } from 'react';
import "./ContactForm.css";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    quantity: '',
    payment: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // // You can send form data to the server or handle it as needed
    // console.log(formData);
    // alert("Form submitted successfully!");

    try {
      const response = await fetch('https://localhost:7259/api/Registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Form submitted and data inserted into DB!');
        setFormData({
          name: '',
          contactNumber: '',
          email: '',
          quantity: '',
          payment: '',
          address: '',
        });
      } else {
        const error = await response.json();
        alert('Failed to submit: ' + error.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error while submitting. Check console.');
    }
  };

  return (

    <div className="page-content">

<div className="dz-bnr-inr style-1 text-center">
          <div className="container">
            <div className="dz-bnr-inr-entry">
              <h1>Contact Form</h1>
              {/* Breadcrumb Row */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Contact Form</li>
                </ul>
              </nav>
              {/* Breadcrumb Row End */}
            </div>
          </div>
          <img className="bg-shape1" src="images/home-banner/shape1.png" alt />
          <img className="bg-shape2" src="images/home-banner/shape1.png" alt />
          <img className="bg-shape3" src="images/home-banner/shape3.png" alt />
          <img className="bg-shape4" src="images/home-banner/shape3.png" alt />
        </div>
    
    <div className="form-container">

      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        {/* No Header */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit contact number"
          />
        </div>

        <div>
          <label htmlFor="email">Email ID:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            min="1"
          />
        </div>

        <div>
          <label htmlFor="payment">Payment:</label>
          <input
            type="number"
            id="payment"
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
          />
        </div>

        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>

        {/* No Footer */}
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
