import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import homeIcon from "../assets/home.png";
import timelineIcon from "../assets/three-o-clock-clock.png";
import statsIcon from "../assets/analytics.png";

const Navbar = () => {

  const linkStyle = "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition";

  const activeStyle = "bg-green-900 text-white";
  const inactiveStyle = "text-gray-600 hover:bg-gray-100";

  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white border-b shadow-sm">

      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} className="h-8 w-auto object-contain" />
      </div>

      {/* Links */}
      <div className="flex gap-3">

        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          <img src={homeIcon} className="w-4 h-4" />
          Home
        </NavLink>

        {/* Timeline */}
        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          <img src={timelineIcon} className="w-4 h-4" />
          Timeline
        </NavLink>

        {/* Stats */}
        <NavLink
          to="/stats"
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
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