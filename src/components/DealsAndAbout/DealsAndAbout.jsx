import { useState } from 'react'
import { instagram } from '../../data/site'
import instagramGif from '../../assets/quadrada-gif.gif'
import About from '../About/About'
import useReveal from '../../hooks/useReveal'
import styles from './DealsAndAbout.module.css'
export default function DealsAndAbout(){
 const root=useReveal()
 const [showAnimation, setShowAnimation] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
 return <section ref={root} className={styles.section}><div className={`container ${styles.grid}`}>
  <div id="promocoes" className={styles.promotions}><div data-reveal><h2>PROMOÇÕES</h2><p className={styles.invite}>Fique de olho em nosso instagram!</p></div>
   {showAnimation && <a id="promotions-animation" className={styles.gifCrop} href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Visitar o Instagram da Pizza Quadrada">
    <img src={instagramGif} alt="Perfil da Pizza Quadrada no Instagram" width="426" height="240" loading="lazy" />
    <span className={styles.visitOverlay}><span className="button button-accent">Visite <span aria-hidden="true">↗</span></span></span>
   </a>}
   <a className={styles.link} href={instagram} target="_blank" rel="noopener noreferrer">@pizza.quadrada__ <span aria-hidden="true">↗</span></a>
   <button type="button" className={styles.animationToggle} onClick={() => setShowAnimation(visible => !visible)} aria-expanded={showAnimation}>{showAnimation ? 'Ocultar animação' : 'Mostrar animação'}</button>
  </div><About />
 </div></section>
}
