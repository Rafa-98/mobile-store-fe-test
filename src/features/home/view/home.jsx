import Header from '../../../components/header/header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import './home.css'

function Home() {

    var counter = 10;
    const productsList = [];
  
    while (counter > 0) {
      productsList.push(
        <Col xl="3" lg="4" md="6" sm="12">
          <Card style={{ width: '18rem' }} className='card-margin-spacing'>
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71HN4P-pd5L.jpg" />
            <Card.Body>          
              <Card.Text>
                <b>Brand:</b> Acer<br />
                <b>Model:</b> Iconia Talk S<br />
                <b>Price:</b> 170<br />
              </Card.Text>
              <Button variant="primary">Ver detalles</Button>
            </Card.Body>
          </Card>
        </Col>
      );
      counter--
    }

    return (
        <span>
            <Header />
            <h1 className='pageTitle'>Products List</h1>

            <Container fluid className='top-spacing'>
        <h1 className='pageTitle'>Products List</h1>
        <Form>
          <Form.Group style={{ width: '20rem' }} className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Filtrar</Form.Label>
            <Form.Control type="email" placeholder="IPhone" />
          </Form.Group>    
        </Form>

      
        <Row className="justify-content-md-center">
          {productsList}
        </Row>
      </Container>
        </span>        
    )
}

export default Home