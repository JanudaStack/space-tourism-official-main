import React, { useState } from 'react';
import styles from './Technology.module.css';
import LaunchVehicleImgLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import LaunchVehicleImgPortrait from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import SpaceportImgLandscape from '../../assets/technology/image-spaceport-landscape.jpg';
import SpaceportImgPortrait from '../../assets/technology/image-spaceport-portrait.jpg';
import CapsuleImgLandscape from '../../assets/technology/image-space-capsule-landscape.jpg';
import CapsuleImgPortrait from '../../assets/technology/image-space-capsule-portrait.jpg';

const vehicleData = [
    {
        vehicleName: 'Launch Vehicle',
        vehicleDescription:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        landscapeImg: LaunchVehicleImgLandscape,
        portraitImg: LaunchVehicleImgPortrait,
    },
    {
        vehicleName: 'Spaceport',
        vehicleDescription:
            'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
        landscapeImg: SpaceportImgLandscape,
        portraitImg: SpaceportImgPortrait,
    },
    {
        vehicleName: 'Space Capsule',
        vehicleDescription:
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        landscapeImg: CapsuleImgLandscape,
        portraitImg: CapsuleImgPortrait,
    },
];

const Technology = () => {
    const [selectedVehicle, setSelectedVehicle] = useState(vehicleData[0]); // Default to the first vehicle
    const [isTransitioning, setIsTransitioning] = useState(false); // State for animation

    const handleVehicleChange = (index) => {
        setIsTransitioning(true); // Start transition
        setTimeout(() => {
            setSelectedVehicle(vehicleData[index]); // Update the selected vehicle
            setIsTransitioning(false); // End transition
        }, 500); // Match timeout with CSS animation duration
    };

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
                    <picture
                        className={`${styles['technology-img']} ${
                            isTransitioning
                                ? styles['fade-out']
                                : styles['fade-in']
                        }`}
                    >
                        <source
                            srcSet={selectedVehicle.portraitImg}
                            media="(min-width: 1024px)"
                        />
                        <source
                            srcSet={selectedVehicle.portraitImg}
                            media="(min-width: 768px)"
                        />
                        <img
                            src={selectedVehicle.landscapeImg}
                            alt={selectedVehicle.vehicleName}
                        />
                    </picture>
                    <div className={styles['tech-content-container']}>
                        <div className={styles['content-wrapper']}>
                            <div className={styles['tech-content-nav-mobile']}>
                                <ul className={styles['nav-buttons-mobile']}>
                                    {vehicleData.map((vehicle, index) => (
                                        <li key={vehicle.vehicleName}>
                                            <button
                                                onClick={() =>
                                                    handleVehicleChange(index)
                                                }
                                                className={
                                                    selectedVehicle.vehicleName ===
                                                    vehicle.vehicleName
                                                        ? styles[
                                                              'active-button'
                                                          ]
                                                        : ''
                                                }
                                            >
                                                <span
                                                    className={
                                                        styles['nav-number']
                                                    }
                                                >
                                                    {index + 1}
                                                </span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div
                                className={styles['tech-content']}
                                data-aos="fade-down"
                            >
                                <div className={styles['tech-content-header']}>
                                    <h4 className={styles['header-title']}>
                                        The Terminology...
                                    </h4>
                                </div>
                                <h1 className={styles['vehicle-name']}>
                                    {selectedVehicle.vehicleName}
                                </h1>
                                <p className={styles['vehicle-content']}>
                                    {selectedVehicle.vehicleDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Technology;
