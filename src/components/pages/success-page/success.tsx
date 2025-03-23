import { useNavigate } from 'react-router-dom';
import success from '../../../assets/success-ilustration.svg';
import locale from '../../../assets/icons/location-white.svg';
import timer from '../../../assets/icons/timer.svg';
import dollar from '../../../assets/icons/dollar.svg';

import {
  SuccessContainer,
  SuccessHeader,
  SuccessContent,
  OrderInfoCard,
  OrderInfoList,
  OrderInfoItem,
  IconContainer,
  InfoText,
  IllustrationContainer,
  ReturnButton
} from '../../styles/success/success.style';
import { NavBar } from '../../compartilhados/navbar';

export function Success() {
  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate('/');
  };

  return (
    <>
      <NavBar />
      
      <SuccessContainer>
        <SuccessHeader>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </SuccessHeader>
        
        <SuccessContent>
          <OrderInfoCard>
            <OrderInfoList>
              <OrderInfoItem>
                <IconContainer bgColor="purple">
                  <img src={locale} alt="Location icon" />
                </IconContainer>
                <InfoText>
                  <p>
                    Entrega em <span>Rua João Daniel Martinelli, 102</span>
                  </p>
                  <p>Farrapos - Porto Alegre, RS</p>
                </InfoText>
              </OrderInfoItem>
              
              <OrderInfoItem>
                <IconContainer bgColor="yellow">
                  <img src={timer} alt="Timer icon" />
                </IconContainer>
                <InfoText>
                  <p>Previsão de entrega</p>
                  <p><span>20 min - 30 min</span></p>
                </InfoText>
              </OrderInfoItem>
              
              <OrderInfoItem>
                <IconContainer bgColor="yellowDark">
                  <img src={dollar} alt="Dollar icon" />
                </IconContainer>
                <InfoText>
                  <p>Pagamento na entrega</p>
                  <p><span>Cartão de Crédito</span></p>
                </InfoText>
              </OrderInfoItem>
            </OrderInfoList>
          </OrderInfoCard>
          
          <IllustrationContainer>
            <img src={success} alt="Order success illustration" />
          </IllustrationContainer>
        </SuccessContent>
        
        <ReturnButton onClick={goToHomepage}>
          Voltar para o início
        </ReturnButton>
      </SuccessContainer>
    </>
  );
}