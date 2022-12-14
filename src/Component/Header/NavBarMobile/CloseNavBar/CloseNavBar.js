import iconClose from '../../../../images/icon-close-menu.svg'

const CloseNavBar = ({setIsNavBarOpen}) => {
  return (
    <button onClick={()=>setIsNavBarOpen(false)} style={{alignSelf:'flex-end'}}>
        <img src={iconClose} alt='close'/>
    </button>
  )
}

export default CloseNavBar