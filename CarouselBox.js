import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import firstSlide from '../assets/pexels-christina-morillo-1181354.jpg'
import secondSlide from '../assets/pexels-manuel-geissinger-325229.jpg'
import thirdSlide from '../assets/pexels-panumas-nikhomkhai-1148820.jpg'
import fourthSlide from '../assets/pexels-pixabay-159304.jpg'

export default class CarouselBox extends Component{
    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                        className = 'd-block w-100'
                        src = {firstSlide}
                        alt = 'first'
                    />
                    <Carousel.Caption>
                        <h3>Фотографія гарник курсантів в парадці</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className = 'd-block w-100'
                        src = {secondSlide}
                        alt = 'second'
                    />
                    <Carousel.Caption>
                    <h3>Доповідь військовослужбовця</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className = 'd-block w-100'
                        src = {thirdSlide}
                        alt = 'first'
                    />
                    <Carousel.Caption>
                        <h3>Прапор нашої Неньки</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className = 'd-block w-100'
                        src = {fourthSlide}
                        alt = 'first'
                    />
                    <Carousel.Caption>
                        <h3>Майбутні випускники нашої кафедри(27к)</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}