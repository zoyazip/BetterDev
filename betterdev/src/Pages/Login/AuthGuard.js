import React from 'react'
import Cookies from 'js-cookie';
import { Navigate, Outlet } from "react-router-dom"

const useAuth = () => {
  const user = {loggedIn: Cookies.get("jwt") ? true : false }
  return user && user.loggedIn
}

const AuthGuard = () => {
  const isAuth = useAuth()
  return isAuth ? <Outlet /> : <Navigate to="/login"/>
}

export default AuthGuard