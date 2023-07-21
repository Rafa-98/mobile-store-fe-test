import LoadingModal from '../../../components/modal/modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from "react";

import { getProductsData } from '../services/home-service';

import { useNavigate } from "react-router-dom";

import './home.css'
import { ROUTES } from "../../../utils/ROUTES";

function Home() {

  const [records, setRecords] = useState([])
  const [productsToDisplay, setProductsToDisplay] = useState([])
  const [loading, setLoading] = useState(true)  
  
  useEffect(() => {  
    getProductsData
    .then((result) => {      
      setRecords(result);  
      setProductsToDisplay(result);  
      setLoading(false);
    })
    .catch((err) => console.log(err))
    .finally(() => {
      setLoading(false);
    })          
  }, [])  
  
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

  const [filterString, setFilterString] = useState([])
  const filterProducts = (text) => {            
    var result = records.filter(function (product) {
      return ((product.brand.toUpperCase()).includes(text.toUpperCase()) || (product.model.toUpperCase()).includes(text.toUpperCase()))
    })
    
    setFilterString(text);    
    setProductsToDisplay(result);
  }

  return (
    <span>          
      { loading == true ? (
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
                  <Form.Control type="text" placeholder="Filter by Brand or Model" value={filterString} onChange={e => {filterProducts(e.target.value)}}/>
                </Form.Group>    
              </Form>                
              <Row className="justify-content-md-center">
                {mapProducts(productsToDisplay)}
              </Row>                                      
            </Container>              
        </span>
      ) }                    
    </span>
  )
}

export default Home