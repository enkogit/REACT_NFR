import React from 'react';

const Intro = () => {
    return (
        <>
            <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" id='about'>
                <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                    <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center text-center">
                        <img alt="Gabion baskets" className="rounded-t float-right duration-500 w-full" src="/images/gabion-garden.jpeg" />
                    </div>
                    <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="500">
                        <h2 className="text-5xl font-serif">A Living Poem of the Wild</h2>
                        <p className="text-xl leading-relaxed mt-8 max-w-3xl">
                        Tucked into the rolling countryside of Rocky View County, where the Rocky Mountains breathe against the sky, NORTHFORREST is not a spa. It is a sanctuary. 
                        Here, with only one cedar sauna and one crystal cold plunge tub, time slows. The forest becomes your therapist, the river your lullaby.
                        </p>
                        <p className="text-xl leading-relaxed mt-6 max-w-3xl">
                        We do not rush. We do not crowd. We simply hold space for you to remember what it feels like to be whole.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro;
