import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX, HiSearch } from "react-icons/hi";
import { FaUser } from "react-icons/fa";

const getTabStyle = (name) => {
  const base =
    "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] hover:border-l-[6px] rounded-full px-6 py-2 shadow-sm flex items-center justify-center text-center w-fit gap-2";
  const styles = {
    "¿Qué es un SuperFood?": `${base} bg-white border-l-4 border-grey-400 text-[#417ABD] font-black font-CeraRoundProBlack`,
    "SuperFood Prescripción": `${base} bg-white border-l-4 border-grey-400 text-[#417ABD] font-black font-CeraRoundProBlack`,
    "SuperFood Mantención": `${base} bg-white border-l-4 border-grey-400 text-[#417ABD] font-black font-CeraRoundProBlack`,
    "SuperFood Snack": `${base} bg-white border-l-4 border-grey-400 text-[#417ABD] font-black font-CeraRoundProBlack`,
    "Blog": `${base} bg-[#417ABD] text-white font-black font-CeraRoundProBlack`,
    "Encuéntranos aquí": `${base} bg-[#EE66A2] border-l-4 border-[#EBBBE1] text-white font-black font-CeraRoundProBlack`,
  };
  return styles[name] || `${base} bg-white border-l-4 border-gray-200 hover:border-gray-400`;
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const links = [
    { name: "¿Qué es un SuperFood?", href: "#superfood" },
    { name: "SuperFood Prescripción", href: "#prescripcion" },
    { name: "SuperFood Mantención", href: "#mantencion" },
    { name: "SuperFood Snack", href: "#snack" },
    { name: "Blog", href: "/blog" },
    { name: "Encuéntranos aquí", href: "#encuentranos" },
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
      {/* MOVIDO A LA IZQUIERDA */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-4 ml-1">

        {/* Desktop layout */}
        <div className="hidden lg:flex items-center justify-between mb-4 gap-6">

          {/* Logo + Buscador */}
          <div className="flex items-center gap-12 flex-shrink-0">
            <Link to="/">
              <img src="/img/Logo_G.png" alt="GEROLAMO" className="h-32 w-auto" />
            </Link>

            <form
              onSubmit={handleSearch}
              className="flex items-center bg-gray-100 rounded-full px-4 py-2 
                         focus-within:ring-2 focus-within:ring-[#EE66A2] w-72"
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

          {/* Menú azul */}
          <div className="bg-[#417ABD] rounded-full px-18 py-4 shadow-inner flex justify-center items-center">
            <nav className="flex gap-x-4 text-gray-700 font-bold text-sm font-CeraRoundProBlack items-center">
              {links.map((link) => {
                if (link.name === "Encuéntranos aquí") {
                  return (
                    <div key={link.name} className="flex items-center gap-3">
                      <div className={getTabStyle(link.name)}>
                        {link.href.startsWith("/") ? (
                          <Link
                            to={link.href}
                            className="flex items-center justify-center font-black text-sm text-center"
                          >
                            {link.name}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.href)}
                            className="flex items-center justify-center font-black text-sm text-center"
                          >
                            {link.name}
                          </a>
                        )}
                      </div>
                      <Link
                        to="/login"
                        className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md cursor-pointer hover:bg-gray-100 overflow-hidden"
                      >
                        <FaUser className="text-[#417ABD] text-lg" />
                      </Link>
                    </div>
                  );
                } else {
                  return (
                    <div key={link.name} className={getTabStyle(link.name)}>
                      {link.href.startsWith("/") ? (
                        <Link
                          to={link.href}
                          className="flex items-center justify-center font-black text-sm text-center"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          onClick={(e) => handleScroll(e, link.href)}
                          className="flex items-center justify-center font-black text-sm text-center"
                        >
                          {link.name}
                        </a>
                      )}
                    </div>
                  );
                }
              })}
            </nav>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden flex items-center justify-between px-4">
          <Link to="/">
            <img src="/img/Logo_G.png" alt="GEROLAMO" className="h-32 w-auto" />
          </Link>
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <Link to="/">
            <img src="/img/Logo_G.png" alt="GEROLAMO" className="h-22 w-auto" />
          </Link>
          <button onClick={() => setOpen(false)} className="text-gray-700">
            <HiX size={24} />
          </button>
        </div>

        <Link
          to="/login"
          className="flex items-center gap-3 px-6 py-6 border-b cursor-pointer hover:bg-gray-100"
        >
          <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-md overflow-hidden">
            <FaUser className="text-[#417ABD] text-lg" />
          </div>
          <span className="font-bold text-[#417ABD] text-sm">Iniciar sesión</span>
        </Link>

        <form
          onSubmit={handleSearch}
          className="mt-4 mx-4 flex items-center bg-gray-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-[#EE66A2]"
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

        <nav className="flex flex-col space-y-2 px-4 py-6">
          {links.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.name}
                to={link.href}
                className="bg-[#417ABD] text-white rounded-full px-4 py-2 font-bold text-sm font-CeraRoundProBlack transition hover:bg-[#2f5f9e] flex justify-center items-center"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="bg-[#417ABD] text-white rounded-full px-4 py-2 font-bold text-sm font-CeraRoundProBlack transition hover:bg-[#2f5f9e] flex justify-center items-center"
              >
                {link.name}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
