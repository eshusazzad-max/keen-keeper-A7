import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import logo from "../assets/logo-xl.png";

const Footer = () => {
  return (
    <div className="bg-green-900 text-white mt-16">

      {/* Top */}
      <div className="text-center py-16 px-4">
        <img src={logo} className="h-12 mx-auto object-contain block" />
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        <h3 className="mb-3">Social Links</h3>

        {/* Icons */}
        <div className="flex justify-center gap-4">
          
          <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
            <img src={instagram} className="w-10 h-10" />
          </div>

          <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
            <img src={facebook} className="w-10 h-10" />
          </div>

          <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
            <img src={twitter} className="w-10 h-10" />
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-green-800 py-4 px-6 flex flex-col md:flex-row justify-between text-sm text-gray-300">
        <p>&copy; {new Date().getFullYear()} KeenKeeper. All rights reserved.
        </p>

        <div className="flex gap-4 mt-2 md:mt-0">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookies</span>
        </div>
      </div>

    </div>
  );
};

export default Footer;