import LoadingModal from '../../../components/modal/modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';
import { getProductData, addProduct } from '../services/product-details';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { add_to_cart } from "./../../../redux/actions/cartAction";


import { useLocation } from 'react-router-dom';
import './product-details.css'
import { ROUTES } from '../../../utils/ROUTES';

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

    const navigate = useNavigate();

    const [record, setRecord] = useState(null)
    const [mobileColorCode, setColor] = useState("")
    const [mobileStorageCode, setStorage] = useState("")
    const [validated, setValidated] = useState(false);
    const [id, setId] = useState("");
    const {state} = useLocation();  
    const [loading, setLoading] = useState(true)
    const [sendingRequest, setRequestStatus] = useState(false) 
    const [error, setError] = useState(null)

    let productId = "";    
    
    useEffect(() => { 
      if (state !== null) {
        productId = state.productId   
        setId(productId)     
      }      
      if (productId == null || productId == "") {                
        navigate(ROUTES.HOME);
      }          
      else {                
        getProductData(productId)
          .then((product) => {      
            if(product == null) throw Error('Error')  
            setRecord(product);
          })
          .catch((err) => {
            console.log(err)
            setError("Fetching");
          }) 
          .finally(() => {
            setLoading(false);
          })
      }          
    }, [])

    const width = 450;

    const dispatch = useDispatch();

    const addToCart = (event) => {
      event.preventDefault();      
      const form = event.currentTarget;

      if (form.checkValidity() === false) {        
        event.stopPropagation();
      }
      else {
        setRequestStatus(true);        
        addProduct(id, mobileColorCode, mobileStorageCode)
          .then((response) => {      
            if(response == null) throw Error('Error')  
            dispatch(add_to_cart(response.count))
            navigate(ROUTES.HOME);
          })
          .catch((err) => {
            console.log(err)
            setError("Sending data");
          })
          .finally(() => {
            setRequestStatus(false);
          });
      }     
      setValidated(true);       
    }

    const storageChanged = (storageSelected) => {      
      setStorage(storageSelected);
    }
    
    const colorChanged = (colorSelected) => {      
      setColor(colorSelected);
    }

    return (
        <span>                        
          <Container fluid className='top-spacing'>
            <h1 className='pageTitle'>Product details</h1>
            
            {loading == true ? (
                <LoadingModal dataTag="product details" />
            ) : (
                <span> 
                  { error == 'Fetching' ? (
                    <span>                          
                      <h1 className="errorMsg">An error has ocurred. Please try again later.</h1>                                           
                    </span>
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
                                    <b>Price:</b> ${record.price}<br />
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
                                <Form noValidate validated={validated} onSubmit={addToCart}>
                                  <span>Select Storage</span>
                                  <Form.Group hasValidation>
                                    <Form.Select required aria-label="Default select example" value={mobileStorageCode} onChange={e => {storageChanged(e.target.value)}}>
                                      <option value="">Select Storage</option>
                                      {storage(record)}         
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                      Please choose a storage.
                                    </Form.Control.Feedback>
                                  </Form.Group>
                                  <br />
                                  <span>Select Color</span>
                                  <Form.Group hasValidation>
                                    <Form.Select required aria-label="Default select example" value={mobileColorCode} onChange={e => {colorChanged(e.target.value)}}>
                                      <option value="">Select Color</option>
                                      {color(record)}                    
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                      Please choose a color.
                                    </Form.Control.Feedback>
                                  </Form.Group>
                                  <br />
                                  
                                  <Button type="submit" variant="primary" className="addBtn" disabled={sendingRequest}>Add to cart</Button>
                                  {sendingRequest == true ? (
                                      <Spinner animation="border" role="status" className="spinner">
                                        <span className="visually-hidden">Loading...</span>
                                      </Spinner>
                                  ) : (<span></span>)}
                                  {error == "Sending data" ? (
                                      <p className="errorMsg">An error ocurred. Please try againg later.</p>
                                  ) : (<span></span>)}                               
                                </Form>         
                              </Card>                       
                          </Col>                                                   
                      </Row>
                    </span>
                  )
                  }                
                </span>
            )}
          </Container>
        </span>
    ) 
}

export default ProductDetails