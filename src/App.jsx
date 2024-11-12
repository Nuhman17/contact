import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import { Route,Routes } from 'react-router-dom'
import './bootstrap.min.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
    <Header/>
    <Routes>
       
       <Route path='/' element={<Landing/> }/>
       <Route path='/home' element={<Home/> }/>
    </Routes>
    < Footer/>
    <ToastContainer/>



    
 
    </>
  )
}

export default App
