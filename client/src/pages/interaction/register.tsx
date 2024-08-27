import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Register() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/';
  const [user, setUser] = useState({ username: '', email: '', password: '' });

    // Create User
    const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const res = await axios.post(`${apiUrl}users`, user);
            console.log(res);
        } catch(error){
            console.error('Error creating user:', error);
        }
    }

  return(
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <div className="space-y-4 w-full max-w-2xl items-center">
            <form onSubmit={createUser} className='p-10 bg-gray-100 rounded shadow flex flex-col items-center'>
                <h1 className="mt-2 mb-4 text-2xl font-bold text-gray-800 text-center">Create Account</h1>
                <input 
                    placeholder='Username'
                    value={user.username}
                    onChange={(e) => setUser({...user, username: e.target.value})}
                    className='mb-2 w-2/3 p-2 border border-gray-300 rounded'
                />
                <input type="email"
                    placeholder='Email'
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    className='mb-2 w-2/3 p-2 border border-gray-300 rounded'
                />
                <input 
                    placeholder='Password'
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    className='mb-2 w-2/3 p-2 border border-gray-300 rounded'
                />
                <button type='submit' className='w-2/3 p-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
                    Create Account
                </button>
                <div className='p-2 flex justify-evenly'>
                    <Link className='p-4 text-blue-800 underline hover:text-blue-600' href="./login">Login</Link>
                    <Link className='p-4 text-blue-800 underline hover:text-blue-600' href={"/"}>Dashboard</Link>
                </div>  
            </form>
        </div>
    </main>
);
  }