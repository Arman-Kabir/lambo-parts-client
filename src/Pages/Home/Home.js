import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Inquiry from './Inquiry';
import Parts from './Parts';
import Reviews from './Reviews';
import Summary from './Summary';
import WhyChoose from './WhyChoose';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Summary></Summary>
            <Reviews></Reviews>
            <WhyChoose></WhyChoose>
            <Inquiry></Inquiry>
            <Footer></Footer>
        </div>
    );
};

export default Home;