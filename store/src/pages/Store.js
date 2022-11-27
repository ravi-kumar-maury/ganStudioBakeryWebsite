import {Row, Col} from 'react-bootstrap';
import { product_card } from '../product_data';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

// [{... }, {... }, {... }]
function Store() {

    return (
        <>
            <h1 align="center" className="p-3">Welcome to the Mama's Bakery!</h1>
            <Row xs={1} md={3} className="g-4">
                {product_card.map((product, idx) => (
                    <Col align="center" key={idx}>
                        <ProductCard product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Store;