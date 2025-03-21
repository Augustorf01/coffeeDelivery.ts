import { IntroductionContainer } from '../../styles/home/introduction.styles'
import introduction from '../../../assets/introduction-image.svg' // imagem da introdução

import shopwhite from '../../../assets/icons/shop-white.svg'
import embalagem from '../../../assets/icons/embalagem.svg'
import timer from '../../../assets/icons/timer.svg'
import xicara from '../../../assets/icons/xicara.svg'

export function Introduction() {
    return (
        <IntroductionContainer>
            <div className='title'>
                <h1>
                    Encontre o café perfeito 
                    para qualquer hora do dia
                </h1>
                <p>
                    Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                </p>
            </div>

            <img className="coffee" src={introduction} alt="Imagem da introdução" />

            <table>
                <tbody className='benefits'>
                    
                    <tr>
                        <td>
                            <img className='shopw' src={shopwhite} alt="" />
                            <p>Compra simples e segura</p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img className='embalagem' src={embalagem} alt="" />
                            <p>Embalagem mantém o café intacto</p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img className='relogio' src={timer} alt="" />
                            <p>Entrega rápida e rastreada</p>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <img className='xicara' src={xicara} alt="" />
                            <p>O café chega até você</p>
                        </td>
                    </tr>

                </tbody>
            </table>
        </IntroductionContainer>
    )
}