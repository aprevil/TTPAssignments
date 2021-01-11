import React, { Component } from 'react';
import './ContactCard.css'
class ContactCard extends Component{
    render(){
        return(
            <React.Fragment>
                <div class = "card">
                    <h1 id ="first">Name: {this.props.name}</h1>
                    <h1>Number: {this.props.number}</h1>
                    <h1>*Email: {this.props.email}*</h1>
                </div>
            </React.Fragment>);
    }
}
export default ContactCard;