import React from "react";

interface Card {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

const CardComponent: React.FC<{ card: Card }> = ({ card }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-2 mb-2 hover:bg-gray-100">
    <div className="text-sm text-gray-600">ID: {card.id}</div>
    <div className="text-lg font-semibold text-gray-800">Username: {card.username}</div>
    <div className="text-md text-gray-700">Email: {card.email}</div>
    <div className="text-md text-gray-700">Password: {card.password}</div>
    <div className="text-md text-gray-700">Created at: {card.createdAt}</div>
    <div className="text-md text-gray-700">Updated At: {card.updatedAt}</div>
  </div>
  );
};

export default CardComponent;