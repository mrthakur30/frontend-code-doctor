"use client"
import { useRouter } from 'next/navigation';
import axios from 'axios';
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';


interface EmailCardProps {
    name: string;
    email: string;
    key: number;
  }
  
  const EmailCard: React.FC<EmailCardProps> = ({ name, email, key }) => {
    const router = useRouter();
    function waitOneSecond() {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000); 
      });
    }
    
    const deleteData = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault() ;
        const emailData = { email };
        try {
          const response = await axios.delete('https://code-doctor-backend.onrender.com/api/delete', {
            data: emailData, 
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
            if (response.status===200) {
              toast.success('Deleted successfully!');
              await waitOneSecond();
              window.location.href = '/admin'
            } else {
              toast.error('Error while deleting.');
            }
          } catch (error) {
            toast.error('An error occurred.' + error);
          }
    }

    return (
        <li className="flex md:gap-5 gap-2 p-2  w-96  items-center  my-2 justify-between md:p-5 rounded-sm bg-slate-950 hover:bg-slate-900  transition-colors duration-150 md:w-1/2">
            <div>
                <p className="font-light md:text-2xl">{name}</p>
                <p className="font-semibold ">{email}</p>
            </div>
            <button  onClick={deleteData} className="text-white bg-gray-800 hover:bg-red-600 focus:outline-none border font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-red-600">
                Delete
            </button>
            <Toaster />
        </li>
    )
}

export default EmailCard