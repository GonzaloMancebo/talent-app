"use client";
import Styles from "./registro.module.css";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Registro() {
	const router = useRouter();
	const [isExiting, setIsExiting] = useState(false); // Para manejar el estado de salida
	const [progress, setProgress] = useState(0); // Estado para la barra de progreso

	const handleNavigation = (url) => {
		setIsExiting(true); // Establecemos que estamos saliendo
		setProgress(50); // Actualizamos la barra de progreso al 50%
		setTimeout(() => {
			setProgress(100); // Alcanza el 100% justo antes de navegar
			router.push(url); // Navega después de 500ms
		}, 500); // Retraso para la animación de desvanecimiento
	};

	useEffect(() => {
		// Volver al estado normal después de la navegación
		if (isExiting) {
			const timer = setTimeout(() => {
				setIsExiting(false);
				setProgress(0); // Reinicia la barra de progreso para futuros usos
			}, 1000);
			return () => clearTimeout(timer); // Limpiamos el temporizador
		}
	}, [isExiting]);

	return (
		<div className={`${Styles.container} ${isExiting ? Styles.exit : ""}`}>
			<div className={Styles.header}>
				<h1 className={Styles.companyName}>
					¡Hola! Bienvenido a nombre de la empresa
				</h1>
				<h2 className={Styles.h2}>
					Vamos a conocerte mejor para realizar el mejor match posible
				</h2>
			</div>

			<main className={Styles.main}>
				<div className={Styles.line}></div>
				<div className={Styles.mainContent}>
					<h2 className={Styles.companyName}>
						¿Qué estás buscando en tu próximo desafío?
					</h2>
					<div className={Styles.mainButton}>
						<button onClick={() => handleNavigation("/registro/programacion")}>
							💻 Programación
						</button>
						<button onClick={() => handleNavigation("/registro/diseno")}>
							✏️ Diseño
						</button>
						<button onClick={() => handleNavigation("/registro/otro")}>
							Otro
						</button>
					</div>
				</div>
			</main>

			<div className={Styles.progressBarContainer}>
				<div className={Styles.progressBar} style={{ width: `${progress}%` }}>
					<p className={Styles.progressText}>Progreso {progress}%</p>
				</div>
			</div>
		</div>
	);
}
