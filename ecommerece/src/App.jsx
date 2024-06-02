// import React from 'react';
// import Home from './components/Home';
// import Header from './components/Header';
// import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router-dom';

// function App() {

//   const Layout=()=>{
//     return(<div><Header/>
    
//     </div>);
//   }
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: (
//         <Layout/>
//       ),
//       children:[{
//         path:"/",
//         element:<Home/>
//       }]
//     },
//   ]);

//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

function App() {

  const Layout = ({ children }) => {
    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
    },
    {path: '/login',
    element: (
      
        <Login />
      
    ),
  },
  {path: '/register',
    element: (
      <Layout>
        <Register/>
      </Layout>
    ),},
    {path: '/api/users/profile',
  element: (
    <Layout>
      <Profile/>
    </Layout>
  ),},
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
