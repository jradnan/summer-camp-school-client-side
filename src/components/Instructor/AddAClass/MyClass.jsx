import { useEffect } from "react";
import { useState } from "react";
import { FaBackspace, FaTrashAlt, FaHandHolding } from "react-icons/fa";
const MyClass = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://summer-camp-school-server-afridimhrj10-gmailcom.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setCourses(data);
                console.log(data);
            })
    }, [])
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Instructor</th>
                            <th>Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Approve</th>
                            <th>Deny</th>
                            <th>Send Feedback</th>

                        </tr>
                    </thead>
                    <tbody>

                        {courses.map(course =>

                            <tr key={course._id}>


                                <td>
                                    <div className="flex courses-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={courses.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{courses.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-right">{course.title}</td>
                                <td className="text-right">{course.instructor}</td>
                                <td className="text-right">{course.email}</td>
                                <td className="text-right">{course.availableSeats}</td>
                                <td className="text-right">${course.price}</td>
                                <td> <button className="btn btn-ghost bg-green-700  text-white"><FaHandHolding></FaHandHolding></button></td>
                                <td> <button className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                                <td> <button className="btn btn-ghost bg-blue-400  text-white"><FaBackspace></FaBackspace></button></td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClass;