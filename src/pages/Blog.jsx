import { useState, useEffect } from "react";

const categories = {
  salud: { label: "Salud Animal", color: "bg-green-400" },
  alimentacion: { label: "Alimentación", color: "bg-yellow-400" },
  comportamiento: { label: "Comportamiento", color: "bg-blue-400" },
  novedades: { label: "Novedades Veterinarias", color: "bg-purple-400" },
  casos: { label: "Casos Clínicos", color: "bg-pink-400" },
  tips: { label: "Tips & Consejos", color: "bg-orange-400" },
  especiales: { label: "Mascotas Especiales", color: "bg-indigo-400" },
  adopcion: { label: "Adopción y Bienestar Animal", color: "bg-red-400" },
};

const Blog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [toastMsg, setToastMsg] = useState("");
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState(""); // Filtro de categoría

  // Cargar posts aprobados desde el backend
  const fetchPosts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/posts/approved");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error("Error obteniendo posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category) {
      setToastMsg("Por favor selecciona una categoría");
      setTimeout(() => setToastMsg(""), 3000);
      return;
    }

    const author = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).nombre
      : "Invitado";

    const res = await fetch("http://localhost:5000/api/posts/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, author, category }),
    });

    const data = await res.json();
    setTitle("");
    setContent("");
    setCategory("");

    setToastMsg("Post creado correctamente y pendiente de aprobación");
    setTimeout(() => setToastMsg(""), 4000);

    fetchPosts();
  };

  const filteredPosts = filter
    ? posts.filter((post) => post.category === filter)
    : posts;

  return (
    <section className="p-6 md:p-12 mt-24 max-w-7xl mx-auto font-sans relative">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#EE66A2] mb-10 text-center">
        Blog Veterinario
      </h1>

      {/* Toast */}
      {toastMsg && (
        <div className="fixed top-8 right-8 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-out z-50">
          {toastMsg}
        </div>
      )}

      {/* Filtros de categoría */}
      <div className="flex justify-center mb-6 gap-4 flex-wrap">
        {Object.entries(categories).map(([key, { label, color }]) => (
          <button
            key={key}
            onClick={() => setFilter(filter === key ? "" : key)}
            className={`${color} text-white px-4 py-2 rounded-full font-semibold shadow-sm hover:opacity-90 transition`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Grid de posts */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.length === 0 && (
            <p className="text-gray-500 text-center col-span-full">
              No hay publicaciones aún.
            </p>
          )}
          {filteredPosts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-[1.02] border border-gray-100"
            >
              {post.category && (
                <span
                  className={`inline-block px-3 py-1 text-xs font-bold text-white rounded-full mb-3 ${
                    categories[post.category]?.color || "bg-gray-400"
                  }`}
                >
                  {categories[post.category]?.label || "Sin categoría"}
                </span>
              )}
              <h3 className="font-bold text-2xl text-gray-800 mb-3 hover:text-[#EE66A2] transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-gray-700 mb-4 line-clamp-6">{post.content}</p>
              <p className="text-sm text-gray-400 italic">Autor: {post.author}</p>
            </div>
          ))}
        </div>

        {/* Formulario de creación */}
        <div className="w-full md:w-96 bg-gradient-to-tr from-white to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-5 text-gray-800 text-center">
            Crear Post
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              required
            />
            <textarea
              placeholder="Contenido"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition h-32 resize-none"
              required
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition text-gray-700"
              required
            >
              <option value="">Selecciona categoría</option>
              {Object.entries(categories).map(([key, { label }]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              Publicar
            </button>
          </form>
        </div>
      </div>

      <style>
        {`
          @keyframes fade-in-out {
            0%, 100% { opacity: 0; transform: translateY(-20px); }
            10%, 90% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-out {
            animation: fade-in-out 4s ease forwards;
          }
        `}
      </style>
    </section>
  );
};

export default Blog;
