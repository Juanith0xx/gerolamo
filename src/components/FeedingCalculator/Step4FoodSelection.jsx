import { motion } from "framer-motion";
import { GiPill, GiChickenLeg } from "react-icons/gi";
import { FaBone } from "react-icons/fa";

export default function Step4FoodSelection({ formData, setFormData, nextStep, prevStep }) {
  const handleSelectFoodType = (type) => {
    setFormData((prev) => ({ ...prev, foodType: type }));
  };

  const calculateFeed = () => {
    const weight = parseFloat(formData.weight);
    const activity = formData.activity;
    const lifestage = formData.lifestage;

    if (!weight || !activity || !lifestage) return null;

    let multiplier = 1;
    if (activity === "low") multiplier = 0.8;
    if (activity === "moderate") multiplier = 1.0;
    if (activity === "high") multiplier = 1.2;

    if (lifestage === "puppy") multiplier += 0.2;
    if (lifestage === "senior") multiplier -= 0.1;
    if (lifestage === "gestation") multiplier += 0.3;

    const base = weight * 0.03;
    return (base * multiplier).toFixed(2);
  };

  const recommendedAmount = calculateFeed();

  const foodOptions = [
    {
      key: "superfood_prescripcion",
      label: "Superfood Prescripción",
      icon: <GiPill />, // ícono de píldora
    },
    {
      key: "superfood_mantencion",
      label: "Superfood Mantención",
      icon: <GiChickenLeg />, // ícono de pollo
    },
    {
      key: "superfood_snack",
      label: "Superfood Snack",
      icon: <FaBone />, // ícono de huesito/galleta
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto font-ceraroundregular"
    >
      <h2 className="text-2xl font-bold mb-6 text-[#EE66A2] text-center">
        Selección de alimento
      </h2>

      {/* Tipo de alimento con íconos */}
      <div className="mb-8">
        <label className="block mb-3 font-medium text-center text-gray-800">
          Tipo de alimento
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 place-items-center">
          {foodOptions.map(({ key, label, icon }) => (
            <div
              key={key}
              onClick={() => handleSelectFoodType(key)}
              className="flex flex-col items-center cursor-pointer text-center"
            >
              <motion.div
                animate={{
                  backgroundColor: formData.foodType === key ? "#F472B6" : "#e5e7eb",
                  scale: formData.foodType === key ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-md mb-2"
              >
                <div
                  className={`text-4xl sm:text-5xl ${
                    formData.foodType === key ? "text-white" : "text-gray-500"
                  }`}
                >
                  {icon}
                </div>
              </motion.div>
              <span
                className={`text-sm sm:text-base font-medium ${
                  formData.foodType === key ? "text-[#F472B6]" : "text-gray-700"
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Resultado estimado */}
      {recommendedAmount && (
        <div className="bg-pink-100 border-l-4 border-[#F472B6] p-4 mb-6 rounded-md">
          <p className="text-[#F472B6] font-medium">
            Cantidad recomendada:{" "}
            <span className="font-bold">{recommendedAmount} kg</span> por día
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Basado en peso, actividad y etapa de vida.
          </p>
        </div>
      )}

      {/* Navegación */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="bg-[#417ABD] text-white font-medium px-6 py-2 rounded-xl hover:bg-[#34639b] transition"
        >
          Atrás
        </button>
        <button
          onClick={nextStep}
          className="bg-[#F472B6] text-white font-medium px-6 py-2 rounded-xl hover:bg-[#ec5d9b] transition"
        >
          Ver resultado
        </button>
      </div>
    </motion.div>
  );
}
