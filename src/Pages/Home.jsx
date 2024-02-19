import React, { useState } from 'react'
import { useEffect } from 'react'
import Welcome from '../Component/Welcome'
import Naviguation from '../Component/Naviguation'
import About from '../Component/About'
import Projects from '../Component/Projects'
import Contact from '../Component/Contact'
import Footer from '../Component/Footer'
import '../Style/Home.scss'


export default function Home()
{
    const [loading, setLoading] = useState(true);
    const loaderDisplayTime = 3000;

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
            </div>
            ) : (
            <main className="mainContainer">
                <Welcome/>
                <Naviguation/>
                <About/>
                <Projects/>
                <Contact/>
                <Footer/>
            </main>
            )}
        </div>
    )
}

