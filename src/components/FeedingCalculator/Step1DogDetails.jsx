import { motion } from "framer-motion";
import { useState } from "react";
import { FaBone, FaMars, FaVenus } from "react-icons/fa";
import { GiCat } from "react-icons/gi";
import { TbCat } from "react-icons/tb";

export default function Step1PetDetails({ formData, setFormData, nextStep }) {
  const [selectedType, setSelectedType] = useState(formData.type || "");
  const [selectedGender, setSelectedGender] = useState(formData.gender || "");

  const handleSelectType = (type) => {
    setSelectedType(type);
    setFormData((prev) => ({ ...prev, type, breed: "" }));
  };

  const handleSelectGender = (gender) => {
    setSelectedGender(gender);
    setFormData((prev) => ({ ...prev, gender }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const dogBreeds = ["Labrador", "Poodle", "Bulldog", "Pastor Alemán", "Beagle"];
  const catBreeds = ["Persa", "Siames", "Bengala", "Maine Coon", "Esfinge"];
  const breeds = selectedType === "dog" ? dogBreeds : selectedType === "cat" ? catBreeds : [];

  const hasName = formData.name && formData.name !== "";

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md max-w-3xl w-full mx-auto font-ceraroundregular"
    >
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#EE66A2] text-center">
        Detalles de tu Mascota
      </h2>

      {/* Tipo de mascota */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-center">Tipo de mascota</label>
        <div className="flex justify-around items-center gap-2 sm:gap-4 flex-wrap">
          {/* Perro */}
          <div
            onClick={() => handleSelectType("dog")}
            className="flex flex-col items-center cursor-pointer select-none"
          >
            <motion.div
              animate={{
                backgroundColor: selectedType === "dog" ? "#417ABD" : "#e5e7eb",
                scale: selectedType === "dog" ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-full shadow-md mb-2"
            >
              <FaBone
                className={`text-2xl sm:text-3xl ${selectedType === "dog" ? "text-white" : "text-gray-500"}`}
              />
            </motion.div>
            <span className={`font-medium ${selectedType === "dog" ? "text-[#417ABD]" : "text-gray-700"}`}>
              Perrito
            </span>
          </div>

          {/* Gato */}
          <div
            onClick={() => handleSelectType("cat")}
            className="flex flex-col items-center cursor-pointer select-none"
          >
            <motion.div
              animate={{
                backgroundColor: selectedType === "cat" ? "#F472B6" : "#e5e7eb",
                scale: selectedType === "cat" ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-full shadow-md mb-2"
            >
              <TbCat
                className={`text-2xl sm:text-3xl ${selectedType === "cat" ? "text-white" : "text-gray-500"}`}
              />
            </motion.div>
            <span className={`font-medium ${selectedType === "cat" ? "text-[#F472B6]" : "text-gray-700"}`}>
              Gatito
            </span>
          </div>
        </div>
      </div>

      {/* Nombre con efecto flotante */}
      <div className="relative mb-4 w-full">
        <motion.label
          htmlFor="name"
          className="absolute left-3 sm:left-4 text-gray-500 pointer-events-none bg-white px-1"
          animate={{
            y: hasName ? -10 : 12,
            scale: hasName ? 0.85 : 1,
            color: hasName ? "#F472B6" : "#9CA3AF",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          ¿Cuál es el nombre de tu mascota?
        </motion.label>
        <motion.input
          type="text"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          whileFocus={{
            scale: 1.02,
            boxShadow: "0 0 0 3px rgba(245, 114, 182, 0.3)",
            borderColor: "#F472B6",
          }}
          transition={{ type: "spring", stiffness: 300 }}
          className="w-full border px-3 sm:px-4 py-2 sm:py-3 rounded-md font-ceraroundregular outline-none"
        />
      </div>

      {/* Raza */}
      {selectedType && (
        <div className="mb-4">
          <label className="block mb-2 font-medium font-CeraRoundProRegular">Raza</label>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {breeds.map((breed) => {
              const isSelected = formData.breed === breed;
              return (
                <motion.div
                  key={breed}
                  onClick={() => handleChange({ target: { name: "breed", value: breed } })}
                  className="cursor-pointer px-3 sm:px-4 py-2 rounded-full shadow-md select-none font-ceraroundregular"
                  animate={{
                    backgroundColor: isSelected ? "#F472B6" : "#e5e7eb",
                    color: isSelected ? "#fff" : "#374151",
                    scale: isSelected ? 1.05 : 1,
                    fontWeight: isSelected ? 700 : 400,
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {breed}
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

      {/* Género */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-center">Género</label>
        <div className="flex justify-around items-center gap-2 sm:gap-4 flex-wrap">
          {/* Macho */}
          <div
            onClick={() => handleSelectGender("male")}
            className="flex flex-col items-center cursor-pointer select-none"
          >
            <motion.div
              animate={{
                backgroundColor: selectedGender === "male" ? "#417ABD" : "#e5e7eb",
                scale: selectedGender === "male" ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-full shadow-md mb-2"
            >
              <FaMars
                className={`text-2xl sm:text-3xl ${selectedGender === "male" ? "text-white" : "text-gray-500"}`}
              />
            </motion.div>
            <span className={`font-medium ${selectedGender === "male" ? "text-[#417ABD]" : "text-gray-700"}`}>
              Macho
            </span>
          </div>

          {/* Hembra */}
          <div
            onClick={() => handleSelectGender("female")}
            className="flex flex-col items-center cursor-pointer select-none"
          >
            <motion.div
              animate={{
                backgroundColor: selectedGender === "female" ? "#F472B6" : "#e5e7eb",
                scale: selectedGender === "female" ? 1.1 : 1,
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 rounded-full shadow-md mb-2"
            >
              <FaVenus
                className={`text-2xl sm:text-3xl ${selectedGender === "female" ? "text-white" : "text-gray-500"}`}
              />
            </motion.div>
            <span className={`font-medium ${selectedGender === "female" ? "text-[#F472B6]" : "text-gray-700"}`}>
              Hembra
            </span>
          </div>
        </div>
      </div>

      {/* Botón siguiente */}
      <button
        onClick={nextStep}
        className="bg-[#F472B6] text-white font-medium items-center px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-ceraroundregular block mx-auto"
      >
        Siguiente
      </button>
    </motion.div>
  );
}
