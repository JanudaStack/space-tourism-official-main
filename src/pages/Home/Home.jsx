import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <>
            <div className="comet-container">
                <div className="comet"></div>
            </div>
            <section className="hero-section">
                <div className="hero-text-content">
                    <h1 className="hero-header">
                        So, you want to travel to <br />
                    </h1>
                    <span className="space-text">Space</span>
                    <p className="hero-paragraph">
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className="explore">
                    <button className="explore-btn">
                        <span className="explore-text">Explore</span>
                    </button>
                </div>
            </section>
        </>
    );
};

export default Home;
