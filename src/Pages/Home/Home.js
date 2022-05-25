import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Parts from './Parts';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Footer></Footer>
        </div>
    );
};

export default Home;