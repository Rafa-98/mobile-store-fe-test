import Header from '../../../components/header/header';
import LoadingModal from '../../../components/modal/modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from "react";

import { getProductsList } from '../services/home-service';
import { connect, useSelector, useDispatch } from "react-redux";
import { add_to_list } from "./../../../redux/actions/productListAction";

import { useNavigate } from "react-router-dom";

import './home.css'
import { ROUTES } from "../../../utils/ROUTES";

function Home() {

  const [records, setRecords] = useState([])
  let products = useSelector((state) => state.productsList)
  const dispatch = useDispatch();
  
  useEffect(() => {                  
      getProductsList
      .then((productsList) => {                        
          setRecords(productsList);            
        })
      .catch((err) => console.log(err));      
  }, [])
  var loading = false   
  
  const navigate = useNavigate();
  const goToProductDetails = (productId) => navigate(ROUTES.DETAILS, { state: { productId: productId } });
  
  const mapProducts = (products) => {
    var tempProducts = [];      
    products.map((product) => {
      tempProducts.push(
        <Col xl="3" lg="4" md="6" sm="12">
          <Card style={{ width: '18rem' }} className='card-margin-spacing'>
            <Card.Img variant="top" src={product.imgUrl} className='card-image-spacing'/>
            <Card.Body className="card-body">          
              <Card.Text>
                <b>Brand:</b> {product.brand}<br />
                <b>Model:</b> {product.model}<br />
                <b>Price:</b> ${product.price}<br />
              </Card.Text>
              <Button variant="primary" onClick={() => goToProductDetails(product.id)}>More details</Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return tempProducts;
  }

  return (
    <span>          
      { records.length == 0 ? (
        <span>
          <LoadingModal dataTag="products" />
        </span>
      ) : (
        <span>                            
            <Container fluid className='top-spacing'>
              <h1 className='pageTitle'>Products List</h1>                  
              <Form>
                <Form.Group style={{ width: '20rem' }} className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Filter</Form.Label>
                  <Form.Control type="email" placeholder="IPhone" />
                </Form.Group>    
              </Form>                
              <Row className="justify-content-md-center">
                {mapProducts(records)}
              </Row>                                      
            </Container>              
        </span>
      ) }                    
    </span>
  )
}

export default Home