import React from 'react';
import accredian from "../images/accredian.png";
import {useNavigate} from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();

    const handleClick1 = () => {
        navigate('/')
    }

    const handleClick2 = () => {
        navigate('/refer')
    }

    const handleClick3 = () => {
        navigate('/resources')
    }

    const handleClick4 = () => {
        console.log("Clicked on 4");
        navigate('/about')
    }

  return (
    <>
        <div className='flex justify-between items-center my-10 ml-5'>
            <div className='flex items-center'>
                <div className='cursor-pointer mx-10'>
                    <img src={accredian} alt="logo" className="max-w-40" onClick={handleClick1}/>
                </div>
                {/* <Dropdown /> */}
            </div>
            <div className='flex items-center mr-20'>
                <button className="bg-white text-black font-bold text-lg mx-4" onClick={handleClick2}>Refer & Earn</button>
                <button className="bg-white text-black font-bold text-lg mx-4" onClick={handleClick3}>Resources</button>
                <button className="bg-white text-black font-bold text-lg mx-4" onClick={handleClick4}>About us</button>


            </div>
        </div>
    </>
  );
}

export default Navbar;
