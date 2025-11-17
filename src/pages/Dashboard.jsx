import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [pendingPosts, setPendingPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [editPostId, setEditPostId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  const [activeSection, setActiveSection] = useState("dashboard"); // estado de sección activa

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // ---------------- FETCH ----------------
  const fetchPendingPosts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/posts/pending", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setPendingPosts(data);
    } catch {
      setError("Error cargando posts pendientes");
    }
  };

  const fetchAllPosts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/posts/approved", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setAllPosts(data);
    } catch {
      setError("Error cargando posts aprobados");
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setUsers(data);
    } catch {
      setError("Error cargando usuarios");
    }
  };

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      await fetchPendingPosts();
      await fetchAllPosts();
      await fetchUsers();
      setLoading(false);
    };
    load();
  }, []);

  // ---------------- ACCIONES ----------------
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

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
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
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

  // ---------------- RENDER ----------------
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* HEADER */}
<header className="w-full flex justify-between items-center px-8 bg-white shadow-md fixed top-0 z-50">
  
  {/* Logo */}
  <div className="hidden md:flex items-center gap-2">
    <img
      src="/img/Logo_G.png"
      alt="Gerolamo Logo"
      className="h-20 w-auto"
    />
  </div>

  {/* Avatar y logout */}
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-full bg-[#EE66A2] flex items-center justify-center shadow-md">
      <span className="text-white text-xl font-bold">A</span>
    </div>
    <button
      onClick={logout}
      className="px-4 py-2 bg-[#EE66A2] text-white font-ceraroundregular rounded-xl shadow hover:font-bold transition"
    >
      Cerrar sesión
    </button>
  </div>
</header>

      {/* CONTENEDOR */}
      <div className="flex flex-1 mt-24">

        {/* SIDEBAR */}
        <aside className="hidden md:block w-64 bg-gradient-to-b from-[#417ABD] to-[#D1DBE8] text-white p-8 rounded-r-3xl shadow-xl">

          <nav className="flex flex-col gap-6 text-lg font-medium">
            <p
              onClick={() => setActiveSection("dashboard")}
              className={`opacity-90 hover:opacity-100 cursor-pointer ${activeSection === "dashboard" ? "underline" : ""}`}
            >
              Dashboard
            </p>
            <p
              onClick={() => setActiveSection("posts")}
              className={`opacity-90 hover:opacity-100 cursor-pointer ${activeSection === "posts" ? "underline" : ""}`}
            >
              Posts
            </p>
            <p
              onClick={() => setActiveSection("users")}
              className={`opacity-90 hover:opacity-100 cursor-pointer ${activeSection === "users" ? "underline" : ""}`}
            >
              Usuarios
            </p>
          </nav>

        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 md:p-10">

          {/* Dashboard */}
          {activeSection === "dashboard" && (
  <>
    <h1 className="text-3xl font-bold font-ceraroundregular text-gray-800">Dashboard del Administrador</h1>
    <p className="text-gray-500 mt-1 font-ceraroundregular">Bienvenido al panel de control</p>

    {/* Estadísticas */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 font-ceraroundregular">
      <div className="bg-white shadow-md p-6 rounded-xl border border-gray-100">
        <h3 className="text-gray-600 text-sm">Posts totales</h3>
        <p className="text-3xl font-bold text-[#EE66A2]">{allPosts.length + pendingPosts.length}</p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-xl border border-gray-100">
        <h3 className="text-gray-600 text-sm">Pendientes</h3>
        <p className="text-3xl font-bold text-[#EE66A2]">{pendingPosts.length}</p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-xl border border-gray-100">
        <h3 className="text-gray-600 text-sm">Activos</h3>
        <p className="text-3xl font-bold text-[#EE66A2]">{allPosts.length}</p>
      </div>
    </div>

    {/* Todos los posts */}
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Todos los Posts</h2>
      <div className="grid gap-4">
        {[...pendingPosts, ...allPosts].map((post) => (
          <div key={post._id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition">
            <h3 className="font-bold text-lg text-gray-800">{post.title}</h3>
            <p className="text-gray-600 mt-1">{post.content}</p>
            <p className="text-sm text-gray-400 mt-2">
              Autor: {post.author} | Creado: {new Date(post.createdAt).toLocaleString()}
            </p>
            <div className="mt-4 flex gap-2">
              {pendingPosts.some(p => p._id === post._id) ? (
                <>
                  <button onClick={() => approvePost(post._id)} className="bg-green-500 text-white px-4 py-1 rounded-xl">✓</button>
                  <button onClick={() => rejectPost(post._id)} className="bg-red-500 text-white px-4 py-1 rounded-xl">✕</button>
                </>
              ) : (
                <>
                  <button onClick={() => startEdit(post)} className="bg-yellow-500 text-white px-4 py-1 rounded-xl">✎</button>
                  <button onClick={() => deletePost(post._id)} className="bg-red-500 text-white px-4 py-1 rounded-xl">🗑</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
)}

          {/* Posts */}
          {activeSection === "posts" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">

              {/* POSTS CREADOS (Aprobados) */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-700">Posts Aprobados</h2>
                <div className="grid gap-4">
                  {allPosts.map((post) => (
                    pendingPosts.some(p => p._id === post._id) ? null : (
                      <div key={post._id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition">
                        {editPostId === post._id ? (
                          <div className="flex flex-col gap-2">
                            <input
                              value={editTitle}
                              onChange={(e) => setEditTitle(e.target.value)}
                              className="border p-2 rounded-xl"
                            />
                            <textarea
                              value={editContent}
                              onChange={(e) => setEditContent(e.target.value)}
                              className="border p-2 rounded-xl"
                            />
                            <div className="flex gap-2">
                              <button onClick={saveEdit} className="bg-green-500 text-white px-4 py-2 rounded-xl">Guardar</button>
                              <button onClick={cancelEdit} className="bg-gray-400 text-white px-4 py-2 rounded-xl">Cancelar</button>
                            </div>
                          </div>
                        ) : (
                          <>
                            <h3 className="font-bold text-lg text-gray-800">{post.title}</h3>
                            <p className="text-gray-600 mt-1">{post.content}</p>
                            <p className="text-sm text-gray-400 mt-2">
                              Autor: {post.author} | Creado: {new Date(post.createdAt).toLocaleString()}
                            </p>
                            <div className="mt-4 flex gap-2">
                              <button onClick={() => startEdit(post)} className="bg-yellow-500 text-white px-4 py-1 rounded-xl">✎</button>
                              <button onClick={() => deletePost(post._id)} className="bg-red-500 text-white px-4 py-1 rounded-xl">🗑</button>
                            </div>
                          </>
                        )}
                      </div>
                    )
                  ))}
                </div>
              </div>

              {/* POSTS PENDIENTES */}
              <div>
                <h2 className="text-2xl font-bold mb-4 text-gray-700">Posts Pendientes</h2>
                <div className="grid gap-4">
                  {pendingPosts.map((post) => (
                    <div key={post._id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition">
                      <h3 className="font-bold text-lg text-gray-800">{post.title}</h3>
                      <p className="text-gray-600 mt-1">{post.content}</p>
                      <p className="text-sm text-gray-400 mt-2">
                        Autor: {post.author} | Creado: {new Date(post.createdAt).toLocaleString()}
                      </p>
                      <div className="mt-4 flex gap-2">
                        <button onClick={() => approvePost(post._id)} className="bg-green-500 text-white px-4 py-1 rounded-xl">✓</button>
                        <button onClick={() => rejectPost(post._id)} className="bg-red-500 text-white px-4 py-1 rounded-xl">✕</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Usuarios */}
          {activeSection === "users" && (
            <div className="mt-10">
              <h2 className="text-2xl font-bold mb-4 text-gray-700">Usuarios</h2>
              <div className="grid gap-4">
                {users.map((user) => (
                  <div key={user._id} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                    <p className="font-semibold text-gray-800">{user.nombre}</p>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="text-gray-500 text-sm">Teléfono: {user.telefono}</p>
                    <p className="text-gray-500 text-sm">Rol: {user.rol}</p>
                    <p className="text-gray-500 text-sm">
                      Registrado: {new Date(user.createdAt).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};

export default Dashboard;
