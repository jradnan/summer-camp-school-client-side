import { NavLink,  Outlet } from "react-router-dom";
import { FaHome, FaPersonBooth, FaPencilRuler, FaWallet, FaUsers,  } from 'react-icons/fa';
import { FaAlignJustify } from "react-icons/fa";



const Dashboard = () => {
    const isAdmin = true;
    return (
        <div>
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden"><FaAlignJustify></FaAlignJustify></label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-[#CCD3EF] text-base-content">
                        {/* Sidebar content here */}
                        <li><NavLink to={'/'}><FaHome></FaHome> Home</NavLink></li>
                        <li><NavLink to={'/dashboard/manageUsers'}><FaUsers></FaUsers>Manage Users</NavLink></li>
                        <li><NavLink to={'/dashboard/myClasses'}><FaPersonBooth></FaPersonBooth> My Selected Classes</NavLink></li>
                        <li><NavLink to={'/dashboard/myEnrolledClasses'}><FaPencilRuler></FaPencilRuler> My Enrolled Classes</NavLink></li>
                        <li><NavLink to={'/dashboard/payment'}><FaWallet></FaWallet> PAYMENT</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;