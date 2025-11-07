// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { TbWorldCheck } from "react-icons/tb";
import { LuPhoneCall } from "react-icons/lu";
import { IoIosMail } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#417ABD] text-white font-CeraRoundProLight font-medium pt-10 pb-6 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Sección izquierda: Logo + descripción */}
        <div className="flex flex-col items-start">
          <img src="/img/Logo_GB.png" alt="GEROLAMO" className="h-22 mb-4" />
          <p className="text-base font-CeraRoundProLight leading-relaxed max-w-xs ml-2.5">
            Creamos una familia de productos elaborados con ingredientes de la
            más alta calidad nacional.
          </p>
        </div>

        {/* Sección central izquierda: Información de contacto */}
        <div className="md:pl-4">
            <h3 className="mt-5 text-white font-CeraRoundProBlack font-black text-lg mb-4 underline">
              Información de contacto
          </h3>

          <ul className="text-sm space-y-3">
            {/* Dirección */}
            <li className="flex items-center gap-3">
              <div className="bg-white rounded-full p-2 flex items-center justify-center">
                <IoLocationOutline className="text-[#88A7CC] text-xl" />
              </div>
              <div className="text-white">
                <span className="font-bold font-CeraRoundProRegular">
                </span>
                Laguna Sur Huingan Norte 9710, Bodega D21, Pudahuel, Santiago de
                Chile
              </div>
            </li>

            {/* Email */}
            <li className="flex items-center gap-3">
              <div className="bg-white rounded-full p-2 flex items-center justify-center">
                <IoIosMail className="text-[#88A7CC] text-xl" />
              </div>
              <div>
                <span className="font-bold font-CeraRoundProRegular">
                </span>
                <a
                  href="mailto:info@gerolamo.cl"
                  className="hover:text-[#88A7CC]"
                >
                  info@gerolamo.cl
                </a>
              </div>
            </li>

            {/* Sitio web */}
            <li className="flex items-center gap-3">
              <div className="bg-white rounded-full p-2 flex items-center justify-center">
                <TbWorldCheck className="text-[#88A7CC] text-xl" />
              </div>
              <div>
                <span className="font-bold font-CeraRoundProRegular">
                </span>
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

            {/* Teléfono */}
            <li className="flex items-center gap-3">
              <div className="bg-white rounded-full p-2 flex items-center justify-center">
                <LuPhoneCall className="text-[#88A7CC] text-xl" />
              </div>
              <div>
                <span className="font-bold font-CeraRoundProRegular">
                </span>
                <a href="tel:+569XXXXXXX" className="hover:text-[#EE66A2]">
                  +569 XXXX XXXX
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Sección central derecha: Navegación */}
        <div className="md:pl-4">
          <h3 className="mt-5 text-white underline font-black text-lg mb-4">
            Navegación
          </h3>
          <ul className="text-sm space-y-2 mb-4">
            <li>
              <a
                href="#SuperFood"
                className="hover:text-[#EE66A2] font-CeraRoundProRegular font-medium hover:underline hover:font-bold text-lg"
              >
                SuperFood
              </a>
            </li>
            <li>
              <a
                href="#SuperFood_Prescripción"
                className="hover:text-[#EE66A2] font-CeraRoundProRegular font-medium hover:underline hover:font-bold text-lg"
              >
                SuperFood Prescripción
              </a>
            </li>
            <li>
              <a
                href="#SuperFood_Mantencion"
                className="hover:text-[#EE66A2] font-CeraRoundProRegular font-medium hover:underline hover:font-bold text-lg"
              >
                SuperFood Mantención
              </a>
            </li>
            <li>
              <a
                href="#SuperFood_Snack"
                className="hover:text-[#EE66A2] font-CeraRoundProRegular font-medium hover:underline hover:font-bold text-lg"
              >
                SuperFood Snack
              </a>
            </li>
            <li>
              <a
                href="#encuentranos"
                className="hover:text-[#EE66A2] font-CeraRoundProRegular font-medium hover:underline hover:font-bold text-lg"
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
            className="h-18 mb-4 invert brightness-0"
          />

          {/* Íconos de redes sociales */}
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#88A7CC] text-4xl  rounded-full bg-white p-4 hover:text-[#1877F2]"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#88A7CC] text-4xl rounded-full bg-white p-4 hover:text-[#E1306C]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#88A7CC] text-4xl rounded-full bg-white p-4 hover:text-[#FF0000]"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#88A7CC] text-4xl rounded-full bg-white p-4 hover:text-black"
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
