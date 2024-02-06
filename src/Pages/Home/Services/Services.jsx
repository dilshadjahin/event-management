import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { GoPlus } from "react-icons/go";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper max-w-7xl mx-auto mb-40">
                {
                    services.map((allServices, index) => (
                        <SwiperSlide key={index} >
                            <div className='w-[380px] h-[400px] relative overflow-hidden group my-20'>
                                <img src={allServices.image} className="w-full h-full object-cover" alt="" />
                                <div className="absolute inset-0 bg-[#e78768] bg-opacity-60 opacity-0 group-hover:opacity-100  transition-opacity flex items-center justify-center">
                                    {/* Overlay content goes here */}
                                    <GoPlus className='text-7xl text-white'/>
                              
                                </div>
                            </div>

                            <div className='bg-slate-100 h-[120px] w-[280px] ml-14 absolute z-10 bottom-10'>
                                <h4 className='text-[#0d1d31] text-xl font-bold my-4'>{allServices.title}</h4>
                                <p className='text-[#0d1d31] text-lg font-bold'>{allServices.time}</p>
                                
                            </div>

                        </SwiperSlide>


                    ))
                }
                {
                    services.map((allServices, index) => (
                        <SwiperSlide key={index} >
                        <div className='w-[380px] h-[400px] relative overflow-hidden group my-20'>
                            <img src={allServices.image} className="w-full h-full object-cover" alt="" />
                            <div className="absolute inset-0 bg-[#e78768] bg-opacity-60 opacity-0 group-hover:opacity-100  transition-opacity flex items-center justify-center">
                                {/* Overlay content goes here */}
                                <GoPlus className='text-7xl text-white'/>
                          
                            </div>
                        </div>

                        <div className='bg-slate-100 h-[120px] w-[280px] ml-14 absolute z-10 bottom-10'>
                            <h4 className='text-[#0d1d31] text-xl font-bold my-4'>{allServices.title}</h4>
                            <p className='text-[#0d1d31] text-lg font-bold'>{allServices.time}</p>
                            
                        </div>

                    </SwiperSlide>



                    ))
                }
                {
                    services.map((allServices, index) => (

                        <SwiperSlide key={index} >
                            <div className='w-[380px] h-[400px] relative overflow-hidden group my-20'>
                                <img src={allServices.image} className="w-full h-full object-cover" alt="" />
                                <div className="absolute inset-0 bg-[#e78768] bg-opacity-60 opacity-0 group-hover:opacity-100  transition-opacity flex items-center justify-center">
                                    {/* Overlay content goes here */}
                                    <GoPlus className='text-7xl text-white'/>
                              
                                </div>
                            </div>

                            <div className='bg-slate-100 h-[120px] w-[280px] ml-14 absolute z-10 bottom-10'>
                                <h4 className='text-[#0d1d31] text-xl font-bold my-4'>{allServices.title}</h4>
                                <p className='text-[#0d1d31] text-lg font-bold'>{allServices.time}</p>
                                
                            </div>

                        </SwiperSlide>


                    ))
                }


            </Swiper>

        </>
    );
};

export default Services;