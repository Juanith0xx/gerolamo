export default function StepTracker({ step, petName = "tu mascota" }) {
  const steps = [
    { title: `Los detalles de ${petName}`, label: "PASO 1" },
    { title: "Tamaño y peso", label: "PASO 2" },
    { title: "Lifestage y Actividad", label: "PASO 3" },
    { title: "Alimentos", label: "PASO 4" },
  ];

  return (
    <div className="flex flex-col items-center mb-10 w-full">
      <div className="flex justify-center items-center w-full max-w-4xl">
        {steps.map((s, index) => {
          const current = index + 1;
          const isActive = step === current;
          const isCompleted = step > current;

          return (
            <div key={index} className="flex flex-col items-center w-full relative">
              {/* Línea conectora */}
              {index !== 0 && (
                <div
                  className={`absolute top-4 left-[-50%] w-full h-[8px] ${
                    isCompleted ? "bg-[#417ABD]" : "bg-gray-300"
                  }`}
                ></div>
              )}

              {/* Círculo del paso */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full z-10 transition-all duration-300 ${
                  isActive
                    ? "bg-[#EE66A2] text-white"
                    : isCompleted
                    ? "bg-[#417ABD] text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {current}
              </div>

              {/* Texto del paso */}
              <div className="flex flex-col items-center mt-2 text-center ">
                <span
                  className={`text-xs uppercase font-semibold font-CeraRoundProLight tracking-wide ${
                    isActive ? "text-[#EE66A2]" : "text-gray-500"
                  }`}
                >
                  {s.label}
                </span>
                <span
                  className={`text-sm font-semibold font-CeraRoundProLight ${
                    isActive ? "text-[#EE66A2]" : "text-gray-700"
                  }`}
                >
                  {s.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
