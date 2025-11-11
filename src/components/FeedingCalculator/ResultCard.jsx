import { motion } from 'framer-motion';

export default function ResultCard({ formData, restart }) {
  const {
    type,
    name,
    breed,
    gender,
    weight,
    targetWeight,
    size,
    activity,
    lifestage,
    foodType,
  } = formData;

  const calculateFeed = () => {
    const w = parseFloat(weight);
    if (!w || !activity || !lifestage) return null;

    let multiplier = 1;
    if (activity === 'low') multiplier = 0.8;
    if (activity === 'moderate') multiplier = 1.0;
    if (activity === 'high') multiplier = 1.2;

    if (lifestage === 'puppy') multiplier += 0.2;
    if (lifestage === 'senior') multiplier -= 0.1;
    if (lifestage === 'gestation') multiplier += 0.3;

    const base = w * 0.03;
    return (base * multiplier).toFixed(2);
  };

  const recommended = calculateFeed();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-orange-600 mb-4">Resultado de alimentación</h2>

      <div className="space-y-2 text-gray-700">
        <p><strong>Tipo:</strong> {type === 'dog' ? 'Perro' : 'Gato'}</p>
        <p><strong>Nombre:</strong> {name}</p>
        <p><strong>Raza:</strong> {breed}</p>
        <p><strong>Género:</strong> {gender === 'male' ? 'Macho' : 'Hembra'}</p>
        <p><strong>Peso actual:</strong> {weight} kg</p>
        {targetWeight && <p><strong>Peso objetivo:</strong> {targetWeight} kg</p>}
        <p><strong>Tamaño:</strong> {size}</p>
        <p><strong>Actividad:</strong> {activity}</p>
        <p><strong>Etapa de vida:</strong> {lifestage}</p>
        <p><strong>Tipo de alimento:</strong> {foodType}</p>
      </div>

      {recommended && (
        <div className="mt-6 bg-orange-100 border-l-4 border-orange-500 p-4 rounded-md">
          <p className="text-orange-700 font-medium">
            Cantidad recomendada: <span className="font-bold">{recommended} kg</span> por día
          </p>
          <p className="text-sm text-gray-600 mt-1">Basado en los datos ingresados.</p>
        </div>
      )}

      <div className="mt-6 text-center">
        <button
          onClick={restart}
          className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
        >
          Calcular de nuevo
        </button>
      </div>
    </motion.div>
  );
}
