"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";  // Asegúrate de usar 'next/navigation' si estás trabajando en Next 13+ con appDir

export default function Home() {
  const [isTransitioning, setIsTransitioning] = useState(false); // Estado para la transición
  const router = useRouter();

  // Función para manejar la navegación
  const handleNavigation = (url) => {
    setIsTransitioning(true); // Comienza la transición de opacidad
    setTimeout(() => {
      router.push(url); // Realiza la navegación después de 1 segundo
    }, 1001);  // El tiempo debe coincidir con la duración de la animación
  };

  // Efecto para restablecer la transición
  useEffect(() => {
    if (isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(false); // Termina la transición después de la duración especificada
      }, 1000); // El tiempo debe coincidir con la duración de la animación
    }
  }, [isTransitioning]);

  return (
    <div className={`container ${isTransitioning ? "exiting" : ""}`} style={styles.container}>
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          <Image src="/vercel.svg" alt="Logo" width={40} height={40} />
          <h1 style={styles.companyName}>Nombre empresa</h1>
        </div>

        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onClick={() => handleNavigation("/registro")}
          >
            Registrate!
          </button>
          <button
            style={styles.button}
            onClick={() => handleNavigation("/login")}
          >
            Ingresar
          </button>
        </div>
      </div>

      <main style={styles.main}>
        <div style={styles.line}></div>
        <div style={styles.mainContent}>
          <div style={styles.imageContainer}>
            <Image src="/next.svg" alt="Imagen" width={500} height={500} />
          </div>
          <div style={styles.textContainer}>
            <p style={styles.text}>
              Regístrate y deja que la IA haga el match por vos.
            </p>
            <div style={styles.heading}>
              <p>Donde tu</p>
              <p>talento</p>
              <p>encuentra su</p>
              <p>lugar,</p>
              <p>próximamente.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(90deg, #ff5757, #8c52ff)",
    fontFamily: "Arial, sans-serif",
    transition: "opacity 1s ease-in-out", // Transición de opacidad
  },
  header: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    padding: "10px 20px",
    margin: "2%",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    paddingRight: "50px",
  },
  companyName: {
    fontSize: "50px",
    marginLeft: "10px",
    fontWeight: "bold",
    color: "#fff",
  },
  buttonContainer: {
    display: "flex",
    gap: "100px",
    color: "#fff",
  },
  button: {
    padding: "10px 20px",
    fontSize: "40px",
    cursor: "pointer",
    border: "2px solid transparent",
    outline: "none",
    color: "#fff",
    backgroundColor: "transparent",
    transition: "transform 0.3s ease",
    borderRadius: "8px",
  },
  main: {
    width: "100%",
  },
  line: {
    width: "100%",
    borderTop: "6px solid #FFF",
    marginBottom: "3%",
  },
  mainContent: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "0 15px",
  },
  imageContainer: {
    width: "500px",
    height: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    padding: "10px",
    marginLeft: "175px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "452px",
    width: "500px",
    position: "relative",
    left: "30%",
    margin: "10px",
  },
  text: {
    color: "white",
    fontSize: "22px",
    width: "500px",
  },
  heading: {
    color: "white",
    fontSize: "64px",
    fontWeight: "bold",
    lineHeight: 0,
  },
};
