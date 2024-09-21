import React from 'react';
import Banner from './Banner';
import Signup from './Signup';
import Explore from './Explore';
import OverviewCollection from './OverviewCollection';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <Signup/>
            <Explore/>
            <OverviewCollection/>
        </div>
    );
};

export default Homepage;