// File: components/GreetingModal.js
import React, { useState } from 'react';
import './GreetingModal.css';

function GreetingModal({ setName }) {
  const [inputName, setInputName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(inputName);
  };

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
