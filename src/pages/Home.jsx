
import FriendCard from "../components/FriendCard";
import friends from "../data/friends.json";
const Home = () => {
  return (
    <div>

      {/* Banner Section */}
      <div className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Friends to keep close in your life
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

        <button className="bg-green-900 text-white px-6 py-3 rounded-md hover:bg-green-800 transition">
          + Add a Friend
        </button>
      </div>

      {/*  STATS SECTION (IMPORTANT) */}
      <div className="max-w-6xl mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-2xl font-bold text-green-900">10</h2>
            <p className="text-gray-500 mt-2">Total Friends</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-2xl font-bold text-green-900">3</h2>
            <p className="text-gray-500 mt-2">On Track</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-2xl font-bold text-green-900">6</h2>
            <p className="text-gray-500 mt-2">Need Attention</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center">
            <h2 className="text-2xl font-bold text-green-900">12</h2>
            <p className="text-gray-500 mt-2">
              Interactions This Month
            </p>
          </div>

        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 mt-12">
       <h2 className="text-xl font-semibold text-gray-800 mb-6">
         Your Friends </h2>
         
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
         {friends.map((friend) => (
           <FriendCard key={friend.id} friend={friend} />
         ))}
       </div>

      
     </div>
    </div>
  );
};

export default Home;