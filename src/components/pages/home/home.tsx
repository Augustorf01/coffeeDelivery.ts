import { Introduction } from "./introduction";
import { NavBar } from "../../compartilhados/navbar";
import { ProductList } from "./product-list";
import { ProductModel } from "../../compartilhados/product";
import { ContainerList, Titlecard } from "../../styles/home/product-list.style";

export function HomePage() {
    return (
        <div>
            <NavBar />
            <Introduction />

            <Titlecard>
                Nossos cafés
            </Titlecard>

            <ContainerList>
                {ProductModel.map((p) => (
                    <ProductList 
                        id={p.id}
                        ilustration={p.ilustration}
                        name={p.name} 
                        type={p.type}
                        price={p.price}
                        description={p.description}
                        key={p.id} 
                    />
                ))}
            </ContainerList>
        </div>
    )
}