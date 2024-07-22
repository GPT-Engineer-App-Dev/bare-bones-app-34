import { NavLink } from "react-router-dom";
import { navItems } from "@/nav-items";

export const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-xl font-bold text-gray-800">
              Your App
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium ${
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-700 hover:bg-gray-200"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};