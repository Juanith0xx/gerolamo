import React from 'react'

const Spot = () => (
  <img
    src="/dalmatian-spot.svg"
    alt="Dalmatian spot"
    className="absolute max-md:hidden text-[#88A7CC]"
    style={{
      top: '-5%',
      left: '-1%',
      transform: 'rotate(0deg) scale(1)',
      opacity: 0.5,
    }}
  />
)

const Home = () => {
  return (
    <div
      className="
        relative w-full bg-[#417ABD] overflow-hidden mb-10
        h-[44rem] max-md:h-fit
      "
    >
      {/* Contenedor del texto + imagen */}
      <div
        className="
          absolute top-[30%] left-[8%] flex items-center gap-10 text-white font-bold text-2xl z-10
          max-md:relative max-md:flex-col max-md:top-0 max-md:left-0 max-md:gap-4 max-md:text-center max-md:p-6
        "
      >
        {/* Texto principal */}
        <div className="max-md:ml-0 w-full">
          <div className="flex gap-6 mb-3 ml-20 max-md:ml-0 max-md:flex-col max-md:items-center max-md:gap-2">
            <span className="bg-[#EE66A2] px-3 py-1 rounded-md font-medium text-base max-md:text-sm max-md:px-2 max-md:py-0.5">
              NUEVA FÓRMULA
            </span>
            <span className="font-CeraRoundProRegular text-lg max-md:text-base max-md:text-center">
              Renal | Hepat | Gastro | Derma
            </span>
          </div>

          <h2
            className="
              text-6xl font-bold font-CeraRoundProBlack leading-tight ml-20 
              max-md:ml-0 max-md:text-4xl max-sm:text-3xl max-md:text-center max-md:leading-snug
            "
          >
            Prescripción Veterinaria
          </h2>
        </div>

        {/* Imagen al lado derecho */}
        <img
          src="/dalmata.png"
          alt="dalmata"
          className="
            w-[350px] h-auto rounded-xl object-contain ml-65
            max-md:relative max-md:ml-56 max-md:w-[250px] max-sm:w-[140px] max-md:mx-auto max-md:mt-0 max-md:mb-0
          "
        />
      </div>

      {/* Mancha fija solo visible en escritorio */}
      <Spot />
    </div>
  )
}

export default Home
