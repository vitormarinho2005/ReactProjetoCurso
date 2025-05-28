import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-extrabold text-blue-700 hover:text-indigo-600 transition">
        EstudaJá
        </Link>

        <ul className="hidden md:flex space-x-8 font-semibold text-gray-700">
          <li>
            <Link to="/" className="hover:text-indigo-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/courses" className="hover:text-indigo-600 transition">
              Cursos
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-indigo-600 transition">
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-indigo-600 transition">
              Contato
            </Link>
          </li>
        </ul>

        {/* Mobile menu button (opcional) */}
        <div className="md:hidden">
          {/* Aqui poderia ir um botão hamburger para mobile */}
        </div>
      </div>
    </nav>
  );
}
