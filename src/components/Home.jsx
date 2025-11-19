import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const images = [
    "/img/carrusel/imagen1.png",
    "/img/carrusel/imagen2.png",
    "/img/carrusel/imagen3.png",
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="
        relative w-full overflow-hidden
        flex flex-col items-center justify-center
        mt-14 sm:mt-20 md:mt-28
        h-[20rem] sm:h-[32rem] md:h-[40rem] lg:h-[44rem]
      "
    >
      {/* Fondo animado */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className={`absolute inset-0 bg-no-repeat bg-center bg-cover`}
          style={{
            backgroundImage: `url('${images[currentImage]}')`,
            backgroundPosition:
              currentImage === 2
                ? window.innerWidth < 640
                  ? "center top"
                  : "center 40%"
                : "center 50%",
          }}
        />
      </AnimatePresence>

      {/* Contenidos por imagen */}
      <AnimatePresence mode="wait">
        {/* Imagen 1 */}
        {currentImage === 0 && (
  <>
    {/* Escritorio */}
    <motion.div
      key="texto1-desktop"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute text-white font-bold z-10 flex-col items-start justify-center gap-4 sm:gap-6 px-6 sm:px-10 md:px-16 top-[25%] left-[8%] md:top-[10%] text-left hidden sm:flex"
    >
      <div className="flex flex-col items-start mt-50">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-4">
          <span className="bg-[#EE66A2] px-3 sm:px-4 py-1 rounded-md font-medium text-xs sm:text-sm md:text-base">
            NUEVA FÓRMULA
          </span>
          <span className="font-CeraRoundProRegular text-[0.7rem] sm:text-sm md:text-base lg:text-lg">
            Renal | Hepat | Gastro | Derma
          </span>
        </div>
        <h2 className="font-CeraRoundProBlack font-extrabold leading-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl max-w-[90%] md:max-w-[70%] whitespace-nowrap">
          Prescripción Veterinaria
        </h2>
      </div>
    </motion.div>

    {/* Móvil*/}
    <motion.div
      key="texto1-mobile"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute z-30 text-white text-center flex flex-col items-center justify-center gap-4 px-6 top-[32%] sm:hidden"
    >
      <span className="bg-[#EE66A2] px-3 py-1 rounded-md font-medium text-sm">
        NUEVA FÓRMULA
      </span>
      <span className="font-CeraRoundProRegular font-bold text-sm">
        Renal | Hepat | Gastro | Derma
      </span>
      <h2 className="font-CeraRoundProBlack font-bold text-3xl leading-tight">
        Prescripción Veterinaria
      </h2>
    </motion.div>
  </>
)}
        {/* Imagen 2 */}
        {currentImage === 1 && (
  <>
    {/* Escritorio */}
    <motion.div
      key="botones2-desktop"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-4 px-1 hidden sm:flex"
    >
      {[
        "¿Qué es un SuperFood?",
        "SuperFood Prescripción",
        "SuperFood Mantención",
        "SuperFood Snack",
      ].map((text, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#EE66A2] text-white font-semibold font-CeraRoundProRegular text-sm sm:!text-xl md:text-lg w-[50%] sm:w-[100%] md:w-[40%] lg:w-[25%] px-6 py-6 rounded-full shadow-lg hover:opacity-90 transition-all duration-300"
        >
          {text}
        </motion.button>
      ))}
    </motion.div>

    {/* Móvil */}
    <motion.div
      key="botones2-mobile"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="absolute inset-0 flex flex-col items-center justify-center z-20 gap-2 px-6 sm:hidden top-[25%]"
    >
      {[
        "¿Qué es un SuperFood?",
        "SuperFood Prescripción",
        "SuperFood Mantención",
        "SuperFood Snack",
      ].map((text, index) => (
        <motion.button
          key={index}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#EE66A2] text-white font-semibold font-CeraRoundProRegular text-xs px-4 py-2 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 w-[65%]"
        >
          {text}
        </motion.button>
      ))}
    </motion.div>
  </>
)}

        {/* Imagen 3 — Escritorio */}
        {currentImage === 2 && (
  <>
    {/* Escritorio / Tablet */}
    <motion.div
      key="texto3-escritorio"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8 }}
      className="
        absolute text-white text-left z-20
        top-[79%] left-[7%]
        w-auto flex flex-col md:flex-row items-center md:items-start
        gap-4 md:gap-8
        hidden sm:flex
      "
    >
      <div>
        <h2 className="font-CeraRoundProBlack font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2">
          Guía de Alimentación.
        </h2>
        <p className="font-CeraRoundProRegular font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
          CALCULADORA DE ALIMENTACION MIXTA
        </p>
      </div>

      <Link to="/feeding-calculator">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            bg-[#417ABD]
            text-white font-semibold font-CeraRoundProRegular
            text-sm sm:text-lg md:text-xl
            px-8 py-4 rounded-full shadow-lg
            hover:opacity-90 transition-all duration-300
            w-[70%] sm:w-auto md:ml-6
          "
        >
          Ir a la Calculadora
        </motion.button>
      </Link>
    </motion.div>

    {/* Móvil*/}
    <motion.div
      key="texto3-mobile"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className="
        absolute z-30
        text-white text-center
        flex flex-col items-center justify-center
        gap-3 px-6
        top-[52%]  /* subí el texto respecto al original 62% */
        sm:hidden
      "
    >
      <h2 className="font-CeraRoundProBlack text-3xl leading-tight">
        Guía de Alimentación.
      </h2>

      <p className="font-CeraRoundProRegular font-bold text-sm">
        CALCULADORA DE ALIMENTACION MIXTA
      </p>

      <Link to="/feeding-calculator" className="w-full flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            bg-[#417ABD]
            text-white font-semibold font-CeraRoundProRegular
            text-sm  /* más pequeño que el original lg */
            px-3 py-2  /* más pequeño que px-8 py-4 */
            rounded-full shadow-lg
            hover:opacity-90 transition-all duration-300
            w-[70%]  /* ancho reducido */
          "
        >
          Ir a la Calculadora
        </motion.button>
      </Link>
    </motion.div>
  </>
)}
      </AnimatePresence>

      {/* Indicadores */}
      <div className="absolute bottom-4 sm:bottom-6 flex gap-2 sm:gap-3 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-white" : "bg-white/40"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Home;
