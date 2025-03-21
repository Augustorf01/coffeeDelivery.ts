// ICONS
import trash from '../../../assets/icons/trash-icon.svg'
import { addProductToCart } from '../../../redux/products-cart/actions';

import { TrashButton } from "../../styles/checkout/checkout.style";
import { QuantityButton } from "../home/product-list";

export const CartProductItem = (product: typeof addProductToCart) => {
    return (
        <div className='productBlock'>
            <img src={product.ilustration} alt="" />
            <div>
                <p>{product.name}</p>
                <div className="buttons">
                    <QuantityButton />
                    <TrashButton>
                        <img src={trash} alt="" />
                        <p>REMOVER</p>
                    </TrashButton>
                </div>
            </div>
        </div>
    )
}