import React from 'react'; // add React only for follow convention for jsx
import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className

 return (
   <>
   <div className={classes}>{props.children}</div>
   </>
 )
}

export default Card
