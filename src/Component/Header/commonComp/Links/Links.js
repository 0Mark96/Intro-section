import style from './Links.module.scss'

const Links = () => {
    const {link} = style
    
  return (
    <>
      <a href='./#' className={link}>Careers</a>
      <a href='./#' className={link}>About</a>
    </>
  )
}

export default Links