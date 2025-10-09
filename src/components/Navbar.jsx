// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaShoppingBag, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa"; // 👈 se agregó FaMapMarkerAlt

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Superfood", href: "#superfood" },
    { name: "Prescripción", href: "#prescripcion" },
    { name: "Mantención", href: "#mantencion" },
    { name: "Snack", href: "#snack" },
    {
      name: "Encuéntranos en",
      href: "#encuentranos",
      icon: <FaMapMarkerAlt className="text-[#E8609F]" />, // 👈 cambiado a ícono de ubicación
    },
    { name: "Blog", href: "#blog" },
  ];

  const handleScroll = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const yOffset = -90;
        const y = target.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      setOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 font-ceraroundblack font-black mt-2">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-20 mb-4 pt-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src="/img/Logo_G.png" alt="GEROLAMO" className="h-40 w-auto" />
          </Link>
        </div>

        {/* Desktop Links con divisores */}
        <nav className="hidden md:flex items-center space-x-4 text-gray-600 font-bold text-sm">
          {links.map((link, index) => (
            <div key={link.name} className="flex items-center space-x-1">
              {link.icon && <span>{link.icon}</span>}
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="hover:text-[#EE66A2] transition hover:text-xl font-black text-lg"
              >
                {link.name}
              </a>
              {index < links.length - 1 && <Divider />}
            </div>
          ))}
        </nav>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Sidebar móvil */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 transform transition-transform duration-800 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <img src="/img/Logo.png" alt="GEROLAMO" className="h-10" />
          <button onClick={() => setOpen(false)}>
            <HiX size={26} />
          </button>
        </div>

        <ul className="flex flex-col p-4 space-y-4">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="flex items-center text-gray-500 hover:text-pink-600 font-medium"
              >
                {link.icon && <span className="mr-3">{link.icon}</span>}
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

// Componente divisor vertical
const Divider = () => (
  <span className="h-6 w-px bg-[#19538B] mx-2"></span>
);

export default Navbar;
