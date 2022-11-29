import style from './NavBarDesktop.module.scss'
// component
import Dropdown from '../commonComp/DropdownLinks/DropdownLinks'
import Links from '../commonComp/Links/Links'
import BtnLogReg from "../commonComp/BtnLogReg/BtnLogReg"


const NavBarDesktop = () => {
  const {navBar_desktop,nav_link,btn_wrapper} = style
  return (
    <div className={navBar_desktop} role='navigation'>
        
        <nav  role='navigation'>
          <ul className={nav_link} role='menubar'>
            <Dropdown>Features</Dropdown>
            <Dropdown>Company</Dropdown>  
            <Links/>
          </ul>

        </nav>

        <div className={btn_wrapper}>
          <BtnLogReg />
        </div>

    </div>
  )
}

export default NavBarDesktop