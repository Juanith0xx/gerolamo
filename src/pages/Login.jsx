import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }), // <- sin captcha
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.msg || "Error al iniciar sesión");
      } else {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        if (data.user.rol === "admin") navigate("/dashboard");
        else navigate("/");
      }
    } catch (err) {
      setError("Error del servidor");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center font-ceraroundregular mb-6 text-gray-800 dark:text-white">
          Iniciar Sesión
        </h2>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 text-center mb-4 font-semibold"
          >
            {error}
          </motion.p>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-600 dark:text-gray-300 mb-1 font-medium">
              Correo electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 p-3 rounded-xl bg-gray-50 dark:bg-gray-700 
              text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="ejemplo@gmail.com"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label className="text-gray-600 dark:text-gray-300 mb-1 font-medium">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 p-3 rounded-xl bg-gray-50 dark:bg-gray-700 
              text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Botón */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold
            shadow-lg hover:opacity-90 transition"
          >
            Iniciar Sesión
          </motion.button>
        </form>

        {/* Reset password + Crear cuenta */}
        <div className="mt-4 text-center flex justify-center gap-3">
          <Link
            to="/reset-password"
            className="text-sm text-blue-500 hover:text-blue-600 font-medium transition"
          >
            ¿Olvidaste tu contraseña?
          </Link>

          <span className="text-gray-500">|</span>

          <Link
            to="/register"
            className="text-sm text-green-500 hover:text-green-600 font-medium transition"
          >
            Crear cuenta
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
