import { useParams, Link } from 'react-router-dom';

const fakeCourses = [
  {
    id: '1',
    title: 'React para Iniciantes',
    description:
      'Curso completo para aprender React do básico ao avançado, incluindo hooks, roteamento e mais.',
    category: 'Frontend',
    instructor: 'Ana Silva',
    modules: [
      'Introdução ao React',
      'JSX e Componentes',
      'State e Props',
      'Hooks Básicos',
      'React Router',
      'Projeto Final',
    ],
  },
  {
    id: '2',
    title: 'JavaScript Moderno',
    description:
      'Aprenda as funcionalidades mais modernas do JavaScript, incluindo ES6+, promises e async/await.',
    category: 'Programação',
    instructor: 'Carlos Pereira',
    modules: [
      'Variáveis e Tipos',
      'Funções e Arrow Functions',
      'Objetos e Arrays',
      'Promises e Async/Await',
      'Manipulação do DOM',
      'Projeto Prático',
    ],
  },
];

export default function CourseDetail() {
  const { id } = useParams();
  const course = fakeCourses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="container mx-auto px-6 py-24 text-center text-red-600">
        <h1 className="text-3xl font-bold mb-4">Curso não encontrado</h1>
        <Link
          to="/courses"
          className="inline-block text-indigo-700 font-semibold hover:underline"
        >
          Voltar para lista de cursos
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-6 text-indigo-700">{course.title}</h1>
      <p className="mb-6 text-gray-700 leading-relaxed">{course.description}</p>
      <p className="mb-6 text-sm font-semibold text-indigo-600 uppercase tracking-wider">
        Categoria: {course.category}
      </p>
      <p className="mb-8 text-gray-600 italic">Instrutor: {course.instructor}</p>

      <h2 className="text-3xl font-bold mb-4 text-gray-800">Módulos do curso</h2>
      <ul className="list-disc list-inside space-y-2 mb-12 text-gray-700">
        {course.modules.map((module, idx) => (
          <li key={idx}>{module}</li>
        ))}
      </ul>

      <Link
        to="/courses"
        className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
      >
        Voltar para cursos
      </Link>
    </div>
  );
}
