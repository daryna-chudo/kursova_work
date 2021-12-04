import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/pexels-christina-morillo-1181354.jpg'
import image7 from '../assets/pexels-manuel-geissinger-325229.jpg'
import image8 from '../assets/pexels-panumas-nikhomkhai-1148820.jpg'
import image9 from '../assets/pexels-pixabay-159304.jpg'

export default class ImageGallery extends Component{
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Image className = 'm-2' src = {image1} style = {{ width: '250px', height: '200px'}}/>
                    </Col>
                    <Col>
                        <Image className = 'm-2' src = {image2} style = {{ width: '250px', height: '200px'}}/>
                    </Col>
                    <Col>
                        <Image className = 'm-2' src = {image3} style = {{ width: '250px', height: '200px'}}/>
                    </Col>
                    <Col>
                        <Image className = 'm-2' src = {image4} style = {{ width: '250px', height: '200px'}}/>
                    </Col>
                    <Col>
                        <Image className = 'm-2' src = {image5} style = {{ width: '250px', height: '200px'}}/>
                    </Col>
                    <Col>
                        <Image className = 'm-2' src = {image6} style = {{ width: '250px', height: '200px'}}/>
                    </Col>
                    <Col>
                        <Image className = 'm-2' src = {image7} style = {{ width: '250px', height: '200px'}}/>
                    </Col>
                    <Col>
                        <Image className = 'm-2' src = {image8} style = {{ width: '250px', height: '200px'}}/>
                    </Col>
                    <Col>
                        <Image className = 'm-2' src = {image9} style = {{ width: '250px', height: '200px'}}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}