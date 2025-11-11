import { motion } from 'framer-motion';

export default function ProgressBar({ step }) {
  const totalSteps = 5;
  const percentage = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full max-w-xl mx-auto mb-6">
      <div className="flex justify-between text-sm text-gray-600 mb-1 px-1">
        <span>Paso {step} de {totalSteps}</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className="bg-orange-500 h-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </div>
  );
}
