import introduction from '../../../assets/introduction-image.svg';
import shopwhite from '../../../assets/icons/shop-white.svg';
import embalagem from '../../../assets/icons/embalagem.svg';
import timer from '../../../assets/icons/timer.svg';
import xicara from '../../../assets/icons/xicara.svg';

import {
  IntroductionContainer,
  IntroContent,
  IntroImage,
  BenefitsGrid,
  BenefitItem,
  IconContainer,
  BenefitText
} from '../../styles/home/introduction.styles';

export function Introduction() {
    const benefits = [
        { icon: shopwhite, text: 'Compra simples e segura', color: 'yellow-dark' },
        { icon: embalagem, text: 'Embalagem mantém o café intacto', color: 'base-text' },
        { icon: timer, text: 'Entrega rápida e rastreada', color: 'yellow' },
        { icon: xicara, text: 'O café chega fresquinho até você', color: 'purple' }
    ];

    return (
        <IntroductionContainer>
            <IntroContent>
                <h1>
                    Encontre o café perfeito para qualquer hora do dia
                </h1>
                <p>
                    Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                </p>

                <BenefitsGrid>
                    {benefits.map((benefit, index) => (
                        <BenefitItem key={index}>
                            <IconContainer bgColor={benefit.color}>
                                <img src={benefit.icon} alt="" />
                            </IconContainer>
                            <BenefitText>{benefit.text}</BenefitText>
                        </BenefitItem>
                    ))}
                </BenefitsGrid>
            </IntroContent>

            <IntroImage>
                <img src={introduction} alt="Coffee cup with coffee beans" />
            </IntroImage>
        </IntroductionContainer>
    );
}