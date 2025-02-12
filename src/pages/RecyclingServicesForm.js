import React, { useState, useEffect } from 'react';
import './RecyclingServicesForm.css';

const RecyclerPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('wasteCollectionData')) || [];
    setData(storedData);
  }, []);

  return (
    <div className="recycler-container">
      <h1>Recycling Services</h1>
      <table className="recycler-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Waste Category</th>
            <th>Waste Amount (kg)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.email}</td>
              <td>{entry.address}</td>
              <td>{entry.phone}</td>
              <td>{entry.wasteCategory}</td>
              <td>{entry.wasteAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecyclerPage;