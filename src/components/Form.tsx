import React, { useState } from 'react'

type Props = {}

export const Form = (props: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();


    const formData = { name, email };
    try {

      const response = await fetch('https://code-doctor-backend.onrender.com/api/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Form data sent successfully!');
      } else {
        alert('Error sending form data.');
      }
    } catch (error) {
      alert('An error occurred.' + error);
    }
    setEmail('');
    setName('');

  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4">
      <div className=" p-0.5 rounded-full w-80 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
        <input className="p-3 w-full rounded-full bg-black focus:outline-none" type="text" id="name" onChange={(e) => setName(e.target.value)} value={name} placeholder="Enter Your Name" />
      </div>
      <div className="p-0.5 rounded-full w-80 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
        <input className="p-3 w-full bg-black rounded-full focus:outline-none" type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Your Email" />
      </div>
      <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Join 
        </span>
      </button>
    </form>
  )
}