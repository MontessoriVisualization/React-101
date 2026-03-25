import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

const Router = () => {
  return (
      <div>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

  )
}
const egObject =({isActive}) => {
return{ color: isActive ? 'red' : 'white'}
  };


const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
             <li>

                    <NavLink to="/" className={({isActive}) => isActive ? 'text-red-500' : 'text-white'}>
                        Home
                    </NavLink>
             </li>
                                    <li>

                    <NavLink to="/about" className={({isActive}) => isActive ? 'text-red-500' : 'text-white'}>
                        About
                    </NavLink>

                </li>
            </ul>
        </nav>
    )
}

const App = () => {
  return (
<BrowserRouter>
      <div>
        <h1>React Router with Tailwind CSS</h1>
        <Navbar />
        <Router />
    </div>
</BrowserRouter>
  )
}



export default App