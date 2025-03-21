export interface ProductProps {
    id: string;
    name: string;
    ilustration: string;
    price: number;
    description: string;
    tags: string[];
}
export interface CartProductItemProps {
    product: {
        id: number;
        ilustration: string;
        name?: string;
        price: number;
        quantity?: number;
        type?: string;
        description: string;
    };
}