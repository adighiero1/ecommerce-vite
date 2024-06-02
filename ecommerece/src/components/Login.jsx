
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './login.scss'; // Assuming you have some styles for the login page

// const Login = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             console.log('Sending login request...');
//             const response = await axios.post('http://localhost:8080/api/users/login', { email, password }, { withCredentials: true });
//             console.log('Login response:', response);
    
//             if (response.status === 200) {
//                 const token = response.data.token;
//                 console.log('Received token:', token);
    
//                 // Save the token to local storage
//                 localStorage.setItem('token', token);
//                 console.log('Token saved to local storage');
    
//                 // Redirect to the profile page
//                 navigate('/api/users/profile');
//             } else {
//                 console.error('Login failed:', response.data.message); // Assuming the server sends a message field in the response
//                 // Handle the login failure here, e.g., display an error message to the user
//             }
//         } catch (error) {
//             console.error('Login error:', error);
//             // Handle other types of errors, e.g., network errors
//         }
//     };
    

//     return (
//         <div className="login-container">
//             <h2>Login here!</h2>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="email">Email: </label>
//                 <input
//                     type="email"
//                     name="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <br /><br />
//                 <label htmlFor="password">Password: </label>
//                 <input
//                     type="password"
//                     name="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <br /><br />
//                 <button type="submit">Send</button>
//             </form>
//             <br />
//             <p>Don't have an account? <a href="/register"><button type="button">Register</button></a></p>
//             <br />
//             <a href="/api/sessions/github">GitHub</a>
//         </div>
//     );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.scss'; // Assuming you have some styles for the login page

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('coderCookieToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Sending login request...');
            const response = await axios.post('http://localhost:8080/api/users/login', { email, password }, { withCredentials: true });
            console.log('Login response:', response);
    
            if (response.status === 200) {
                const token = response.data.token;
                console.log('Received token:', token);
    
                // Save the token to local storage
                localStorage.setItem('token', token);
                console.log('Token saved to local storage');
    
                // Redirect to the profile page
                navigate('/api/users/profile');
            } else {
                console.error('Login failed:', response.data.message); // Assuming the server sends a message field in the response
                // Handle the login failure here, e.g., display an error message to the user
            }
        } catch (error) {
            console.error('Login error:', error);
            // Handle other types of errors, e.g., network errors
        }
    };
    

    return (
        <div className="login-container">
            <h2>Login here!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br /><br />
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br /><br />
                <button type="submit">Send</button>
            </form>
            <br />
            <p>Don't have an account? <a href="/register"><button type="button">Register</button></a></p>
            <br />
            <a href="/api/sessions/github">GitHub</a>
        </div>
    );
};

export default Login;