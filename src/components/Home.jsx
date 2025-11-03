import React from "react";

// 🟣 Mancha decorativa visible en todas las vistas (ahora detrás del texto en móvil)
const Spot = () => (
  <>
    {/* Mancha principal (escritorio) */}
    <img
      src="/dalmatian-spot.svg"
      alt="Dalmatian spot"
      className="absolute text-[#88A7CC] hidden md:block z-0"
      style={{
        top: "-28%",
        left: "20%",
        transform: "rotate(0deg) scale(0.5)",
        opacity: 0.5,
      }}
    />

    {/* Mancha adaptada para móviles (detrás del texto) */}
    <img
      src="/dalmatian-spot.svg"
      alt="Dalmatian spot mobile"
      className="absolute md:hidden opacity-40 z-0"
      style={{
        top: "-10%",
        left: "50%",
        transform: "translateX(-50%) rotate(15deg) scale(0.3)",
      }}
    />
  </>
);

const Home = () => {
  return (
    <div
      className="
        relative w-full bg-[#417ABD] overflow-hidden mb-10
        h-[44rem]                /* Altura escritorio */
        max-md:h-[32rem]         /* Altura en tablets */
        max-sm:h-[26rem]         /* Altura más reducida en móviles */
        flex flex-col items-center justify-center
      "
    >
      {/* 🟣 Manchas decorativas visibles detrás del texto */}
      <Spot />

      {/* Contenedor del texto */}
      <div
        className="
          absolute top-[30%] left-[8%] flex items-center gap-10 text-white font-bold text-2xl z-10
          max-md:relative max-md:flex-col max-md:items-center max-md:justify-center 
          max-md:gap-4 max-md:top-0 max-md:left-0 max-md:text-center max-md:p-4
        "
      >
        {/* Texto principal */}
        <div className="w-full flex flex-col items-start max-md:items-center max-sm:mt-20 relative z-10">
          <div
            className="
              flex gap-6 mb-3 ml-20 
              max-md:ml-0 max-md:flex-col max-md:items-center max-md:gap-2
            "
          >
            <span
              className="
                bg-[#EE66A2] px-3 py-1 rounded-md font-medium text-base 
                max-md:text-sm max-sm:text-xs max-md:px-2 max-md:py-1
              "
            >
              NUEVA FÓRMULA
            </span>

            <span
              className="
                font-CeraRoundProRegular text-lg max-md:text-base max-sm:text-sm 
                max-md:text-center
              "
            >
              Renal | Hepat | Gastro | Derma
            </span>
          </div>

          <h2
            className="
              text-6xl font-bold font-CeraRoundProBlack leading-tight ml-20 
              max-md:ml-0 max-md:text-4xl max-sm:text-3xl 
              max-md:text-center max-md:leading-snug
            "
          >
            Prescripción Veterinaria
          </h2>
        </div>

        {/* Imagen solo en escritorio */}
        <img
          src="/dalmata.png"
          alt="dálmata"
          className="
            w-[350px] h-auto rounded-xl object-contain ml-65
            max-md:hidden
          "
        />
      </div>
    </div>
  );
};

export default Home;
