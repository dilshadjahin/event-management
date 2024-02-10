

import { Link } from "react-router-dom";

import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRef, useState } from "react";
import auth from "../../Firebase/firebase.config";
import Navbar from "../Navbar/Navbar";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {

    const [loginError, setLoginError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef(null);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);


         // reset error & success msg

         setLoginError('');
         setSuccess('');
 


        // add validation 

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('user logged in successfully')

            })
            .catch(error => {
                console.error(error);
            })
    }

    // forget password handler for validaton

    const handleForgetPassword = () =>{
        const email = emailRef.current.value;

        // forget password click with  get email verification
        
        if(!email){

            console.log('send reset email', emailRef.current.value);
            return;

        }

        else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))

        {
            console.log('please write a valid email');
            return;
        }

        // send validation email 

        sendPasswordResetEmail( auth, email)
        .then(() => {
            alert('please check your email');

        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
        <div className=" ">
            <Navbar color="text-black" />

            <div className="hero min-h-screen ">


                <div className="card shrink-0 w-[620px] px-10 h-[680px] my-24">
                    <form onSubmit={handleLogin} className="card-body px-16 rounded-none border my-6">

                        <h2 className="text-2xl font-semibold text-start my-6">Login</h2>

                        <div className="relative h-11 w-full min-w-[200px] mb-4">
                            <input placeholder="Enter your email address" type="email" name="email" ref={emailRef}
                                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                            <label
                                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] leading-tight text-xl font-semibold text-[#403F3F] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Username or  Email
                            </label>
                        </div>

                        <div className="relative h-11 w-full min-w-[200px] mb-4">
                            <input placeholder="Enter your password" type="password" name="password"
                                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100" />
                            <label
                                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] leading-tight text-xl font-semibold text-[#403F3F] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Password
                            </label>
                        </div>

                        <div className="flex justify-between ">

                            <div className="flex gap-2 text-black font-semibold">
                                <input type="checkbox" name="check" id="" />


                                <span className="label-text">Remember me</span>


                            </div>

                            <Link onClick={handleForgetPassword} className="text-[#F9A51A] font-semibold">Forgot Password?</Link>
                        </div>
                        <div className="form-control mt-6">
                            <button className="p-3 rounded bg-[#F9A51A] text-black font-semibold">Login</button>
                        </div>

                        <p className="my-4 font-semibold text-center">Dont Have An Account? <Link to='/register' className="text-[#F9A51A] ">Create an account</Link>
                        </p>



                    </form>


                    {/* error function */}

                    {

                        loginError && <p className="text-red-800">{loginError}</p>

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

export default Login;