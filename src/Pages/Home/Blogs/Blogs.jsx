// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { FaComment } from "react-icons/fa";


const Blogs = () => {

    const [blogData, setblogData] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setblogData(data));
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
                    blogData?.map((allBlogData, index) => (

                        <SwiperSlide key={index}>

                            <div className="relative w-[380px] h-[220px] m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                                <img src={allBlogData?.image} className="object-cover w-full h-full " />
                            </div>

                            <div className='mt-6 text-start'>

                                <h4 className='text-lg font-semibold text-[#0d1d31]'>{allBlogData.title}</h4>

                            </div>

                            <div className='flex gap-6 items-center mx-auto my-4'>

                            <p className='text-base text-[#6d7a83] '>{allBlogData.date}</p>
                            <div className='flex gap-2 items-center mx-auto'>
                            <FaComment/>
                            <p className='text-red-600'>{allBlogData.comment}</p>
                            </div>

                            </div>

                            <p className='text-[#6d7a83] text-justify mr-4'>
                                {allBlogData.details}
                            </p>

                           
                        </SwiperSlide>

                    ))
                }

{
                    blogData?.map((allBlogData, index) => (

                        <SwiperSlide key={index}>

                            <div className="relative w-[380px] h-[220px] m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                                <img src={allBlogData?.image} className="object-cover w-full h-full " />
                            </div>

                            <div className='mt-6 text-start'>

                                <h4 className='text-lg font-semibold text-[#0d1d31]'>{allBlogData.title}</h4>

                            </div>

                            <div className='flex gap-6 items-center mx-auto my-4'>

                            <p className='text-base text-[#6d7a83] '>{allBlogData.date}</p>
                            <div className='flex gap-2 items-center mx-auto'>
                            <FaComment/>
                            <p className='text-red-600'>{allBlogData.comment}</p>
                            </div>

                            </div>

                            <p className='text-[#6d7a83] text-justify mr-4'>
                                {allBlogData.details}
                            </p>

                           
                        </SwiperSlide>

                    ))
                }

{
                    blogData?.map((allBlogData, index) => (

                        <SwiperSlide key={index}>

                            <div className="relative w-[380px] h-[220px] m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                                <img src={allBlogData?.image} className="object-cover w-full h-full " />
                            </div>

                            <div className='mt-6 text-start'>

                                <h4 className='text-lg font-semibold text-[#0d1d31]'>{allBlogData.title}</h4>

                            </div>

                            <div className='flex gap-6 items-center mx-auto my-4'>

                            <p className='text-base text-[#6d7a83] '>{allBlogData.date}</p>
                            <div className='flex gap-2 items-center mx-auto'>
                            <FaComment/>
                            <p className='text-red-600'>{allBlogData.comment}</p>
                            </div>

                            </div>

                            <p className='text-[#6d7a83] text-justify mr-4'>
                                {allBlogData.details}
                            </p>

                           
                        </SwiperSlide>

                    ))
                }
            </Swiper>
            

        </div>
    );
};

export default Blogs;