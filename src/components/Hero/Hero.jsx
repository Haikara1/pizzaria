import { orderUrl } from '../../data/site'
import { useLayoutEffect,useRef } from 'react'
import { gsap } from '../../utils/gsap'
import styles from './Hero.module.css'
export default function Hero(){
 const root=useRef(null)
 useLayoutEffect(()=>{
  const mm=gsap.matchMedia()
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
   const ctx=gsap.context(()=>{
    gsap.from('[data-hero-copy]',{opacity:0,x:-30,duration:.7,stagger:.1,ease:'power2.out'})
    gsap.from('[data-hero-image]',{opacity:0,x:40,scale:.96,duration:1,ease:'power2.out'})
   },root)
   return ()=>ctx.revert()
  })
  return ()=>mm.revert()
 },[])
 return <section ref={root} className={styles.hero} id="inicio" aria-labelledby="hero-title">
  <div className={`container ${styles.inner}`}><div className={styles.copy}>
   <p data-hero-copy className={styles.eyebrow}><span /> PIZZA QUADRADA</p>
   <h1 data-hero-copy id="hero-title">UM NOVO JEITO<br />DE COMER<br /><span>PIZZA.</span></h1>
   <p data-hero-copy className={styles.description}>Fora do formato. Dentro dos seus planos.<br />Encontre a sua favorita e vem de quadrada.</p>
   <div data-hero-copy className={styles.actions}><a className="button button-accent" href="#cardapio">Ver cardápio <span aria-hidden="true">→</span></a><a className="button button-outline" href={orderUrl} target="_blank" rel="noopener noreferrer">Pedir agora ↗</a></div>
   <div data-hero-copy className={styles.note}><span aria-hidden="true">◆</span> SEU PRÓXIMO PEDIDO COMEÇA AQUI.</div>
  </div><div data-hero-image className={styles.visual}><img src="/images/hero-pizza.png" alt="Pizza quadrada com queijo derretido e manjericão, ao lado do forno" width="1536" height="1024" fetchPriority="high" /><div className={styles.stamp}>FORA DO<br /><strong>PADRÃO.</strong><span>PIZZA QUADRADA</span></div></div></div>
  <div className={styles.ribbon}><span>ESCOLHA SEU SABOR</span><b aria-hidden="true">◆</b><span>PEÇA SUA QUADRADA</span><b aria-hidden="true">◆</b><span>APROVEITE CADA PEDAÇO</span></div>
 </section>
}