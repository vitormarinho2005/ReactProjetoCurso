import CourseCard from '../components/CourseCard';

const allCourses = [
  {
    id: 1,
    title: 'React para Iniciantes',
    description: 'Aprenda React do zero até avançado, com projetos práticos e exercícios.',
    category: 'Frontend',
  },
  {
    id: 2,
    title: 'JavaScript Moderno',
    description: 'Domine as funcionalidades mais recentes do JavaScript, ES6+ e melhores práticas.',
    category: 'Programação',
  },
  {
    id: 3,
    title: 'Node.js Completo',
    description: 'Crie APIs robustas e escaláveis usando Node.js e Express.',
    category: 'Backend',
  },
  {
    id: 4,
    title: 'CSS Avançado',
    description: 'Aprenda técnicas avançadas para estilizar sites modernos e responsivos.',
    category: 'Frontend',
  },
  {
    id: 5,
    title: 'Banco de Dados SQL',
    description: 'Entenda banco de dados relacionais e linguagem SQL para manipulação de dados.',
    category: 'Banco de Dados',
  },
];

export default function Courses() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold mb-12 text-center text-indigo-700">
        Todos os Cursos
      </h1>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {allCourses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
