import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-[#f8e9e9]">
      <Outlet />
    </div>
  );
}
