import React, { useState } from 'react';
import './NameForm.css';

function NameForm({ onSubmit }) {
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userName.trim()) {
      alert("Please enter your name.");
      return;
    }

    // ✅ Updated form URL and correct entry ID
    const formURL = 'https://docs.google.com/forms/d/e/1FAIpQLSfQQhWNsXfY44pUyw7Zjbxz-9etBXwXkOR5L6dhCSMLOBsokg/formResponse';
    const formData = new FormData();
    formData.append("entry.1192426299", userName); // ✅ This matches "YOUR NAME" in your sheet

    fetch(formURL, {
      method: "POST",
      mode: "no-cors",
      body: formData
    });

    // ⏳ Wait a bit before showing the portfolio
    setTimeout(() => {
      onSubmit(userName);
    }, 2000);
  };

  return (
    <div className="name-form-container">
      <form onSubmit={handleSubmit} className="name-form">
        <h2>Welcome! Please enter your name to continue</h2>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <button type="submit" className="animated-button">Enter</button>
      </form>
    </div>
  );
}

export default NameForm;
