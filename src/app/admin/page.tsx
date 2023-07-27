"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmailList from '@/components/EmailList';
import Loader from '@/components/Loader';

const AdminPanel = () => {
  const [query, setQuery] = useState('');
  const [fetchedData , setFetchedData] = useState([]);
  const [emailData, setEmailData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://code-doctor-backend.onrender.com/api/data');
      setFetchedData(response.data);
      setEmailData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };



  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    
    const filteredData = fetchedData.filter((item : any) => {
      const lowerCaseQuery = query.toLowerCase();
      return (
        item.name.toLowerCase().includes(lowerCaseQuery) ||
        item.email.toLowerCase().includes(lowerCaseQuery)
      );
    });
    setEmailData(filteredData);
  }, [query]);

  if (loading) {
    return <Loader />;
  }

  return (
    <main className="h-screen">
      <div className="flex flex-col justify-center">
        <p className="text-3xl w-full text-center font-semibold my-5">Email Data List</p>
        <input
          className="font-semibold p-3 m-5 outline-none bg-slate-950"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          value={query}
          placeholder="Enter to Search Name and Email"
        />
        <div className="md:m-16 py-16 rounded-3xl mx-3 bg-white bg-opacity-10 min-h-full">
          <EmailList emailData={emailData} />
        </div>
      </div>
    </main>
  );
};

export default AdminPanel;