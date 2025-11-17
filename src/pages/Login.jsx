import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const navigate = useNavigate();
  const captchaRef = useRef(null);

  // Cargar script de Turnstile y renderizar captcha
  useEffect(() => {
    const loadTurnstile = () => {
      if (!window.turnstile || !captchaRef.current) return;

      window.turnstile.render(captchaRef.current, {
        sitekey: "0x4AAAAAACBZe5UfyE9icBw4", // <- reemplaza con tu sitekey
        callback: (token) => setCaptchaToken(token),
        theme: "light",
      });
    };

    if (!document.getElementById("cf-turnstile")) {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      script.id = "cf-turnstile";
      script.onload = loadTurnstile;
      document.body.appendChild(script);
    } else {
      loadTurnstile();
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!captchaToken) {
      setError("Por favor completa el captcha");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, captchaToken }),
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

          {/* Turnstile */}
          <div className="my-4" ref={captchaRef}></div>

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

        {/* Restablecer contraseña */}
        <div className="mt-4 text-center">
          <Link
            to="/reset-password"
            className="text-sm text-blue-500 hover:text-blue-600 font-medium transition"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
