import { motion } from 'framer-motion';

export default function Step2SizeWeight({ formData, setFormData, nextStep, prevStep }) {
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
      <h2 className="text-2xl font-semibold mb-4 text-orange-600">Paso 2: Tamaño y peso objetivo</h2>

      {/* Tamaño estimado */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Tamaño estimado</label>
        <select
          name="size"
          value={formData.size || ''}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
        >
          <option value="">Selecciona</option>
          <option value="small">Pequeño</option>
          <option value="medium">Mediano</option>
          <option value="large">Grande</option>
        </select>
      </div>

      {/* Peso objetivo */}
      <div className="mb-6">
        <label className="block mb-1 font-medium">Peso objetivo (kg)</label>
        <input
          type="number"
          name="targetWeight"
          value={formData.targetWeight || ''}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
          min="0"
          step="0.1"
        />
        <p className="text-sm text-gray-500 mt-1">Opcional: solo si estás buscando ajustar el peso.</p>
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
