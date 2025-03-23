import { useNavigate } from 'react-router-dom';
import { useCart } from '../../redux';

// Assets
import shop from '../../assets/icons/shop-icon.svg';
import logo from '../../assets/coffee-delivery.svg';
import location from '../../assets/icons/location.svg';

// Styles
import { 
  NavBarContainer, 
  LogoContainer, 
  ActionsContainer, 
  LocationBadge, 
  CartButton,
  CartCounter
} from '../styles/compartilhados/navbar';

export function NavBar() {
    const navigate = useNavigate();
    const { totalItems, toggleCartSidebar } = useCart();

    const goToCheckout = () => {
        navigate('/checkout');
    };

    const goToHome = () => {
        navigate('/');
    };

    return (

        <div onClick={toggleCartSidebar}>
            <NavBarContainer>
                <LogoContainer>
                    <img src={logo} alt="Coffee Delivery" onClick={goToHome} style={{ cursor: 'pointer' }} />
                </LogoContainer>
                
                <ActionsContainer>
                    <LocationBadge>
                        <img src={location} alt="Location icon" />
                        <span>Av. Atlântica 2303</span>
                    </LocationBadge>

                    <CartButton onClick={goToCheckout}>
                        <img src={shop} alt="Shopping cart" />
                        {totalItems > 0 && (
                            <CartCounter>{totalItems}</CartCounter>
                        )}
                    </CartButton>
                </ActionsContainer>
            </NavBarContainer>
        </div>
    );
}