import styled from 'styled-components'

export const NavBarContainer = styled.nav`
    max-width: 150rem;
    max-height: 6.5rem;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 10rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem
    }

    .address {
        display: inline-flex;
        align-items: center;
        justify-content: center;

        background-color: var(--purple-light);
        border: none;
        border-radius: 6px;
        padding: 0.3rem;

        :first-child {
            width: 16px;
            height: 16px;
            background-color: transparent;
        }

        span {
            padding-left: 0.1rem;
            color: var(--purple);
            font-size: 0.8rem;
            font-weight: bold;
            background-color: transparent;
        }
    }

    .buttonCheckout {
        display: flex;
        justify-content: center;
        align-items: center;
        
        border: none;
        border-radius: 6px;
        background-color: var(--yellow-light);
        padding: 0.2rem; 
    }

    .buttonCheckout:hover {
        cursor: pointer;
        border-radius: 6px;
        background-color: var(--base-hover);
    }
`