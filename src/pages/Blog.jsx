import { useState, useEffect } from "react";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [msg, setMsg] = useState("");
  const [posts, setPosts] = useState([]);

  // Cargar posts aprobados desde el backend
  const fetchPosts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/posts/approved"); // Ruta para posts aprobados
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
    const author = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")).nombre
      : "Invitado";

    const res = await fetch("http://localhost:5000/api/posts/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, author }),
    });

    const data = await res.json();
    setMsg(data.msg);
    setTitle("");
    setContent("");

    // Opcional: refrescar posts si quieres que se vea inmediatamente
    fetchPosts();
  };

  return (
    <section className="p-8 mt-20 max-w-6xl mx-auto">
      <h1 className="text-3xl font-extrabold text-[#EE66A2] mb-6">Blog Veterinario</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Lado izquierdo: posts */}
        <div className="flex-1 grid gap-6">
          {posts.length === 0 && <p className="text-gray-500">No hay publicaciones aún.</p>}
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white shadow-lg rounded-xl p-5 hover:shadow-2xl transition-all border border-gray-200"
            >
              <h3 className="font-bold text-xl text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-700 mb-4">{post.content}</p>
              <p className="text-sm text-gray-500">Autor: {post.author}</p>
            </div>
          ))}
        </div>

        {/* Lado derecho: formulario de creación */}
        <div className="w-full md:w-96 bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Crear Post</h2>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <textarea
              placeholder="Contenido"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <button
              type="submit"
              className="bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
            >
              Publicar
            </button>
          </form>
          {msg && <p className="mt-2 text-green-500">{msg}</p>}
        </div>
      </div>
    </section>
  );
};

export default Blog;
