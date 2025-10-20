import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX, HiSearch } from "react-icons/hi";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";

// 🎨 Estilos por categoría tipo ficha clínica con efecto hover
const getTabStyle = (name) => {
  const base =
    "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-l-[6px]";
  const styles = {
    "¿Qué es SuperFood?": `${base} bg-[#D4F4DD] border-l-4 border-green-400 hover:border-green-500`,
    "SuperFood Prescripción": `${base} bg-[#DDEEFF] border-l-4 border-blue-400 hover:border-blue-500`,
    "SuperFood Mantención": `${base} bg-[#FFF8D4] border-l-4 border-yellow-400 hover:border-yellow-500`,
    "SuperFood Snack": `${base} bg-[#FFE4EC] border-l-4 border-pink-400 hover:border-pink-500`,
    "Encuéntranos aquí": `${base} bg-[#E8D4FF] border-l-4 border-purple-400 hover:border-purple-500`,
    Blog: `${base} bg-[#F0F0F0] border-l-4 border-gray-400 hover:border-gray-500`,
  };
  return styles[name] || `${base} bg-white border-l-4 border-gray-200 hover:border-gray-400`;
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const links = [
    { name: "¿Qué es SuperFood?", href: "#superfood" },
    { name: "SuperFood Prescripción", href: "#prescripcion" },
    { name: "SuperFood Mantención", href: "#mantencion" },
    { name: "SuperFood Snack", href: "#snack" },
    {
      name: "Encuéntranos aquí",
      href: "#encuentranos",
      icon: <FaMapMarkerAlt className="text-[#EE66A2] ml-0" />,
    },
    { name: "Blog", href: "/blog" },
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
      setSearchTerm("");
    }
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 font-ceraroundblack font-black">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-20 pt-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src="/img/Logo_G.png" alt="GEROLAMO" className="h-28 w-auto" />
          </Link>
        </div>

        {/* 🔍 Barra de búsqueda (Desktop) */}
        <form
          onSubmit={handleSearch}
          className="hidden lg:flex items-center bg-gray-100 rounded-full px-3 py-1 focus-within:ring-2 focus-within:ring-[#EE66A2] transition-all duration-200 w-64"
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

        {/* Desktop Links + Login Icon */}
        <div className="hidden lg:flex items-center flex-1 justify-between ml-8">
          <nav className="flex items-center space-x-2 text-gray-700 font-bold text-sm font-CeraRoundProBlack">
            {links.map((link) => (
              <div
                key={link.name}
                className={`rounded-md px-3 py-2 shadow-sm flex items-center ${getTabStyle(link.name)}`}
              >
                <a
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="flex items-center font-black text-sm"
                >
                  {link.name}
                  {link.icon && <span className="ml-2">{link.icon}</span>}
                </a>
              </div>
            ))}
          </nav>

          {/* 🔐 Ícono de inicio de sesión */}
          <Link
            to="/login"
            className="text-[#EE66A2] hover:text-pink-500 transition ml-auto pl-4"
            title="Iniciar sesión"
          >
            <FaUser size={26} />
          </Link>
        </div>

        {/* Botón menú móvil */}
        <button
          className="lg:hidden text-gray-700 focus:outline-none"
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
          <img src="/img/Logo_G.png" alt="GEROLAMO" className="h-20 w-auto" />
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
            <li
              key={link.name}
              className={`rounded-md px-4 py-2 shadow-sm ${getTabStyle(link.name)} transition-transform duration-300 hover:translate-x-2 lg:hover:translate-x-0`}
            >
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="flex items-center text-gray-700 font-black"
              >
                {link.name}
                {link.icon && <span className="ml-2">{link.icon}</span>}
              </a>
            </li>
          ))}

          {/* 🔐 Ícono + texto de inicio de sesión (móvil) */}
          <li className="rounded-md px-4 py-2 shadow-sm bg-[#FCE4EC] border-l-4 border-[#EE66A2] hover:border-pink-500 transition-all duration-300 hover:scale-[1.02] hover:translate-x-2 lg:hover:translate-x-0">
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="flex items-center text-[#EE66A2] hover:text-pink-500 font-black"
            >
              <FaUser size={20} className="mr-2" />
              Iniciar sesión
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
