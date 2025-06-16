import React from 'react';
import styles from './Crew.module.css'; // Import CSS module
import CrewImageAnoushehAnsari from '../../assets/crew/image-anousheh-ansari.webp';

const Crew = () => {
    return (
        <>
            <main>
                <section className={styles['crew-section']}>
                    <div className={styles['crew-section-header-container']}>
                        <h1 className={styles['crew-section-header']}>
                            02 Meet your crew
                        </h1>
                    </div>
                    <div className={styles['crew-content-wrapper']}>
                        <div className={styles['crew-container']}>
                            <div className={styles['crew-content']}>
                                <div className={styles['crew-header']}>
                                    <h3 className={styles['crew-title']}>
                                        Flight Engineer
                                    </h3>
                                    <h2 className={styles['crew-name']}>
                                        Anousheh Ansari
                                    </h2>
                                </div>
                                <div className={styles['crew-info']}>
                                    <p id={styles['crew-info']}>
                                        Anousheh Ansari is an Iranian American
                                        engineer and co-founder of Prodea
                                        Systems. Ansari was the fourth
                                        self-funded space tourist, the first
                                        self-funded woman to fly to the ISS, and
                                        the first Iranian in space.
                                    </p>
                                </div>
                                <div className={styles['crew-nav']}></div>
                            </div>
                            <picture className={styles['crew-img']}>
                                <img
                                    src={CrewImageAnoushehAnsari}
                                    alt="Anousheh Ansari"
                                />
                            </picture>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Crew;
