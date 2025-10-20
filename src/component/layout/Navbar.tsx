import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {

  const whatappNumber = "6285864642912"; 
  const message = "Halo, saya ingin bertanya tentang layanan Alope.";
  const whatsappUrl = `https://wa.me/${whatappNumber}?text=${encodeURIComponent(message)}`;
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  
  const navLinks = [
    { to: "/", title: "Home" },
    { to: "#service", title: "Layanan" },
    { to: "#our-works", title: "Portofolio" },
    { to: "#our-product", title: "Products" }, 
  ];

  const NavLinkItem = ({
    to,
    title,
    onClick,
  }: {
    to: string;
    title: string;
    onClick?: () => void;
  }) => (
    <li>
      <a
        href={to}
        onClick={onClick}
        className="relative font-medium text-gray-700 hover:text-blue-600 transition duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
      >
        {title}
      </a>
    </li>
  );

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 backdrop-blur shadow-sm z-50 py-4 px-3 sm:px-6 md:px-6 lg:px-8 xl:px-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="text-xl sm:text-2xl font-extrabold text-gray-900 hover:text-blue-600 transition duration-300"
            >
              Alope Software House
            </Link>

         
            <div className="hidden md:flex items-center gap-6">
              <ul className="flex gap-6 lg:gap-8 text-sm lg:text-base">
                {navLinks.map((link) => (
                  <NavLinkItem key={link.to} to={link.to} title={link.title} />
                ))}
              </ul>


              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 shadow-md shadow-blue-500/50 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-[1.03]"
              >
                Contact Us
              </a>
            </div>

        
            <div className="md:hidden">
              <button
                onClick={toggleSidebar}
                aria-label="Toggle Menu"
                className="p-2 text-gray-800 hover:text-blue-600 transition duration-200"
              >
                {isOpen ? (
                  <X className="size-6" />
                ) : (
                  <Menu className="size-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

    
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
         
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
          <h3 className="text-xl font-bold text-blue-600">Navigasi</h3>
          <button
            onClick={closeSidebar}
            aria-label="Close Menu"
            className="text-gray-600 hover:text-red-500"
          >
            <X className="size-6" />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col gap-6 p-6 text-lg">
          {navLinks.map((link) => (
            <li key={link.to}>
              <a
                href={link.to}
                onClick={closeSidebar}
                className="block text-gray-700 font-medium hover:text-blue-600 transition duration-200 border-b border-gray-50/0 hover:border-blue-300 pb-1"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="px-6">
          <Link
            to="/contact"
            onClick={closeSidebar}
            className="block text-center bg-blue-600 shadow-md hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
          >
             Get In Touch
          </Link>
        </div>
      </div>

      {/* --- Overlay Background --- */}
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden"
        ></div>
      )}
    </>
  );
};

export default Navbar;
