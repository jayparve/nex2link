import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from "./store/store.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthLayout } from './components/Index.js'
import Login from './components/Login.jsx'
import SignUp from './components/SignUp.jsx'
import Home from "./pages/Home.jsx"
import Orders from "./components/Orders.jsx"
import AdminPanel from "./components/AdminPanel.jsx"



const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>),
      },
      {
        path: "/orders",
        element: (
          <AuthLayout authentication={true}>
            <Orders />
          </AuthLayout>
        )
      },
  

    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
