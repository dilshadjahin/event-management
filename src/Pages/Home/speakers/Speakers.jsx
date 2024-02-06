// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

const Speakers = () => {

    const [speakersData, setspeakersData] = useState([]);

    useEffect(() => {
        fetch('speakers.json')
            .then(res => res.json())
            .then(data => setspeakersData(data));
    }, [])

    return (
        <div>

            <Swiper

                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}

                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper max-w-7xl mx-auto"
            >

                {
                    speakersData.map((allSpeakersData, index) => (

                        <SwiperSlide key={index}>

                            <div className="relative w-[220px] h-[220px] rounded-full ml-16 overflow-hidden text-gray-700 bg-white bg-clip-border ">
                                <img src={allSpeakersData.image} className="object-cover w-full h-full " />


                            </div>

                            <div className='mt-6  text-center'>


                                <h4 className='mr-10  text-lg font-semibold text-[#0d1d31]'>{allSpeakersData.name}</h4>

                                <p className='text-base w-[360px] font-semibold text-red-500 my-2'>{allSpeakersData.role}</p>
                                <p className='text-base text-[#6d7a83]'>{allSpeakersData.description}</p>

                            </div>

                           
                        </SwiperSlide>

                    ))
                }
            </Swiper>

        </div>
    );
};

export default Speakers;