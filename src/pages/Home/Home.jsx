import React from 'react';
import styles from './Home.module.css'; // Import CSS module
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <main>
                <section className={styles['home-hero-section']}>
                    <div className={styles['home-hero-text-content']}>
                        <h1 className={styles['home-hero-header']}>
                            So, you want to travel to <br />
                        </h1>
                        <span className={styles['home-space-text']}>Space</span>
                        <p className={styles['home-hero-paragraph']}>
                            Let’s face it; if you want to go to space, you might
                            as well genuinely go to outer space and not hover
                            kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world
                            experience!
                        </p>
                    </div>
                    <div className={styles['home-explore']}>
                        <Link
                            to="/destination"
                            className={styles['home-explore-btn']}
                        >
                            Explore
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
