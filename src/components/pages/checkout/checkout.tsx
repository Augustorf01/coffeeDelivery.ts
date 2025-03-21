import trash from '../../../assets/icons/trash-icon.svg'
import credito from '../../../assets/icons/cartao-credito.svg'
import debito from '../../../assets/icons/cartao-debito.svg'
import dinheiro from '../../../assets/icons/dinheiro.svg'

import { NavBar } from "../../compartilhados/navbar";

import { AdressForm, 
        Container, 
        PaymentSection, 
        Title, InputAdress, 
        ListCheckout, 
        TrashButton, 
        Info, 
        CheckoutContainer, 
        CheckoutButton, 
        CartItem } from "../../styles/checkout/checkout.style";

import { QuantityButton } from '../home/product-list'

import { ProductModel } from "../../compartilhados/product"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { rootReducer } from '../../../redux/root-reducer';
import { cartReducer } from '../../../redux/products-cart/reducer';
import { CartProductItem } from './cart-product-item';

{/* Formulário de checkout */}
export function Checkout() {
    const navigate = useNavigate()

    const goToSuccessPage = () => {
        navigate('/success')
    }

    const { products } = useSelector((rootReducer) => cartReducer)

    return (
        <>
            <NavBar /> {/* Botão do carrinho deve indicar quantos produtos estão no carrinho */}
            <Title>Complete seu pedido</Title><Title>CaféList</Title>

            <CheckoutContainer>
                <Container>
                    <AdressForm>

                        <div className="adressDiv">
                            <h4>Endereço de Entrega</h4>
                            <span>Informe o endereço onde deseja receber seu pedido</span>
                        </div>

                        <InputAdress>
                            <input type="text" name="cep" id="" placeholder="CEP" />
                            <input type="text" name="rua" id="" placeholder="RUA" />
                            <input type="text" name="numero" id="" placeholder="NÚMERO DE PORTA" />
                            <input type="text" name="complemento" id="" placeholder="COMPLEMENTO (opicional)" />
                            <input type="text" name="cidade" id="" placeholder="CIDADE" />
                            <input type="text" name="bairro" id="" placeholder="BAIRRO" />
                            <input type="text" name="uf" id="" placeholder="ESTADO" />
                        </InputAdress>

                    </AdressForm>

                    <PaymentSection>
                        <h4>Pagamento</h4>
                        <span>O pagamento é feito na entrega, escolha a forma que deseja pagar</span>

                            <button type="button" value="Cartão de Crédito">
                                <img src={credito} alt="" />
                                <p>Cartão de Crédito</p>
                            </button>
                            <button type="button" value="Cartão de Débito">
                                <img src={debito} alt="" />
                                <p>Cartão de Débito</p>
                            </button>
                            <button type="button" value="Dinheiro">
                                <img src={dinheiro} alt="" />
                                <p>Dinheiro</p>
                            </button>

                    </PaymentSection>

                </Container>
                
                <ListCheckout>
                    {products.map((product) => <CartProductItem product={product}/>)}
                    {/* <CartItem>
                        <div className='productBlock'>
                            <img src={ProductModel[0].ilustration} alt="" />
                            <div>
                                <p>Expresso tradicional</p>
                                <div className="buttons">
                                    <QuantityButton />
                                    <TrashButton>
                                        <img src={trash} alt="" />
                                        <p>REMOVER</p>
                                    </TrashButton>
                                </div>
                            </div>
                        </div>
                        <span>R$ 9,90</span>
                        <div />
                    </CartItem> */}

                    <hr /> {/* Para cada produto exibido na lista, deve ter um hr em baixo  */}

                    <div className="resumo">
                        <Info>
                            <p>Total de itens</p>
                            <span>R$ 10,00</span>
                        </Info>
                        <Info>
                            <p>Entrega</p>
                            <span>R$ 10,00</span>
                        </Info>
                        <Info>
                            <p>Total</p>
                            <span>R$ 10,00</span>
                        </Info>
                    </div>

                    <CheckoutButton type="submit" onClick={goToSuccessPage}>CONFIRMAR PEDIDO</CheckoutButton>
                </ListCheckout>

            </CheckoutContainer>
        </>
    )
}