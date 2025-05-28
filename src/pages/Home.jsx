import CourseCard from '../components/CourseCard';
import { Link } from 'react-router-dom';

const featuredCourses = [
  {
    id: 1,
    title: 'React para Iniciantes',
    description: 'Aprenda React do zero até avançado, com projetos práticos.',
    category: 'Frontend',
  },
  {
    id: 2,
    title: 'JavaScript Moderno',
    description: 'Domine as funcionalidades mais recentes do JavaScript.',
    category: 'Programação',
  },
  {
    id: 3,
    title: 'Node.js Completo',
    description: 'Crie APIs robustas e escaláveis usando Node.js.',
    category: 'Backend',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-16">
      {/* Banner */}
      <section className="mb-16 rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-16 shadow-lg">
        <h1 className="text-5xl font-extrabold max-w-3xl leading-tight mb-6">
          Aprenda Online com os Melhores Cursos de Tecnologia
        </h1>
        <p className="text-lg max-w-2xl mb-8 opacity-90">
          Cursos completos, atualizados e focados no mercado para você evoluir na carreira.
        </p>
        <Link
          to="/courses"
          className="inline-block bg-white text-indigo-700 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Ver Todos os Cursos
        </Link>
      </section>

      {/* Cursos em destaque */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Cursos em Destaque</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </section>
    </div>
  );
}
