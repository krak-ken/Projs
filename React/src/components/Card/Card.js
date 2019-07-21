import React from 'react';

import classes from './Card.css';

const card = props => {
    return (
        <div className={classes.Card}>
            <div className={classes.Card_img}>
                <img src={props.imageUrl} title={props.name} alt={'img'} className={classes.Card_img}/>
            </div>
            <div className={classes.Card_Info}>
                <div className={classes.Card_name}>Name: {props.name}</div>
                <div className={classes.Card_expertise}>Expertise: {props.expertise}</div>
                <div className={classes.Card_phone}>Phone: {props.phone.join(', ')}</div>
                <div className={classes.Card_email}>Email: {props.email}</div>
            </div>    
        </div>
    );
}

export default card;