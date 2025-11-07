import React from "react";

const Home = () => {
  return (
    <div
      className="
        relative w-full overflow-hidden
        flex flex-col items-center justify-center
        bg-cover bg-center bg-no-repeat
        mt-14 sm:mt-20 md:mt-32
        h-[26rem] sm:h-[32rem] md:h-[40rem] lg:h-[44rem]
      "
      style={{
        backgroundImage: "url('/Dalma.png')",
      }}
    >
      {/* Contenedor del texto */}
      <div
        className="
          absolute text-white font-bold z-10
          flex flex-col md:flex-row items-center justify-between
          gap-6 sm:gap-8 md:gap-12
          top-[30%] left-[5%] right-[5%]
          text-center md:text-left
        "
      >
        {/* Texto principal */}
        <div className="flex flex-col items-center md:items-center">
          {/* Etiquetas superiores */}
          <div
            className="
              flex flex-col sm:flex-row gap-3 sm:gap-6 mb-4
              justify-center md:justify-start
            "
          >
            <span
              className="
                bg-[#EE66A2] px-3 sm:px-4 py-1 rounded-md font-medium
                text-sm sm:text-base md:text-lg
                mt-12
              "
            >
              NUEVA FÓRMULA
            </span>

            <span
              className="
                font-CeraRoundProRegular
                text-xs sm:text-sm md:text-base lg:text-lg
                mt-13
              "
            >
              Renal | Hepat | Gastro | Derma
            </span>
          </div>

          {/* Título */}
          <h2
            className="
              font-CeraRoundProBlack font-extrabold leading-tight
              text-3xl sm:text-4xl md:text-4xl lg:text-6xl
              max-w-[90%] md:max-w-[80%]
              whitespace-nowrap
              ml-50
              
            "
          >
            Prescripción Veterinaria
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
