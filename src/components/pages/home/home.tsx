import styled from "styled-components";
import { container } from "../../../theme";
import { NavBar } from "../../compartilhados/navbar";
import { Introduction } from "./introduction";
import { ProductCardComponent } from "./product-list";
import { ProductModel } from "../../compartilhados/product";

const HomeContainer = styled.div`
  width: 100%;
`;

const MainContent = styled.main`
  ${container}
`;

export const HomePage = () => {
  return (
    <HomeContainer>
      <NavBar />
      <MainContent>
        <Introduction />
        {ProductModel.map((product) => (
          <ProductCardComponent key={product.id} product={product} />
        ))}
      </MainContent>
    </HomeContainer>
  );
}