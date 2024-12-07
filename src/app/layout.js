// src/app/layout.js
import './globals.css'; 

export default function Layout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Mi Empresa</title>
      </head>
      <body>
        <div className="container">
          {children} {/* Aquí se renderizará el contenido de las páginas */}
        </div>
      </body>
    </html>
  );
}
