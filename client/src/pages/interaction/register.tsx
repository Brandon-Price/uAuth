import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Register() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/';
  const [user, setUser] = useState({ username: '', email: '', password: '' });
  const [passwordMatchError, setPasswordMatchError] = useState(false);

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

    const handleConfirmPassword = (text:string) => {

        // handle confirmpassword
        if (user.password != text) {
            setPasswordMatchError(true);
        } 

        if (user.password == text) {
            setPasswordMatchError(false);
        }
    };

  return(
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
        <div className="space-y-4 w-full max-w-2xl items-center flex flex-col">
            <form onSubmit={createUser} className='p-10 w-full bg-white rounded-xl shadow flex flex-col items-center'>
                <h1 className="mt-2 mb-4 text-2xl text-gray-800 text-center">CREATE ACCOUNT</h1>
                <input 
                    placeholder='Username'
                    value={user.username}
                    onChange={(e) => setUser({...user, username: e.target.value})}
                    className='mb-10 w-2/3 p-2 bg-transparent text-lg border-b-2 border-black placeholder-black focus:outline-none focus:placeholder-gray-400'
                />
                <input type="email"
                    placeholder='Email'
                    value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    className='mb-10 w-2/3 p-2 bg-transparent text-lg border-b-2 border-black placeholder-black focus:outline-none focus:placeholder-gray-400'
                />
                <input 
                    placeholder='Password'
                    type='password'
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    className='mb-10 w-2/3 p-2 bg-transparent text-lg border-b-2 border-black placeholder-black focus:outline-none focus:placeholder-gray-400'
                />
                <input 
                    placeholder='Confirm Password'
                    type='password'
                    onChange={(e) => handleConfirmPassword(e.target.value)}
                    className='mb-10 w-2/3 p-2 bg-transparent text-lg border-b-2 border-black placeholder-black focus:outline-none focus:placeholder-gray-400'
                />
                {passwordMatchError && <p className='p-2 text-red-400'>Passwords do not match</p>}
                <button type='submit' disabled={passwordMatchError} className='w-2/3 p-2 m-4 text-white bg-gray-600 rounded hover:bg-gray-800 disabled:opacity-70 disabled:bg-gray-800'>
                    Create Account
                </button>
                <button type='button' className='p-2 m-2 rounded-xl border-2 border-gray-600 rounded hover:bg-gray-700'>
                    <Link className='text-black hover:text-white pl-4 pr-4 pt-2 pb-2 inline-block relative z-10 -ml-4 -mr-4 -mt-2 -mb-2' href="./login">Have an Account?</Link>
                </button>
            </form>
            <button type='button' className='w-1/4 p-2 m-2 relative text-white bg-blue-400 rounded hover:bg-blue-500 bg-center'>
                <Link className='p-4' href={"/"}>App Dashboard</Link>
            </button> 
        </div>
    </main>
);
  }