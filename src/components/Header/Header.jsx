import React from 'react';
import { LogoutBtn} from '..'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const authStatus = useSelector((state)=> state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: 'portfolio',
      slug: "/",  
      active: true
    },
    
      {
        name: 'your orders',
        slug: "/orders",
        active: authStatus
      },
      

  ]

  return (
    <nav className="flex items-center justify-between bg-purple-50 p-4">
      <div className="flex items-center">
        <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
        </svg>
      </div>
      <div className="flex items-center space-x-6">
        <ul className='list-none flex space-x-10'>
      {navItems.map((item)=> 
                item.active ? (
                  <li key={item.name}>
                    <Link
                      to={item.slug}  className="text-gray-700 hover:text-gray-900">
                      {item.name}
                    </Link>
                  </li>
                ) : null)} 
          </ul>  
      </div>
      <div>
        {!authStatus ? (<Link to="/login" className="bg-white text-purple-600 px-4 py-2 rounded-md hover:bg-purple-100 transition duration-300">
          Log in →
        </Link>) : (<LogoutBtn/>)}
        
      </div>
    </nav>
  );
};

export default Header;