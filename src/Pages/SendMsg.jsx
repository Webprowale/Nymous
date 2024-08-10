import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
const SendMsg = () => {
    const { id} = useParams()
    const navigate = useNavigate();
   const [msg, setMsg] = useState(null)
   const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
     console.log(msg);
      toast.success("Anonymous send successfully",{
        onclose:()=>navigate('/')
    })
    }
    catch(error){
        toast.error("Failed to send anonymous message")
    }
   }
  return (
    <div className="container-fluid hero login">
    <div className=" mx-auto formBody">
      <div className="text-center">
        <span className="fs-1 text-black">🧸</span>
        <h2 className="fw-bold  fs-2 fText">Write {id}</h2>
        <p className="mb-5 fw-semibold">
          Send anonymous compliments to {id} for free.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
         <textarea name="text" id="text" rows={5} className='form-control' onChange={(e)=>setMsg(e.target.value)} style={{ resize: 'none'}}/>
        <button
          type="submit"
          className="formBtn hero text-white px-5 py-2 rounded-pill w-100 mt-3"
          
        >
          Send
        </button>
      </form>
    </div>
  </div>
  )
}

export default SendMsg