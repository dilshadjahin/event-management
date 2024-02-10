import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import auth from "../../Firebase/firebase.config";



const Register = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

 
    const handleRegister = e =>{

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password, accepted);

        // reset error & success msg

        setRegisterError('');
        setSuccess('');

        // password warning 

        if(password.length < 6 ){
            setRegisterError('password should be at least 6 characters or longer');
            return;
        }

        else if (!/[A-Z]/.test(password)){
            setRegisterError('your password should have at least one upper case characters')
            return;
        }

        //  accepted terms & condition

        else if (!accepted){
            setRegisterError('please accept our terms & conditions')
            return;
        }


          // show password


        // create user 

        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user);
            setSuccess('user created successfully')
        })
        .catch(error =>{
            console.error(error);
            setRegisterError(error.message);
        })
        
    }
    return (
        <div className=" ">
            <Navbar/>

            <div className="hero min-h-screen ">


                <div className="card shrink-0 w-[600px] h-[720px] my-24 ">
                    <form onSubmit={handleRegister} className="card-body px-16 rounded-none border my-6">

                        <h2 className="text-2xl font-semibold text-start my-6">Create an account</h2>
                        <div className="relative h-11 w-full min-w-[200px] mb-4 ">
                            <input placeholder="First Name" type="text" name="text"
                                className="peer  h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0  placeholder:opacity-0 focus:placeholder:opacity-100" />
                            <label
                                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] leading-tight text-xl font-semibold text-[#403F3F] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                First Name
                            </label>
                        </div>

                        <div className="relative h-11 w-full min-w-[200px] mb-4">
                            <input placeholder="Last Name" type="text" name="text"
                                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                            <label
                                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] leading-tight text-xl font-semibold text-[#403F3F] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Last Name
                            </label>
                        </div>

                        <div className="relative h-11 w-full min-w-[200px] mb-4">
                            <input placeholder="Enter your email address" type="email" name="email"
                                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                            <label
                                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] leading-tight text-xl font-semibold text-[#403F3F] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                               Username or  Email 
                            </label>
                        </div>

                        <div className="relative h-11 w-full min-w-[200px] mb-4">
                            <div className="flex relative">

                            <input placeholder="Enter your password" name="password" type={showPassword ? "text" : "password"}
                                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                                <br />
                                 <span className="absolute right-0 top-0" onClick={()=>setShowPassword(!showPassword)}>
                                    {
                                        showPassword? <FaEyeSlash/> : <FaEye/>
                                    }
                                </span>
                            </div>
                            <label
                                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] leading-tight text-xl font-semibold text-[#403F3F] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                               Password
                            </label>
                        </div>

                        {/* terms & condition */}

                        <div className="flex gap-4">

                        <input type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">Accept our <Link>terms & conditions</Link></label>
                        </div>

                        {/* <div className="relative h-11 w-full min-w-[200px] mb-4">
                            <input placeholder="Enter your password" type="password" name="password"
                                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                            <label
                                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] leading-tight text-xl font-semibold text-[#403F3F] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                               Confirm Password
                            </label>
                        </div> */}


                        <div className="form-control mt-6">
                            <button className="p-3 rounded bg-[#F9A51A] text-black font-semibold">Create an account</button>
                        </div>

                        <p className="my-4 font-semibold text-center">Already Have An Account? <Link to="/login" className="text-[#F9A51A]">Login</Link>
                        </p>



                    </form>

                    {/* error function */}

                    {

                        registerError && <p className="text-red-800">{registerError}</p>

                    }

                    {
                        success && <p className="text-green-600">{success}</p>
                    }

                    <div className="items-center text-center mx-auto">

                        <div className="flex items-center mx-auto my-4">
                            <hr className="border-[2px] w-[210px] " /> <p className="mx-4" >OR</p> <hr className="border-[2px] w-[210px]" />
                        </div>


                        <div className="flex gap-20  border-[3px] rounded-3xl p-2 my-4">

                            <FaFacebook className="h-[32px] w-[32px] bg-[#3076FF] rounded-full text-white" />
                            <span className="text-base font-medium">Continue with Facebook</span>

                        </div>

                        <div className="flex gap-20  border-[3px] rounded-3xl p-2">
                            <FcGoogle className="h-[32px] w-[32px]  rounded-full" />
                            <span className="text-base font-medium">Continue with Google</span>
                        </div>
                    </div>


                </div>


            </div>


        </div>
    );
};

export default Register;