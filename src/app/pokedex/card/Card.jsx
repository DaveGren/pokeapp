import React, { Component } from 'react';
import './Card.scss';

export default class Card extends Component {
  imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${this.props.index}.png`;

  index = this.props.index || 1;

  render() {
  return (<div className="Card" onClick={() => this.props.onClick(this.index)}>
    <img className="Card-image" src={this.imageUrl} alt={this.props.name} />
    <h4># {this.index} <span className="Card-name">{this.props.name}</span></h4>
  </div>)
  }
}