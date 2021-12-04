import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import NewsBase from '../Components/NewsBase'


export default class News extends Component{
    constructor(){
        super()
        this.state = {
            loading: false,
            news: []
        }
    }
    async componentDidMount(){
        try{
            const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=adce71b9c8d647879221c670b09f7ffa')
            const json = await response.json()
            console.log(json.articles)
            this.setState({ news: json.articles })
        } catch (error){
            console.log(error)
        }
    }
    render() {
        const Component = this.state.news.map(item =>
            <NewsBase title = {item.title} text = {item.description} img = {item.urlToImage} url = {item.url}/>)
        return (
            <Container>
                <h2 className = 'text-center m-2'>Наші геніальні новини</h2>
                {Component}
            </Container>
        )
    }
} 