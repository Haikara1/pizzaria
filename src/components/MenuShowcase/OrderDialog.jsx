import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { cartTotal, cartWhatsAppUrl, formatPrice, getSizes } from './orderUtils'
import styles from './OrderDialog.module.css'

function Dialog({ titleId, onClose, children }) {
  const ref = useRef(null)
  useEffect(() => {
    const dialog = ref.current
    const previousFocus = document.activeElement
    const previousOverflow = document.body.style.overflow
    dialog.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog.close()
      document.body.style.overflow = previousOverflow
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus()
    }
  }, [])
  return createPortal(<dialog ref={ref} className={styles.dialog} aria-labelledby={titleId}
    onCancel={event => { event.preventDefault(); onClose() }}
    onClick={event => {
      const bounds = event.currentTarget.getBoundingClientRect()
      if (event.target === event.currentTarget && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) onClose()
    }}>
    <button type="button" className={styles.close} onClick={onClose} aria-label="Fechar modal">×</button>
    {children}
  </dialog>, document.body)
}

export function ProductDialog({ pizza, onClose, onAdd }) {
  const sizes = getSizes(pizza)
  const [sizeId, setSizeId] = useState(sizes[0].id)
  const [quantity, setQuantity] = useState(1)
  const size = sizes.find(option => option.id === sizeId)
  return <Dialog titleId="product-dialog-title" onClose={onClose}>
    <div className={styles.photo}><img src={pizza.image || '/images/menu-pizzas.png'} alt={pizza.imageAlt || (pizza.image ? `Pizza ${pizza.name}` : `Imagem ilustrativa da pizza ${pizza.name}`)} style={{ objectPosition: pizza.image ? 'center' : pizza.position, transformOrigin: pizza.position, transform: pizza.image ? 'none' : undefined }} width={pizza.image ? 658 : 1536} height={pizza.image ? 875 : 1024} /></div>
    <div className={styles.content}>
      <p className="eyebrow">SUA QUADRADA, DO SEU JEITO</p>
      <h2 id="product-dialog-title">{pizza.name}</h2>
      <h3>Detalhes do produto</h3><p className={styles.description}>{pizza.description}</p>
      <fieldset className={styles.sizes}><legend>Tamanhos e preços</legend>
        {sizes.map(option => <label key={option.id} className={styles.option}>
          <input type="radio" name="pizza-size" value={option.id} checked={sizeId === option.id} onChange={() => setSizeId(option.id)} />
          <span><strong>{option.name}</strong>{option.details && <small>{option.details}</small>}</span>
          <b>{formatPrice(option.price)}</b>
        </label>)}
      </fieldset>
      <p className={styles.notice}>Preços sugeridos para demonstração. Dimensões e quantidade de fatias a confirmar com a pizzaria.</p>
      <div className={styles.quantityRow}><span>Quantidade</span><Quantity value={quantity} onChange={setQuantity} label={pizza.name} /></div>
      <div className={styles.summary}><span>Subtotal</span><strong>{formatPrice(Number.isFinite(size.price) ? size.price * quantity : null)}</strong></div>
      {!Number.isFinite(size.price) && <p className={styles.notice}>O valor e o tamanho serão confirmados com a pizzaria pelo WhatsApp.</p>}
      <button type="button" className={`button ${styles.action}`} onClick={() => onAdd(pizza, size, quantity)}>Adicionar ao carrinho <span aria-hidden="true">+</span></button>
    </div>
  </Dialog>
}

function Quantity({ value, onChange, label }) {
  return <div className={styles.quantity}>
    <button type="button" disabled={value <= 1} onClick={() => onChange(value - 1)} aria-label={`Diminuir quantidade de ${label}`}>−</button>
    <output aria-label={`Quantidade de ${label}`} aria-live="polite">{value}</output>
    <button type="button" disabled={value >= 99} onClick={() => onChange(value + 1)} aria-label={`Aumentar quantidade de ${label}`}>+</button>
  </div>
}

export function CartDialog({ items, onClose, onChangeQuantity, onRemove }) {
  return <Dialog titleId="cart-dialog-title" onClose={onClose}><div className={styles.content}>
    <p className="eyebrow">SEU PEDIDO</p><h2 id="cart-dialog-title">Meu carrinho</h2>
    {items.length ? <>
      <ul className={styles.items}>{items.map(item => <li key={item.key}>
        <div className={styles.itemHeading}><div><h3>{item.name}</h3><p>{item.size}</p></div><strong>{formatPrice(Number.isFinite(item.price) ? item.price * item.quantity : null)}</strong></div>
        <div className={styles.itemControls}><Quantity value={item.quantity} label={`${item.name}, ${item.size}`} onChange={value => onChangeQuantity(item.key, value)} /><button type="button" className={styles.remove} onClick={() => onRemove(item.key)} aria-label={`Remover ${item.name}, ${item.size}`}>Remover</button></div>
      </li>)}</ul>
      <div className={styles.summary}><span>Subtotal</span><strong>{formatPrice(cartTotal(items))}</strong></div>
      <p className={styles.notice}>Preços demonstrativos. Pedido sujeito à confirmação de disponibilidade, tamanhos e valores. Taxa de entrega a consultar.</p>
      <a className={`button ${styles.action}`} href={cartWhatsAppUrl(items)} target="_blank" rel="noopener noreferrer">Continuar no WhatsApp ↗</a>
      <button type="button" className={styles.continue} onClick={onClose}>Continuar escolhendo</button>
    </> : <><p className={styles.description}>Seu carrinho está vazio. Escolha sua quadrada favorita para começar.</p><button type="button" className={`button ${styles.action}`} onClick={onClose}>Ver cardápio</button></>}
  </div></Dialog>
}
