import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './components/auth/auth-provider';
import ProtectedRouted from './components/protected-routed/protected-routed';
import Main from './pages/main';
import LogIn from './pages/registration/login';
import Registration from './pages/registration/registration';
import SignUp from './pages/registration/signup';

const AppRoutes = () => (
  <AuthProvider>
    <Routes>
      <Route path='/mini-spotyfi/' element={<Registration/>}>
        <Route index  element={<LogIn/>}/>
        <Route path='signup' element={<SignUp/>}/>
      </Route>
      <Route path='/mini-spotyfi/main' element={<ProtectedRouted redirectPath='/mini-spotyfi/'/>}>
        <Route index element={<Main/>} />
      </Route>
    </Routes>
  </AuthProvider>
)

export default AppRoutes;
