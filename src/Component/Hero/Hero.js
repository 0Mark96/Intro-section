import style from './Hero.module.scss'
//component
import Picture from './Picture/Picture'
import Intro from './Content/Intro'


const Hero = () => {
    const {hero} = style
  
  return (
    <main className={hero}>
      <Picture />
      <Intro />
    </main>
  )
}

export default Hero 