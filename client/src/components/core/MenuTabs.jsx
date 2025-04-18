import React, { useState } from 'react';

const menuItems = {
  Starter: [
    { name: 'Spring Rolls', price: '₹120' },
    { name: 'Paneer Tikka', price: '₹150' }
  ],
  Breakfast: [
    { name: 'Masala Dosa', price: '₹80' },
    { name: 'Poha', price: '₹60' }
  ],
  Lunch: [
    { name: 'Rajma Chawal', price: '₹100' },
    { name: 'Thali (Veg)', price: '₹150' }
  ],
  Dinner: [
    { name: 'Butter Chicken', price: '₹220' },
    { name: 'Paneer Butter Masala', price: '₹200' }
  ]
};
 
export const MenuTabs = () => {
  const [activeTab, setActiveTab] = useState('Starter')
  return (
  <div className='container'>
    <ul className='nav nav-tabs justify-content-center' id='menuTabs'>
    {
      Object.keys(menuItems).map((category) => (
        <li className='nav-item' key={category}>
          <button className={`nav-link ${activeTab === category ? "active bg-warning text-dark" : ""}`}
           onClick={() => setActiveTab(category)}
          >{category}</button>
        </li>
      ))
    }
    </ul>
    <div>
      {
        menuItems[activeTab].map((item, index) =>(
          <div className="d-flex justify-content-between border-bottom py-2" key={index}>
            <strong>{item.name}</strong>
            <span className="text-muted">{item.price}</span>
          </div>
        ))
      }
    </div>
  </div>
  )
}
