import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from "react-redux"
import authService from '../../appwrite/auth'
import {logout} from "../../store/authSlice"

function LogoutBtn() {
  const dispatch = useDispatch()

  const logouthandler = ()=>{
    authService.logout().then(()=>{
      dispatch(logout())
    })
  }
  return (
    <Link onClick={logouthandler} to="/" className="bg-white text-purple-600 px-4 py-2 rounded-md hover:bg-purple-100 transition duration-300">
      Logout →
    </Link>
  )
}

export default LogoutBtn