/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router'

const HandleNotFound = ({ to }) => {
  const prevRoute = useLocation()
  return <Navigate to={to} state={{ prevRoute }} replace />
}

export default HandleNotFound
