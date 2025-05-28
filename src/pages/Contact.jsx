import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto mt-24 p-8 bg-green-50 border border-green-300 rounded-2xl shadow-md text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-green-800 tracking-wide">
          Mensagem enviada!
        </h2>
        <p className="text-green-700 text-lg leading-relaxed">
          Obrigado pelo contato,{' '}
          <span className="font-semibold underline decoration-green-400">
            {formData.name}
          </span>
          ! <br />
          Em breve responderemos seu email.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-24 p-10 bg-white rounded-3xl shadow-xl ring-1 ring-gray-200">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-blue-700 tracking-tight">
        Fale Conosco
      </h1>
      {error && (
        <div className="mb-6 p-4 text-sm text-red-800 bg-red-100 rounded-lg shadow-sm">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-semibold text-gray-700 tracking-wide"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome completo"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-semibold text-gray-700 tracking-wide"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@exemplo.com"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-semibold text-gray-700 tracking-wide"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escreva sua mensagem aqui..."
            className="w-full px-5 py-3 rounded-xl border border-gray-300 text-gray-900 placeholder-gray-400 resize-none focus:outline-none focus:ring-4 focus:ring-blue-300 transition"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold rounded-2xl shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-transform active:scale-95"
        >
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}
