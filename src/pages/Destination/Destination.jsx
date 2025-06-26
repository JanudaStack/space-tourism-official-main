import React, { useState } from 'react';
import styles from './Destination.module.css';
import MoonImage from '../../assets/destination/image-moon.webp';
import MarsImage from '../../assets/destination/image-mars.webp';
import EuropaImage from '../../assets/destination/image-europa.webp';
import TitanImage from '../../assets/destination/image-titan.webp';

const planetData = [
    {
        name: 'Moon',
        image: MoonImage,
        description:
            'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 km',
        travelTime: '3 days',
    },
    {
        name: 'Mars',
        image: MarsImage,
        description:
            'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 mil. km',
        travelTime: '9 months',
    },
    {
        name: 'Europa',
        image: EuropaImage,
        description:
            'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, or hockey.',
        distance: '628 mil. km',
        travelTime: '3 years',
    },
    {
        name: 'Titan',
        image: TitanImage,
        description:
            'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.4 bil. km',
        travelTime: '7 years',
    },
];

const Destination = () => {
    const [selectedPlanet, setSelectedPlanet] = useState(planetData[0]); // Default to Moon
    const [isTransitioning, setIsTransitioning] = useState(false); // State for animation

    const handlePlanetChange = (planetName) => {
        setIsTransitioning(true); // Start transition
        setTimeout(() => {
            const planet = planetData.find((p) => p.name === planetName);
            setSelectedPlanet(planet); // Update planet after transition
            setIsTransitioning(false); // End transition
        }, 300); // Match timeout with CSS animation duration
    };

    return (
        <>
            <main>
                <section className={styles['destination-section']}>
                    <div className={styles['destination-title']}>
                        <h1 className={styles['destination-title-font']}>
                            01 Pick your destination
                        </h1>
                    </div>
                    <div
                        className={`${styles['destination-content-wrapper']} ${
                            isTransitioning
                                ? styles['fade-out']
                                : styles['fade-in']
                        }`}
                    >
                        <div className={styles['destination-container']}>
                            <picture
                                className={styles['destination-planet-img']}
                            >
                                <img
                                    src={selectedPlanet.image}
                                    alt={selectedPlanet.name}
                                />
                            </picture>
                            <div className={styles['destination-details']}>
                                <nav
                                    className={styles['destination-planet-nav']}
                                >
                                    <ul
                                        className={
                                            styles[
                                                'destination-planet-nav-links'
                                            ]
                                        }
                                    >
                                        {planetData.map((planet) => (
                                            <li key={planet.name}>
                                                <button
                                                    className={
                                                        styles[
                                                            'destination-nav-link'
                                                        ]
                                                    }
                                                    onClick={() =>
                                                        handlePlanetChange(
                                                            planet.name
                                                        )
                                                    }
                                                >
                                                    {planet.name}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                <div className={styles['planet-content']}>
                                    <h2
                                        className={
                                            styles['destination-planet-header']
                                        }
                                    >
                                        {selectedPlanet.name}
                                    </h2>
                                    <p
                                        className={
                                            styles[
                                                'destination-planet-description'
                                            ]
                                        }
                                    >
                                        {selectedPlanet.description}
                                    </p>
                                </div>
                                <hr />
                                <div
                                    className={
                                        styles['destination-planet-travel-info']
                                    }
                                >
                                    <div
                                        className={
                                            styles[
                                                'destination-planet-distance'
                                            ]
                                        }
                                    >
                                        <h3
                                            className={
                                                styles[
                                                    'destination-travel-info-header'
                                                ]
                                            }
                                        >
                                            Avg. distance
                                        </h3>
                                        <span
                                            className={
                                                styles['destination-info-value']
                                            }
                                        >
                                            {selectedPlanet.distance}
                                        </span>
                                    </div>
                                    <div
                                        className={
                                            styles[
                                                'destination-planet-travel-time'
                                            ]
                                        }
                                    >
                                        <h3
                                            className={
                                                styles[
                                                    'destination-travel-info-header'
                                                ]
                                            }
                                        >
                                            Est. travel time
                                        </h3>
                                        <span
                                            className={
                                                styles['destination-info-value']
                                            }
                                        >
                                            {selectedPlanet.travelTime}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Destination;
