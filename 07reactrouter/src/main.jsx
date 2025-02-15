import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./components/Home/Home.jsx"
import About from "./components/about/About.jsx"
import Contact from "./components/contact/Contact.jsx"
import Users from './components/user/Users.jsx'
import {Github, githubInfoLoader} from './components/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= '/' element ={<Layout />}>
      <Route path = '' element= {<Home />} />
      <Route path = 'about' element = {<About />} />
      <Route path = 'contact' element = {<Contact />} />
      <Route path = 'users/' element = {<Users />}>
        <Route path = ':userid' element = {<Users />} />
      </Route>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} />
      <Route path = '*' element = {<div>Not Found</div>} /> 
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router= {router} />
  </StrictMode>

)
