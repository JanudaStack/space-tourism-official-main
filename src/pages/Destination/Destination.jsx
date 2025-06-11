import React from 'react';
import styles from './Destination.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Moon from '../../assets/destination/image-moon.webp';

const Destination = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className={styles['destination-section']}>
                    <div className={styles['destination-title']}>
                        <h1 className={styles['destination-title']}>
                            01 Pick your destination
                        </h1>
                    </div>
                    <div className={styles['destination-container']}>
                        <picture className={styles['destination-planet-img']}>
                            <img src={Moon} alt="Moon" />
                        </picture>
                        <nav className={styles['destination-planet-nav']}>
                            <ul
                                className={
                                    styles['destination-planet-nav-links']
                                }
                            >
                                <li>
                                    <a href="#">Moon</a>
                                </li>
                                <li>
                                    <a href="#">Mars</a>
                                </li>
                                <li>
                                    <a href="#">Europa</a>
                                </li>
                                <li>
                                    <a href="#">Titan</a>
                                </li>
                            </ul>
                        </nav>
                        <div className={styles['planet-content']}>
                            <h2 className={styles['destination-planet-header']}>
                                Moon
                            </h2>
                            <p
                                className={
                                    styles['destination-planet-description']
                                }
                            >
                                See our planet as you’ve never seen it before. A
                                perfect relaxing trip away to help regain
                                perspective and come back refreshed. While
                                you’re there, take in some history by visiting
                                the Luna 2 and Apollo 11 landing sites.
                            </p>
                        </div>

                        <hr />
                        <div
                            className={styles['destination-planet-travel-info']}
                        >
                            <div
                                className={
                                    styles['destination-planet-distance']
                                }
                            >
                                <h3
                                    className={
                                        styles['destination-travel-info-header']
                                    }
                                >
                                    Avg. distance
                                </h3>
                                <span
                                    className={styles['destination-info-value']}
                                >
                                    384,400 km
                                </span>
                            </div>
                            <div
                                className={
                                    styles['destination-planet-travel-time']
                                }
                            >
                                <h3
                                    className={
                                        styles['destination-travel-info-header']
                                    }
                                >
                                    Est. travel time
                                </h3>
                                <span
                                    className={styles['destination-info-value']}
                                >
                                    3 days
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Destination;
