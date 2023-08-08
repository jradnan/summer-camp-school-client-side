import { FaRegCommentAlt, FaRegHeart } from 'react-icons/fa';

const Card = () => {
    return (
        <div>
            <h1 className='text-4xl mt-20 text-center'>Blog</h1>
            <div className=" p-10 lg:p-20 md:p-20 lg:mx-12 lg:gap-6  grid md:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
                <div className="max-w-sm rounded-lg overflow-hidden bg-black text-white">
                    {/* Image */}
                    <img
                        src="https://promo-theme.com/novo/wp-content/uploads/2017/08/project30.jpg"
                        alt="Card Image"
                        className="w-full h-auto"
                    />
                    <div className='py-10'>

                        {/* Title */}
                        <h1 className="text-xl font-bold mt-4 text-center px-4">Wishing Well</h1>

                        {/* Subtitle */}
                        <h5 className="text-sm font-semibold text-[#C28D4A] mt-2 text-center px-4">January 28, 2022</h5>

                        {/* Text */}
                        <p className="mt-2 text-center px-4">
                            Some text describing the content of the card. This can be a longer description or any other relevant information.
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between mt-3 px-4 py-2 border-t-2 border-[#243c5a]">
                        <a href="#" className="text-[#C28D4A] flex items-center ">
                            <FaRegHeart></FaRegHeart>
                            <h5 className='text-white ml-2'>230 Likes</h5>

                        </a>
                        <a href="#" className="text-[#C28D4A] flex items-center">
                            <FaRegCommentAlt></FaRegCommentAlt>
                            <h5 className='text-white ml-2'>No Comments</h5>
                        </a>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="max-w-sm rounded-lg overflow-hidden bg-black text-white mt-5 lg:mt-0">
                    {/* Image */}
                    <img
                        src="https://promo-theme.com/novo/wp-content/uploads/2017/08/project18.jpg"
                        alt="Card Image"
                        className="w-full h-auto"
                    />
                    <div className='py-10'>

                        {/* Title */}
                        <h1 className="text-xl font-bold mt-4 text-center px-4">Johnny B Goode</h1>

                        {/* Subtitle */}
                        <h5 className="text-sm font-semibold text-[#C28D4A] mt-2 text-center px-4">July 28, 2022</h5>

                        {/* Text */}
                        <p className="mt-2 text-center px-4">
                            Some text describing the content of the card. This can be a longer description or any other relevant information.
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between mt-3 px-4 py-2 border-t-2 border-[#243c5a]">
                        <a href="#" className="text-[#C28D4A] flex items-center ">
                            <FaRegHeart></FaRegHeart>
                            <h5 className='text-white ml-2'>152 Likes</h5>

                        </a>
                        <a href="#" className="text-[#C28D4A] flex items-center">
                            <FaRegCommentAlt></FaRegCommentAlt>
                            <h5 className='text-white ml-2'>No Comments</h5>
                        </a>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="max-w-sm rounded-lg overflow-hidden bg-[#111111] text-white mt-5 lg:mt-0">
                    {/* Image */}
                    <img
                        src="https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        alt="Card Image"
                        className="w-full h-auto"
                    />
                    <div className='py-10'>

                        {/* Title */}
                        <h1 className="text-xl font-bold mt-4 text-center px-4">One</h1>

                        {/* Subtitle */}
                        <h5 className="text-sm font-semibold text-[#C28D4A] mt-2 text-center px-4">September 28, 2022</h5>

                        {/* Text */}
                        <p className="mt-2 text-center px-4">
                            Some text describing the content of the card. This can be a longer description or any other relevant information.
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between mt-3 px-4 py-2 border-t-2 border-[#243c5a]">
                        <a href="#" className="text-[#C28D4A] flex items-center ">
                            <FaRegHeart></FaRegHeart>
                            <h5 className='text-white ml-2'>257 Likes</h5>

                        </a>
                        <a href="#" className="text-[#C28D4A] flex items-center">
                            <FaRegCommentAlt></FaRegCommentAlt>
                            <h5 className='text-white ml-2'>No Comments</h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
