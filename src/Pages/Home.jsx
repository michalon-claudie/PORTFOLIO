import React, { useState } from 'react'
import Welcome from '../Component/Welcome'
import Naviguation from '../Component/Naviguation'
import About from '../Component/About'
import Projects from '../Component/Projects'
import Wheel from '../Component/Wheel'
import '../Style/Home.scss'


export default function Home()
{
    const [loading, setLoading] = useState(true);
    const loaderDisplayTime = 2000;
  
    setTimeout(() => {
      setLoading(false);
    }, loaderDisplayTime);
  
    return (
        <div>
            {loading ? (
            <div className="loaderC">
                <div className="loader-line-horizontal"></div>
                <div className="loader-line-vertical"></div>
            </div>
            ) : (
            <main className="mainContainer">
                <Welcome/>
                <Naviguation/>
                <About/>
                <Wheel/>
                <Projects/>
            </main>
            )}
        </div>
    )
}

