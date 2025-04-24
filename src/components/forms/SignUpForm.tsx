'use client';

import React, { useState } from 'react';
import OAuth from '../auth/OAuth';

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (API calls would go here)
    console.log('Signup form submitted', formData);
  };

  return (
    <div className="flex flex-col h-full bg-re">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="firstName" className="block lable-sm text-primary-text mb-2">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="input-sm"
              required
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="lastName" className="block lable-sm text-primary-text mb-2">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="input-sm"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="username" className="block lable-sm text-primary-text mb-2">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            className="input-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block lable-sm text-primary-text mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="input-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block lable-sm text-primary-text mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="input-sm"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-hover transition duration-300 mt-2"
        >
          Sign Up
        </button>
      </form>

      <OAuth mode="signup" />
    </div>
  );
};

export default SignUpForm;