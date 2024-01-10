import React, { useState } from 'react'
import Header from '../Component/Header'
import Projects from '../Component/Projects'
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
                <Header />
                <Projects />
            </main>
            )}
        </div>
    )
}

