import style from './NavBarMobile.module.scss'
import classnames from 'classnames'
import { useState } from 'react'
//component
import OpenNavBar from './OpenNavBar/OpenNavBar'
import CloseNavBar from './CloseNavBar/CloseNavBar'
import BtnLogReg from '../commonComp/BtnLogReg/BtnLogReg'
import Dropdown from '../commonComp/DropdownLinks/DropdownLinks'
import Links from '../commonComp/Links/Links'

const NavBarMobile = () => {
    const {opacity,navBar_mobile,navBar_open,nav_link,btn_wrapper} = style
    
    const [isNavBarOpen,setIsNavBarOpen] = useState(false)
  
  return (
    <>
    <OpenNavBar setIsNavBarOpen={setIsNavBarOpen}/>
    
    {isNavBarOpen && <div className={opacity} onClick={()=>setIsNavBarOpen(false)}></div>}
   
    <div className={classnames(navBar_mobile,{[navBar_open]:isNavBarOpen})}>
        
        <CloseNavBar setIsNavBarOpen={setIsNavBarOpen}/>
       
        <nav  role='navigation' className={nav_link} >
          <ul role='menubar'>
            <Dropdown>Features</Dropdown>
            <Dropdown>Company</Dropdown>  
            <Links/>
          </ul>
        </nav>

        <div className={btn_wrapper}>
          <BtnLogReg />
        </div> 
    
    </div>
    </>
  )
}

export default NavBarMobile




