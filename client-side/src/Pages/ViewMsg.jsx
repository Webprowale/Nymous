import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const ViewMsg = () => {

  const navigate = useNavigate();
  
  const [userInfo, setUserInfo] = useState(null);
  const [msg, setMsg] = useState('');

  
    const fetchMsg = async () => {
      try {
        
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    };
  

  return (
    <div className="container-fluid hero login">
      <div className="mx-auto formBody">
        <div className="text-center">
          <span className="fs-1 text-black">🧸</span>
          <h2 className="fw-bold fs-2 fText">Webprowale's Compliment </h2>
          <p className="mb-5 fw-semibold">
            All Anonymous compliments receive from  friends.
          </p>
        </div>
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default ViewMsg;
