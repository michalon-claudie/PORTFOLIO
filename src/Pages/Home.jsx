import React, { useState } from 'react'
import { useEffect } from 'react'
import Welcome from '../Component/Welcome'
import Naviguation from '../Component/Naviguation'
import About from '../Component/About'
import Banner from '../Component/Banner'
import Banner2 from '../Component/Banner2'
import Projects from '../Component/Projects'
import Resume from '../Component/Resume'
import Contact from '../Component/Contact'
import Footer from '../Component/Footer'
import '../Style/Home.scss'


export default function Home()
{
    const [loading, setLoading] = useState(true);
    const loaderDisplayTime = 5000;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, loaderDisplayTime);

        return () => clearTimeout(timer);
    }, []);
  
    return (
        <div>
            {loading ? (
            <div className="loaderC">
                <div className="loader-line-horizontal"></div>
                <div className="loader-line-vertical"></div>
                <div className="loader-line-C"></div>
                <div className="star star1"></div>
                <div className="star star2"></div>
                <div className="star star3"></div>
            </div>
            ) : (
            <main className="mainContainer">
                <Welcome/>
                <Naviguation/>
                <About/>
                <Banner/>
                <Projects/>
                <Resume/>
                <Banner2/>
                <Contact/>
                <Footer/>
            </main>
            )}
        </div>
    )
}

