import React, { useState } from 'react'
import { useEffect } from 'react'
import Welcome from '../Component/Welcome'
import Naviguation from '../Component/Naviguation'
import About from '../Component/About'
import Banner from '../Component/Banner'
import Banner2 from '../Component/Banner2'
import Projects from '../Component/Projects'
import Caroussel from '../Component/Carrousel'
import Resume from '../Component/Resume'
import Contact from '../Component/Contact'
import Footer from '../Component/Footer'
import '../Style/Home.scss'


export default function Home()
{
    const [loading, setLoading] = useState(true);
    const loaderDisplayTime = 6000;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, loaderDisplayTime);

        return () => clearTimeout(timer);
    }, []);
  
    const actualProject = {
        "title": "Italiano Segreto",
        "images": ["../../img/venise.webp", "../../img/sicilia.webp", "../../img/pasta.webp"],
        "githubLink":"https://github.com/michalon-claudie/ItalianWebsite"
    }
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
                <Naviguation/>
                <Welcome/>
                <About/>
                <Banner/>
                <Projects/>
                <Caroussel project={actualProject} />
                <Resume/>
                <Banner2/>
                <Contact/>
                <Footer/>
            </main>
            )}
        </div>
    )
}

