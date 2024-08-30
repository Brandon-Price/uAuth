import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
}

`
    Since I am not using an actual state I won't be actually allowing a sign in. I have made a sign in before
    if you are interested to see. Check out my other projects where I use redux for sign in and login.

    I will just be fetching the data and using console for it's success.
`

export default function Login() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/';
    const [user, setUser] = useState({ username: '', password: '' });

    // User Login
    const userLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const res = await axios.post(`${apiUrl}users/login`, user);
            console.log(res);
        } catch(error){
            console.error('Error Logging In:', error);
        }
    }

    return(
        <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="space-y-4 w-full flex flex-col max-w-2xl items-center">
                <form onSubmit={userLogin} className='p-10 w-full bg-white rounded-xl shadow flex flex-col items-center'>
                    <h1 className="mt-2 mb-4 text-2xl text-gray-800">SIGN IN</h1>
                    <input
                        placeholder='Username'
                        value={user.username}
                        onChange={(e) => setUser({...user, username: e.target.value})}
                        className='mb-10 w-2/3 p-2 bg-transparent text-lg border-b-2 border-black placeholder-black focus:outline-none focus:placeholder-gray-400'
                    />
                    <input
                        placeholder='Password'
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                        className='mb-10 w-2/3 p-2 bg-transparent text-lg border-b-2 border-black placeholder-black focus:outline-none focus:placeholder-gray-400'
                    />
                    <button type='submit' className='w-2/3 p-2 m-4 text-white bg-gray-600 rounded hover:bg-gray-800'>
                        Sign In
                    </button>
                    <div className='flex m-2'>
                        <button type='button' className='p-2 m-2 rounded-xl border-2 border-gray-600 rounded hover:bg-gray-700'>
                            <Link className='text-black hover:text-white pl-4 pr-4 pt-2 pb-2 inline-block relative z-10 -ml-4 -mr-4 -mt-2 -mb-2' href="./register">Create an Account</Link>
                        </button>
                        <button type='button' className='p-2 m-2 rounded-xl border-2 border-gray-600 rounded hover:bg-gray-700'>
                            <Link className='text-black hover:text-white pl-4 pr-4 pt-2 pb-2 inline-block relative z-10 -ml-4 -mr-4 -mt-2 -mb-2' href="./forgot-password">Forgot Password?</Link>
                        </button>
                    </div>
                </form>
                <button type='button' className='w-1/4 p-2 m-2 relative text-white bg-blue-400 rounded hover:bg-blue-500 bg-center'>
                        <Link className='p-4' href={"/"}>App Dashboard</Link>
                </button> 
            </div>
        </main>
    );
  }