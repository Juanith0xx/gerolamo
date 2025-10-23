import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX, HiSearch } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";

// 🎨 Estilos por categoría tipo ficha clínica
const getTabStyle = (name) => {
  const base =
    "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-l-[6px] rounded-full px-4 py-2 shadow-sm text-center flex justify-center items-center";
  const styles = {
    "¿Qué es un SuperFood?": `${base} bg-white border-l-4 border-grey-400 text-[#417ABD] font-black font-CeraRoundProBlack`,
    "SuperFood Prescripción": `${base} bg-white border-l-4 border-grey-400 text-[#417ABD] font-black font-CeraRoundProBlack`,
    "SuperFood Nutrición": `${base} bg-white border-l-4 border-grey-400 text-[#417ABD] font-black font-CeraRoundProBlack`,
    "SuperFood Snack": `${base} bg-white border-l-4 border-grey-400 text-[#417ABD] font-black font-CeraRoundProBlack`,
    "Blog": `${base} bg-[#417ABD] text-white font-black font-CeraRoundProBlack   `,
    "Encuéntranos aquí": `${base} bg-[#EE66A2] border-l-4 border-[#EBBBE1] text-white font-black font-CeraRoundProBlack  `,
  };
  return styles[name] || `${base} bg-white border-l-4 border-gray-200 hover:border-gray-400`;   
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const links = [
    { name: "¿Qué es un SuperFood?", href: "#superfood" },
    { name: "SuperFood Prescripción", href: "#prescripcion" },
    { name: "SuperFood Nutrición", href: "#nutricion" },
    { name: "SuperFood Snack", href: "#snack" },
    { name: "Blog", href: "/blog" },
    {
      name: "Encuéntranos aquí",
      href: "#encuentranos",
    },
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
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-4">
        {/* Desktop layout */}
        <div className="hidden lg:flex items-start justify-between mb-4">
          {/* Logo + Buscador alineados verticalmente a la izquierda */}
          <div className="flex flex-col w-64">
            <Link to="/">
              <img src="/img/Logo_G.png" alt="GEROLAMO" className="h-28 w-auto" />
            </Link>
            <form
              onSubmit={handleSearch}
              className="mt-1 flex items-center bg-gray-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-[#EE66A2]"
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
          </div>

          {/* Tabs dentro de óvalo azul */}
          <div className="bg-[#417ABD] rounded-full px-6 py-4 mt-12 shadow-inner">
            <nav className="flex items-center space-x-2 text-gray-700 font-bold text-sm font-CeraRoundProBlack">
              {links.map((link) => (
                <div key={link.name} className={getTabStyle(link.name)}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="flex items-center font-black text-sm"
                  >
                    {link.name}
                    {link.icon ? (
                      <span className="ml-1 ">{link.icon}</span>
                    ) : (
                      <span className="ml-0 invisible">icon</span>
                    )}
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Botón menú móvil */}
        <div className="lg:hidden flex justify-end mt-4">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
