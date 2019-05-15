import React, { Component } from 'react';
import './tweets.css';
import Tweet from './tweet';
import AddTweet from './Add/AddTweet';

export default class Tweets extends Component {

    state = {
        Tweets: [
            { name: 'tweets1', author: 'admin', date: new Date(), text: 'Градиентом называют плавный переход от одного цвета к другому, причём самих цветов и переходов между ними может быть несколько. С помощью градиентов создаются самые причудливые эффекты веб-дизайна, например, псевдотрёхмерность, блики, фон и др.' },
            { name: 'tweets2', author: 'admin', date: new Date(), text: 'Также с градиентом элементы смотрятся более симпатично, чем однотонные. Отдельного свойства для добавления градиента нет, поскольку он считается фоновым изображением, поэтому добавляется через свойство background-image или универсальное свойство background,' }
        ],
        showAddForm: false,
    }

    goToAdd = () => {
        this.setState({ ...this.state, showAddForm:true });
    }

    addNewTweet = (newTweet) => {
        let tweets = this.state.Tweets.concat(newTweet);
        this.setState({ ...this.state, Tweets:tweets, showAddForm: false });
    }
    
    cancelAddTweet = () => {
        this.setState({ ...this.state, showAddForm: false });
    }

    deleteTweet(index) {
        const newtweets = this.state.Tweets.concat();
        newtweets.splice(index, 1);
        this.setState({'Tweets': newtweets})
      }

    render() {

        if (this.state.showAddForm) {
            return (
                <AddTweet {...this.props} onTweetAdd={ this.addNewTweet.bind(this) } 
                    cancelAddTweet = { this.cancelAddTweet.bind(this) } />
            )
        }

        let tweets = this.state.Tweets.map((tweet, index) => {
            return (
                <Tweet
                    key = {index}
                    name = {tweet.name}
                    author = {tweet.author}
                    date = {tweet.date.toLocaleDateString()}
                    text = {tweet.text}
                    onDelete = {this.deleteTweet.bind(this, index)}
                />
            )
        })
        return (
            <div className='contentTweets'>
                <div className='headTweets'>
                    <button className='button' onClick={this.goToAdd}>add tweets</button>
                </div>
                <div>
                    <table className='tableTweets'>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                        {tweets}
                    </tbody>
                    </table>
                </div>
            </div>
        )
    }
}