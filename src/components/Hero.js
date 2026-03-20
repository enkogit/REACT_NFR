import React from 'react';
import NavBar from '../components/Navbar/NavBar';
// Remove the import for heroImg as it's no longer needed

const Hero = () => {
    return (
        <>
            <div className="hero" id="hero">
                <div>
                    <NavBar />
                </div>

                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                    <div id="hero" className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="text-7xl md:text-8xl font-serif tracking-tight leading-none">
                                NORTHFORREST
                                </h1>
                                <p className="text-2xl md:text-3xl mt-6 text-north-glow max-w-2xl">
                                Where the forest whispers, the river sings,<br />
                                and every breath becomes a prayer.
                                </p>
                                <p className="mt-8 text-lg max-w-md">
                                Rocky View County, Alberta • One guest. One moment. Infinite peace.
                                </p>
                                <button className="mt-10 bg-north-glow text-north-bg px-10 py-5 rounded-full text-lg font-medium hover:bg-white transition-all">
                                Begin Your Journey
                                </button>
                        </div>
                        <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            {/* Update the src attribute to point to the new image location */}
                            <img alt="Gabion Baskets and Solutions" className="rounded-t float-right duration-1000 w-full" src="/images/SAUNA.png" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;
