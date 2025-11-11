import { motion } from 'framer-motion';

export default function Step4FoodSelection({ formData, setFormData, nextStep, prevStep }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateFeed = () => {
    const weight = parseFloat(formData.weight);
    const activity = formData.activity;
    const lifestage = formData.lifestage;

    if (!weight || !activity || !lifestage) return null;

    let multiplier = 1;
    if (activity === 'low') multiplier = 0.8;
    if (activity === 'moderate') multiplier = 1.0;
    if (activity === 'high') multiplier = 1.2;

    if (lifestage === 'puppy') multiplier += 0.2;
    if (lifestage === 'senior') multiplier -= 0.1;
    if (lifestage === 'gestation') multiplier += 0.3;

    const base = weight * 0.03; // 3% del peso corporal
    return (base * multiplier).toFixed(2);
  };

  const recommendedAmount = calculateFeed();

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-4 text-orange-600">Paso 4: Selección de alimento</h2>

      {/* Tipo de alimento */}
      <div className="mb-6">
        <label className="block mb-1 font-medium">Tipo de alimento</label>
        <select
          name="foodType"
          value={formData.foodType || ''}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
        >
          <option value="">Selecciona</option>
          {formData.type === 'dog' ? (
            <>
              <option value="dry">Seco (croquetas)</option>
              <option value="wet">Húmedo (lata)</option>
              <option value="raw">Crudo (BARF)</option>
            </>
          ) : (
            <>
              <option value="dry">Seco</option>
              <option value="wet">Húmedo</option>
              <option value="raw">Crudo</option>
            </>
          )}
        </select>
      </div>

      {/* Resultado estimado */}
      {recommendedAmount && (
        <div className="bg-orange-100 border-l-4 border-orange-500 p-4 mb-6 rounded-md">
          <p className="text-orange-700 font-medium">
            Cantidad recomendada: <span className="font-bold">{recommendedAmount} kg</span> por día
          </p>
          <p className="text-sm text-gray-600 mt-1">Basado en peso, actividad y etapa de vida.</p>
        </div>
      )}

      {/* Navegación */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition"
        >
          Atrás
        </button>
        <button
          onClick={nextStep}
          className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
        >
          Ver resultado
        </button>
      </div>
    </motion.div>
  );
}
