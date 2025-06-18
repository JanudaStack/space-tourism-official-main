import React from 'react';
import styles from './Technology.module.css';
import LaunchVehicleImg from '../../assets/technology/image-launch-vehicle-landscape.jpg';

const Technology = () => {
    return (
        <main>
            <section className={styles['technology-section']}>
                <div className={styles['technology-section-header']}>
                    <h1 className={styles['header-text']}>
                        <span className={styles['text-no']}>03</span> Space
                        Launch 101
                    </h1>
                </div>
                <div className={styles['technology-content-wrapper']}>
                    <picture className={styles['technology-img']}>
                        <img src={LaunchVehicleImg} alt="LaunchVehicleImg" />
                    </picture>
                    <div className={styles['tech-content-container']}>
                        <div className={styles['tech-content-nav-mobile']}>
                            <ul className={styles['nav-buttons-mobile']}>
                                <li>
                                    <button>
                                        <span className={styles['nav-number']}>
                                            1
                                        </span>
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <span className={styles['nav-number']}>
                                            2
                                        </span>
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <span className={styles['nav-number']}>
                                            3
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className={styles['tech-content']}>
                            <div className={styles['tech-content-header']}>
                                <h4 className={styles['header-title']}>
                                    The Terminology...
                                </h4>
                            </div>
                            <h1 className={styles['vehicle-name']}>
                                Launch Vehicle
                            </h1>
                            <p className={styles['vehicle-content']}>
                                A launch vehicle or carrier rocket is a
                                rocket-propelled vehicle used to carry a payload
                                from Earth's surface to space, usually to Earth
                                orbit or beyond. Our WEB-X carrier rocket is the
                                most powerful in operation. Standing 150 metres
                                tall, it's quite an awe-inspiring sight on the
                                launch pad!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Technology;
