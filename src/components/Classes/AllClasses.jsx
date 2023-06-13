import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import {  useLocation, useNavigate } from "react-router-dom";

const AllClasses = ({course}) => {
    const { title, image, instructor, availableSeats, price, id } = course;
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation()


    const handleAddToCart = cart =>{
        console.log(cart);
        if (user && user.email) {
            const cartItem = { courseItemId: id, title, price, image, email: user.email }
            fetch('https://summer-camp-school-server-afridimhrj10-gmailcom.vercel.app/carts', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        console.log(data);
                        
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Course Added.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                    console.log(data);
                })
        }
        else {
            Swal.fire({
                title: 'Please login for add to cart',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    

    return (
        <div>
            <div className="courses ">
                <img src={image} alt="" />
                <div className="course-info p-5 ">
                    <p className="text-[#000] text-[14px] font-[400]">{title}</p>
                    <p className="text-[#000] text-[14px] font-[400]">Instructor: {instructor}</p>
                    <p className="text-[#000] text-[14px] font-[400]">Seats: {availableSeats}</p>
                    <p className="text-[#000] text-[14px] font-[400]">Price: {price}</p>
                    <button onClick={() => handleAddToCart(course)} className="bg-[#000] mt-3 text-white rounded-2xl px-2 text-[14px] py-1">Select</button>
                </div>
            </div>
        </div>
    );
};

export default AllClasses;