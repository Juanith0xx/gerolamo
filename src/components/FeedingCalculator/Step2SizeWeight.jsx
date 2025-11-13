import { motion } from "framer-motion";
import { FaDog, FaPaw } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import { MdOutlinePets } from "react-icons/md";

export default function Step2SizeWeight({ formData, setFormData, nextStep, prevStep }) {
  const handleSelectSize = (size) => {
    setFormData((prev) => ({ ...prev, size }));
  };

  const handleSelectCondition = (condition) => {
    setFormData((prev) => ({ ...prev, condition }));
  };

  const conditions = [
    { id: "underweight", label: "Bajo peso", icon: "🐕‍🦺" },
    { id: "ideal", label: "Ideal", icon: "🐶" },
    { id: "overweight", label: "Sobrepeso", icon: "🐕" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md max-w-3xl w-full mx-auto font-ceraroundregular"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#EE66A2] text-center">
        Tamaño y peso objetivo
      </h2>

      {/* Tamaño estimado */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-center">
          Tamaño estimado
        </label>
        <div className="flex justify-around items-center gap-2 sm:gap-4 flex-wrap">
          {/* Pequeño */}
          <div
            onClick={() => handleSelectSize("small")}
            className="flex flex-col items-center cursor-pointer select-none"
          >
            <motion.div
              animate={{
                backgroundColor: formData.size === "small" ? "#F472B6" : "#e5e7eb",
                scale: formData.size === "small" ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-full shadow-md mb-2"
            >
              <FaPaw
                className={`text-2xl sm:text-3xl ${
                  formData.size === "small" ? "text-white" : "text-gray-500"
                }`}
              />
            </motion.div>
            <span
              className={`font-medium ${
                formData.size === "small" ? "text-[#F472B6]" : "text-gray-700"
              }`}
            >
              Pequeño
            </span>
          </div>

          {/* Mediano */}
          <div
            onClick={() => handleSelectSize("medium")}
            className="flex flex-col items-center cursor-pointer select-none"
          >
            <motion.div
              animate={{
                backgroundColor: formData.size === "medium" ? "#F472B6" : "#e5e7eb",
                scale: formData.size === "medium" ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-full shadow-md mb-2"
            >
              <GiSittingDog
                className={`text-2xl sm:text-3xl ${
                  formData.size === "medium" ? "text-white" : "text-gray-500"
                }`}
              />
            </motion.div>
            <span
              className={`font-medium ${
                formData.size === "medium" ? "text-[#F472B6]" : "text-gray-700"
              }`}
            >
              Mediano
            </span>
          </div>

          {/* Grande */}
          <div
            onClick={() => handleSelectSize("large")}
            className="flex flex-col items-center cursor-pointer select-none"
          >
            <motion.div
              animate={{
                backgroundColor: formData.size === "large" ? "#F472B6" : "#e5e7eb",
                scale: formData.size === "large" ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-full shadow-md mb-2"
            >
              <FaDog
                className={`text-2xl sm:text-3xl ${
                  formData.size === "large" ? "text-white" : "text-gray-500"
                }`}
              />
            </motion.div>
            <span
              className={`font-medium ${
                formData.size === "large" ? "text-[#F472B6]" : "text-gray-700"
              }`}
            >
              Grande
            </span>
          </div>
        </div>
      </div>

      {/* Condición corporal */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-center">
          Condición corporal
        </label>
        <div className="flex justify-around items-center gap-2 sm:gap-6 flex-wrap">
          {conditions.map((c) => (
            <div
              key={c.id}
              onClick={() => handleSelectCondition(c.id)}
              className="flex flex-col items-center cursor-pointer select-none"
            >
              <motion.div
                animate={{
                  backgroundColor:
                    formData.condition === c.id ? "#F472B6" : "#e5e7eb",
                  scale: formData.condition === c.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center w-14 sm:w-20 h-14 sm:h-20 rounded-full shadow-md mb-2"
              >
                <span
                  className={`text-3xl ${
                    formData.condition === c.id ? "text-white" : "text-gray-600"
                  }`}
                >
                  {c.icon}
                </span>
              </motion.div>
              <span
                className={`font-medium text-center ${
                  formData.condition === c.id ? "text-[#F472B6]" : "text-gray-700"
                }`}
              >
                {c.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Peso objetivo */}
      <div className="mb-6">
        <label className="block mb-1 font-medium text-gray-700 text-center">
          Peso objetivo (kg)
        </label>
        <input
          type="number"
          name="targetWeight"
          value={formData.targetWeight || ""}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, targetWeight: e.target.value }))
          }
          className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F472B6]"
          min="0"
          step="0.1"
        />
        <p className="text-sm text-gray-500 mt-1 text-center font-ceraroundregular">
          Opcional: solo si estás buscando ajustar el peso.
        </p>
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
