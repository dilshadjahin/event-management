// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

// import react ratings

import ReactStars from "react-rating-stars-component";

import 'react-toastify/dist/ReactToastify.css';
import { getStoredBookedHotelApplication, saveBookedHotelApplication } from '../../../Utility/loocalStorage';
import { useNavigate } from 'react-router-dom';

const Hotel = () => {

    const [hotelData, setHotelData] = useState([]);

    useEffect(() => {
        fetch('Hotels.json')
            .then(res => res.json())
            .then(data => setHotelData(data));
    }, [])

    const firstExample = {
        size: 30,
        value: 2.5,
        edit: false
    };

    /// local storage save data in book button

   const saveLocal = saveBookedHotelApplication;
   const navigate = useNavigate()
   const handleBookedHotel = () =>{
    try{
        // toast('Congratulations!! you have booked successfully');
        saveLocal(hotelData);
        const updatedStoredData = getStoredBookedHotelApplication();
        console.log(updatedStoredData);
        navigate('/bookedHotels/:id');
    }
    catch (error) {
        console.error('Error in handleApplyDonate:', error);
      }
   
   };


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
                className="mySwiper max-w-7xl mx-auto "
            >
                {
                    hotelData.map((allHotelData, index) => (

                        <SwiperSlide key={index} >

                            <div className="relative w-[320px] h-[220px] m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                                <img src={allHotelData.image} className="object-cover w-full h-full " />

                                <div className="bg-[#ffbe30] h-[80px] w-[6px] absolute z-10 top-4 right-0">

                                </div>
                            </div>

                            <div className='mt-6  text-center'>


                                <h4 className='mr-10  text-lg font-semibold text-[#0d1d31]'>{allHotelData.title}</h4>

                                <div className='flex items-center text-center ml-28'>

                                    <ReactStars {...firstExample} classNames="" />

                                </div>

                                <p className='text-base w-[360px] text-[#6d7a83]'>{allHotelData.details}</p>

                            </div>


                            <button onClick ={handleBookedHotel} className='px-8 py-1 text-[#6d7a83] hover:bg-[#435469] hover:text-white rounded font-semibold border border-[#6d7a83] mr-8 mt-5'>Book</button>
                         
                        </SwiperSlide>

                    ))
                }

                {/* {
                    hotelData.map((allHotelData, index) => (

                        <SwiperSlide key={index}>

                            <div className="relative w-[320px] h-[220px] m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                                <img src={allHotelData.image} className="object-cover w-full h-full " />

                                <div className="bg-[#ffbe30] h-[80px] w-[6px] absolute z-10 top-4 right-0">

                                </div>
                            </div>

                            <div className='mt-6  text-center'>


                                <h4 className='mr-10  text-lg font-semibold text-[#0d1d31]'>{allHotelData.title}</h4>

                                <div className='flex items-center text-center ml-28'>

                                    <ReactStars {...firstExample} classNames="" />

                                </div>

                                <p className='text-base w-[360px] text-[#6d7a83]'>{allHotelData.details}</p>

                            </div>

                            <button className='px-8 py-1 text-[#6d7a83] hover:bg-[#435469] hover:text-white rounded font-semibold border border-[#6d7a83] mr-8 mt-5'>Book</button>
                        </SwiperSlide>



                    ))
                } */}




            </Swiper>

        </div>
    );
};

export default Hotel;