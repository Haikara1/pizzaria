import { orderUrl } from '../../data/site'
import styles from './LocationOrder.module.css'
export default function LocationOrder(){
 return <section className={styles.section} id="contato" aria-label="Localização, pedidos e funcionamento"><div className={`container ${styles.grid}`}>
  <div className={styles.location}><span className={styles.icon} aria-hidden="true">⌖</span><h2>ONDE ESTAMOS</h2>
   <p><strong>Pizza Quadrada</strong><br />Cruz das Almas - BA</p>
   <iframe
    className={styles.map}
    src="https://www.openstreetmap.org/export/embed.html?bbox=-39.110547%2C-12.668304%2C-39.094547%2C-12.656304&layer=mapnik&marker=-12.662304%2C-39.102547"
    title="Localização da Pizza Quadrada em Cruz das Almas"
    loading="lazy"
   />
   <a className={`button ${styles.directions}`} href="https://www.google.com/maps/dir/?api=1&destination=-12.662304%2C-39.102547" target="_blank" rel="noopener noreferrer">Como chegar <span aria-hidden="true">→</span></a>
  </div>
  <div className={styles.order} id="pedir"><p className={styles.eyebrow}>HOJE COMBINA COM PIZZA</p><h2>PEÇA SUA<br /><span>QUADRADA.</span></h2><p>Delivery ou retirada.</p>
   <a className="button button-accent" href={orderUrl} target="_blank" rel="noopener noreferrer" aria-describedby="order-status">Pedir agora <span aria-hidden="true">↗</span></a><small id="order-status">Faça seu pedido pelo WhatsApp.</small>
  </div>
  <div className={styles.hours} id="funcionamento"><span className={styles.icon} aria-hidden="true">◷</span><h2>FUNCIONAMENTO</h2>
   <p><strong>18h às 23h30</strong></p><p className={styles.note}>Funcionamos todos os dias!</p>
  </div>
 </div></section>
}
