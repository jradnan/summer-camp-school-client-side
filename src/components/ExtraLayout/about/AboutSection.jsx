
const AboutSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between py-16 px-4 lg:px-32 bg-gray-100 mt-14 ">
      {/* Text side */}
      <div className="lg:w-1/2 lg:mr-8">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis enim ut
          purus convallis feugiat. Sed aliquam velit nec nunc rhoncus bibendum. Fusce interdum
          elit mauris, et scelerisque mauris fermentum vel. Integer laoreet est nec est
          tristique, ac convallis nisi accumsan.
        </p>
        <p className="text-gray-700">
          Proin vulputate felis ut lacus bibendum vestibulum. Nunc id ante quis sapien
          interdum accumsan eget at augue. Vivamus nec congue est. Nullam vehicula diam
          felis, a elementum sapien fringilla ac. Ut id tincidunt magna.
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
