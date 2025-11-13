import { motion } from 'framer-motion';
import { GiCat, GiDogBowl, GiPill, GiChickenLeg, GiBabyBottle, GiHealthNormal, GiRunningShoe } from 'react-icons/gi';
import { FaMars, FaVenus, FaBone } from 'react-icons/fa';

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

  // Etiquetas legibles
  const activityLabels = { low: 'Baja', moderate: 'Moderada', high: 'Alta' };
  const lifestageLabels = { puppy: 'Cachorro', adult: 'Adulto', senior: 'Senior', gestation: 'Gestación' };
  const foodLabels = {
    superfood_prescripcion: 'Superfood Prescripción',
    superfood_mantencion: 'Superfood Mantención',
    superfood_snack: 'Superfood Snack',
  };

  const foodIcons = {
    superfood_prescripcion: <GiPill className="text-2xl text-[#F472B6]" />,
    superfood_mantencion: <GiChickenLeg className="text-2xl text-[#F472B6]" />,
    superfood_snack: <FaBone className="text-2xl text-[#F472B6]" />,
  };

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

  // Función para renderizar íconos dentro de círculo
  const renderIcon = (icon) => (
    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white shadow-md">
      {icon}
    </div>
  );

  // Ícono para tipo de mascota
  const petIcon = type === 'dog'
    ? renderIcon(<GiDogBowl className="text-2xl text-[#EE66A2]" />)
    : renderIcon(<GiCat className="text-2xl text-[#EE66A2]" />);

  // Ícono para etapa de vida
  let lifestageIcon;
  if (lifestage === 'puppy') lifestageIcon = renderIcon(<GiBabyBottle className="text-2xl text-yellow-500" />);
  else if (lifestage === 'senior') lifestageIcon = renderIcon(<GiHealthNormal className="text-2xl text-yellow-500" />);
  else lifestageIcon = renderIcon(<GiRunningShoe className="text-2xl text-yellow-500" />);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto font-ceraroundregular"
    >
      <h2 className="text-2xl font-bold text-[#EE66A2] mb-6 text-center">Resultado de alimentación</h2>

      <div className="space-y-4 text-gray-800">
        {/* Tipo de mascota */}
        <div className="flex items-center gap-3">
          {petIcon}
          <span className="text-2xl"><strong>Tipo:</strong> {type === 'dog' ? 'Perro' : 'Gato'}</span>
        </div>

        {/* Nombre y raza */}
        <div className="flex items-center gap-3">
          <span className="text-2xl"><strong>Nombre:</strong> {name}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl"><strong>Raza:</strong> {breed}</span>
        </div>

        {/* Género */}
        <div className="flex items-center gap-3">
          {gender === 'male' ? renderIcon(<FaMars className="text-2xl text-blue-500" />) : renderIcon(<FaVenus className="text-2xl text-pink-500" />)}
          <span className="text-2xl"><strong>Género:</strong> {gender === 'male' ? 'Macho' : 'Hembra'}</span>
        </div>

        {/* Peso */}
        <div className="flex items-center gap-6">
          <span className="text-2xl"><strong>Peso actual:</strong> {weight} kg</span>
          {targetWeight && <span className="text-2xl"><strong>Peso objetivo:</strong> {targetWeight} kg</span>}
        </div>

        {/* Tamaño */}
        <div className="flex items-center gap-3">
          <span className="text-2xl"><strong>Tamaño:</strong> {size}</span>
        </div>

        {/* Actividad */}
        <div className="flex items-center gap-3">
          {renderIcon(<GiRunningShoe className="text-2xl text-green-500" />)}
          <span className="text-2xl"><strong>Actividad:</strong> {activityLabels[activity]}</span>
        </div>

        {/* Etapa de vida */}
        <div className="flex items-center gap-3">
          {lifestageIcon}
          <span className="text-2xl"><strong>Etapa de vida:</strong> {lifestageLabels[lifestage]}</span>
        </div>

        {/* Tipo de alimento */}
        <div className="flex items-center gap-3">
          {foodType && renderIcon(foodIcons[foodType])}
          <span className="text-2xl"><strong>Tipo de alimento:</strong> {foodType && foodLabels[foodType]}</span>
        </div>
      </div>

      {/* Cantidad recomendada */}
      {recommended && (
        <div className="mt-6 bg-pink-100 border-l-4 border-[#F472B6] p-4 rounded-md">
          <p className="text-[#F472B6] font-medium text-2xl">
            Cantidad recomendada: <span className="font-bold">{recommended} kg</span> por día
          </p>
          <p className="text-sm text-gray-600 mt-1">Basado en los datos ingresados.</p>
        </div>
      )}

      {/* Botón de reinicio */}
      <div className="mt-6 text-center">
        <button
          onClick={restart}
          className="bg-[#F472B6] text-white font-medium items-center px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-ceraroundregular text-xl block mx-auto"
        >
          Calcular de nuevo
        </button>
      </div>
    </motion.div>
  );
}
