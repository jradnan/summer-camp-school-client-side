import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        
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
                    // const loggedInUser = result.user;
                    // const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                    // fetch('http://localhost:5000/users', {
                    //     method: "POST",
                    //     headers: {
                    //         'content-type': 'application/json'
                    //     },
                    //     body: JSON.stringify(saveUser)

                    // })
                    // .then(res => res.json())
                    // .then(() => {


                    // })

                    navigate(from, { replace: true });
                })
            
                
        }

        return (
            <div className="mt-16 absolute top-12 left-24 lg:left-[550px]">
                <div className="card mx-auto  max-w-sm shadow-2xl bg-black">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">{error}</a>
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