import styled from "styled-components";

export const Titlecard = styled.h1`
    margin: 2rem 6rem;
`

export const ContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 2rem;

  gap: 3rem;

  p {
    color: var(--base-label);
    font-weight: 600;
  }
`