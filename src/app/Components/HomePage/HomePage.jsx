import React from 'react';
import Banner from './Banner';
import Signup from './Signup';
import Explore from './Explore';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <Signup/>
            <Explore/>
        </div>
    );
};

export default Homepage;