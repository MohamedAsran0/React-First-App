
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Portfolio from './Pages/Portfolio/Portfolio'
import Layout from './Layouts/Layout'

const router = createBrowserRouter(
  [
    {path : '/React-First-App', element :<Layout />, children : [
      
      {path : '/React-First-App', element : <Home />},

      {path : '/React-First-App/about', element : <About />},

      {path : '/React-First-App/portfolio', element : <Portfolio />},

      {path : '/React-First-App/contact', element : <Contact />},

      {path : '*', element : <div className='vh-100'>
        <h2 className='text-black-50 text-center mt-5 pt-5 fw-bold fs-1'>Not Found</h2>
        <h2 className='text-black-50 text-center'>This page doesn’t exist.</h2>
      </div>},
    ]}
  ]
)

function App() {

  return (
    
    RouterProvider({router})
   
  )
}

export default App
