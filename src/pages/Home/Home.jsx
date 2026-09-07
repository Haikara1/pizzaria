import TopBar from '../../components/TopBar/TopBar'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import MenuShowcase from '../../components/MenuShowcase/MenuShowcase'
import DealsAndAbout from '../../components/DealsAndAbout/DealsAndAbout'
import LocationOrder from '../../components/LocationOrder/LocationOrder'
import InstagramSection from '../../components/InstagramSection/InstagramSection'
import Footer from '../../components/Footer/Footer'
export default function Home(){
 return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><TopBar/><Header/><main id="conteudo"><Hero/><MenuShowcase/><DealsAndAbout/><LocationOrder/><InstagramSection/></main><Footer/></>
}