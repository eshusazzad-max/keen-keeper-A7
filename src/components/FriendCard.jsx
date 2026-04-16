import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {

  // 🔥 status color logic
  const getStatusColor = () => {
    if (friend.status === "overdue")
      return "bg-red-500 text-white";
    if (friend.status === "almost due")
      return "bg-yellow-400 text-white";
    if (friend.status === "on-track")
      return "bg-green-800 text-white";
  };

  return (
    <Link to={`/friend/${friend.id}`}>
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">

        {/* Image */}
        <img
          src={friend.picture}
          className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
        />

        {/* Name */}
        <h3 className="font-semibold text-gray-800">
          {friend.name}
        </h3>

        {/* Days */}
        <p className="text-sm text-gray-400 mb-2">
          {friend.days_since_contact}d ago
        </p>

        {/* Tags */}
        <div className="flex justify-center gap-2 mb-2 flex-wrap">
          {friend.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Status */}
        <span
          className={`text-xs px-3 py-1 rounded-full ${getStatusColor()}`}
        >
          {friend.status === "on-track"
            ? "On-Track"
            : friend.status === "almost due"
            ? "Almost Due"
            : "Overdue"}
        </span>

      </div>
    </Link>
  );
};

export default FriendCard;