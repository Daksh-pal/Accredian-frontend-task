import React from 'react'
import Navbar from './Navbar'
import Background from "../images/Background.png";
import { useNavigate } from 'react-router-dom';

function LandingPage() {

    const navigate = useNavigate();

    const handleRefer = () =>{
        navigate("/refer");
    }

  return (
    <>
      <Navbar />
      <div className="flex mx-auto max-w-[1000px]">
        <div className="bg-[#EEF5FF] flex-1  max-h-[500px] flex flex-col rounded-s-3xl items-center justify-center">
            <div className='mb-16'>
            <p className='text-7xl font-bold'>Let's Learn <br /> & Earn</p>
            <p className='mt-16 text-3xl'>Get a chance to win <br />up-to <span className='text-blue-600 font-bold'>Rs. 15,000 </span></p>
            <button onClick={handleRefer} className='px-7 py-2 mt-12 bg-blue-500 hover:bg-blue-600 text-white rounded-md'>Refer Now</button>

            </div>
        </div>
        <div className="bg-[#EEF5FF] flex-1 relative rounded-e-3xl">
            <img src={Background} className="object-cover h-full w-full" />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
