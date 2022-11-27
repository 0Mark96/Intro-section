import style from './Client.module.scss'
//img
import databiz from '../../../../images/client-databiz.svg'
import audiophile from '../../../../images/client-audiophile.svg'
import meet from '../../../../images/client-meet.svg'
import maker from '../../../../images/client-maker.svg'



const Client = () => {
    const {client_cont} = style

  return (
    <div className={client_cont}>
        <img src={databiz} alt='databiz'/>
        <img src={audiophile} alt='audiophile'/>
        <img src={meet} alt='meet'/>
        <img src={maker} alt='maker'/>
    </div>
  )
}

export default Client