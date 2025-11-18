import './App.css'
import Navbar from './components/Navbar'
import AddUsers from './components/AddUsers'
import AllUsers from './components/AllUsers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/all-users' element={<AllUsers/>}/>
      <Route path='/add-user' element={<AddUsers/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
