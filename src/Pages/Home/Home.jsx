import { Helmet } from "react-helmet-async";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div>


            <Helmet>
                <title>Event</title>
            </Helmet>


         <div className="">
         <Navbar></Navbar>
         </div>

            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full h-[600px]">
  <img src="https://res.cloudinary.com/dqyusvzi9/image/upload/v1706847946/ipr498szae8ivucdjun7.jpg" className="w-full object-cover" />

    <div className="w-full h-full bg-yellow-900 opacity-[0.5] absolute">
                    </div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
  <div id="slide2" className="carousel-item relative w-full h-[600px]">
    <img src="https://res.cloudinary.com/dqyusvzi9/image/upload/v1706847925/ge1m3mmyxul9wdpxy2oy.jpg" className="w-full" />
    <div className="w-full h-full bg-yellow-950 opacity-[0.5] absolute">
        </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full h-[600px]">
  <img src="https://res.cloudinary.com/dqyusvzi9/image/upload/v1706847925/hqc11sgz2oglrkdrzav5.jpg" className="w-full object-cover" />
    <div className="w-full h-full bg-black opacity-[0.6] absolute">
        </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full h-[600px]">
  <img src="https://res.cloudinary.com/dqyusvzi9/image/upload/v1706851296/xodlthxvohjgf8kmtxp9.jpg" className="w-full object-cover" />
    <div className="w-full h-full bg-black opacity-[0.6] absolute">
                    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

        </div>
    );
};

export default Home;