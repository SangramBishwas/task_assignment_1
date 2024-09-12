import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-[#121a2b] min-h-screen'>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
