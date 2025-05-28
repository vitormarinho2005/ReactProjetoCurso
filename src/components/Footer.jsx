export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16 py-8">
      <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
        <p>© 2025 EstudaJá. Todos os direitos reservados.</p>
        <div className="mt-4 flex justify-center space-x-6 text-gray-500">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/"
            target="blank"
            aria-label="Instagram"
            className="hover:text-pink-500 transition"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.25 3.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://pt-br.facebook.com/"
            target="blank"
            aria-label="Facebook"
            className="hover:text-blue-600 transition"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22 12a10 10 0 10-11.5 9.9v-7H8v-2.9h2.5v-2.2c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5v1.9H17l-.4 2.9h-2.2v7A10 10 0 0022 12z" />
            </svg>
          </a>

          {/* Twitter/X */}
          <a
            href="https://x.com/"
            target="blank"
            aria-label="Twitter"
            className="hover:text-black transition"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.39 3H3.61A.61.61 0 003 3.61v16.78c0 .34.27.61.61.61h16.78a.61.61 0 00.61-.61V3.61A.61.61 0 0020.39 3zm-4.93 13.52h-1.6l-2.5-3.38-2.5 3.38h-1.6l3.31-4.47L7.86 7.5h1.6l2.1 2.84L13.66 7.5h1.6l-3.14 4.19 3.34 4.83z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
