import styled from "styled-components";

export const SuccessTitle = styled.h2`
    margin: 2rem 10rem;
    font-size: 200%;
    color: var(--yellow-dark);

    p {
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--base-title);
    }
`

export const SuccessContent = styled.div`
    display: flex;
    margin: 2rem 10rem;

    align-items: center;
    justify-content: space-between;
`

export const ResumeContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    border: 2px solid transparent;
    border-radius: 0.3rem 3rem;
    background: linear-gradient(var(--white), var(--white)) padding-box,
                linear-gradient(45deg, var(--yellow), var(--purple)) border-box;
    padding-top: 1rem;
    
    .locale {
        background-color: var(--purple);
        padding: 6px;
        border-radius: 100%;
    }

    .timer {
        background-color: var(--yellow);
        padding: 6px;
        border-radius: 100%;
    }

    .dollar {
        background-color: var(--yellow-dark);
        padding: 6px;
        border-radius: 100%;
    }
`

export const InfoSuccess = styled.div`
    display: flex;
    align-items: center;
    margin: 0.5rem 2rem;
    padding-right: 100px;
    gap: 1rem;

    p {
        color: var(--base-text);
        font-weight: 300;
    }

    span {
        font-weight: 650;
    }
`