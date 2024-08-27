import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function ForgotPassword() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/';
    const [user, setUser] = useState({ id: '', username: '', email: '', password: '' });

    // Update User
    const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.put(`${apiUrl}users/${user}`, {
                username: user.username,
                email: user.email,
                password: user.password
            })
        } catch(error){
            console.error('Error could not update user:', error);
        }
    }

    return(
        <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="space-y-4 w-full max-w-2xl items-center">
                <form className='p-10 bg-gray-100 rounded shadow flex flex-col items-center'>
                    <h1 className="mt-2 mb-4 text-2xl font-bold text-gray-800 text-center">Reset Password</h1>
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
                        Request Password Reset
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