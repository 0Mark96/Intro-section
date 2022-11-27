import iconOpen from '../../../../images/icon-menu.svg'

const OpenNavBar = ({setIsNavBarOpen}) => {

  return (
    <button onClick={()=>setIsNavBarOpen(true)}>
      <img src={iconOpen} alt='open'></img>
    </button>
  )
}

export default OpenNavBar