import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        h-[26rem] sm:h-[32rem] md:h-[40rem] lg:h-[44rem]
      "
    >
      {/*Fondo animado con Framer Motion */}
      <AnimatePresence mode="wait">
        <motion.div
  key={currentImage}
  initial={{ opacity: 0, scale: 1.1 }}
  animate={{
    opacity: 1,
    scale: currentImage === 2 ? 0.9 : 1,
  }}
  exit={{ opacity: 0, scale: 1.05 }}
  transition={{ duration: 1.2, ease: "easeInOut" }}
  className={`absolute inset-0 bg-cover bg-no-repeat ${
    currentImage === 0 ? 'bg-[center_50%]' :
    currentImage === 1 ? 'bg-[center_50%]' :
    'bg-[center_40%]'
  }`}
  style={{
    backgroundImage: `url('${images[currentImage]}')`,
  }}
/>

      </AnimatePresence>

      {/*Contenido específico para cada imagen */}
      <AnimatePresence mode="wait">
        {/* Imagen 1: texto alineado a la izquierda */}
        {currentImage === 0 && (
          <motion.div
            key="texto1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
              absolute text-white font-bold z-10
              flex flex-col items-start justify-center
              gap-4 sm:gap-6
              px-6 sm:px-10 md:px-16
              top-[25%] left-[8%] md:top-[10%]
              text-left
            "
          >
            <div className="flex flex-col items-start mt-50">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mb-4">
                <span
                  className="
                    bg-[#EE66A2] px-3 sm:px-4 py-1 rounded-md font-medium
                    text-xs sm:text-sm md:text-base
                  "
                >
                  NUEVA FÓRMULA
                </span>

                <span
                  className="
                    font-CeraRoundProRegular
                    text-[0.7rem] sm:text-sm md:text-base lg:text-lg
                  "
                >
                  Renal | Hepat | Gastro | Derma
                </span>
              </div>

              <h2
                className="
                  font-CeraRoundProBlack font-extrabold leading-tight
                  text-2xl sm:text-4xl md:text-5xl lg:text-6xl
                  max-w-[90%] md:max-w-[70%]
                  whitespace-nowrap
                "
              >
                Prescripción Veterinaria
              </h2>
            </div>
          </motion.div>
        )}

        {/* Imagen 2: solo botones con degradado */}
        {currentImage === 1 && (
          <motion.div
            key="botones2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="
              absolute inset-0 flex flex-col items-center justify-center
              z-20 gap-1 sm:gap-4 px-1
            "
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
                className="
                  bg-[#EE66A2]
                  text-white font-semibold font-CeraRoundProRegular
                  text-sm sm:!text-xl md:text-lg
                  w-[50%] sm:w-[100%] md:w-[40%] lg:w-[25%]
                  px-6 py-6 rounded-full shadow-lg
                  hover:opacity-90 tansition-all duration-300
                "
              >
                {text}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Imagen 3: vacío (puedes agregar contenido futuro) */}
        {currentImage === 2 && (
  <motion.div
    key="texto3"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -30 }}
    transition={{ duration: 0.8 }}
    className="absolute text-white text-left z-20 top-[78%] left-[7%] w-auto"
  >
    <h2 className="font-CeraRoundProBlack font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2">
      Guía de Alimentación.
    </h2>
    <p className="font-CeraRoundProRegular font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
      CALCULADORA DE ALIMENTACION MIXTA
    </p>
  </motion.div>
)}

      </AnimatePresence>

      {/*Indicadores del carrusel */}
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
