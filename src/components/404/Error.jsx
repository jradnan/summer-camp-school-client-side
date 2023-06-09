import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center">
            <img className="" src="https://cdn.wallpapersafari.com/85/63/yHNmYv.jpg" alt="" />
            <div className="absolute  bottom-20 left-[450px]">
                <h1 className="text-[300px] text-white">404</h1>
                <p className="mb-10 text-red-700 text-[27px] font-[700]">PAGE NOT FOUND</p>
                <Link to={'/'}> <div className="mb-20"><button className="btn">GO BACK</button></div></Link>

            </div>
        </div>
    );
};

export default Error;