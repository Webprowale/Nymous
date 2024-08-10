import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const ViewMsg = () => {

  return (
    <div className="container-fluid hero login" style={{minHeight:'100vh'}}>
      <div className="mx-auto formBody">
        <div className="text-center">
          <span className="fs-1 text-black">🧸</span>
          <h2 className="fw-bold fs-2 fText">Webprowale's Compliment </h2>
          <p className="mb-5 fw-semibold">
            All Anonymous compliments receive from  friends.
          </p>
        </div>
        <div className="shadow bg-white rounded mb-3">
          <div className="hero rounded-top" style={{
            width:'100%',
            minHeight:'7vh'
          }}></div>
          <div className="msg p-3">
         <p className='small'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ad adipisci qui autem quisquam vel ipsam commodi assumenda expedita possimus! Et vel asperiores dignissimos. Amet officiis obcaecati architecto fugiat reprehenderit.</p>
         </div>
        </div>
        <div className="shadow bg-white rounded mb-3">
          <div className="hero rounded-top" style={{
            width:'100%',
            minHeight:'7vh'
          }}></div>
          <div className="msg p-3">
         <p className='small'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ad adipisci qui autem quisquam vel ipsam commodi assumenda expedita possimus! Et vel asperiores dignissimos. Amet officiis obcaecati architecto fugiat reprehenderit.</p>
         </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMsg;
