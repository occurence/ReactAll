import { ProductListItem } from './ProductListItem/ProductListItem';
import css from './ProductList.module.css';

export const ProductList = ({ products }) => {
    return(
        <ul className={css.container}>
            {products.map(
                ({ id, name }) => 
                    <ProductListItem key={id} id={id} name={name} />
            )}
            
        </ul>
    )
}