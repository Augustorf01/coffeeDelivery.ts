// import { useNavigate } from "react-router-dom";

import { NavBar } from "../../compartilhados/navbar";
import { InfoSuccess, ResumeContainer, SuccessContent, SuccessTitle } from "../../styles/success/success.style";
// import { CheckoutButton } from "../../styles/checkout/checkout.style";

import success from '../../../assets/success-ilustration.svg'
import locale from '../../../assets/icons/location-white.svg'
import timer from '../../../assets/icons/timer.svg'
import dollar from '../../../assets/icons/dollar.svg'


export function Success() {
    // const nevigate = useNavigate()

    // const goToHomepage = () => {
    //     nevigate('/')
    // }

    return (

        <>
            <NavBar />

            <SuccessTitle>
                Uhu! Pedido confirmado
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </SuccessTitle>

            <SuccessContent>
                
                <ResumeContainer>
                    <InfoSuccess>
                        <div>
                            <img className="locale" src={locale} alt="" />
                        </div>
                        <p>
                            Entrega em <span>Rua João Daniel Martinelli, 102</span>
                            <br />
                            Farrapos - Porto Alegre, RS
                        </p>
                    </InfoSuccess>
                    <InfoSuccess>
                        <div>
                            <img className="timer" src={timer} alt="" />
                        </div>
                        <p>
                            Previsão de entrega 
                            <br />
                            <span>20 min - 30 min</span>
                        </p>
                    </InfoSuccess>
                    <InfoSuccess>
                        <div>
                            <img className="dollar" src={dollar} alt="" />
                        </div>
                        <p>
                            Pagamento na entrega 
                            <br/>
                            <span>Cartão de Crédito</span>
                        </p>
                    </InfoSuccess>
                </ResumeContainer>

                <img src={success} alt="" />
            </SuccessContent>

            {/* <CheckoutButton onClick={goToHomepage}>Voltar para o início</CheckoutButton> */}
        </>
    )
}