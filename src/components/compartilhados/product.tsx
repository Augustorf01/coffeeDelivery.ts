import tradicional from '../../assets/products/expresso-tradicional.png'
import americano from '../../assets/products/expresso-americano.png'
import cremoso from '../../assets/products/expresso-cremoso.png'
import gelado from '../../assets/products/expresso-gelado.png'
import cafeComLeite from '../../assets/products/cafe-com-leite.png'
import latte from '../../assets/products/latte.png'
import capuccino from '../../assets/products/capuccino.png'
import mocaccino from '../../assets/products/mocaccino.png'
import arabe from '../../assets/products/arabe.png'
import irlandes from '../../assets/products/irlandes.png'
import chocolateQuente from '../../assets/products/chocolate-quente.png'
import macchiato from '../../assets/products/macchiato.png'
import cubano from '../../assets/products/cubano.png'
import havaiano from '../../assets/products/havaiano.png'

export type ProductProps = {
    id: number
    ilustration: string;
    name?: string;
    type?: string;
    description?: string;
    price: string;
    quantity: number;
}

export const ProductModel = [
    {
    id: 1,
    ilustration: tradicional,
    name: 'Expresso Tradicional',
    type: 'Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 'R$9.90',
    quantity: 0,
},
    {
    id: 2,
    ilustration: americano,
    name: 'Expresso Americano',
    type: 'Tradicional',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 'R$9.90',
    quantity: 0,
},
    {
    id: 3,
    ilustration: cremoso,
    name: 'Expresso Cremoso',
    type: 'Tradicional',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 'R$9.90',
    quantity: 0,
},
    {
    id: 4,
    ilustration: gelado,
    name: 'Expresso Gelado',
    type: 'Tradicional',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 'R$9.90',
    quantity: 0,
},
    {
    id: 5,
    ilustration: cafeComLeite,
    name: 'Café com Leite',
    type: 'Tradicional',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 'R$9.90',
    quantity: 0,
},
    {
    id: 6,
    ilustration: latte,
    name: 'Latte',
    type: 'Tradicional',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 'R$9.90',
    quantity: 0,
},
    {
    id: 7,
    ilustration: capuccino,
    name: 'Capuccino',
    type: 'Tradicional',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 'R$9.90',
    quantity: 0,
},
    {
    id: 8,
    ilustration: macchiato,
    name: 'Macchiato',
    type: 'Tradicional',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 'R$9.90',
    quantity: 0,
},
    {
    id: 9,
    ilustration: mocaccino,
    name: 'Mocaccino',
    type: 'Tradicional',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 'R$9.90',
    quantity: 0,
},
    {
    id: 10,
    ilustration: chocolateQuente,
    name: 'Chocolate Quente',
    type: 'Tradicional',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 'R$9.90',
    quantity: 0,
},
    {
    id: 11,
    ilustration: cubano,
    name: 'Cubano',
    type: 'Tradicional',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 'R$9.90',
    quantity: 0,
},
    {
    id: 12,
    ilustration: havaiano,
    name: 'Havaiano',
    type: 'Tradicional',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 'R$9.90',
    quantity: 0,
},
    {
    id: 13,
    ilustration: arabe,
    name: 'Árabe',
    type: 'Tradicional',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 'R$9.90',
    quantity: 0,
},
    {
    id: 14,
    ilustration: irlandes,
    name: 'Irlandês',
    type: 'Tradicional',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 'R$9.90',
    quantity: 0,
},
]
