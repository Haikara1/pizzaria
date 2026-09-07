import { useEffect, useRef, useState } from 'react'
import BrandLogo from '../BrandLogo/BrandLogo'
import { navigation, orderUrl } from '../../data/site'
import styles from './Header.module.css'
export default function Header() {
 const [open,setOpen] = useState(false)
 const toggle = useRef(null), header = useRef(null)
 useEffect(() => {
  if (!open) return
  document.body.classList.add('menu-open')
  const onKey = event => {
   if(event.key === 'Escape'){setOpen(false);toggle.current.focus()}
   if(event.key === 'Tab'){
    const items=[...header.current.querySelectorAll('a,button')].filter(el=>el.getClientRects().length)
    const first=items[0],last=items[items.length-1]
    if(event.shiftKey && document.activeElement===first){event.preventDefault();last.focus()}
    else if(!event.shiftKey && document.activeElement===last){event.preventDefault();first.focus()}
   }
  }
  const desktop=matchMedia('(min-width:1024px)')
  const closeOnDesktop=()=>{if(desktop.matches)setOpen(false)}
  desktop.addEventListener('change',closeOnDesktop)
  document.addEventListener('keydown',onKey)
  return ()=>{document.body.classList.remove('menu-open');document.removeEventListener('keydown',onKey);desktop.removeEventListener('change',closeOnDesktop)}
 },[open])
 return <header ref={header} className={styles.header}><div className={`container ${styles.inner}`}>
  <a href="#inicio" aria-label="Pizza Quadrada — início" className={styles.brand} onClick={()=>setOpen(false)}><BrandLogo /></a>
  <nav id="main-navigation" className={`${styles.nav} ${open?styles.open:''}`} aria-label="Navegação principal">
   {navigation.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}
   <a className={`button button-accent ${styles.mobileOrder}`} href={orderUrl} target="_blank" rel="noopener noreferrer" onClick={()=>setOpen(false)}>Pedir agora →</a>
  </nav>
  <a className={`button button-accent ${styles.order}`} href={orderUrl} target="_blank" rel="noopener noreferrer">Pedir agora <span aria-hidden="true">↗</span></a>
  <button ref={toggle} className={styles.toggle} onClick={()=>setOpen(!open)} aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} aria-controls="main-navigation"><span>{open?'✕':'☰'}</span></button>
 </div></header>
}