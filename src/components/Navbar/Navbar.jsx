import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = ({toggleTheme}) => {
    console.log(toggleTheme);
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    return (
        <div className="navbar bg-base-100 fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/instructors'}>Instructors</Link></li>   
                    <li><Link to={'/classes'}>Classes</Link></li>
                   <li> <Link to={'/'}>Dashboard</Link></li>
                   {
                            user ? <>
                                <li> <span>{user?.displayName}</span></li>
                               <div className='flex items-center'>
                                <button onClick={handleLogOut} className="bg-[#9f2ee5] py-2 px-3 rounded-3xl text-white ml-1">LogOut</button>
                               </div>
                            </> : <>
                                <li><Link to="/login">Login</Link></li>
                            </>
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl ">

                    <img className="lg:w-[300px] w-[100px] md:w-[200px]" src="https://images.squarespace-cdn.com/content/v1/5824673c2e69cfc8ac1e3cd3/1596185648217-K25J8AHAUT1SS0ZBD2XT/The-school-of-photography-web-site-logo_1500px.png?format=1500w" alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/instructors'}>Instructors</Link></li>   
                    <li><Link to={'/classes'}>Classes</Link></li>
                   <li> <Link to={'/'}>Dashboard</Link></li>
                </ul>
            </div>
            <div className="navbar-end  mr-5">
            {
                            user ? <>
                               
                               <div className='flex items-center '>
                               <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                                <button onClick={handleLogOut} className="bg-[#9f2ee5] py-2 px-3 rounded-3xl text-white ml-5">LogOut</button>
                               </div>
                            </> : <>
                               <Link to="/login" className="bg-[#9f2ee5] py-2 px-3 rounded-3xl text-white">Login</Link>
                            </>
                        }
                          <div className="ml-7 lg:ml-0"> <button className="bg-[#9f2ee5] py-2 px-3 rounded-3xl text-white ml-5" onClick={toggleTheme}>Theme</button></div>
            </div>
        </div>
    );
};

export default Navbar;