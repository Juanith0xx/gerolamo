// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-ceraroundregular">
      {/* Barra de navegación fija */}
      <Navbar />

      {/* Contenido principal dinámico */}
      <main className="flex-grow">
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<Home />} />

          {/* Página de login */}
          <Route path="/login" element={<Login />} />

          {/* Blog: solo veterinario y admin */}
          <Route
            path="/blog"
            element={
              <ProtectedRoute roles={["veterinario", "admin"]}>
                <Blog />
              </ProtectedRoute>
            }
          />

          {/* Dashboard: solo admin */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute roles={["admin"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
