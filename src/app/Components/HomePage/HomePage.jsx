import React from 'react';
import Banner from './Banner';
import Signup from './Signup';
import Explore from './Explore';
import OverviewCollection from './OverviewCollection';
import Discover from './Discover';

const Homepage = () => {
    return (
        <div>
            <Banner />
            <Signup/>
            <Explore/>
            <OverviewCollection/>
            <Discover/>
        </div>
    );
};

export default Homepage;