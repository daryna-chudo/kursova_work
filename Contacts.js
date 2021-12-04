import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'

const AnyReactComponent = ({ text }) => <div>{text}</div>

export default class Contacts extends Component{
    static defaultProps = {
        center: {
            lat: 50.430,
            lng: 30.544
        },
        zoom: 16
    }
    render(){
        return(
            <>
            <div>
            <h1 className = 'text-center m-4'>ВИ МОЖЕТЕ ЗВ'ЯЗАТИСЬ З НАМИ</h1>
            <Container fluid>
                <Row>
                    <Col>
                        <Form>
                        <Form.Group controlId = 'formBasicEmail'>
                            <Form.Label>Адреса емейл</Form.Label>
                            <Form.Control type = 'email' placeholder = 'Enter email'/>
                            <Form.Text>
                                Все конфіденційно. Нікому нічого не розповімо, хоча б через те, що нас не цікавлять ваші проблеми :)          </Form.Text>
                        </Form.Group>
                        <Form.Group controlId = 'formBasicPassword'>
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as = 'textarea' rows = '3'/>
                        </Form.Group>
                        <Form.Group controlId = 'formBasicCheckbox'>
                            <Form.Check type = 'checkbox' label = 'Check me out'/>
                        </Form.Group>
                        <Button variant = 'primary' type = 'submit'>Submit</Button>
                    </Form>
                    </Col>
                    <Col>
                        <GoogleMapReact
                            bootstrapURLKeys = {{ key: 'AIzaSyBaC2w0LrLlT9RIqldDXl1XpxXNQgPrq_8' }}
                            defaultCenter = {this.props.center}
                            defaultZoom = {this.props.zoom}
                        >
                        <AnyReactComponent
                            lat = {50.429892}
                            lng = {30.544319}
                            text = 'Редакція нашого сайту'
                        />
                        </GoogleMapReact> 
                    </Col>
                </Row>
            </Container>
            </div>
           </>
        )
    }
}