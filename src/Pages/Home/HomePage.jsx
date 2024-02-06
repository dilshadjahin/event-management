
import { Helmet } from "react-helmet-async";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import LatestEvents from "./LatestEvents/LatestEvents";
import Services from "./Services/Services";
import { TbHexagonLetterH , TbHexagonLetterR, TbHexagonLetterE} from "react-icons/tb";
import Hotel from "./Hotel/Hotel";
import Cards from "./Cards/Cards";
import Testimonial from "./Testiminial/Testimonial";
import Blogs from "./Blogs/Blogs";
import Speakers from "./speakers/speakers";
import Gallery from "./Gallery/Gallery";
import Footer from "../Footer/Footer";
import Sponsor from "./Sponsor/Sponsor";
import {  FaImage } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { LuNewspaper } from "react-icons/lu";


const slides = [
    "https://res.cloudinary.com/dqyusvzi9/image/upload/v1706847946/ipr498szae8ivucdjun7.jpg",
    "https://res.cloudinary.com/dqyusvzi9/image/upload/v1706847925/ge1m3mmyxul9wdpxy2oy.jpg",
    "https://res.cloudinary.com/dqyusvzi9/image/upload/v1706847925/hqc11sgz2oglrkdrzav5.jpg",
    "https://res.cloudinary.com/dqyusvzi9/image/upload/v1706851296/xodlthxvohjgf8kmtxp9.jpg"
];

