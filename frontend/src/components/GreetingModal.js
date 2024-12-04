// File: components/GreetingModal.js
import React, { useState, useEffect } from 'react';
import './GreetingModal.css';

function GreetingModal({ setName }) {
  const [inputName, setInputName] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      setName(savedName);
    } else {
      setIsVisible(true);
    }
  }, [setName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', inputName); // Save name to localStorage
    setName(inputName); // Pass name to parent component
    setIsVisible(false); // Hide the modal
  };

  if (!isVisible) return null; // Don't render the modal if it's not visible

  return (
    <div className="modal-background">
      <div className="modal-content">
        <h1>Hello visitor, you're heading into Edwin's IT portfolio...</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">What is your name?</label>
          <input
            id="name"
            type="text"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default GreetingModal;
