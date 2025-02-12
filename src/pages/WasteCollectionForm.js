import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './WasteCollectionForm.css';

const WasteCollectionForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    wasteCategory: '',
    wasteAmount: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage
    const existingData = JSON.parse(localStorage.getItem('wasteCollectionData')) || [];
    existingData.push(formData);
    localStorage.setItem('wasteCollectionData', JSON.stringify(existingData));
    // Redirect to the confirmation page
    navigate('/confirmation', { state: { formData } });
  };

  return (
    <div className="form-container">
      <h1>Waste Collection Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Waste Category:
          <select name="wasteCategory" value={formData.wasteCategory} onChange={handleChange} required>
            <option value="">Select Category</option>
            <option value="organic">Organic</option>
            <option value="plastic">Plastic</option>
            <option value="metal">Metal</option>
            <option value="paper">Paper</option>
            <option value="glass">Glass</option>
          </select>
        </label>
        <label>
          Waste Amount (kg):
          <input type="number" name="wasteAmount" value={formData.wasteAmount} onChange={handleChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default WasteCollectionForm;