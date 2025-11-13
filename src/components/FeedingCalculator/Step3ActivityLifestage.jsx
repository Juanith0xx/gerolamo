import { motion } from "framer-motion";
import { FaRunning, FaBaby, FaDog, FaHeart, FaFemale } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { GiSittingDog } from "react-icons/gi";

export default function Step3ActivityLifestage({ formData, setFormData, nextStep, prevStep }) {
  const handleSelectActivity = (activity) => {
    setFormData((prev) => ({ ...prev, activity }));
  };

  const handleSelectLifestage = (lifestage) => {
    setFormData((prev) => ({ ...prev, lifestage }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md max-w-3xl w-full mx-auto font-ceraroundregular"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#EE66A2] text-center">
        Actividad y etapa de vida
      </h2>

      {/* Nivel de actividad */}
      <div className="mb-8">
        <label className="block mb-2 font-medium text-center text-gray-800">
          Nivel de actividad
        </label>
        <div className="flex justify-around items-center gap-2 sm:gap-4 flex-wrap">
          {[
            {
              key: "low",
              icon: <GiSittingDog />,
              label: "Baja",
            },
            {
              key: "moderate",
              icon: <MdOutlinePets />,
              label: "Moderada",
            },
            {
              key: "high",
              icon: <FaRunning />,
              label: "Alta",
            },
          ].map(({ key, icon, label }) => (
            <div
              key={key}
              onClick={() => handleSelectActivity(key)}
              className="flex flex-col items-center cursor-pointer select-none text-center max-w-[110px]"
            >
              <motion.div
                animate={{
                  backgroundColor: formData.activity === key ? "#F472B6" : "#e5e7eb",
                  scale: formData.activity === key ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center w-14 sm:w-20 h-14 sm:h-20 rounded-full shadow-md mb-2"
              >
                <div
                  className={`text-3xl sm:text-4xl ${
                    formData.activity === key ? "text-white" : "text-gray-500"
                  }`}
                >
                  {icon}
                </div>
              </motion.div>
              <span
                className={`font-medium ${
                  formData.activity === key ? "text-[#F472B6]" : "text-gray-700"
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Etapa de vida */}
      <div className="mb-8">
        <label className="block mb-2 font-medium text-center text-gray-800">
          Etapa de vida
        </label>
        <div className="flex justify-around items-center gap-2 sm:gap-4 flex-wrap">
          {[
            { key: "puppy", icon: <FaBaby />, label: "Cachorro" },
            { key: "adult", icon: <FaDog />, label: "Adulto" },
            { key: "senior", icon: <FaHeart />, label: "Senior" },
            { key: "gestation", icon: <FaFemale />, label: "Gestación / Lactancia" },
          ].map(({ key, icon, label }) => (
            <div
              key={key}
              onClick={() => handleSelectLifestage(key)}
              className="flex flex-col items-center cursor-pointer select-none text-center max-w-[110px]"
            >
              <motion.div
                animate={{
                  backgroundColor: formData.lifestage === key ? "#F472B6" : "#e5e7eb",
                  scale: formData.lifestage === key ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center w-14 sm:w-20 h-14 sm:h-20 rounded-full shadow-md mb-2"
              >
                <div
                  className={`text-3xl sm:text-4xl ${
                    formData.lifestage === key ? "text-white" : "text-gray-500"
                  }`}
                >
                  {icon}
                </div>
              </motion.div>
              <span
                className={`font-medium ${
                  formData.lifestage === key ? "text-[#F472B6]" : "text-gray-700"
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Navegación */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="bg-[#417ABD] text-white font-medium px-6 py-2 rounded-xl font-ceraroundregular"
        >
          Atrás
        </button>
        <button
          onClick={nextStep}
          className="bg-[#F472B6] text-white font-medium items-center px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-ceraroundregular"
        >
          Siguiente
        </button>
      </div>
    </motion.div>
  );
}
