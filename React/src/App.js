import React, { Fragment } from 'react';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Cards from './containers/Cards/Cards';
import SignUp from './containers/SignUp/SignUp';
import SignIn from './containers/SignIn/SignIn';

const app = props => {
    const styles = { display: "flex"  };

    return (
        <Fragment>
            <Navbar />
            <div style={styles}>
                <Sidebar title={'Professions'}>
                    <div>Doctors</div>
                    <div>Lawyers</div>
                    <div>Maids</div>
                    <div>Drivers</div>
                    <div>Barbers</div>
                </Sidebar> 
                <SignIn />   
            </div>
        </Fragment>
    );
}

export default app;