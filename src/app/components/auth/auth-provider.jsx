import React, { createContext, useState, useMemo, useCallback } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState({
    login: 'Admin',
    password: 'qwerty123',
  });

  const [auth, setAuth] = useState(false);

  const createUser = useCallback((newUser, callback) => {
    setUser({...user, ...newUser})
    callback()
  }, [user])


  const value = useMemo(() => ({
    user,
    createUser,
    auth,
    setAuth
  }), [createUser, auth, user])

  return <AuthContext.Provider value={value}>
    {children}
  </AuthContext.Provider>
  
}
