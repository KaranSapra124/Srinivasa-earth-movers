import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

const AdminPanel = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className=" lg:flex-row h-screen flex  ">
       {/* Mobile Toggle Button */}
       <button
        className="lg:hidden w-fit p-4 text-white bg-gray-800"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "Close Menu" : "Open Menu"}
      </button>
        {/* Sidebar */}
        <aside
        className={`w-64 max-[600px]:absolute bg-gray-800 text-white transition-transform duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <h2 className="text-2xl p-4">Admin Panel</h2>
        <nav>
          <ul className="flex flex-col">
            <Link className="p-4 hover:bg-gray-700" to={"/admin"}>
              Dashboard
            </Link>
            <Link className="p-4 hover:bg-gray-700" to="/admin/add-studies">
              Case Studies
            </Link>
            <Link className="p-4 hover:bg-gray-700" to={"/admin/enquiries"}>
              Enquiries
            </Link>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100 overflow-auto">
        <Outlet />
      </main>
    

     
    </div>
  );
};

export default AdminPanel;
