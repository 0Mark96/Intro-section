import style from './BtnLogReg.module.scss'


const BtnLogReg = () => {
    const {login_btn,register_btn} = style
  return (
    <>
      <button className={login_btn}>Login</button>
      <button className={register_btn}>Register</button>  
    </>

  )
}

export default BtnLogReg