import callIcon from "../assets/call.png";
import textIcon from "../assets/text.png";
import videoIcon from "../assets/video.png";
import meetIcon from "../assets/agreement.png";

const Timeline = ({ timeline }) => {
  return (
    <div className="bg-gray-100 min-h-screen py-10">

      <div className="max-w-4xl mx-auto px-4">

        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">Timeline</h1>

        {/* Filter */}
        <select className="border border-gray-200 p-2 rounded mb-6">
          <option>Filter timeline</option>
          <option>Call</option>
          <option>Text</option>
          <option>Video</option>
          <option>Meeting</option>
        </select>

        {/* Timeline List */}
        <div className="space-y-4">

          {timeline.length === 0 && (
            <p className="text-gray-500">No activity yet</p>
          )}

          {timeline.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4 hover:bg-gray-50 transition"
            >

              {/* ICON */}
              {item.type === "Call" && (
                <img src={callIcon} className="w-6 h-6 opacity-70" />
              )}

              {item.type === "Text" && (
                <img src={textIcon} className="w-6 h-6 opacity-70" />
              )}

              {item.type === "Video" && (
                <img src={videoIcon} className="w-6 h-6 opacity-70" />
              )}

              {item.type === "Meeting" && (
                <img src={meetIcon} className="w-6 h-6 opacity-70" />
              )}

              {/* TEXT */}
              <div>
                <p className="font-medium">
                  {item.type} with {item.name}
                </p>
                <p className="text-sm text-gray-500">
                  {item.date}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Timeline;