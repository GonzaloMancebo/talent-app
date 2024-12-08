"use client";  // Esto marca el archivo como un componente de cliente

import { useState, useEffect } from 'react';
import './globals.css';

export default function Layout({ children }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); // Estado adicional para controlar el montaje

  useEffect(() => {
    setHasMounted(true);  // Marca que el componente ha sido montado
  }, []);  // Este efecto solo se ejecuta una vez cuando el componente se monta

  // Este efecto escuchará los cambios en los hijos (cuando cambia la ruta)
  useEffect(() => {
    if (hasMounted) {
      setIsTransitioning(true);  // Comienza la transición de opacidad cuando cambian los hijos
      const timer = setTimeout(() => {
        setIsTransitioning(false);  // Termina la transición después de 1 segundo
      }, 1000);  // Duración de la animación

      return () => clearTimeout(timer);  // Limpiar el timer cuando el componente se desmonte
    }
  }, [children, hasMounted]);  // Asegúrate de que el efecto solo se ejecute cuando el componente esté montado

  return (
    <html lang="es">
      <head>
        <title>Mi Empresa</title>
      </head>
      <body>
        <div className={`container ${isTransitioning ? 'exiting' : ''}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
