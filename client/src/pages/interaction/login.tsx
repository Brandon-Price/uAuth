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

export default function Login() {

    return(
        <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className="space-y-4 w-full max-w-2xl items-center">
                <form className='p-10 bg-gray-100 rounded shadow flex flex-col items-center'>
                    <h1 className="mt-2 mb-4 text-2xl font-bold text-gray-800 text-center">User Login</h1>
                    <input 
                        placeholder='Username/Email'
                        value={""}
                        onChange={(e) => {}}
                        className='mb-2 w-2/3 p-2 border border-gray-300 rounded'
                    />
                    <input 
                        placeholder='Password'
                        value={""}
                        onChange={(e) => {}}
                        className='mb-2 w-2/3 p-2 border border-gray-300 rounded'
                    />
                    <button type='submit' className='w-2/3 p-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
                        Create User
                    </button>  
                </form>
                <Link id="register" href="./register">Don't have an Account?</Link>
            </div>
        </main>
    );
  }