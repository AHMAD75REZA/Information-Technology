import React from 'react'

// Sections
import TopNavbar from "../Components/Nav/TopNavbar";
import Header from '../Components/Sections/Header';
import Services from '../Components/Sections/Services';
import Projects from '../Components/Sections/Projects';
import Blog from '../Components/Sections/Blog';
import Pricing from '../Components/Sections/Pricing';
import Contact from '../Components/Sections/Contact';
import Footer  from '../Components/Sections/Footer';

function Landing() {
    return (
        <>
       
        <TopNavbar/>
        <Header/>
        <Services/>
        <Projects/>
        <Blog/>
        <Pricing/>
        <Contact/>
        <Footer/>

        </>
            

        
    )
}

export default Landing
