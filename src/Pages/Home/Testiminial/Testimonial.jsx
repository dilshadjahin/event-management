// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { TbSquareLetterT } from "react-icons/tb";

const Testimonial = () => {


    const [testimonialData, setTestimonialData] = useState([]);

    useEffect(() => {
        fetch('testimonial.json')
            .then(res => res.json())
            .then(data => setTestimonialData(data));
    }, [])



    return (
        < >


            <div className='bg-[#ed4a43] w-full h-full testi'>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    freeMode={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}

                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper max-w-7xl mx-auto "
                >

                    {
                        testimonialData.map((allTestimonialData, index) => (

                            <SwiperSlide key={index} className='w-full h-full'>

                                <div className='block'>

                                    <div className="flex text-start max-w-7xl mx-auto mb-6">

                                        <div className="">
                                            <TbSquareLetterT className="text-white w-[100px] h-[100px] text-3xl"></TbSquareLetterT>

                                        </div>

                                        <h2 className="text-4xl  font-bold mt-8 text-white">TESTIMONIALS <small className="text-4xl  tracking-widest">/ See What People Say About Us!</small> </h2>

                                    </div>

                                    <div className='flex gap-10'>

                                   

                                    <div className='mt-16   text-white'>

                                        <h4 className='text-lg font-semibold text-center'>{allTestimonialData.details}</h4>
                                        <p className='text-base w-[360px] text-start '>{allTestimonialData.name}</p>

                                    </div>

                                    <div className="w-[140px] h-[140px]  rounded-full  overflow-hidden bg-clip-border  shrink-0">
                                        <img src={allTestimonialData.profile} className="object-cover w-full h-full " />
                                    </div>

                                    </div>
                                </div>

                            </SwiperSlide>

                        ))
                    }



                </Swiper>
            </div>

        </>
    );
};

export default Testimonial;