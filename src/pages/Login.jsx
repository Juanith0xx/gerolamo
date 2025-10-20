import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.msg || "Error al iniciar sesión");
      } else {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        console.log("✅ Login exitoso:", data.user);

        // Redirigir según rol
        if (data.user.rol === "admin") {
          navigate("/dashboard");
        } else {
          navigate("/"); // usuario normal
        }
      }
    } catch (err) {
      setError("Error del servidor");
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto mt-30 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Iniciar Sesión</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleLogin} className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-2 hover:bg-blue-600"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
