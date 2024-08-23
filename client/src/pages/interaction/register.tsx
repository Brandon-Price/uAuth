import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Register() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/';
  const [user, setUser] = useState({ username: '', email: '', password: '' });

  return(
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <div className="space-y-4 w-full max-w-2xl items-center">
            <form className='p-10 bg-gray-100 rounded shadow flex flex-col items-center'>
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
                <Link className='p-4' href="./login">Already have an account?</Link>  
            </form>
        </div>
    </main>
);
  }