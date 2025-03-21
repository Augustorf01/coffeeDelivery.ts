import styled from 'styled-components'

export const IntroductionContainer = styled.div`
    max-width: 150rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 2rem 10rem;

    .title {
        h1 {
            font-size: 300%;
        }

        p {
            font-size: 125.7%;
            font-weight: 500;
        }
    }

    .coffee {
        width: 32rem;
        margin-left: 3rem;
    }

    .benefits {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-content: center;
        
        gap: 1rem;
        margin-top: -10rem;

        width: 36rem;

        p {
            font-weight: 400;
            font-size: 1rem;
            padding-left: 6px;
        }

        td {
            display: flex;
            flex: 1;
        }

        .xicara  {
            border-radius: 100%;
            border: 6px solid transparent;
            background-color: var(--purple);
        }

        .relogio  {
            border-radius: 100%;
            border: 6px solid transparent;
            background-color: var(--yellow);
        }

        .shopw  {
            border-radius: 100%;
            border: 6px solid transparent;
            background-color: var(--yellow-dark);
        }

        .embalagem  {
            border-radius: 100%;
            border: 6px solid transparent;
            background-color: var(--base-text);
        }
    }
`
