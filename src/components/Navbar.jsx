import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import homeIcon from "../assets/home.png";
import timelineIcon from "../assets/three-o-clock-clock.png";
import statsIcon from "../assets/analytics.png";

const Navbar = () => {
  const linkStyle =
    "flex items-center gap-2 px-4 py-2 rounded-md text-sm";

  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white border-b">
      
      {/* Logo + Name */}
      <div className="flex items-center">
        <img src={logo} className="h-8 w-auto object-contain" />
      </div>

      {/* Links */}
      <div className="flex gap-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? `${linkStyle} bg-green-700 text-white`
              : `${linkStyle} text-gray-600 hover:bg-gray-100`
          }
        >
          <img src={homeIcon} className="w-4 h-4" />
          Home
        </NavLink>

        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            isActive
              ? `${linkStyle} bg-green-700 text-white`
              : `${linkStyle} text-gray-600 hover:bg-gray-100`
          }
        >
          <img src={timelineIcon} className="w-4 h-4" />
          Timeline
        </NavLink>

        <NavLink
          to="/stats"
          className={({ isActive }) =>
            isActive
              ? `${linkStyle} bg-green-700 text-white`
              : `${linkStyle} text-gray-600 hover:bg-gray-100`
          }
        >
          <img src={statsIcon} className="w-4 h-4" />
          Stats
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;