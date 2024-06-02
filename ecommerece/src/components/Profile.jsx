import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          },
          withCredentials: true
        });
        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching profile:', err);
        if (err.response && err.response.status === 401) {
          setError('Unauthorized access. Please login.');
        } else {
          setError(err.message);
        }
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>; // Access and render the error message property
  }

  if (!profile) {
    return <div>No profile data available</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {profile.first} {profile.last}</p>
      <p>Role: {profile.role}</p>
      {/* Add more profile fields as needed */}
    </div>
  );
};

export default Profile;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Profile = () => {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   axios.interceptors.request.use(
//     config => {
//       const token = localStorage.getItem('token');
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//       }
//       return config;
//     },
//     error => {
//       return Promise.reject(error);
//     }
//   );

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/api/users/profile', { withCredentials: true });
//         setProfile(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error fetching profile:', err);
//         if (err.response && err.response.status === 401) {
//           setError('Unauthorized access. Please login.');
//         } else {
//           setError(err.message);
//         }
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>; // Access and render the error message property
//   }

//   if (!profile) {
//     return <div>No profile data available</div>;
//   }

//   return (
//     <div>
//       <h1>Profile</h1>
//       <p>Name: {profile.first} {profile.last}</p>
//       <p>Role: {profile.role}</p>
//       {/* Add more profile fields as needed */}
//     </div>
//   );
// };

// export default Profile;