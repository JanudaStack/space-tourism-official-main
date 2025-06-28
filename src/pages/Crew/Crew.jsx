import React, { useState } from 'react';
import styles from './Crew.module.css'; // Import CSS module
import CrewImageCommander from '../../assets/crew/image-douglas-hurley.webp';
import CrewImageEngineer from '../../assets/crew/image-anousheh-ansari.webp';
import CrewImagePilot from '../../assets/crew/image-victor-glover.webp';
import CrewImageSpecialist from '../../assets/crew/image-mark-shuttleworth.webp';

const crewData = [
    {
        id: 1,
        title: 'Commander',
        name: 'Douglas Hurley',
        image: CrewImageCommander,
        info: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    },
    {
        id: 2,
        title: 'Flight Engineer',
        name: 'Anousheh Ansari',
        image: CrewImageEngineer,
        info: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    },
    {
        id: 3,
        title: 'Pilot',
        name: 'Victor Glover',
        image: CrewImagePilot,
        info: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    },
    {
        id: 4,
        title: 'Mission Specialist',
        name: 'Mark Shuttleworth',
        image: CrewImageSpecialist,
        info: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    },
];

const Crew = () => {
    const [selectedMember, setSelectedMember] = useState(crewData[0]);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleCrewChange = (crew) => {
        setIsTransitioning(true); // Start transition
        setTimeout(() => {
            setSelectedMember(crew); // Update the selected member
            setIsTransitioning(false); // End transition
        }, 500); // Match timeout with CSS animation duration
    };

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
                            <div
                                className={`${styles['crew-content']} ${
                                    isTransitioning
                                        ? styles['fade-out']
                                        : styles['fade-in']
                                }`}
                                data-aos="fade-down"
                            >
                                <div className={styles['crew-header']}>
                                    <h3 className={styles['crew-title']}>
                                        {selectedMember.title}
                                    </h3>
                                    <h2 className={styles['crew-name']}>
                                        {selectedMember.name}
                                    </h2>
                                </div>
                                <div className={styles['crew-info']}>
                                    <p className={styles['crew-info-text']}>
                                        {selectedMember.info}
                                    </p>
                                </div>
                                <div className={styles['crew-nav']}>
                                    <ul className={styles['crew-nav-dots']}>
                                        {crewData.map((crew) => (
                                            <li key={crew.id}>
                                                <button
                                                    onClick={() =>
                                                        handleCrewChange(crew)
                                                    }
                                                    className={
                                                        selectedMember.id ===
                                                        crew.id
                                                            ? styles[
                                                                  'active-dot'
                                                              ]
                                                            : ''
                                                    }
                                                ></button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <picture className={styles['crew-img']}>
                                <img
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
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
