import React from 'react'

interface Props{
    label: String,
    type: String
}


function Input({label, type}: Props) {
  return (
    <div className="mb-2">
        <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-800"
        >
            {label}
        </label>
        <input
            type={`${type}`}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
        />
    </div>
  )
}

export default Input