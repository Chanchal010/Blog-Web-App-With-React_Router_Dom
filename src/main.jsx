import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Header from './Components/Header/Header'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github,{githubInfoLoader} from './Components/Github/Github.jsx'


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout />,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       },
//       {
//         path:"user/:id",
//         element:<User />
//       },
//       {
//         loader:{githubInfoLoader},
//         path:"github",
//         element:<Github />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
