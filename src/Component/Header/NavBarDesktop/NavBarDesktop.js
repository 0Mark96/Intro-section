import style from './NavBarDesktop.module.scss'
// component
import Dropdown from '../commonComp/DropdownLinks/DropdownLinks'
import Links from '../commonComp/Links/Links'
import BtnLogReg from "../commonComp/BtnLogReg/BtnLogReg"


const NavBarDesktop = () => {
  const {navBar_desktop,nav_link,btn_wrapper} = style
  return (
    <div className={navBar_desktop}>
        
        <nav className={nav_link}>
          <Dropdown>Features</Dropdown>
          <Dropdown>Company</Dropdown>  
          <Links/>
        </nav>

        <div className={btn_wrapper}>
          <BtnLogReg />
        </div>

    </div>
  )
}

export default NavBarDesktop