import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center">
      <img
        className="max-w-full h-auto"
        src="https://cdn.wallpapersafari.com/85/63/yHNmYv.jpg"
        alt=""
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h1 className="text-6xl text-white">404</h1>
        <p className="mb-10 text-red-700 text-2xl font-semibold">
          PAGE NOT FOUND
        </p>
        <Link to={"/"}>
          <div className="mb-20">
            <button className="btn">GO BACK</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Error;
