import BrandLogo from '../BrandLogo/BrandLogo'
import { instagram,navigation,orderUrl } from '../../data/site'
import styles from './Footer.module.css'
export default function Footer(){
 return <footer className={styles.footer}><div className="container"><div className={styles.top}>
  <div className={styles.brand}><a href="#inicio" aria-label="Pizza Quadrada — início"><BrandLogo /></a><p>Um novo jeito de comer pizza.</p></div>
  <nav aria-label="Navegação do rodapé"><h2>NAVEGAÇÃO</h2>{navigation.map(([label,href])=><a key={href} href={href}>{label}</a>)}</nav>
  <div><h2>CONTATO</h2><a href={orderUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a><a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a></div>
  <div><h2>FUNCIONAMENTO</h2><p>18h às 23h30</p><p>Funcionamos todos os dias!</p><h2 className={styles.address}>ENDEREÇO</h2><p>Rua Manoel Pedro da Silveira, 445<br />Ana Lucia · Cruz das Almas - BA<br />CEP 44380-000</p><a href="https://www.google.com/maps/dir/?api=1&destination=-12.662304%2C-39.102547" target="_blank" rel="noopener noreferrer">Ver no Google Maps ↗</a></div>
 </div><div className={styles.bottom}><p>© {new Date().getFullYear()} Pizza Quadrada</p><p>Conteúdo demonstrativo · Informações comerciais a confirmar</p><a href="#inicio">VOLTAR AO TOPO ↑</a></div></div></footer>
}
