import { instagram } from '../../data/site'
import useReveal from '../../hooks/useReveal'
import styles from './InstagramSection.module.css'
const posts=[
 ['gallery-01.png','Massa artesanal sendo preparada'],
 ['gallery-02.png','Pizza quadrada ao lado do forno'],
 ['gallery-03.png','Seleção de pizzas quadradas'],
 ['gallery-04.png','Detalhe de pizza artesanal'],
]
function InstagramIcon(){return <svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>}
export default function InstagramSection(){
 const root=useReveal()
 return <section ref={root} className={styles.instagram} id="galeria"><div className="container">
  <div data-reveal className={styles.head}><div><p className="eyebrow">UM POUCO MAIS DE QUADRADA</p><h2>SIGA A PIZZA QUADRADA</h2></div><a href={instagram} target="_blank" rel="noreferrer"><InstagramIcon />@pizza.quadrada__ <span aria-hidden="true">↗</span></a></div>
  <div className={styles.grid}>{posts.map(([name,alt])=><a href={instagram} target="_blank" rel="noreferrer" key={name} aria-label={`Ver no Instagram: ${alt}`}><img src={`/images/${name}`} alt={`${alt} — imagem ilustrativa`} width="1024" height="1024" loading="lazy"/><span><InstagramIcon />VER NO INSTAGRAM ↗</span></a>)}</div>
  <p className={styles.note}>Imagens ilustrativas. Acompanhe as novidades no Instagram oficial.</p>
 </div></section>
}