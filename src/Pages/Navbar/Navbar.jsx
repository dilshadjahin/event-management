import { Link, NavLink } from "react-router-dom";
import { NavItem } from "../../Data";
import logo from "../../assets/swank-events-logo.png"


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 px-10 lg:px-16">
            <div className="navbar-start">
                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-lg w-52">

                        {
                            NavItem.map((item, index) => (
                                <NavLink key={index}
                                    className="font-semibold text-base ml-4 font-sans text-[#666]"
                                    to={item.link}>
                                    {item.item}</NavLink>

                            ))
                        }
                    </ul>
                </div>
                <img src={logo} className="h-[60px] w-[70px]" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">

            </div>
            <div className="navbar-center hidden md:flex">

                <ul className="menu menu-horizontal px-1">

                    {
                        NavItem.map((item, index) => (
                            <NavLink key={index}
                                className="font-semibold text-base text-[#666] ml-4 font-sans"
                                to={item.link}>
                                {item.item}</NavLink>

                        ))
                    }

                </ul>
                <Link to='/login' className="px-8 py-4 bg-[#F9A51A] rounded text-black font-semibold xl:ml-32 ml-6">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;