import style from './Dropdown.module.scss'
import classnames from 'classnames';
import { useState,useEffect} from "react";
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
    
    useEffect(() => {
      const closeModal = (e) => {
        if (window.innerWidth > 992 && !e.target.closest(`.${features_wrapper},.${company_wrapper},.${btn_dropdown}`)) {
          setOpen(false)
        }
      }
      document.addEventListener('click', closeModal)
      return () => {      
        document.removeEventListener('click', closeModal)
      }
    }, [features_wrapper,company_wrapper,btn_dropdown])


    return(
      <li className={drop_wrapper} role='none'>
        
        <button className={btn_dropdown} onClick={toggleDrop} aria-expanded={open ? 'true' : 'false'} role='menuitem'>
          {children} <img src={open ? arrowUp : arrowDown} alt={'arrow'}/>
        </button>

        <ul className={classnames(children === 'Features' ? features_wrapper : company_wrapper,{[list_open]:open})} role='menu'>    
          { list.map(link => <Link key={link.id} link={link}/>) }
        </ul>
      
      </li>   
    )
  }
  export default Dropdown