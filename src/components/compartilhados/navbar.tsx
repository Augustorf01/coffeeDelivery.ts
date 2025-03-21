import shop from '../../assets/icons/shop-icon.svg'
import logo from '../../assets/coffee-delivery.svg'
import location from '../../assets/icons/location.svg'

import { NavBarContainer } from '../styles/compartilhados/navbar.styles'
import { useNavigate } from 'react-router-dom'

export function NavBar() {
    const nevigate = useNavigate()

    const goToCheckout = () => {
        nevigate('/checkout')
    }

    return (
        <NavBarContainer>
            <img src={logo} alt="" />
            
            <div>
                <p className='address'>
                    <img src={location} alt="Endereço" />
                    <span>Av. Atlântica 2303</span>
                </p>

                <button className='buttonCheckout' onClick={goToCheckout}>
                    <img src={shop} alt="Carrinho" />
                </button>
            </div>
        </NavBarContainer>
    )
}