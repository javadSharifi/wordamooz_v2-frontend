import Post from 'pages/Post';
import Category from 'pages/Category';
import React, { useContext } from 'react';
import Auth from 'pages/auth/Auth';
import { Navigate, useRoutes } from 'react-router-dom';
import Login from 'pages/auth/Login';
import Register from 'pages/auth/Register';
import { authContext } from 'context/AuthContext';
import AppLayouts from 'layouts/AppLayouts';

function App() {
  const [auth] = useContext(authContext);

  const routes = useRoutes([
    {
      path: '/auth',
      element: auth.loading ? <Navigate to="/" /> : <Auth />,
      children: [
        { index: true, element: <Login /> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
      ],
    },
    {
      path: '/',
      element: auth.loading ? <AppLayouts /> : <Navigate to="/auth" />,
      children: [
        { path: '/', index: true, element: <Category /> },
        { path: '/Categories/:idCategories', element: <Post /> },
      ],
    },
  ]);

  return routes;
}

export default App;