const HomePage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            // Change the current slide to the next one
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);

        // Clear the timer when the component unmounts or if there are any dependencies to clean up
        return () => clearInterval(timer);
    }, []); // Empty dependency array ensures that the effect runs once when the component mounts

    return (
        <div>
            <Helmet>
                <title>Event</title>
            </Helmet>

         
                <Navbar />
           

            <div className="carousel w-full">
                {slides.map((slide, index) => (
                    <div key={index} className={`carousel-item relative w-full h-[300px] md:h-[600px] ${index === currentSlide ? 'visible' : 'hidden'}`}>
                        <img src={slide} className="w-full object-cover" />
                        <div className="w-full h-full bg-black opacity-[0.6] absolute"></div>

                        <div className=" z-10 absolute sm:left-[80px] lg:left-[220px]  xl:left-[420px] top-20 md:top-56">
                            <h1 className="text-white text-2xl md:text-4xl xl:text-5xl font-semibold  text-center">We are event professionals</h1>
                            <p className=" text-white m-4 ml-16">You can find festivals, parties, conference, Fairs, Exibitions, Speakers and more</p>
                            <div className="form-control">
                                <input type="text" placeholder="Search" className="input input-bordered ml-16 md:ml-6 w-64 md:w-auto md:h-12 h-10" />
                            </div>

                        </div>


                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href={`#slide${index === 0 ? slides.length : index}`} className="btn-none md:btn md:btn-circle">❮</a>
                            <a href={`#slide${index === slides.length - 1 ? 1 : index + 2}`} className="btn-none md:btn md:btn-circle">❯</a>
                        </div>
                    </div>
                ))}
            </div>


            {/* upcomming events section */}

            <div className="text-center my-16">
                <small className="text-base md:text-2xl text-[#878787] tracking-widest uppercase ">upcomming events</small>
                <h2 className="text-2xl md:text-5xl tracking-widest">Latest <strong className="text-2xl md:text-5xl font-serif font-bold ">Awesome Events</strong> </h2>
            </div>
            <div className=" text-center flex justify-center items-center">
                <div className="grid grid-flow-col gap-5 text-center auto-cols-max ">
                    <div className="flex  flex-col p-2 rounded-box text-[#878787] border-[4px] border-[#878787]">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 15 }}></span>
                        </span>
                        days
                    </div>
                    <div className="flex flex-col p-2 rounded-box text-[#878787] border-[4px] border-[#878787]">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 10 }}></span>
                        </span>
                        hours
                    </div>
                    <div className="flex flex-col p-2 rounded-box text-[#878787] border-[4px] border-[#878787]">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 24 }}></span>
                        </span>
                        min
                    </div>
                    <div className="flex flex-col p-2  rounded-box text-[#878787] border-[4px] border-[#878787]">
                        <span className="countdown font-mono text-5xl">
                            <span style={{ "--value": 32 }}></span>
                        </span>
                        sec
                    </div>
                </div>
            </div>

            {/* cards */}

            <Cards></Cards>




            {/* latest events  */}

            <LatestEvents></LatestEvents>

            {/* our services */}

            {/* <div className="text-center my-6">
                <small className="text-2xl text-[#878787] tracking-widest uppercase ">OUR SERVICES</small>
                <h2 className="text-5xl tracking-widest">Swank<strong className="m-6 text-5xl font-serif font-bold ">Expertise</strong> </h2>
            </div>

            <Services></Services> */}


            {/* hotels */}

            {/* <div className="flex text-start max-w-7xl mx-auto mb-6">

                <div className="">
                    <TbHexagonLetterH className="text-red-600 w-[100px] h-[100px] text-4xl"></TbHexagonLetterH>

                </div>

                <h2 className="text-4xl  font-bold mt-8">HOTELS <small className="text-4xl text-[#878787] tracking-widest">/ dont forget book your room</small> </h2>

            </div> */}

            {/* <Hotel></Hotel> */}

            {/* testimonial */}
{/* 
            <div className="w-full h-[500px] my-16 bg-red-400">

                <Testimonial>

                </Testimonial>
            </div> */}

            {/* Recent blog */}

            {/* <div className="flex text-start max-w-7xl mx-auto mb-6">

                <div className="">
                    <TbHexagonLetterR className="text-red-600 w-[100px] h-[100px] text-4xl"></TbHexagonLetterR>

                </div>

                <h2 className="text-4xl  font-bold mt-8">RECENT BLOG POSTS <small className="text-4xl text-[#878787] tracking-widest">/ get news!</small> </h2>

            </div> */}
{/* 
            <Blogs></Blogs>

            <div className="flex w-full justify-center my-10">

<button className='flex gap-2 px-10 py-4 text-white hover:bg-[#435469]  rounded-lg font-bold text-lg border  bg-red-600 mr-8 mt-5'><LuNewspaper className='text-xl mt-1' /> See All News</button>
</div> */}


            {/* event speakers */}


            {/* <div className="flex text-start max-w-7xl mx-auto mb-6">

                <div className="">
                    <TbHexagonLetterE className="text-red-600 w-[100px] h-[100px] text-4xl"></TbHexagonLetterE>

                </div>

                <h2 className="text-4xl  font-bold mt-8">EVENT SPEAKERS <small className="text-4xl text-[#878787] tracking-widest">/meet with greaters!</small> </h2>

            </div> */}

            {/* <Speakers></Speakers>

            <div className="flex w-full justify-center my-10">

                <button className='flex gap-2 px-10 py-4 text-white hover:bg-[#435469]  rounded-lg font-bold text-lg border  bg-red-600 mr-8 mt-5'><IoPerson className='text-xl mt-1' />  All Speakers</button>
            </div> */}

            {/* gallery */}

            {/* <div className="text-center my-6">
                <small className="text-2xl text-[#878787] tracking-widest uppercase ">Swank Gallery</small>
                <h2 className="text-5xl tracking-widest">Beautiful &<strong className="m-6 text-5xl font-serif font-bold ">Unforgettable Times</strong> </h2>
            </div>

            <Gallery />

            <div className="flex w-full justify-center my-10">

                <button className='flex gap-2 px-10 py-4 text-white hover:bg-[#435469]  rounded-lg font-semibold text-lg border  bg-red-600 mr-8 mt-5'><FaImage className='text-xl mt-1' /> See All Gallery</button>
            </div> */}

            {/* sponsors */}

            {/* <Sponsor />









            <Footer></Footer> */}


        </div>
    );
};

export default HomePage;
