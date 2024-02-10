
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaRegStar, FaPlayCircle, FaImage } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { useEffect, useState } from 'react';




const SwakGallery = () => {

    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        fetch('Gallery.json')
            .then(res => res.json())
            .then(data => setImages(data))


        fetch('videoGallery.json')
            .then(res => res.json())
            .then(data => setVideos(data))

    }, [])

    // const [value, setValue] = useState(0);

    const handleChange = (index) => {
        setSelectedIndex(index);
    };
    console.log(videos);

    return (
        <div>

            <Tabs selectedIndex={selectedIndex} onSelect={index => handleChange(index)} className=" items-center mx-auto m-10 ">
                <TabList className="flex gap-10 mb-10 text-2xl justify-center items-center">
                    <Tab className="flex gap-2 outline-none border-b-4 text-amber-400 "><FaRegStar className='hover:fill-amber-400' /><h4 className='hover:text-amber-400'>All Gallery</h4></Tab>
                    <Tab className="flex gap-2 outline-none"><FaPlayCircle className='hover:fill-amber-400' /><h4>Video Gallery</h4></Tab>
                    <Tab className="flex gap-2 outline-none"><FaImage className='hover:fill-amber-400' /><h4>Photo Gallery</h4></Tab>
                </TabList>

                <TabPanel  >
                    <div className="grid grid-cols-3 gap-2">
                        {
                            images?.map((allImages, index) => (
                                <div key={index} className='relative group overflow-hidden z-10'>
                                    <img src={allImages.image} className="w-full h-[400px] object-cover relative z-[-1]" />
                                    <div className="absolute inset-0 bg-[#e78768] bg-opacity-60 opacity-0 group-hover:opacity-100  transition-opacity flex items-center justify-center z-10">
                                        {/* Overlay content goes here */}
                                        <GoPlus className='text-7xl text-white' />

                                    </div>
                                </div>

                            ))
                        }
                    </div>

                </TabPanel>
                <TabPanel  >
                    <div className="grid grid-cols-3 gap-2">

                        {
                            videos?.map((video, index) => (
                                <div key={index} className='relative group overflow-hidden z-10'>
                                    <img src={video.image} alt="" className="w-full h-[400px]  object-cover relative z-[-1]" />

                                    <div className="absolute inset-0 bg-[#e78768] bg-opacity-60 opacity-0 group-hover:opacity-100  transition-opacity flex items-center justify-center z-10">
                                        {/* Overlay content goes here */}
                                        <FaPlayCircle className='text-5xl text-white' />

                                    </div>
                                    
                                    
                                </div>

                            ))
                        }


                    </div>

                </TabPanel>

                <TabPanel  >
                    <div className="grid grid-cols-3 gap-2">
                        {
                            images?.map((allImages, index) => (
                                <div key={index} className='relative group overflow-hidden z-10'>
                                    <img src={allImages.image} className="w-full h-[400px] object-cover" />
                                    <div className="absolute inset-0 bg-[#e78768] bg-opacity-60 opacity-0 group-hover:opacity-100  transition-opacity flex items-center justify-center z-10">
                                        {/* Overlay content goes here */}
                                        <FaImage className='text-5xl text-white' />

                                    </div>
                                </div>

                            ))
                        }
                    </div>

                </TabPanel>
            </Tabs>


        </div >
    );
};

export default SwakGallery;