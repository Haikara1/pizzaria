import iscaPhoto from '../../assets/isca.png'
import batataPhoto from '../../assets/batata.png'

// Preços sugeridos para demonstração, a confirmar pela pizzaria.
// Dimensões e quantidade de fatias não foram informadas.
// Salvar a foto enviada em src/assets/pizza-a-big.png (ou jpg/jpeg/webp).
const bigPhotos = import.meta.glob('../../assets/pizza-a-big.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' })
const bigPhoto = Object.values(bigPhotos)[0]
export const pizzas = [
  {
    name: 'A BIG!',
    description: 'Calabresa bem recheada, queijo derretido e muito sabor em uma pizza feita para compartilhar.',
    image: bigPhoto,
    price: 'R$ 59,90', position: '22% center',
    sizes: [
      { id: 'pequeno', name: 'Pequeno', price: 59.90 },
      { id: 'medio', name: 'Médio', price: 79.90 },
      { id: 'grande', name: 'Grande', price: 99.90 },
    ],
  },
  {
    name: 'Isca!',
    description: 'Isca de frango crocante + batata frita + aquele molho para acompanhar.',
    image: iscaPhoto,
    imageAlt: 'Isca de frango crocante com batata frita e molho',
    price: 'R$ 34,90', position: '50% center',
    sizes: [
      { id: 'pequeno', name: 'Pequeno', price: 34.90 },
      { id: 'medio', name: 'Médio', price: 44.90 },
      { id: 'grande', name: 'Grande', price: 59.90 },
    ],
  },
  {
    name: 'Nossa Batata!',
    description: 'Batata crocante, bem servida e perfeita para compartilhar enquanto a pizza não chega.',
    image: batataPhoto,
    imageAlt: 'Porções de batata frita em embalagens da Pizza Quadrada, acompanhadas de molho',
    price: 'R$ 19,90', position: '82% center',
    sizes: [
      { id: 'pequeno', name: 'Pequeno', price: 19.90 },
      { id: 'medio', name: 'Médio', price: 29.90 },
      { id: 'grande', name: 'Grande', price: 39.90 },
    ],
  },
]
