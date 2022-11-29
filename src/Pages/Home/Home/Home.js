import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import BoostedItem from './BoostedItem';
import Support from './Support';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <BoostedItem></BoostedItem>
            <Support></Support>
        </div>
    );
};

export default Home;