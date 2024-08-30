import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardComponent from '../components/CardComponent';
import Link from 'next/link';

interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
}

export default function Home() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api/';
    const [users, setUsers] = useState<User[]>([]);
    const [newUser, setNewUser] = useState({ username: '', email: '', password: '' });
    const [updateUser, setUpdateUser] = useState({ id: '', username: '', email: '', password: '' });

    // Fetch users
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${apiUrl}users`);
                setUsers(res.data.reverse());
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // Create User
    const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try{
            const res = await axios.post(`${apiUrl}users`, newUser);
            setUsers([res.data, ...users]);
            setNewUser({ username: '', email: '', password: ''})
        } catch(error){
            console.error('Error creating user:', error);
        }
    }

    // Update User
    const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.put(`${apiUrl}users/${updateUser.id}`, {
                username: updateUser.username,
                email: updateUser.email,
                password: updateUser.password
            })
            setUpdateUser({ id: '', username: '', email: '', password: ''});
            setUsers(
                users.map((user) => {
                    if(user.id === parseInt(updateUser.id)){
                        return {...user, username: updateUser.username, email: updateUser.email, password: updateUser.password}
                    }
                    return user
                })
            )
        } catch(error){
            console.error('Error could not update user:', error);
        }
    }

    // Delete user
    const deleteUser = async (userId: number) => {
        try {
            await axios.delete(`${apiUrl}users/${userId}`);
            setUsers(users.filter((user) => user.id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
            <div className='text-right space-y-4 w-full'>
                <Link className='p-4 text-xl bg-blue-300 rounded-xl hover:bg-blue-500' href="interaction/login">Login</Link>
            </div>
            <div className="space-y-4 w-full max-w-2xl">
                <h1 className="text-2xl font-bold text-gray-800 text-center">Database Management Testing</h1>
                {/* Create User */}
                <form onSubmit={createUser} className='p-4 bg-blue-100 rounded shadow'>
                    <h2 className='w-full text-center p-2 text-lg'>This is to test adding users to backend.</h2>
                    <input 
                        placeholder='Username'
                        value={newUser.username}
                        onChange={(e) => setNewUser({...newUser, username: e.target.value})}
                        className='mb-2 w-full p-2 border border-gray-300 rounded'
                    />
                    <input 
                        placeholder='Email'
                        value={newUser.email}
                        onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                        className='mb-2 w-full p-2 border border-gray-300 rounded'
                    />
                    <input 
                        placeholder='Password'
                        value={newUser.password}
                        onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                        className='mb-2 w-full p-2 border border-gray-300 rounded'
                    />
                    <button type='submit' className='w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600'>
                        Create User
                    </button>        
                </form>
                {/* Update user */}
                <form onSubmit={handleUpdateUser} className="p-4 bg-green-100 rounded shadow">
                    <h2 className='w-full text-center p-2 text-lg'>This is to test update route on backend.</h2>
                    <input
                        placeholder="User ID"
                        value={updateUser.id}
                        onChange={(e) => setUpdateUser({ ...updateUser, id: e.target.value })}
                        className="mb-2 w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        placeholder="New Name"
                        value={updateUser.username}
                        onChange={(e) => setUpdateUser({ ...updateUser, username: e.target.value })}
                        className="mb-2 w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        placeholder="New Email"
                        value={updateUser.email}
                        onChange={(e) => setUpdateUser({ ...updateUser, email: e.target.value })}
                        className="mb-2 w-full p-2 border border-gray-300 rounded"
                    />
                    <input
                        placeholder="New Password"
                        value={updateUser.password}
                        onChange={(e) => setUpdateUser({ ...updateUser, password: e.target.value })}
                        className="mb-2 w-full p-2 border border-gray-300 rounded"
                    />
                    <button type="submit" className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-600">
                        Update User
                    </button>
                </form>
                {/* Delete User */}
                <div className="space-y-2">
                <h2 className='w-full text-center p-2 text-lg'>This shows users, and tests if you can delete them</h2>
                    {users.map((user) => (
                        <div key={user.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                        <CardComponent card={user} />
                        <button onClick={() => deleteUser(user.id)} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
                            Delete User
                        </button>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}