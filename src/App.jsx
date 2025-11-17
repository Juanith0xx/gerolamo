// src/App.jsx
import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import AdminLayout from "./layout/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import WhatsAppBubble from "./components/WhatsappAppBubble";

import Home from "./components/Home";
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import FeedingCalculator from "./pages/FeedingCalculator";

import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-ceraroundregular">
      <WhatsAppBubble />

      <Routes>
        {/* Layout público */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feeding-calculator" element={<FeedingCalculator />} />
          <Route path="/blog" element={<Blog />} /> {/* Blog público */}
        </Route>

        {/* Layout admin */}
        <Route
          element={
            <ProtectedRoute roles={["admin"]}>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
