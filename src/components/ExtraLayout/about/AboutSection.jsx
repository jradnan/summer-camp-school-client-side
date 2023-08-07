
const AboutSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between py-16 px-4 lg:px-32 bg-gray-100 mt-14 ">
      {/* Text side */}
      <div className="lg:w-1/2 lg:mr-8">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 mb-6">
        Welcome to our Summer School of Photography! We believe that capturing the essence of the world through the lens is a transformative experience. Our program is designed to nurture your passion for photography and equip you with the skills to master the art.
        </p>
        <p className="text-gray-700">
        Through hands-on workshops and interactive sessions, you'll learn to capture breathtaking landscapes, candid moments, and creative portraits. Join our community of aspiring photographers, and together, we'll explore the beauty of the world through the magic of photography. So grab your camera and let your artistic vision soar this summer!
        </p>
      </div>

      {/* Image side */}
      <div className="lg:w-1/2 lg:ml-8">
        <img
          className="rounded-lg shadow-lg"
          src="https://promo-theme.com/novo/wp-content/uploads/2018/03/side-img2.jpg"
          alt="About Us"
        />
      </div>
    </div>
  );
};

export default AboutSection;
