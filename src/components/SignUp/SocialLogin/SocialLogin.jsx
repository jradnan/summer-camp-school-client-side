import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then( result => {
            const loggedInUser = result.user;
            const saveUser = {name: loggedInUser.displayName, email: loggedInUser.email}
            fetch('https://summer-camp-school-server-afridimhrj10-gmailcom.vercel.app/users',{
                            method:"POST",
                            headers:{
                                'content-type':'application/json'
                            },
                            body: JSON.stringify(saveUser)
                           
                        })
                            .then(res => res.json())
                            .then(() => {
                               
                                    navigate(from, { replace: true });
                                
                            })

            console.log(loggedInUser);
        })
    }
    return (
        <div className="-mt-10">
            <div className="divider"></div>
            <div className=" text-center my-5">
            <button onClick={handleGoogleSignIn} className="btn text-white btn-circle btn-outline">
                <FaGoogle></FaGoogle>
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;