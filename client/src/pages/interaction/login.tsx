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
            <div className="space-y-4 w-full max-w-2xl items-center">
                <form onSubmit={userLogin} className='p-10 bg-gray-100 rounded shadow flex flex-col items-center'>
                    <h1 className="mt-2 mb-4 text-2xl font-bold text-gray-800 text-center">Sign In</h1>
                    <h3 className="mt-2 mb-4 underline text-blue-800 text-center hover:text-blue-600"><Link className='p-4' href="./register">or Create an Account</Link></h3>
                    <input
                        placeholder='Username'
                        value={user.username}
                        onChange={(e) => setUser({...user, username: e.target.value})}
                        className='mb-2 w-2/3 p-2 border border-gray-300 rounded'
                    />
                    <input
                        placeholder='Password'
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                        className='mb-2 w-2/3 p-2 border border-gray-300 rounded'
                    />
                    <button type='submit' className='w-2/3 p-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
                        Sign In
                    </button>
                    <div className='p-2 flex justify-evenly'>
                        <Link className='p-4 underline text-blue-800 hover:text-blue-600' href={"/"}>App Dashboard</Link>
                        <Link className='p-4 underline text-blue-800 hover:text-blue-600' href="./forgot-password">Forgot Password?</Link>
                    </div> 
                </form>
            </div>
        </main>
    );
  }