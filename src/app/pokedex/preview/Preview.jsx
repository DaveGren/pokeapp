import React from 'react';
import './Preview.scss'

const Preview = (props) => (
  props.name ? (
  <div className="Preview">
    <img className="Preview-image" src={`https://pokeres.bastionbot.org/images/pokemon/${props.index}.png`} alt={props.name} />
    <h2>{props.name}</h2>
    <ol>{props.types.map((element) => <li key={element.slot}>{element.type.name}</li>)}</ol>
  </div> 
  ) :
  <div></div>
)

export default Preview;