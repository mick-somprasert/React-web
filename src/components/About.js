import React, { Component } from 'react'
import data from '../data';
import {
    Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class About extends Component {

    render() {
        return (
            <div>
                เกี่ยวกับเรา
                {
                    data.products.map(product =>
                        <div>
                            <Row>
                                <Col md={3} >
                                    <Card>
                                        <CardImg src={product.image} />
                                        <CardBody>
                                            <CardTitle>{product.name}</CardTitle>
                                            <CardTitle>{product.brand}</CardTitle>
                                            <CardSubtitle>{product.price}</CardSubtitle>
                                            <Button>ซื้อสินค้า</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    )
                }
            </div>
        )
    }
}
