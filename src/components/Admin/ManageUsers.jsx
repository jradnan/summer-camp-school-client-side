import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('https://summer-camp-school-server-afridimhrj10-gmailcom.vercel.app/users');
        return res.json()
    })

    const handleMakeAdmin = user => {
        fetch(`https://summer-camp-school-server-afridimhrj10-gmailcom.vercel.app/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeInstructor = user => {
        fetch(`https://summer-camp-school-server-afridimhrj10-gmailcom.vercel.app/users/instructor/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                    user.role === "admin" ? "admin"
                                        : <button onClick={() => handleMakeAdmin(user)} className="btn bg-orange-600 border-0 "><FaUserShield></FaUserShield></button>
                                }</td>
                                <td>
                                    {
                                        user.role === "instructor" ? "instructor"
                                            : < button onClick={() => handleMakeInstructor(user)} className="btn bg-red-600 border-0 "><FaChalkboardTeacher></FaChalkboardTeacher></button>
                                    }
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageUsers;