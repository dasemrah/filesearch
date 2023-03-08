import React from 'react'
import {Grid, Row, Col, Navbar, Nav} from "rsuite";

const Head =({dir}) => (
    <Navbar style={{padding:10}}>
        <Grid fluid>
            <Row className="show-grid">
                <Col xs={6}>
                    <img style={{width:100}} src={require('../elements/img/qnbpay_logo.png')}/>

                </Col>
                <Col xs={12}>
                    <img style={{width:300}} src={require('../elements/img/Combined Shape 2.png')} alt=""/>
                    <h3>Paranın kontrolü sende!</h3>
                </Col>
                <Col xs={6}>
                    <img style={{width:100}} src={require('../elements/img/arvis-teknoloji-siyah-beyaz-small.png')}/>
                    <h3>Dizin:{dir}</h3> 
                </Col>
            </Row>

        </Grid>
        <Nav justified>
            <h6>QNBPAY Face Images Search Tool</h6>
        </Nav>
    </Navbar>
)
export default Head
