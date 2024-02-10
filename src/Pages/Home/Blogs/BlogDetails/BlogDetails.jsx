import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";


const BlogDetails = () => {

    const blogs = useLoaderData();
    const { id } = useParams();
    const blogsItem = blogs.find((blog) => blog.id === id);


    return (
        <>

            <Navbar />

            <div className="max-w-7xl mx-auto my-20 shadow-xl ">
                <div className="w-full h-[400px] relative ">
                    <img src={blogsItem.image} className="w-full h-full object-cover" />
                    <div className="card-actions  absolute z-10 bg-black w-full opacity-[.4] h-[100px] bottom-0  justify-start">

                    </div>

                </div>
                <div className="card-body">
                    <h2 className="text-[#0B0B0B] font-bold text-3xl">{blogsItem.title}</h2>
                    <p className="text-[#0B0B0B] font-normal text-base">{blogsItem.details}</p>

                </div>

            </div>

            <Footer />
        </>
    );
};

export default BlogDetails;