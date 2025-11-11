import { motion } from 'framer-motion';

export default function Step3ActivityLifestage({ formData, setFormData, nextStep, prevStep }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-semibold mb-4 text-orange-600">Paso 3: Actividad y etapa de vida</h2>

      {/* Nivel de actividad */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Nivel de actividad</label>
        <select
          name="activity"
          value={formData.activity || ''}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
        >
          <option value="">Selecciona</option>
          <option value="low">Baja</option>
          <option value="moderate">Moderada</option>
          <option value="high">Alta</option>
        </select>
      </div>

      {/* Etapa de vida */}
      <div className="mb-6">
        <label className="block mb-1 font-medium">Etapa de vida</label>
        <select
          name="lifestage"
          value={formData.lifestage || ''}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
        >
          <option value="">Selecciona</option>
          <option value="puppy">Cachorro</option>
          <option value="adult">Adulto</option>
          <option value="senior">Senior</option>
          <option value="gestation">Gestación/Lactancia</option>
        </select>
      </div>

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
          Siguiente
        </button>
      </div>
    </motion.div>
  );
}
