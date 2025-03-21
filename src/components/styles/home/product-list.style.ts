import styled from "styled-components";

export const Titlecard = styled.h1`
    margin: 2rem 6rem;
`

export const ContainerList = styled.div`
  max-width: 100dvw;
  height: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 3rem 6rem;

  gap: 3rem;

  p {
    color: var(--base-label);
    font-weight: 600;
  }
`