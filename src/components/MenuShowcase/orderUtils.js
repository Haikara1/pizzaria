import { orderUrl } from '../../data/site'

export const formatPrice = value => Number.isFinite(value)
  ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  : 'Preço a confirmar'

// TODO: cadastrar em cada pizza os tamanhos oficiais: { id, name, details, price }.
// price é o valor em reais. Não apresentar tamanhos ou preços fictícios.
export const getSizes = pizza => pizza.sizes?.length
  ? pizza.sizes
  : [{ id: 'confirmar', name: 'Tamanho a confirmar', details: 'Consulte as opções disponíveis pelo WhatsApp.', price: null }]

export function addCartItem(items, pizza, size, quantity) {
  const key = `${pizza.name}:${size.id}`
  const existing = items.find(item => item.key === key)
  if (existing) return items.map(item => item.key === key ? { ...item, quantity: Math.min(99, item.quantity + quantity) } : item)
  return [...items, { key, name: pizza.name, size: size.name, price: size.price, quantity }]
}

export function cartTotal(items) {
  return items.length && items.every(item => Number.isFinite(item.price))
    ? items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : null
}

export function cartWhatsAppUrl(items) {
  const lines = items.map(item => `${item.quantity}x ${item.name} — ${item.size} — ${formatPrice(Number.isFinite(item.price) ? item.price * item.quantity : null)}`)
  const url = new URL(orderUrl)
  url.searchParams.set('text', ['Olá! Gostaria de pedir:', ...lines, '', `Subtotal: ${formatPrice(cartTotal(items))}`, 'Podem confirmar os tamanhos, valores, disponibilidade e a taxa de entrega?'].join('\n'))
  return url.toString()
}
