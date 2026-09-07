import styles from './BrandLogo.module.css'
import logo from '../../assets/logo-pizza-quadrada.png'
export default function BrandLogo() {
 return <img className={styles.logo} src={logo} alt="Pizza Quadrada" width="2084" height="755" />
}
