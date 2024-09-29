import { useParams, Link, useLocation } from 'react-router-dom';
import { getProductById } from '../../services/fakeAPI';
import { Button } from '../../components/Button/Button';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const product = getProductById(id);
    const location = useLocation();
    
    const backLinkHref = location.state?.from ?? '/products';
    return(
        <main>
            <Link to={backLinkHref}>
                <Button text='Back'/>
            </Link>
            <img src="https://via.placeholder.com/960x240" alt="" />
            <div>
                <h2>{id}: {product.name}</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
                    sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
                    a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
                    atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
                    praesentium ipsum quos unde voluptatum?
                </p>
            </div>
        </main>
    )
}
export default ProductDetailsPage;