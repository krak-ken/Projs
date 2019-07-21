import React from 'react';

import classes from './Sidebar.css';

const sidebar = props => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.title}>{props.title}</div>
            {props.children}
        </div>
    );
}

export default sidebar;