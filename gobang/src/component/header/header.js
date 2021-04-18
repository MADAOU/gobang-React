import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './header.css';
export default class Header extends Component {

    /**
     * 
     */
    componentDidMount() {

    }

    /**
     * 
     */
    componentWillUnmount() {

    }

    render() {
        const { title } = this.props;
        return (
            <Card className="header-contaienr">
                <Card.Header>
                    <Row>
                        <Col md={4} className='content-left' >

                        </Col>
                        <Col md={4} className='content-center' >
                            {title ? title : 'Header'}
                        </Col>
                        <Col md={4} className='content-right' >

                        </Col>
                    </Row>
                </Card.Header>
            </Card>

        )
    }
}
