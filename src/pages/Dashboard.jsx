import { useEffect, useState } from "react";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token"); // tu token JWT

  // Traer posts pendientes del backend
  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await console.log("Enviando:", { email, password });
 fetch("http://localhost:5000/api/posts/pending", {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Error al obtener posts");
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Aprobar un post
  const approvePost = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/posts/approve/${id}`, {
        method: "PATCH",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Error al aprobar post");
      // Actualizar la lista sin recargar
      setPosts(posts.filter((post) => post._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  // Rechazar un post
  const rejectPost = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/posts/reject/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Error al rechazar post");
      setPosts(posts.filter((post) => post._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="p-4">Cargando posts...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard: Aprobación de Posts</h2>
      {posts.length === 0 ? (
        <p>No hay posts pendientes.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post._id} className="border p-4 rounded shadow flex justify-between items-center">
              <div>
                <h3 className="font-bold">{post.title}</h3>
                <p className="text-gray-600">{post.content}</p>
                <p className="text-sm text-gray-400">Autor: {post.author}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => approvePost(post._id)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  Aprobar
                </button>
                <button
                  onClick={() => rejectPost(post._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Rechazar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;
