import React from 'react'

const Spot = () => (
  <img
    src="/dalmatian-spot.svg"
    alt="Dalmatian spot"
    className="absolute"
    style={{
      top: '-5%',       // posición vertical fija
      left: '-1%',      // posición horizontal fija
      transform: 'rotate(0deg) scale(1)', // rotación y escala fijas
      opacity: 0.5,
      filter: 'grayscale(100%) brightness(1.8) contrast(0.8)', // efecto gris suave
      filter: 'grayscale(100%) brightness(1.6) contrast(0.9)',
    }}
  />
)

const Home = () => {
  return (
    <div className="relative w-full h-[44rem] bg-[#417ABD] overflow-hidden mb-10">

      {/* Contenedor del texto + imagen */}
      <div className="absolute top-[30%] left-[8%] flex items-center gap-10 text-white font-bold text-2xl z-10">

        {/* Texto principal */}
        <div>
          <div className="flex gap-6 mb-3 ml-20">
            <span className="bg-[#EE66A2] px-3 py-1 rounded-md font-medium">
              NUEVA FÓRMULA
            </span>
            <span className="font-CeraRoundProRegular">
              Renal | Hepat | Gastro | Derma
            </span>
          </div>
          <h2 className="text-6xl font-bold font-CeraRoundProBlack leading-tight ml-20 ">
            Prescripción Veterinaria
          </h2>
        </div>

        {/* Imagen al lado derecho */}
        <img
          src="/dalmata.png" // ← reemplaza con tu imagen (por ejemplo: /dog.png)
          alt="dalmata"
          className="w-[350px] h-auto rounded-xl object-contain ml-65"
        />
      </div>

      {/* Mancha fija */}
      <Spot />
    </div>
  )
}

export default Home
