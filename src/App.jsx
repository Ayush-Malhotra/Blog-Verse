import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authservice from './appwrite/auth.js';
import { login } from './store/authSlice.js';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  const [loading, setloading] = useState(true);
  let dispatch = useDispatch();
  useEffect(()=>{
    authservice.getCurrentUser()
    .then((response)=>{
      if(response)
      {
        dispatch(login(response));
      }
    })
    .finally(
      setloading(false)
    )
  },[]);

  return !loading ?(
    <div className='w-full min-h-screen flex flex-wrap content-between bg-gray-200'>
      <div className='w-full block'>
        <Header />
        <main>
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ): (<div>...loading</div>)
}

export default App
