import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Stats = ({ timeline }) => {

  // count calculate
  const callCount = timeline.filter(item => item.type === "Call").length;
  const textCount = timeline.filter(item => item.type === "Text").length;
  const videoCount = timeline.filter(item => item.type === "Video").length;

  // chart data
  const data = [
    { name: "Text", value: textCount },
    { name: "Call", value: callCount },
    { name: "Video", value: videoCount },
  ];

  //colors
  const COLORS = ["#6D28D9", "#1F2937", "#22C55E"];

  return (
    <div className="bg-gray-100 min-h-screen py-10">

      <div className="max-w-5xl mx-auto px-4">

        {/* Title */}
        <h1 className="text-3xl font-bold mb-6">
          Friendship Analytics
        </h1>

        {/* Card */}
        <div className="bg-white p-6 rounded-xl shadow">

          <h3 className="mb-4 text-gray-600">
            By Interaction Type
          </h3>

          <div className="flex justify-center items-center h-[300px]">

            <ResponsiveContainer width="100%" height="100%">
              <PieChart>

                <Pie
                  data={data}
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={4}
                  dataKey="value"
                  cornerRadius={10}  
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>

                <Tooltip />

              </PieChart>
            </ResponsiveContainer>

          </div>

          {/* Custom Legend */}
          <div className="flex justify-center gap-6 mt-4 text-sm">

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-600"></span>
              Text
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-800"></span>
              Call
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              Video
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Stats;