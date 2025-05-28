import { Link } from 'react-router-dom';

export default function CourseCard({ id, title, description, category }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition cursor-pointer flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-3 text-gray-800">{title}</h2>
        <p className="text-gray-600 mb-5 line-clamp-3">{description}</p>
      </div>
      <div className="flex items-center justify-between">
        <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-semibold">
          {category}
        </span>
        <Link
          to={`/courses/${id}`}
          className="text-indigo-600 font-semibold hover:text-indigo-800 transition"
        >
          Detalhes &rarr;
        </Link>
      </div>
    </div>
  );
}
