import style from './Link.module.scss'


const Link = ({link}) => {
    const {list_link} = style
    
    const {icon,title} = link

  return (
    
        <li key={link.id} className={list_link} role='none'>
            <a href='./#' role='menuitem'>
              {icon && <img src={link.icon} alt='•'/>}
              {title}
            </a>
        </li>
        
  )
}

export default Link