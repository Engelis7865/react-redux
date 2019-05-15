import React, { Component } from 'react';
import './addTweet.css'

export default class AddTweet extends Component {

    state = {
        name: '',
        text: ''
    }

    preventDefault = event => {
        event.preventDefault()
    }

    handleOnChange = event => {
        this.setState({[event.target.id]: event.target.value})
    }

    addThisTweet = () => {

        if(this.state.name == "" || this.state.text == ""){
            alert ("Поля не заполнены");
        }
        else{
            this.props.onTweetAdd({ 
                ...this.state,
                date: new Date(),
                author: 'admin'
            })
        }
    }

    cancelAdd = () => {
        this.props.cancelAddTweet()
    }

    render() {
        return (
            <div className='formAdd'>
                <form onSubmit={this.preventDefault}>
                    <input name ='name' id="name" type='text' placeholder="Tweet name" onChange={this.handleOnChange}></input>
                    <textarea name = 'text' id="text" type='text' placeholder="Tweet text" onChange={this.handleOnChange}></textarea>
                    <button className="button" onClick={this.addThisTweet}>Add tweets</button>
                    <button className="button" onClick={this.cancelAdd}>Cancel</button>
                </form>
            </div>
        )
    }
}