import React from 'react';

import classes from './Navbar.css';
import Dropdown from '../Dropdown/Dropdown';

const navbar = props => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar_hero}>
                Title
            </div>
            <div style={{color: "inherit", backgroundColor: "inherit"}}>
                <ul className={classes.navbar_items}>
                    <li className={classes.nav_item}>
                        <a href="#">Login</a>
                    </li>
                    <li className={classes.nav_item}>
                        <a href="#">SignUp</a>
                    </li>
                    <li className={classes.nav_item}>
                        <Dropdown name={'aniket'}>
                            <span>aniket</span>
                            <span>Main Menu</span>
                            <span>Dashboard</span>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default navbar;