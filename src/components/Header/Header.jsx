import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LogoutBtn from './LogoutBtn';
import {Container} from '../../components/index';
import { useNavigate } from 'react-router-dom';
import Logo from '../Logo';
function Header() {

  let isActive = useSelector((state)=>state.auth.status);
  const navigate = useNavigate();
  let arr = [
    {
      name:'Home',
      slug:"/",
      active: isActive || 1
    },
    {
      name:'AllPosts',
      slug:"/all-posts",
      active: isActive
    },
    {
      name:'Login',
      slug:"/login",
      active: !isActive
    },
    {
      name:'Add Posts',
      slug:"/add-posts",
      active: isActive
    },
    {
      name:'Sign-Up',
      slug:"/signup",
      active: !isActive
    }
  ]
  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
        <div className='mr-4'>
          <Link to='/'>
            <Logo/>
          </Link>
        </div>
      <ul className='flex ml-auto'>
        {
          arr.map((item)=>
          item.active?(
            <li key={item.name}>
              <button
                onClick={()=>navigate(item.slug)}
                className='inline-block items-center px-2 md:px-6 py-1 md:py-2 duration-200 text-white hover:bg-blue-100 hover:text-black rounded-full font-bold'
              >{item.name}</button>
            </li>
          ):null
        )
        }
        {
          isActive && (<li><LogoutBtn/></li>)
        }
      </ul>
      </nav>
      </Container>
    </header>
  )
}

export default Header