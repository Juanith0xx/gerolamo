// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { TbWorldCheck } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-[#EBBBE1] text-white font-CeraRoundProLight font-medium pt-10 pb-6 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Sección izquierda: Logo + descripción */}
        <div className="flex flex-col items-start">
          <img src="/img/Logo_GB.png" alt="GEROLAMO" className="h-22 mb-4" />
          <p className="text-base font-CeraRoundProLight leading-relaxed max-w-xs ml-2.5">
            Creamos una familia de productos elaborados con ingredientes de la más alta calidad nacional.
          </p>
        </div>

        {/* Sección central izquierda: Información */}
        <div className="md:pl-4">
          <h3 className="mt-5 text-white font-CeraRoundProBlack font-black text-lg mb-4 underline ">
            Información de contacto
          </h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-start gap-2">
              <FaLocationDot className="text-2xl text-[#88A7CC] mt-[2px]" />
              <div>
                <span className="font-bold font-CeraRoundProRegular">Dirección: </span>
                Laguna Sur Huingan Norte 9710, Bodega D21, Pudahuel, Santiago de Chile
              </div>
            </li>

            <li className="flex items-center gap-2 pt-2">
              <CiMail className=" font-black text-2xl text-[#88A7CC] mt-[2px]" />
              <div>
                <span className="font-bold font-CeraRoundProRegular">Email: </span>
                <a href="mailto:info@gerolamo.cl" className="hover:text-[#88A7CC]">
                  info@gerolamo.cl
                </a>
              </div>
            </li>

            <li className="flex items-center gap-2 pt-2">
              <TbWorldCheck className="text-xl text-[#88A7CC] mt-[2px]" />
              <div>
                <span className="font-bold font-CeraRoundProRegular">Sitio web: </span>
                <a
                  href="https://www.gerolamo.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#88A7CC]"
                >
                  www.gerolamo.cl
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Sección central derecha: Navegación */}
        <div className="md:pl-4">
          <h3 className="mt-5 text-white underline font-black text-lg mb-4">Navegación</h3>
          <ul className="text-sm space-y-2 mb-4">
            <li>
              <a
                href="#superfood"
                className="hover:text-[#88A7CC] font-CeraRoundProRegular font-medium hover:underline hover:font-bold text-lg"
              >
                Superfood
              </a>
            </li>
            <li>
              <a
                href="#prescripcion"
                className="hover:text-[#88A7CC] font-CeraRoundProRegular font-medium hover:underline hover:font-bold text-lg"
              >
                Prescripción
              </a>
            </li>
            <li>
              <a
                href="#mantencion"
                className="hover:text-[#88A7CC] font-CeraRoundProRegular font-medium hover:underline hover:font-bold text-lg"
              >
                Mantención
              </a>
            </li>
            <li>
              <a
                href="#snack"
                className="hover:text-[#88A7CC] font-CeraRoundProRegular font-medium hover:underline hover:font-bold text-lg"
              >
                Snack
              </a>
            </li>
            <li>
              <a
                href="#encuentranos"
                className="hover:text-[#88A7CC] font-CeraRoundProRegular font-medium hover:underline hover:font-bold text-lg"
              >
                Encuéntranos aquí
              </a>
            </li>
          </ul>
        </div>

        {/* Sección derecha: Distribuidor exclusivo */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="mt-5 text-white font-black text-xl mb-4 text-center md:text-left">
            Distribuidor Exclusivo
          </h3>
          <img
            src="/img/Logo_N.png"
            alt="Distribuidor Exclusivo"
            className="h-18 mb-4"
          />

          {/* Íconos de redes sociales */}
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1877F2] hover:text-3xl transition-colors text-xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E1306C] hover:text-3xl transition-colors text-xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#FF0000] hover:text-3xl transition-colors text-xl"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-black hover:text-3xl transition-colors text-xl"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t pt-4 text-center text-xs font-CeraRoundProLight text-white">
        © {new Date().getFullYear()} Gerolamo®. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
