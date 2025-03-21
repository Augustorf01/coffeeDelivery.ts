import { ProductProps } from "../../compartilhados/product"
import { ContainerButton, ProductContainer, QuantityButtonStyle } from "../../styles/compartilhados/product.style"
import shopwhite from '../../../assets/icons/shop-white.svg'
import { useState } from "react"
import { useNavigate } from "react-router-dom"

// REDUX
import { useDispatch } from 'react-redux'
import { addProductToCart } from "../../../redux/products-cart/actions"

// Botão para acrescentar ou reduzir a quantidade do item.
export function QuantityButton() {
    const [quantity, setQuantity] = useState(1)

    return (
        <ContainerButton>
            <QuantityButtonStyle onClick={() => {quantity > 0 ? setQuantity(quantity - 1) : quantity}} disabled={quantity === 0}>
                <span>-</span>
            </QuantityButtonStyle>
            <p>{quantity}</p>
            <QuantityButtonStyle onClick={() => setQuantity(quantity + 1)}>
                <span>+</span>
            </QuantityButtonStyle>
        </ContainerButton>
    )
}

// Lista de produtos -> falta editar os types(atributo do objeto Product) para serem exibidos corretamente.
export const ProductList = (product: ProductProps) => {
    const nevigate = useNavigate()

    const dispatch = useDispatch()
    const handleProductClick = () => {
        // Adiciona o produto ao carrinho e redireciona para a página de checkout
        dispatch(addProductToCart(product))

        // Atualiza a url para a página de checkout
        nevigate('/checkout') // Desabilitado para o Redux ser implementado, pois a adição ao carrinho ainda não está disponível
    }

      return  (
        <>
            <ProductContainer>
                <img className='ilustration' src={product.ilustration} alt="" />

                <div className='type'>
                    <span>{product.type}</span>
                </div>

                <h3>{product.name}</h3>
                <p>{product.description}</p>

                <div className='bottom'>
                    <p>{product.price}</p>
                    <QuantityButton />

                    <button className='carrinho' onClick={handleProductClick}> 
                        <img src={shopwhite} alt="Carrinho" />
                    </button>
                </div>
            </ProductContainer>
        </>
      )
}