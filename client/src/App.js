import React, { useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [username, setUsername] = useState('');
  const userData = {
    username:"Suresh raina",
  }

  const imageSelected = (event)=>{
      const formData = new FormData();
      formData.append('titleImage', event.target.files[0]);

        try {
          let response = await axios.post('https://travel-server-sooty.vercel.app/upload', formData,{headers: {"Content-Type": "multipart/form-data"}});
        } catch (error) {
            console.error('Error sending username:', error);
          }
    }

  return (
    <div>
      <input type="file" id="imageUpload" name="image" accept="image/*" onChange={imageSelected}></input>
    </div>
  );
};

export default YourComponent;
