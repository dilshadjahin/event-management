import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";



const LatestEvents = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('latestEvents.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);
    return (
        < >
            <div className="grid grid-cols-2 gap-10 max-w-7xl mx-auto">

            {
                events.map((eventsData, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="border-[3px] border-[#ffbe30] p-6 flex bg-clip-border  bg-white text-gray-700 shadow-md w-full max-w-7xl mx-auto flex-row my-10">


                            <div className="relative w-[270px] h-[220px] m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                                <img src={eventsData.image} className="object-cover w-full h-full " />
                                <div className="bg-gradient-to-br from-[#e78768] to-[#ffbe30] h-[80px] w-[80px] absolute z-10 top-0 left-0">
                                    <h4 className="text-white m-3 font-semibold text-xl">{eventsData.date}</h4>
                                </div>
                                <div className="bg-[#ffbe30] h-[80px] w-[6px] absolute z-10 top-4 right-0">

                                </div>
                            </div>

                            <div className="mx-6 ">

                                <h3 className="text-xl font-semibold text[#333333]">{eventsData.title}</h3>
                                <span className="text-[#ffbe30] text-base font-normal">{eventsData.price}</span>

                                <div className="flex gap-4 mx-auto my-2">
                                    <FaClock className="mt-1"/>
                                    <p className="text-base">{eventsData.time}</p>
                                </div >
                                <div className="flex gap-4 mx-auto">
                                    <FaLocationDot className="mt-1 text-lg"></FaLocationDot>
                                    <p className="text-base">{eventsData.place}</p>

                                </div>

                                <button className="bg-gradient-to-br from-[#e78768] to-[#ffbe30] text-white p-3 font-semibold my-4">Tickets & Details</button>

                            </div>



                        </div>

                    </div>

                ))
            }
            </div>

            <button className="flex items-center mx-auto bg-gradient-to-br from-[#e78768] to-[#ffbe30] text-white p-3 font-semibold my-4">See All Events</button>

        </>
    );
};

export default LatestEvents;