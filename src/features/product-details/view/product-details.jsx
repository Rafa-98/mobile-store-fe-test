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
import React, { useState, useEffect } from "react";

import { connect, useDispatch, useSelector } from "react-redux";
import { add_to_cart } from "./../../../redux/actions/cartAction";


import { useLocation } from 'react-router-dom';
import './product-details.css'

function storage(product) {
    var tempStorage = [];    
    product.options.storages.map((storage) => {
      tempStorage.push(
        <option value={storage.code}>{storage.name}</option>
      );
    });
    return tempStorage;
}

function color(product) {
    var tempColor = [];    
    product.options.colors.map((colors) => {
      tempColor.push(
        <option value={colors.code}>{colors.name}</option>
      );
    });
    return tempColor;
}

function ProductDetails() {

    const [record, setRecord] = useState(null)
    const {state} = useLocation();
    const { productId } = state; // Read values passed on state
    
    useEffect(() => {                  
        //getProductsDetails("ZmGrkLRPXOTpxsU4jjAcv")
        getProductsDetails(productId)
        .then((product) => { 
            console.log("La respuesta del detalle de product: ", product);                       
            setRecord(product);            
          })
        .catch((err) => console.log(err));      
    }, [])    

    const width = 500;

    const dispatch = useDispatch();

    return (
        <span>            
            <h1 className='pageTitle'>Product details</h1>
            <Container fluid className='top-spacing'>
            {record == null ? (
                <LoadingModal dataTag="products" />
            ) : (
                <span>                
                <Row >            
                    <Col md="5" sm="12">
                        <Image className='card-image-spacing' width={width} src={record.imgUrl} rounded />
                    </Col>            
                    <Col lg='5' md="12" >
                        <br />
                        <Card className='card-spacing'>
                            <Card.Title>Product Description</Card.Title>
                            <Card.Text>
                              <b>Brand:</b> {record.brand}<br />
                              <b>Model:</b> {record.model}<br />
                              <b>Price:</b> {record.price}<br />
                              <b>CPU:</b> {record.cpu}<br />
                              <b>RAM:</b> {record.ram}<br />
                              <b>os:</b> {record.os}<br />
                              <b>display Resolution:</b> {record.displayResolution}<br />
                              <b>battery:</b> {record.battery}<br />
                              <b>Primary Camera:</b> {record.primaryCamera[0]}, {record.primaryCamera[1]}<br />
                              <b>Secondary Camera:</b> {record.secondaryCmera[0]}, {record.secondaryCmera[1]}<br />
                              <b>Dimentions:</b> {record.dimentions}<br />
                              <b>Weight:</b> {record.weight}<br />
                            </Card.Text>                    
                        </Card>
                        <br />
                        <Card className='card-spacing'>
                            <span>Select Storage</span>
                            <Form.Select aria-label="Default select example">
                              <option>Select Storage</option>
                              {storage(record)}         
                            </Form.Select>
                            <br />
                            <span>Select Color</span>
                            <Form.Select aria-label="Default select example">
                              <option>Select Color</option>
                              {color(record)}                    
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
    )

    /*return (
        <span>
            

            <br /><br /><br /><br />
            <Button variant="primary" onClick={() => {dispatch(add_to_cart(150))}}>Add to cart</Button>
        </span>
    )*/
}

export default ProductDetails