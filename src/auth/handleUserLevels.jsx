/* eslint-disable react/prop-types */
import { Navigate, Outlet } from 'react-router';

const HandleUserLevels = ({ userType, isAdmin, isInstituteAdmin }) => {
  return userType ? (
    <Outlet />
  ) : (
    <Navigate to={isAdmin ? '/admin' : (isInstituteAdmin ? '/institute-admin' : '/')} replace={true} />
  );
};

export default HandleUserLevels;
