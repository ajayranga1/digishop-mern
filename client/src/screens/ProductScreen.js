import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import products from '../products';
import Rating from '../components/Rating';

const ProductScreen = () => {
   const params = useParams();
   const product = products.find((product) => product._id === params.id);
   return (
      <>
         <Link className="btn btn-light my-3" to="/">
            Go Back
         </Link>
         <Row>
            <Col md={6}>
               <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
               <ListGroup variant="flush">
                  <ListGroup.Item>
                     <h3>{product.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                     <Rating
                        value={product.rating}
                        numReviews={product.numReviews}
                     />
                  </ListGroup.Item>
                  <ListGroup.Item>Price: INR {product.price}</ListGroup.Item>
                  <ListGroup.Item>
                     Description: {product.description}
                  </ListGroup.Item>
               </ListGroup>
            </Col>
            <Col md={3}>
               <Card>
                  <ListGroup variant="flush">
                     <ListGroup.Item>
                        <Row>
                           <Col>Price:</Col>
                           <Col>
                              <strong>INR {product.price}</strong>
                           </Col>
                        </Row>
                     </ListGroup.Item>{' '}
                     <ListGroup.Item>
                        <Row>
                           <Col>Status:</Col>
                           <Col>
                              {product.countInStock > 0
                                 ? 'Available'
                                 : 'Out Of Stock'}
                           </Col>
                        </Row>
                     </ListGroup.Item>
                     <ListGroup.Item>
                        <Button
                           className="btn-block"
                           type="button"
                           disabled={product.countInStock > 0 ? false : true}
                        >
                           Add to Cart
                        </Button>
                     </ListGroup.Item>
                  </ListGroup>
               </Card>
            </Col>
         </Row>
      </>
   );
};

export default ProductScreen;