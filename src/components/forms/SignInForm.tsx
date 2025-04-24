'use client';

import React, { useState } from 'react';
import OAuth from '../auth/OAuth';

const SignInForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (API calls would go here)
    console.log('Login form submitted', formData);
  };

  return (
    <div className="flex flex-col h-full">
      <form onSubmit={handleSubmit} className="space-y-6">
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
          Sign In
        </button>
      </form>

      <OAuth mode="signin" />
    </div>
  );
};

export default SignInForm;