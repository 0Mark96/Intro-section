import style from './Picture.module.scss'
import imgDesktop from '../../../images/image-hero-desktop.png'
import imgMobile from '../../../images/image-hero-mobile.png'


const Picture = () => {
    const {picture_wrapper} = style
  return (
    <picture className={picture_wrapper}>
      <source media="(min-width: 992px)" srcSet={imgDesktop} />
      <img src={imgMobile} alt="Chris standing up holding his daughter Elva" />
   </picture>
  )
}

export default Picture