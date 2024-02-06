import insta5 from '../../assets/insta-5.jpg'

import { GoPlus } from "react-icons/go";

import insta3 from '../../assets/insta-3.jpg'
import insta4 from '../../assets/insta-4.jpg'
const Footer = () => {
    return (
        <footer className="footer p-20 bg-neutral text-neutral-content ">
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>

            </nav>
            <nav>
                <a className="footer-title">Event Schedule</a>
                <a className="link link-hover">sponsors</a>
                <h6 className="link link-hover">venues</h6>
                <a className="link link-hover">Tickets</a>

            </nav>

            <nav>

                <a className="footer-title">Swank Instagram</a>
                <div className='grid grid-cols-3 w-[480px]  gap-4 '>
                    <div className='relative -z-0'>
                        <img src={insta5} className='h-[140px] w-[280px]' alt="" />
                        <div className="absolute z-10 inset-0 bg-[#e78768] bg-opacity-60 opacity-0 group-hover:opacity-100  transition-opacity flex items-center justify-center">
                            {/* Overlay content goes here */}
                            <GoPlus className='text-7xl text-white' />

                        </div>
                    </div>

                    <img src={insta3} className='h-[140px] w-[280px]' alt="" />
                    <img src={insta4} className='h-[140px] w-[280px]' alt="" />
                </div>

            </nav>
        </footer>
    );
};

export default Footer;