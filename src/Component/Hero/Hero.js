import style from './Hero.module.scss'
//component
import Picture from './Picture/Picture'
import Intro from './Content/Intro'


const Hero = () => {
    const {hero} = style
  
  return (
    <section className={hero}>
      <Picture />
      <Intro />
    </section>
  )
}

export default Hero 