import { motion } from 'framer-motion';

export default function Step1PetDetails({ formData, setFormData, nextStep }) {
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
      <h2 className="text-2xl font-semibold mb-4 text-orange-600">Paso 1: Datos del animal</h2>

      {/* Tipo de mascota */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Tipo</label>
        <select
          name="type"
          value={formData.type || ''}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
        >
          <option value="">Selecciona</option>
          <option value="dog">Perro</option>
          <option value="cat">Gato</option>
        </select>
      </div>

      {/* Nombre */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Nombre</label>
        <input
          type="text"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
        />
      </div>

      {/* Raza */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Raza</label>
        <input
          type="text"
          name="breed"
          value={formData.breed || ''}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
        />
      </div>

      {/* Género */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">Género</label>
        <select
          name="gender"
          value={formData.gender || ''}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
        >
          <option value="">Selecciona</option>
          <option value="male">Macho</option>
          <option value="female">Hembra</option>
        </select>
      </div>

      {/* Peso actual */}
      <div className="mb-6">
        <label className="block mb-1 font-medium">Peso actual (kg)</label>
        <input
          type="number"
          name="weight"
          value={formData.weight || ''}
          onChange={handleChange}
          className="w-full border px-4 py-2 rounded-md"
          min="0"
          step="0.1"
        />
      </div>

      {/* Botón siguiente */}
      <button
        onClick={nextStep}
        className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
      >
        Siguiente
      </button>
    </motion.div>
  );
}
