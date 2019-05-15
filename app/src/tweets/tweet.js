import React, {Component} from 'react';
import './tweets.css';

export default class Tweet extends Component {

    state = {
        isOpen: false
    }
    ShowText = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
   };
   
    render(){
        const text = this.state.isOpen && <p>{this.props.text}</p>
        return (
            <>
                <tr>
                    <td>{this.props.name}</td>
                    <td>{this.props.author}</td>
                    <td>{this.props.date}</td>
                    <td> 
                        <button className='button' onClick = {this.ShowText}>{this.state.isOpen ? 'Hide tweets': "Show tweets"}</button>
                        <button className='button' onClick = {this.props.onDelete}>delete</button>
                    </td>
                </tr>
                <tr >
                    <td colSpan='4' className='tweetText'>
                    {text}
                    </td>                    
                </tr>
            </>
        );
    }
}
