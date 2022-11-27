import style from './Header.module.scss'
import { useState,useEffect } from 'react'
import logo from '../../images/logo.svg'
//component
import NavBarMobile from './NavBarMobile/NavBarMobile'
import NavBarDesktop from './NavBarDesktop/NavBarDesktop'


const Header = () => {
  const {header} = style
  
  const [screenSize,setScreenSize]=useState(window.innerWidth)
  useEffect(()=>{
    const handleResize = ()=>{
        setScreenSize(window.innerWidth)
    }
    window.addEventListener('resize',handleResize)
    return ()=>{
        window.removeEventListener('resize',handleResize)
    }
  },[])
  
  return (
    <header className={header} >
        <img src={logo} alt='logo(snap)'/>
        {screenSize < 992 && <NavBarMobile/>}
        {screenSize >= 992 && <NavBarDesktop/>}    
    </header>
  )
}

export default Header