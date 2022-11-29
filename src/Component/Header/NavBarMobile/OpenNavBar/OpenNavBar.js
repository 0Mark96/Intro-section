import iconOpen from '../../../../images/icon-menu.svg'
import style from './OpenNavBar.module.scss'

const OpenNavBar = ({setIsNavBarOpen}) => {

  return (
    <button onClick={()=>setIsNavBarOpen(true)} className={style.open_navBar}>
      <img src={iconOpen} alt='open'></img>
    </button>
  )
}

export default OpenNavBar