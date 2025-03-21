import styled from "styled-components";

export const Title = styled.h4`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    font-size: 1.2rem ;
    margin: 1rem 24rem 1rem 10rem;
`
export const CheckoutContainer = styled.div`
    /* max-width: 80rem; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto auto;
    justify-content: center;
    grid-gap: 3.5rem;

    margin: 0 10rem
`

// Div que envolve todas as sections
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */

    grid-gap: 1rem;
    border-radius: 6px;

    h4, span {
        margin-left: 1rem;
    }
`

// Formulário de Endereço
export const AdressForm = styled.form`
    width: 42rem;
    border-radius: 6px;
    background-color: var(--base-card);

    
    .adressDiv {
        margin: 1rem
    }

    [name="uf"] {
        width: 3.75rem;
    }

    [name="cep"] {
        width: 12.5rem;
    }

    [name="numero"] {
        width: 12.5rem;
    }

    [name="complemento"] {
        width: 21.75rem;
    }

    [name="rua"] {
        width: 35rem;
    } 

    [name="bairro"] {
        width: 12.5rem;
    }

    [name="cidade"] {
        width: 17.25rem;
    }
`

export const InputAdress = styled.div`
    margin: 1.5rem;
    
        input {
            border: none;
            margin-left: 0.5rem;
            margin-bottom: 0.5rem;
            padding: 0.5rem;
            border-radius: 6px;

            background-color: var(--base-input);
            color: var(--base-text);
            
            &:focus {
                border: 1px solid var(--yellow-dark);
                outline: none;
            }
        }
`

export const ListCheckout = styled.div`
    display: inline;
    width: 20rem;
    height: 18rem;
    padding: 2.5rem;

    /* align-items: center; */
    /* margin-left: 1rem; */

    border-radius: 0 3rem;
    background-color: var(--base-card);

    hr {
        width: 100%;
        padding: 0.5px;
        margin: 2rem 0;
        background-color: var(--yellow) 50%;
    }

    img {
        width: 4rem;
        height: 4rem;
        margin-right: 1rem;
    }
    
    /* .product {
        display: flex;
        justify-content: space-between;

        span {
            font-size: 1.2rem;
            font-weight: 500;
        }

        .productBlock {
            display: flex;
            
            .buttons {
                display: flex;

                span {
                    font-size: 1.2rem;
                    margin: 0rem 0.5rem
                }
            }
        }

    } */

    .resumo {
        p {
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
            font-weight: 500;
        }

        span {
            font-size: 1.2rem;
            font-weight: 300;
        }

        p, span {
            display: inline;
        }
    }
`

export const CartItem = styled.div`
    display: flex;
    justify-content: space-between;

    span {
        font-size: 1.2rem;
        font-weight: 500;
    }

    .productBlock {
            /* width: 18rem; */
            display: flex;
            
            .buttons {
                display: flex;

                span {
                    font-size: 1.2rem;
                    margin: 0rem 0.5rem
                }
            }
        }
` 

export const TrashButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem;
    border: none;
    border-radius: 6px;
    margin-left: 0.3rem;

    background-color: var(--base-button);

    img {
        width: 1rem;
        height: 1rem;
        margin: 0; 
    }

    &:hover {
        cursor: pointer;
        background-color: var(--base-hover);
        transition: background-color 0.2s ease-in;
    }
`

export const Info = styled.div`
    max-width: 28rem;
    display: flex;
    justify-content: space-between;
`

export const CheckoutButton = styled.button`
    width: 20rem;
    height: auto;

    margin: 1rem 0;

    padding: 0.5rem 1rem;
    border: none;
    border-radius: 6px;

    background-color: var(--yellow);
    color: var(--white);

    &:hover {
        cursor: pointer;
        background-color: var(--yellow-dark);
        transition: background-color 0.2s ease-in;
    }
`

export const PaymentSection = styled.div`
    width: 40rem;
    /* margin: 2rem; */
    padding: 1rem;
    border-radius: 6px;
    background-color: var(--base-card);

    h4, span {
        display: flex;
        flex-direction: column;
        }

    button {
        display: inline-flex;
        align-items: center;

        margin: 1rem;
        padding: 0.5rem;
        gap: 0.5rem;

        border: none;
        border-radius: 6px;
        background: var(--base-button);

        font-size: 1rem;
        font-weight: 500;

        &:hover {
            border: 1px solid var(--purple);
            background: var(--purple-light);
        }
    }

    img {
        display: inline-flex;
    }
`