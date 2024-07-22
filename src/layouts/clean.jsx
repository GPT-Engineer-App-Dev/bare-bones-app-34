import { Outlet } from "react-router-dom";
import { NavBar } from "./_components/NavBar";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="bg-gray-100 py-4 text-center">
        <p className="text-sm text-gray-600">© 2024 Your Bare-Bones App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;