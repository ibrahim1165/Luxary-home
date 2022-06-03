import React from 'react';
import Footer from '../Shared/Footer';
import Header from './Header';
import Projects from './Projects';
import Services from './Services';

const Home = () => {
    return (
        <div>
        <Header></Header>
        <Projects></Projects>
        <Services></Services>
        <Footer></Footer>
        </div>
    );
};

export default Home;