import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function ReferEarn() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    refereeName: '',
    refereeEmail: '',
    courseName: ''
  });

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/referrals', formData);
      console.log(res.data);
      navigate('/');
      toast.success("Course referred successfully");
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }

  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div id='outer' className='min-h-screen flex justify-center mt-20'>
        <div id='inner' className='bg-[#EEF5FF] flex min-w-[500px] max-h-[500px] rounded-lg justify-center'>
          <form onSubmit={handleForm} className='bg-[#EEF5FF] text-center justify-center max-w-[200px]'>
            <p className='text-center font-bold text-4xl my-5'>Refer & Earn</p>
            <input
              onChange={handleChange}
              name="referrerName"
              type="text"
              placeholder='Referrer Name'
              className='border my-1 p-4 rounded-xl'
              value={formData.referrerName}
            />
            <input
              onChange={handleChange}
              name="referrerEmail"
              type="email"
              placeholder='Referrer Email'
              className='border my-1 p-4 rounded-xl'
              value={formData.referrerEmail}
            />
            <input
              onChange={handleChange}
              name="refereeName"
              type="text"
              placeholder='Referee Name'
              className='border my-1 p-4 rounded-xl'
              value={formData.refereeName}
            />
            <input
              onChange={handleChange}
              name="refereeEmail"
              type="email"
              placeholder='Referee Email'
              className='border my-1 p-4 rounded-xl'
              value={formData.refereeEmail}
            />
            <input
              onChange={handleChange}
              name="courseName"
              type="text"
              placeholder='Course name'
              className='border my-1 p-4 rounded-xl'
              value={formData.courseName}
            />
            <button type="submit" className='w-full px-7 py-2 mt-12 bg-blue-500 hover:bg-blue-600 text-white rounded-md'>
              Refer Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
