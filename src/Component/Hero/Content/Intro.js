import style from './Intro.module.scss'
//component
import Client from './Client/Client'

const Intro = () => {
    const {intro_cont,title,paragraph,btn} = style
  return (
    <div className={intro_cont}>
      <div >
        <h1 className={title}>Make remote work</h1>
      </div>
      <p className={paragraph}>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
      <button className={btn}>Learn more</button>
      <Client />
    </div>
  )
}

export default Intro