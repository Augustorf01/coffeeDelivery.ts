// ICONS
import trash from '../../../assets/icons/trash-icon.svg'

import { TrashButton } from "../../styles/checkout/checkout.style";
import { QuantityButton } from "../home/product-list";
import { CartProductItemProps } from './types';

  
  export function CartProductItem({ product }: CartProductItemProps) {
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