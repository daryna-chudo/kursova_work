import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import CarouselBox from '../Components/CarouselBox'
import NewsBase from '../Components/NewsBase'

export default class Home extends Component{
    constructor(){
        super()
        this.state = {
            news: []
        }
    }
    async componentDidMount(){
        try{
            const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2021-12-03&to=2021-12-03&sortBy=popularity&apiKey=adce71b9c8d647879221c670b09f7ffa')
            const json = await response.json()
            console.log(json.articles)
            this.setState({ news: json.articles })
        } catch (error){
            console.log(error)
        }
    }
    render(){
        const idNews = this.state.news.slice(1,11);
        const newComponent = idNews.map(item =>
            <NewsBase title = {item.title} text = {item.description} img = {item.urlToImage} />)
        return(
            <>
            <CarouselBox />
            <Container>
                <h2 className = 'text-center m-4'>Найцікавіші новини у військовій чи не дуже сфері</h2>
                {newComponent}
            </Container>
            </>
        )
    }
}