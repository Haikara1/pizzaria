import { orderUrl } from '../../data/site'
import { useState } from 'react'
import { ProductDialog, CartDialog } from './OrderDialog'
import { addCartItem } from './orderUtils'
import { pizzas } from './menuData'
import useReveal from '../../hooks/useReveal'
import styles from './MenuShowcase.module.css'
export default function MenuShowcase(){
 const root=useReveal()
 const [selectedPizza, setSelectedPizza] = useState(null)
 const [cartOpen, setCartOpen] = useState(false)
 const [items, setItems] = useState([])
 const [message, setMessage] = useState('')
 const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)
 const addToCart = (pizza, size, quantity) => {
  setItems(current => addCartItem(current, pizza, size, quantity))
  setSelectedPizza(null)
  setMessage(`${quantity} ${quantity === 1 ? 'item adicionado' : 'itens adicionados'} ao carrinho.`)
  setCartOpen(true)
 }
 return <section ref={root} className={styles.menu} id="cardapio"><div className="container">
  <div data-reveal className={styles.heading}><p className="eyebrow">ESCOLHA A SUA QUADRADA</p><h2>NOSSAS FAVORITAS</h2><p>Três sabores. Um novo jeito de aproveitar pizza.</p></div>
  <div className={styles.cartBar}><p role="status" aria-live="polite">{message}</p><button type="button" className="button" onClick={() => setCartOpen(true)} aria-haspopup="dialog">Meu carrinho ({itemCount})</button></div>
  <div className={styles.grid}>
   {pizzas.map(pizza=><article data-reveal className={styles.card} key={pizza.name}>
    <div className={styles.image}><img src={pizza.image || '/images/menu-pizzas.png'} style={{objectPosition:pizza.image ? 'center' : pizza.position,transformOrigin:pizza.position,'--image-scale':pizza.image ? 1 : 1.85,'--image-hover-scale':pizza.image ? 1.03 : 1.9055}} alt={pizza.imageAlt || (pizza.image ? `Pizza ${pizza.name}` : `Imagem ilustrativa da pizza ${pizza.name}`)} width={pizza.image ? 658 : 1536} height={pizza.image ? 875 : 1024} loading="lazy" /></div>
    <div className={styles.info}><h3>{pizza.name}</h3><p>{pizza.description}</p><div className={styles.cardBottom}><div><small>A partir de</small><strong>{pizza.price}</strong></div><button type="button" className="button" onClick={() => setSelectedPizza(pizza)} aria-haspopup="dialog" aria-label={`Ver detalhes de ${pizza.name}`}>Ver detalhes</button></div></div>
   </article>)}
   <aside data-reveal className={styles.menuCta}><span className={styles.diamond} aria-hidden="true">◆</span><p className="eyebrow">BATEU A FOME?</p><h3>SUA PRÓXIMA<br />FAVORITA<br />ESTÁ AQUI.</h3><p>Escolha um sabor e confira como pedir sua quadrada.</p><a className="button button-accent" href={orderUrl} target="_blank" rel="noopener noreferrer">Vamos pedir →</a></aside>
  </div><p className={styles.disclaimer}>Cardápio demonstrativo · Imagens ilustrativas · Preços sugeridos, sujeitos à confirmação</p>
  {selectedPizza && <ProductDialog key={selectedPizza.name} pizza={selectedPizza} onClose={() => setSelectedPizza(null)} onAdd={addToCart} />}
  {cartOpen && <CartDialog items={items} onClose={() => setCartOpen(false)} onChangeQuantity={(key, quantity) => setItems(current => current.map(item => item.key === key ? { ...item, quantity } : item))} onRemove={key => { setItems(current => current.filter(item => item.key !== key)); setMessage('Item removido do carrinho.') }} />}
 </div></section>
}
