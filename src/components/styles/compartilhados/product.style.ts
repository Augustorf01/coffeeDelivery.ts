import styled from 'styled-components'

export const ProductContainer = styled.div`
 display: flex;
 flex-direction: column;
 text-align: center;
 
 /* Definindo uma altura mínima para o container */
 min-height: 16rem;
 width: 16rem;
 
 /* Criando espaço adequado entre os elementos */
 justify-content: space-between;

 border-radius: 0 3rem;
 background-color: var(--base-card);
 box-shadow: 0px 0px 8px var(--yellow-dark);
 padding: 2rem;
 gap: 0.5rem;

 h3 {
    margin-top: 1rem;
    font-size: 1.25rem;
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
    filter: drop-shadow(0px 0px 8px var(--yellow-dark));
 }

 .type {
    width: 50%;
    margin: 0 auto;
    border: none;
    color: var(--yellow-dark);
    border-radius: 3rem;
    padding: 0.25rem 0;

    background-color: var(--yellow-light);
 }

 .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-top: 1.5rem;

    p {
        color: var(--base-text);
        font-size: 1.5rem;
        font-weight: 700;
    }
 }

 .carrinho {
    width: 2.2rem;
    height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 6px;
    background-color: var(--purple-dark);

    img {
        width: 1.4rem;
        height: 1.4rem;
        background-color: transparent;
    }
    
    &:hover {
        cursor: pointer;
        background-color: var(--purple);
        transition: background-color 0.2s ease-in;
    }
 }
`

export const ContainerButton = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: var(--base-button);
   border-radius: 6px;
   padding: 0.25rem;
   width: 5rem;

   p {
     margin: 0 0.5rem;
     color: var(--base-text);
   }
`

export const QuantityButtonStyle = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 1.5rem;
   height: 1.5rem;

   color: var(--purple);
   border: none;
   border-radius: 6px;
   background-color: var(--base-button);

   span {
     font-size: 1.2rem;
     font-weight: 600;
   }

   &:hover {
     cursor: pointer;
     background-color: var(--base-hover);
     transition: background-color 0.2s ease-in;
   }

   &:disabled {
     cursor: not-allowed;
     opacity: 0.6;
   }
`