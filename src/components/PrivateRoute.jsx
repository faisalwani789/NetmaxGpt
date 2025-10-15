import React from 'react'
import { useSelector } from 'react-redux';

const PrivateRoute = ({children}) => {
  const { user, loading } = useSelector((store) => store?.user);
  console.log(user)

  if (loading) {
    return <div>Loading...</div>; // or spinner
  }

  return user ? children : <Navigate to="/" />;
}

export default PrivateRoute