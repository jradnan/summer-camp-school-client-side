import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { signIn, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const onSubmit = data => {
       
        signIn(data.email, data.password)
        
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                reset()
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                // ..
              })
        }
        const handleGoogleSignIn = () => {
            googleSignIn()
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    const loggedInUser = result.user;
                    const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                    fetch('https://summer-camp-school-server-afridimhrj10-gmailcom.vercel.app/users', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(saveUser)

                    })
                    .then(res => res.json())
                    .then(() => {


                    })

                    navigate(from, { replace: true });
                })
            
                
        }

        return (
            <div className="mt-16 absolute top-12 left-24 lg:left-[550px]">
                <div className="card mx-auto  max-w-sm shadow-2xl bg-black">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-red-600">{error}</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <input  className="btn bg-[#9f2ee5] text-white" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="divider"></div>
                    <div className=" text-center my-5">
                        <button onClick={handleGoogleSignIn} className="btn text-white btn-circle btn-outline">
                            <FaGoogle></FaGoogle>
                        </button>
                    </div>
                    <p className='text-center text-white pb-5'><small>New Here? <Link to="/signUp"><span className="text-[#9f2ee5]">Create an account</span></Link> </small></p>
                </div>
            </div>
        );
    
};

export default Login;