import style from './Header.module.scss'
// import { useState, useLayoutEffect } from 'react'
import logo from '../../images/logo.svg'
//component
import NavBarMobile from './NavBarMobile/NavBarMobile'
import NavBarDesktop from './NavBarDesktop/NavBarDesktop'


const Header = () => {
  const {header,logo_img} = style

  //TEST WITH USEEFFECT

  // // detect screen size 
  // const [isMobile,setIsMobile]=useState(false)
  // useLayoutEffect(()=>{
  //   setIsMobile(window.innerWidth < 992 && true)
  //   const handleResize = ()=>{
  //       window.innerWidth < 992 ?
  //       setIsMobile(true) : setIsMobile(false)
  //   }
  //   window.addEventListener('resize',handleResize)
  //   return ()=>{
  //       window.removeEventListener('resize',handleResize)
  //   }
  // },[])

  return (
    <header className={header} >
        <a href='./#' className={logo_img}><img src={logo} alt='logo(snap)'/></a>
        <NavBarDesktop />
        <NavBarMobile />
        {/* {isMobile && <NavBarMobile/>}
        {!isMobile && <NavBarDesktop/>}     */}
    </header>
  )
}

export default Header