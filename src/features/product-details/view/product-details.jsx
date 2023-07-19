import Header from '../../../components/header/header';
import LoadingModal from '../../../components/modal/modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import { getProductsDetails } from '../services/product-details';
import React, { useState } from "react";

import { connect, useDispatch, useSelector } from "react-redux";
import { add_to_cart } from "./../../../redux/actions/cartAction";

import './product-details.css'

function addToCart() {

}

function ProductDetails() {

    /*const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    //getProductsDetails("ZmGrkLRPXOTpxsU4jjAcv");
    getProductsDetails("ZmGrkLRPXOTpxsU4jjAcv").then((productsList) => {
        console.log("Rerendered: ");
        //renderCounter++;
        //setProductsList(mapProducts(productsList));
        //setLoading(false);    
      })
      .catch((err) => console.log(err));
*/
    const width = 500;

    const dispatch = useDispatch();

    /*return (
        <span>
            <Header />
            <h1 className='pageTitle'>Product details</h1>

            <Container fluid className='top-spacing'>
            {loading == true ? (
                <LoadingModal dataTag="products" />
            ) : (
                <span>

                
                <Row >
            
                    <Col md="5" sm="12">
                        <Image width={width} src="https://m.media-amazon.com/images/I/71HN4P-pd5L.jpg" rounded />
                    </Col>
            
                    <Col lg='5' md="12" >
                        <br />
                        <Card className='card-spacing'>
                            <Card.Title>Product Description</Card.Title>
                            <Card.Text>
                              <b>Brand:</b> {product.brand}<br />
                              <b>Model:</b> {product.model}<br />
                              <b>Price:</b> {product.price}<br />
                              <b>CPU:</b> {product.cpu}<br />
                              <b>RAM:</b> {product.ram}<br />
                              <b>os:</b> {product.os}<br />
                              <b>display Resolution:</b> {product.displayResolution}<br />
                              <b>battery:</b> {product.battery}<br />
                              <b>Primary Camera:</b> {product.primaryCamera[0]}, {product.primaryCamera[1]}<br />
                              <b>Secondary Camera:</b> {product.secondaryCmera[0]}, {product.secondaryCmera[1]}<br />
                              <b>Dimentions:</b> {product.dimentions}<br />
                              <b>Weight:</b> {product.weight}<br />
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
                </span>
            )}
            </Container>
        </span>   
    )*/

    return (
        <span>
            

            <br /><br /><br /><br />
            <Button variant="primary" onClick={() => {dispatch(add_to_cart(150))}}>Add to cart</Button>
        </span>
    )
}

export default ProductDetails