import React, { useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [username, setUsername] = useState('');
  const userData = {
    username:"Suresh raina",
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.post('https://vercel-server-snowy.vercel.app/add', {userData});
    } catch (error) {
        console.error('Error sending username:', error);
      }
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Send Username</button>
    </form>
  );
};

export default YourComponent;
