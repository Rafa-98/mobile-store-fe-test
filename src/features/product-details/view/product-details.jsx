import Header from '../../../components/header/header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

import './product-details.css'

function ProductDetails() {

    const width = 500;

    return (
        <span>
            <Header />
            <h1 className='pageTitle'>Product details</h1>

            <Container fluid className='top-spacing'>
            <Row >
            
            <Col md="5" sm="12">
                <Image width={width} src="https://m.media-amazon.com/images/I/71HN4P-pd5L.jpg" rounded />
            </Col>

            <Col lg='5' md="12" >
                <br />
                <Card className='card-spacing'>
                    <Card.Title>Product Description</Card.Title>
                    <Card.Text>
                      <b>Brand:</b> Acer<br />
                      <b>Model:</b> Iconia Talk S<br />
                      <b>Price:</b> 170<br />
                      <b>CPU:</b> Quad-core 1.3 GHz Cortex-A53<br />
                      <b>RAM:</b> 2 GB RAM<br />
                      <b>os:</b> Android 6.0 (Marshmallow)<br />
                      <b>display Resolution:</b> 7.0 inches (~69.8% screen-to-body ratio)<br />
                      <b>battery:</b> <br />
                      <b>Primary Camera:</b> <br />
                      <b>Secondary Camera:</b> <br />
                      <b>Dimentions:</b> <br />
                      <b>Weight:</b> 260<br />
                    </Card.Text>                    
                </Card>
                <br />
                <Card className='card-spacing'>
                    <span>Select Storage</span>
                    <Form.Select aria-label="Default select example">
                      <option>Select Storage</option>
                      <option value="1">16 GB</option>
                      <option value="2">32 GB</option>                      
                    </Form.Select>
                    <br />
                    <span>Select Color</span>
                    <Form.Select aria-label="Default select example">
                      <option>Select Storage</option>
                      <option value="1">Black</option>
                      <option value="2">White</option>                      
                    </Form.Select>
                    <br />
                    <Button variant="primary" >Add to cart</Button>
                </Card>
               
            </Col>

            
           
        </Row>
            </Container>
        </span>   
    )
}

export default ProductDetails