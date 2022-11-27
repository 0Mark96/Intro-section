import style from './Dropdown.module.scss'
import classnames from 'classnames';
import { useState } from "react";
import { dropdownList } from "./dropdownList";
//icon
import arrowDown from '../../../../images/icon-arrow-down.svg'
import arrowUp from '../../../../images/icon-arrow-up.svg'
//comp
import Link from './Link/Link';

  const Dropdown = ({children}) => {
    const {drop_wrapper,btn_dropdown,list_open,features_wrapper,company_wrapper} = style
   
    const list = children === 'Features' ? dropdownList.features : dropdownList.company
    //toggle dropdown
    const [open,setOpen]=useState()
    const toggleDrop = ()=>{
        setOpen(!open)
    }

    return(
      <nav className={drop_wrapper}>
        
        <button className={btn_dropdown} onClick={toggleDrop}>
          {children} <img src={open ? arrowUp : arrowDown} alt='+'/>
        </button>

        <ul className={classnames(children === 'Features' ? features_wrapper : company_wrapper,{[list_open]:open})}>    
          { list.map(link => <Link key={link.id} link={link}/>) }
        </ul>
      
      </nav>   
    )
  }
  export default Dropdown