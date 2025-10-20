import { useEffect, useState } from "react";

const Dashboard = () => {
  const [pendingPosts, setPendingPosts] = useState([]); // Posts nuevos pendientes
  const [allPosts, setAllPosts] = useState([]); // Todos los posts creados
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [editPostId, setEditPostId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const token = localStorage.getItem("token");

  // Obtener posts pendientes
  const fetchPendingPosts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/posts/pending", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setPendingPosts(data);
    } catch (err) {
      setError("Error cargando posts pendientes");
    }
  };

  // Obtener todos los posts (aprobados y pendientes)
  const fetchAllPosts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/posts/approved", {
        headers: { Authorization: `Bearer ${token}` }, // opcional si es público
      });
      const data = await res.json();
      setAllPosts(data);
    } catch (err) {
      setError("Error cargando todos los posts");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchPendingPosts();
      await fetchAllPosts();
      setLoading(false);
    };
    fetchData();
  }, []);

  // Aprobar y rechazar posts
  const approvePost = async (id) => {
    await fetch(`http://localhost:5000/api/posts/approve/${id}`, {
      method: "PATCH",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchPendingPosts();
    fetchAllPosts();
  };

  const rejectPost = async (id) => {
    await fetch(`http://localhost:5000/api/posts/reject/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchPendingPosts();
    fetchAllPosts();
  };

  // Editar posts existentes
  const startEdit = (post) => {
    setEditPostId(post._id);
    setEditTitle(post.title);
    setEditContent(post.content);
  };

  const cancelEdit = () => {
    setEditPostId(null);
    setEditTitle("");
    setEditContent("");
  };

  const saveEdit = async () => {
    await fetch(`http://localhost:5000/api/posts/${editPostId}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ title: editTitle, content: editContent }),
    });
    cancelEdit();
    fetchAllPosts();
  };

  const deletePost = async (id) => {
    await fetch(`http://localhost:5000/api/posts/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchAllPosts();
    fetchPendingPosts();
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-6 text-gray-800">Dashboard de Administración</h2>

      {loading && <p className="text-blue-500 text-lg">Cargando posts...</p>}
      {error && <p className="text-red-500 text-lg">{error}</p>}

      <div className="flex flex-col md:flex-row gap-6">
        {/* Lado izquierdo: posts existentes (editar/eliminar) */}
        <div className="flex-1">
          <h3 className="text-2xl font-semibold mb-4 mt-12">Posts Creados</h3>
          <div className="grid gap-4">
            {allPosts.length === 0 && <p className="text-gray-500">No hay posts existentes.</p>}
            {allPosts.map((post) => (
              <div
                key={post._id}
                className="relative bg-white shadow-lg rounded-xl p-5 hover:shadow-2xl transition-all border border-gray-200"
              >
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={() => startEdit(post)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded-full hover:bg-yellow-500"
                  >
                    ✎
                  </button>
                  <button
                    onClick={() => deletePost(post._id)}
                    className="bg-gray-600 text-white px-3 py-1 rounded-full hover:bg-gray-700"
                  >
                    🗑
                  </button>
                </div>

                {editPostId === post._id ? (
                  <div className="flex flex-col gap-2">
                    <input
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="border p-2 rounded"
                    />
                    <textarea
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="border p-2 rounded"
                    />
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={saveEdit}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                      >
                        Guardar
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">{post.title}</h4>
                    <p className="text-gray-700 mb-2">{post.content}</p>
                    <p className="text-sm text-gray-500">Autor: {post.author}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Lado derecho: posts pendientes (aprobar/rechazar) */}
        <div className="w-full md:w-96 mt-12">
          <h3 className="text-2xl font-semibold mb-4">Posts Pendientes</h3>
          <div className="grid gap-4">
            {pendingPosts.length === 0 && <p className="text-gray-500">No hay posts pendientes.</p>}
            {pendingPosts.map((post) => (
              <div
                key={post._id}
                className="relative bg-white shadow-lg rounded-xl p-5 hover:shadow-2xl transition-all border border-gray-200"
              >
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={() => approvePost(post._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600"
                  >
                    ✓
                  </button>
                  <button
                    onClick={() => rejectPost(post._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600"
                  >
                    ✕
                  </button>
                </div>

                <h4 className="font-bold text-lg text-gray-800 mb-1">{post.title}</h4>
                <p className="text-gray-700 mb-2">{post.content}</p>
                <p className="text-sm text-gray-500">Autor: {post.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

