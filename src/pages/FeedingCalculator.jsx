import { useState } from 'react';
import Step1DogDetails from '../components/FeedingCalculator/Step1DogDetails';
import Step2SizeWeight from '../components/FeedingCalculator/Step2SizeWeight';
import Step3ActivityLifestage from '../components/FeedingCalculator/Step3ActivityLifestage';
import Step4FoodSelection from '../components/FeedingCalculator/Step4FoodSelection';
import ResultCard from '../components/FeedingCalculator/ResultCard';
import StepTracker from '../components/FeedingCalculator/StepTracker';

export default function FeedingCalculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    breed: '',
    gender: '',
    weight: '',
    targetWeight: '',
    size: '',
    activity: '',
    lifestage: '',
    foodType: '',
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const restart = () => {
    setFormData({
      type: '',
      name: '',
      breed: '',
      gender: '',
      weight: '',
      targetWeight: '',
      size: '',
      activity: '',
      lifestage: '',
      foodType: '',
    });
    setStep(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 sm:px-8 pt-28">
      {/* 🔹 Tracker visual de pasos */}
      {step >= 1 && step <= 4 && (
        <StepTracker step={step} />
      )}

      {/* 🔹 Renderizado de pasos */}
      {step === 1 && (
        <Step1DogDetails
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <Step2SizeWeight
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )} 
      {step === 3 && (
        <Step3ActivityLifestage
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 4 && (
        <Step4FoodSelection
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 5 && (
        <ResultCard
          formData={formData}
          restart={restart}
        />
      )}
    </div>
  );
}
