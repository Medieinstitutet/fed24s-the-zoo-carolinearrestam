import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <header className="sticky top-0 z-50 bg-green-700 text-white py-4 shadow-md">
        <div className="ml-8">
          <Link to="/" className="hover:text-yellow-200 transition">
            <h2 className="text-2xl font-semibold tracking-wide">
              The Zoo Hub 🐾
            </h2>
          </Link>
        </div>
      </header>

      <main
        style={{
          background: "radial-gradient(circle, #d9f99d 0%, #4d7c0f 100%)",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
