import { useParams } from "react-router-dom";
import friends from "../data/friends.json";

// ✅ ICON IMPORT
import alarm from "../assets/alarm.png";
import box from "../assets/box.png";
import deleteIcon from "../assets/delete.png";
import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";

const FriendDetails = () => {
  const { id } = useParams();

  const friend = friends.find(f => f.id == id);

  // ✅ SAFETY (white screen fix)
  if (!friend) {
    return <h1 className="text-red-500 text-2xl">Friend not found</h1>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* LEFT SIDE */}
        <div className="space-y-4">

          {/* Profile */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <img
              src={friend.picture}
              className="w-20 h-20 mx-auto rounded-full mb-4"
            />

            <h2 className="font-semibold text-lg">{friend.name}</h2>

            <p className="text-sm text-gray-400 mb-2">
              {friend.days_since_contact}d ago
            </p>

            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
              {friend.status}
            </span>

            <div className="flex justify-center gap-2 mt-2">
              {friend.tags.map((tag, i) => (
                <span key={i} className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="bg-white p-3 rounded shadow flex items-center justify-center gap-2">
            <img src={alarm} className="w-5 h-5" />
            Snooze 2 Weeks
          </div>

          <div className="bg-white p-3 rounded shadow flex items-center justify-center gap-2">
            <img src={box} className="w-5 h-5" />
            Archive
          </div>

          <div className="bg-white p-3 rounded shadow flex items-center justify-center gap-2 text-red-500">
            <img src={deleteIcon} className="w-5 h-5" />
            Delete
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-2 space-y-4">

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow text-center">
              <h2 className="text-xl font-bold">{friend.days_since_contact}</h2>
              <p className="text-gray-400 text-sm">Days Since Contact</p>
            </div>

            <div className="bg-white p-4 rounded shadow text-center">
              <h2 className="text-xl font-bold">30</h2>
              <p className="text-gray-400 text-sm">Goal (Days)</p>
            </div>

            <div className="bg-white p-4 rounded shadow text-center">
              <h2 className="text-xl font-bold">Feb 27, 2026</h2>
              <p className="text-gray-400 text-sm">Next Due</p>
            </div>
          </div>

          {/* Goal */}
          <div className="bg-white p-4 rounded shadow flex justify-between">
            <div>
              <h3 className="font-semibold">Relationship Goal</h3>
              <p className="text-gray-500 text-sm">Connect every 30 days</p>
            </div>

            <button className="text-sm bg-gray-100 px-3 py-1 rounded">Edit</button>
          </div>

          {/* Quick Check-In */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="mb-3 font-semibold">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-4">

              <button className="border p-4 rounded flex flex-col items-center gap-2">
                <img src={callIcon} className="w-6 h-6" />
                Call
              </button>

              <button className="border p-4 rounded flex flex-col items-center gap-2">
                <img src={textIcon} className="w-6 h-6" />
                Text
              </button>

              <button className="border p-4 rounded flex flex-col items-center gap-2">
                <img src={videoIcon} className="w-6 h-6" />
                Video
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default FriendDetails;