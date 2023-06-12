import { FaTrashAlt, FaMoneyBill } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";

const MySelectedClasses = () => {
    const [cart, refetch] = useCart();



    const handleDelete = item => {
        console.log(item);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://summer-camp-school-server-afridimhrj10-gmailcom.vercel.app/carts/${item._id}`,{
                    method:"DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        
                    })
            }
        })
    }
    return (
        <div>
             <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>course</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Pay</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((course, index) => <tr key={course._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex courses-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={course.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{course.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-right">${course.price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </td>
                                
                               <td> <button onClick={() => handleDelete(course)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                               <td> <button className="btn btn-ghost bg-green-700  text-white"><FaMoneyBill></FaMoneyBill></button></td>
                           
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;