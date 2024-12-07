"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div style={styles.container}>
			<div style={styles.header}>
				<div style={styles.logoContainer}>
					<Image src="/vercel.svg" alt="Logo" width={40} height={40} />
					<h1 style={styles.companyName}>Nombre empresa</h1>
				</div>

				{/* Botones alineados a la derecha */}
				<div style={styles.buttonContainer}>
					<Link href="/registro">
						<button style={styles.button}>Registrate!</button>
					</Link>
					<Link href="/login">
						<button style={styles.button}>Ingresar</button>
					</Link>
				</div>
			</div>

			<main style={styles.main}>
				<div style={styles.line}></div>
				{/* Contenedor de las dos columnas */}
				<div style={styles.mainContent}>
					{/* Columna de la imagen */}
					<div style={styles.imageContainer}>
						<Image src="/next.svg" alt="Imagen" width={500} height={500} />
					</div>

					{/* Columna de los textos */}
					<div style={styles.textContainer}>
            <div>
						<p style={styles.text}>
							Regístrate y deja que la IA haga el match por vos.
						</p>
            </div>
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
    justifyContent: "flex-start", // Asegura que el header esté arriba
    alignItems: "center",
    height: "100vh", // Ocupa toda la altura de la pantalla
    background: "linear-gradient(90deg, #ff5757, #8c52ff)", // Gradiente de fondo
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-around", // Alinea el contenido del header a los extremos
    alignItems: "center", // Alinea los elementos verticalmente en el centro
    width: "100%", // Asegura que ocupe el 100% del ancho de la pantalla
    height: "30px",
    padding: "10px 20px", // Espaciado interno
    margin: "5%",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center", // Alinea logo e nombre verticalmente
    paddingRight: "50px",
  },
  companyName: {
    fontSize: "50px",
    marginLeft: "10px",
    fontWeight: "bold",
    color: "#fff", // Asegura que el nombre de la empresa se vea bien sobre el fondo
  },
  buttonContainer: {
    display: "flex",
    gap: "100px", // Espacio entre los botones
    color: "#fff",
  },
  button: {
    padding: "10px 20px",
    fontSize: "50px", // Ajusta el tamaño de la fuente
    cursor: "pointer",
    border: "2px solid transparent", // Borde transparente
    outline: "none", // Elimina el borde de enfoque
    color: "#fff", // Texto blanco
    backgroundColor: "transparent", // Fondo transparente
    transition: "background-color 0.3s ease", // Transición suave para cambios
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
    justifyContent: "flex-start", // Cambié para que no distribuya entre los elementos
    alignItems: "center", // Centra los elementos verticalmente
    padding: "0 15px", // Espaciado horizontal
  },
  imageContainer: {
    width: "500px", // Fijar ancho del contenedor
    height: "500px", // Fijar altura del contenedor
    display: "flex", // Asegura que el contenido esté alineado correctamente
    justifyContent: "center", // Centra horizontalmente
    alignItems: "center", // Centra verticalmente
    overflow: "hidden", 
    padding: "10px",
    marginLeft: "175px", // Solo mueve horizontalmente
  },
  textContainer: {
    display: "flex",
    flexDirection: "column", // Asegura que el texto esté en columna
    justifyContent: "center", // Centra verticalmente
    alignItems: "center", // Centra horizontalmente
    height: "500px", // Ajusta la altura del contenedor según necesites
    width: "400px", // Ajusta el ancho del contenedor según necesites
    position: "relative", // Añadido para mover con left
    left: "30%", // Mueve solo horizontalmente
  },
  text: {
    color: "white", // Texto blanco
    fontSize: "16px", // Tamaño del texto del párrafo
  },
  heading: {
    color: "white", // Texto blanco
    fontSize: "64px", // Tamaño del texto para el título
    fontWeight: "bold",
    lineHeight: 0, // Controla el espaciado entre líneas (ajústalo si necesitas)

  },
};

