const Home = () => {
  return (
    <div className="bg-gray-100 py-16 text-center">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Friends to keep close in your life
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 max-w-2xl mx-auto mb-6">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      {/* Button */}
      <button className="bg-green-900 text-white px-6 py-3 rounded-md hover:bg-green-800 transition">
        + Add a Friend
      </button>

    </div>
  );
};

export default Home;