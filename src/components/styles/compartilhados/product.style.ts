import styled from 'styled-components'

export const ProductContainer = styled.div`
 /* max-width: 100rem; */
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 text-align: center;
 justify-content: space-between;

 border-radius: 0 3rem;
 background-color: var(--base-card);
 box-shadow: 0 0 2px 0 var(--yellow-dark);
 padding: 2rem;
 gap: 0.5rem;


 h3 {
    margin-top: 1rem;
 }

 p {
    margin: 0.2rem;
    font-size: 0.9rem;
    color: var(--base-label);
 }

 .ilustration {
    width: fit-content;
    margin: 0 auto;
    margin-top: -4rem;
  }

 .type {
    width: 50%;
    margin: 0 3.5rem;
    border: none;
    color: var(--yellow-dark);
    border-radius: 3rem;
    justify-self: center;
    align-self: center;

    background-color: var(--yellow-light);
 }

 .bottom {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    margin: 0.5rem 1rem;

    p {
        color: var(--base-text);
        font-size: 150%;
        font-weight: 700;
    }
 }

 .carrinho {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 6px;
    background-color: var(--purple-dark);

    :first-child {
        width: 1.4rem;
        height: 1.4rem;
        background-color: transparent;
    }
    
    :hover {
        cursor: pointer;
        border: 0.4rem solid var(--purple);
        border-radius: 6px;
        background-color: var(--purple);
        transition: background-color border 0.2s ease-in;
    }
 }
  `

export const ContainerButton = styled.div`
   display: flex;
   flex: 1;
   align-items: center;
   justify-content: center;
   background-color: var(--base-button);
   border-radius: 6px;

   button:hover {
      cursor: pointer;
      background-color: var(--purple-dark);
      color: var(--white);
      transition: background-color 0.2s ease-in;
      
      &:disabled {
         cursor: not-allowed;
      }
   }
`

export const QuantityButtonStyle = styled.button`
   display: flex;
   flex: 1;
   align-items: center !important;
   justify-content: center !important;

   color: var(--purple);
   border: none;
   border-radius: 6px;
   background-color: var(--base-button);

   span {
   font-size: 1.2rem;
   font-weight: 600;
   }
`