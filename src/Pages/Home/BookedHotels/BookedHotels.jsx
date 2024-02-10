import { useEffect, useState } from "react";
import { getStoredBookedHotelApplication } from "../../../Utility/loocalStorage";
import { useParams } from "react-router-dom";



const BookedHotels = () => {

    const [booked, setbooked] = useState([])
    const [dataLength, setDataLength] = useState([4]);

    useEffect(() => {
        const storedBookedIds = getStoredBookedHotelApplication();
        setbooked(storedBookedIds)

    }, [])

    const { id } = useParams();
    const bookedItem = booked.find((book) => book.id === id);
    return (
        <div className="my-10">

            <div className="grid grid-cols-2 max-w-7xl mx-auto mt-24 gap-10">

                {bookedItem.slice(0, dataLength).map((item, index) => (

                    <div key={index}>

                        <div className="relative w-[320px] h-[220px] m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                            <img src={item.image} className="object-cover w-full h-full " />

                            <div className="bg-[#ffbe30] h-[80px] w-[6px] absolute z-10 top-4 right-0">

                            </div>
                        </div>

                        <div className='mt-6  text-center'>


                            <h4 className='mr-10  text-lg font-semibold text-[#0d1d31]'>{item.title}</h4>

                          

                            <p className='text-base w-[360px] text-[#6d7a83]'>{item.details}</p>

                        </div>


                    </div>

                ))}


            </div>

            {/* show all button */}

            <div className={dataLength === booked.length ? 'hidden' : 'flex mt-6 justify-center text-center '} >

                <button onClick={() => setDataLength(booked.length)} className=" w-[140px] h-[40px] rounded text-white font-semibold bg-[#009444] ">See All</button>

            </div>


        </div>


    );
};


export default BookedHotels;