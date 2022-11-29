import style from './Links.module.scss'

const Links = () => {
    const {link} = style
    
  return (
    <>
      <li className={link} role='none'><a href='./#' role='menuitem'>Careers</a></li>
      <li role='none' className={link}><a href='./#' role='menuitem'>About</a></li>
    </>
  )
}

export default Links