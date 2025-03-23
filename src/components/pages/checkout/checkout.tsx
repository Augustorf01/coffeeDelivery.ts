import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cartReducer } from '../../../redux/root-reducer';

// Components

// Assets
import credito from '../../../assets/icons/cartao-credito.svg';
import debito from '../../../assets/icons/cartao-debito.svg';
import dinheiro from '../../../assets/icons/dinheiro.svg';

// Styles
import {
  CheckoutContainer,
  CheckoutTitle,
  CheckoutGrid,
  FormsContainer,
  FormCard,
  FormHeader,
  FormHeaderContent,
  AddressFormGrid,
  FormGroup,
  Input,
  PaymentMethodsContainer,
  PaymentMethodButton,
  CartSummaryContainer,
  CartItemsList,
  Divider,
  CartSummary,
  SummaryRow,
  CheckoutButton,
  EmptyCartMessage
} from '../../styles/checkout/checkout.style';
import { NavBar } from '../../compartilhados/navbar';
import { CartProductItem } from './cart-product-item';

export function Checkout() {
  const navigate = useNavigate();
  const { products } = useSelector((state: ReturnType<typeof cartReducer>) => state);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  
  const handlePaymentMethodSelect = (method: string) => {
    setPaymentMethod(method);
  };
  
  const goToSuccessPage = () => {
    // Here you can add validation logic before proceeding
    navigate('/success');
  };
  
  // Calculate total price
  const subtotal = products.reduce((acc, product) => {
    const price = typeof product.price === 'number' ? product.price : 0;
    const quantity = product.quantity || 1;
    return acc + (price * quantity);
  }, 0);
  
  const deliveryFee = 3.50;
  const total = subtotal + deliveryFee;

  return (
    <>
      <NavBar />
      <CheckoutContainer>
        <CheckoutTitle>Complete seu pedido</CheckoutTitle>
        
        <CheckoutGrid>
          {/* Left Column - Forms */}
          <FormsContainer>
            {/* Address Form */}
            <FormCard>
              <FormHeader>
                <FormHeaderContent>
                  <h3>Endereço de Entrega</h3>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </FormHeaderContent>
              </FormHeader>
              
              <AddressFormGrid>
                <FormGroup>
                  <Input type="text" placeholder="CEP" />
                </FormGroup>
                
                <FormGroup span={3}>
                  <Input type="text" placeholder="Rua" />
                </FormGroup>
                
                <FormGroup>
                  <Input type="text" placeholder="Número" />
                </FormGroup>
                
                <FormGroup span={2}>
                  <Input type="text" placeholder="Complemento (opcional)" />
                </FormGroup>
                
                <FormGroup>
                  <Input type="text" placeholder="Bairro" />
                </FormGroup>
                
                <FormGroup span={2}>
                  <Input type="text" placeholder="Cidade" />
                </FormGroup>
                
                <FormGroup>
                  <Input type="text" placeholder="UF" />
                </FormGroup>
              </AddressFormGrid>
            </FormCard>
            
            {/* Payment Method */}
            <FormCard>
              <FormHeader>
                <FormHeaderContent>
                  <h3>Pagamento</h3>
                  <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                </FormHeaderContent>
              </FormHeader>
              
              <PaymentMethodsContainer>
                <PaymentMethodButton 
                  isActive={paymentMethod === 'credit'} 
                  onClick={() => handlePaymentMethodSelect('credit')}
                >
                  <img src={credito} alt="Credit card" />
                  Cartão de crédito
                </PaymentMethodButton>
                
                <PaymentMethodButton 
                  isActive={paymentMethod === 'debit'} 
                  onClick={() => handlePaymentMethodSelect('debit')}
                >
                  <img src={debito} alt="Debit card" />
                  Cartão de débito
                </PaymentMethodButton>
                
                <PaymentMethodButton 
                  isActive={paymentMethod === 'cash'} 
                  onClick={() => handlePaymentMethodSelect('cash')}
                >
                  <img src={dinheiro} alt="Cash" />
                  Dinheiro
                </PaymentMethodButton>
              </PaymentMethodsContainer>
            </FormCard>
          </FormsContainer>
          
          {/* Right Column - Cart Summary */}
          <CartSummaryContainer>
            {products.length > 0 ? (
              <>
                <CartItemsList>
                  {products.map((product) => (
                    <CartProductItem key={product.id} product={product} />
                  ))}
                </CartItemsList>
                
                <Divider />
                
                <CartSummary>
                  <SummaryRow>
                    <p>Total de itens</p>
                    <p>R$ {subtotal.toFixed(2).replace('.', ',')}</p>
                  </SummaryRow>
                  
                  <SummaryRow>
                    <p>Entrega</p>
                    <p>R$ {deliveryFee.toFixed(2).replace('.', ',')}</p>
                  </SummaryRow>
                  
                  <SummaryRow>
                    <strong>Total</strong>
                    <strong>R$ {total.toFixed(2).replace('.', ',')}</strong>
                  </SummaryRow>
                </CartSummary>
                
                <CheckoutButton 
                  onClick={goToSuccessPage}
                  disabled={!paymentMethod}
                >
                  Confirmar pedido
                </CheckoutButton>
              </>
            ) : (
              <EmptyCartMessage>
                <h3>Seu carrinho está vazio</h3>
                <p>Adicione itens para continuar com a compra</p>
                <Link to="/">Voltar para a loja</Link>
              </EmptyCartMessage>
            )}
          </CartSummaryContainer>
        </CheckoutGrid>
      </CheckoutContainer>
    </>
  );
}