import React, { useState } from 'react';
import axios from 'axios';
import './register.scss'; // Import the SCSS file

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/users/register', formData);
      console.log(response.data);
      // Handle success (e.g., redirect to login page)
    } catch (error) {
      console.error(error);
      // Handle error (e.g., display error message)
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <label htmlFor="first_name">First name: </label>
        <input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
        />
        <br /><br />
        <label htmlFor="last_name">Last name: </label>
        <input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
        />
        <br /><br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br /><br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br /><br />
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;