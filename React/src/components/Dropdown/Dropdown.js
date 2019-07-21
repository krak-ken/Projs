import React from 'react';
import { useState } from 'react';

import classes from './Dropdown.css';

const dropdown = props => {
    let [ clicked, onToggle ] = useState(false);
    let toggleClass = clicked ? 'dropDown_caret_up' : 'dropDown_caret_down';

    return (
        <div className={classes.dropDown} onClick = {() => onToggle(!clicked)}>
            <span className={classes.dropDown}>
                {props.name}
            </span>
            <span className={classes[toggleClass]}></span>
            {
               !clicked ? null : <div className={classes.dropDown_menu}>{props.children}</div> 
            }
        </div>
    );
}

export default dropdown;