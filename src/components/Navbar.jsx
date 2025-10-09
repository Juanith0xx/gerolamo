// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX, HiSearch } from "react-icons/hi";
import { FaShoppingBag, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const links = [
    { name: "Superfood", href: "#superfood" },
    { name: "Prescripción", href: "#prescripcion" },
    { name: "Mantención", href: "#mantencion" },
    { name: "Snack", href: "#snack" },
    {
      name: "Encuéntranos aquí",
      href: "#encuentranos",
      icon: <FaMapMarkerAlt className="text-[#EE66A2] ml-0" />,
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

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Buscando:", searchTerm);
      // 🔍 Aquí podrías redirigir o filtrar productos
      setSearchTerm("");
    }
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 font-ceraroundblack font-black mt-2">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-20 mb-4 pt-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src="/img/Logo_G.png" alt="GEROLAMO" className="h-30 w-auto" />
          </Link>
        </div>

        {/* 🔍 Barra de búsqueda (Desktop) */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex items-center bg-gray-100 rounded-full px-3 py-1 focus-within:ring-2 focus-within:ring-[#EE66A2] transition-all duration-200 w-65"
        >
          <HiSearch className="text-gray-500 text-base" />
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none px-2 w-full text-sm text-gray-600"
          />
        </form>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-4 text-gray-600 font-bold text-sm">
          {links.map((link, index) => (
            <div key={link.name} className="flex items-center space-x-1">
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="hover:text-[#EE66A2] transition hover:text-lg font-black text-base flex items-center"
              >
                {link.name}
                {link.icon && <span>{link.icon}</span>}
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
          <img src="/img/Logo_G.png" alt="GEROLAMO" className="h-22 w-auto" />
          <button onClick={() => setOpen(false)}>
            <HiX size={26} />
          </button>
        </div>

        {/* 🔍 Barra de búsqueda (Móvil) */}
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-gray-100 rounded-full px-4 py-2 mx-4 mt-4 focus-within:ring-2 focus-within:ring-[#EE66A2]"
        >
          <HiSearch className="text-gray-500 text-lg" />
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none px-2 w-full text-sm text-gray-600"
          />
        </form>

        <ul className="flex flex-col p-4 space-y-4 mt-4">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="flex items-center text-gray-500 hover:text-pink-600 font-black"
              >
                {link.name}
                {link.icon && <span className="ml-1">{link.icon}</span>}
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
