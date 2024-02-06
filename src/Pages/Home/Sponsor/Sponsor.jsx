// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { TbSquareLetterS } from "react-icons/tb";
import { BiSolidLike } from "react-icons/bi";

import sponsor1 from '../../../assets/sponsors-1.png'
import sponsor2 from '../../../assets/sponsors-2.png'
import sponsor3 from '../../../assets/sponsors-3.png'

const Sponsor = () => {
    return (
        <div className='bg-[#f5f5f5] w-full h-full spons'>

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



                <SwiperSlide className='w-full h-full my-20'>

                    <div className='block'>

                        <div className="flex text-start max-w-7xl mx-auto mb-6">

                            <div className="">

                                <TbSquareLetterS className="text-red-800 w-[100px] h-[100px] text-3xl"></TbSquareLetterS>

                            </div>

                            <h2 className="text-4xl  font-bold mt-8 text-black">EVENT SPONSORS <small className="text-4xl  tracking-widest">/ dont forget it!</small> </h2>

                        </div>

                        <div className='flex gap-10 w-[1020px] h-[100px]  my-10 '>

                            <div className='bg-gray-200 w-full h-full object-cover p-2  shadow-lg shadow-gray-500/50 rounded-lg'>
                                <img src={sponsor1} alt="" />
                            </div>
                            <div className='bg-gray-200 w-full h-full object-cover p-2 shadow-gray-500/50 rounded-lg'>
                                <img src={sponsor2} alt="" />
                            </div>
                            <div className='bg-gray-200 w-full h-full object-cover p-2 rounded-lg'>
                                <img src={sponsor3} alt="" />
                            </div>

                        </div>

                        <div className="flex w-full justify-center my-10">

                            <button className='flex gap-2 px-8 py-4 text-white hover:bg-[#435469]  rounded-lg font-semibold border  bg-red-600 mr-8 mt-5'><BiSolidLike className='mt-1' /> Become a sponsor</button>
                        </div>
                    </div>

                </SwiperSlide>

              
                <SwiperSlide className='w-full h-full my-20'>

                    <div className='block'>

                        <div className="flex text-start max-w-7xl mx-auto mb-6">

                            <div className="">

                                <TbSquareLetterS className="text-red-800 w-[100px] h-[100px] text-3xl"></TbSquareLetterS>

                            </div>

                            <h2 className="text-4xl  font-bold mt-8 text-black">EVENT SPONSORS <small className="text-4xl  tracking-widest">/ dont forget it!</small> </h2>

                        </div>

                        <div className='flex gap-10 w-[1020px] h-[100px]  my-10 '>

                            <div className='bg-gray-200 w-full h-full object-cover p-2  shadow-lg shadow-gray-500/50 rounded-lg'>
                                <img src={sponsor1} alt="" />
                            </div>
                            <div className='bg-gray-200 w-full h-full object-cover p-2 shadow-gray-500/50 rounded-lg'>
                                <img src={sponsor2} alt="" />
                            </div>
                            <div className='bg-gray-200 w-full h-full object-cover p-2 rounded-lg'>
                                <img src={sponsor3} alt="" />
                            </div>

                        </div>

                        <div className="flex w-full justify-center my-10">

                            <button className='flex gap-2 px-8 py-4 text-white hover:bg-[#435469]  rounded-lg font-semibold border  bg-red-600 mr-8 mt-5'><BiSolidLike className='mt-1' /> Become a sponsor</button>
                        </div>
                    </div>

                </SwiperSlide>

               
                <SwiperSlide className='w-full h-full my-20'>

                    <div className='block'>

                        <div className="flex text-start max-w-7xl mx-auto mb-6">

                            <div className="">

                                <TbSquareLetterS className="text-red-800 w-[100px] h-[100px] text-3xl"></TbSquareLetterS>

                            </div>

                            <h2 className="text-4xl  font-bold mt-8 text-black">EVENT SPONSORS <small className="text-4xl  tracking-widest">/ dont forget it!</small> </h2>

                        </div>

                        <div className='flex gap-10 w-[1020px] h-[100px]  my-10 '>

                            <div className='bg-gray-200 w-full h-full object-cover p-2  shadow-lg shadow-gray-500/50 rounded-lg'>
                                <img src={sponsor1} alt="" />
                            </div>
                            <div className='bg-gray-200 w-full h-full object-cover p-2 shadow-gray-500/50 rounded-lg'>
                                <img src={sponsor2} alt="" />
                            </div>
                            <div className='bg-gray-200 w-full h-full object-cover p-2 rounded-lg'>
                                <img src={sponsor3} alt="" />
                            </div>

                        </div>

                        <div className="flex w-full justify-center my-10">

                            <button className='flex gap-2 px-8 py-4 text-white hover:bg-[#435469]  rounded-lg font-semibold border  bg-red-600 mr-8 mt-5'><BiSolidLike className='mt-1' /> Become a sponsor</button>
                        </div>
                    </div>

                </SwiperSlide>



            </Swiper>



        </div>

    );
};

export default Sponsor;