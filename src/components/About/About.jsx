import styles from './About.module.css'
export default function About(){
 return <section id="a-casa" className={styles.about}>
  <div data-reveal><p className="eyebrow">FORA DO FORMATO</p><h2>SOBRE A PIZZA QUADRADA</h2></div>
  <figure className={styles.figure}><img src="/images/about-dough.png" alt="Mãos preparando uma massa de pizza quadrada — imagem ilustrativa" width="1024" height="1536" loading="lazy" /><figcaption>UM NOVO JEITO DE COMER PIZZA.</figcaption></figure>
  <p className={styles.copy}>Texto demonstrativo sobre a proposta e identidade da Pizza Quadrada. Uma apresentação breve, pensada para comunicar sabor, cuidado e uma experiência contemporânea.</p>
  {/* TODO: substituir o texto demonstrativo pela história oficial da pizzaria. */}
  <details className={styles.story}><summary>CONHEÇA NOSSA HISTÓRIA <span aria-hidden="true">+</span></summary><p>A história oficial da Pizza Quadrada será apresentada aqui. Este conteúdo é demonstrativo e aguarda as informações da pizzaria.</p></details>
 </section>
}