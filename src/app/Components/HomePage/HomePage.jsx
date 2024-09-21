import React from 'react';
import Banner from './banner';
import Signup from './signup';
import Explore from './explore';
import Overviewcollection from './overviewcollection';
import Discover from './discover';

const homepage = () => {
    return (
        <div>
            <Banner/>
            <Signup/>
            <Explore/>
            <Overviewcollection/>
            <Discover/>
        </div>
    );
};

export default homepage;