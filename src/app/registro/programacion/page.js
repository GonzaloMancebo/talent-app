"use client";
import { useState } from 'react';
import Styles from './programacion.module.css'; // Importamos el CSS para la sección
import ProgressBar from '../../components/ProgressBar'; 

const Programacion = () => {
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const totalQuestions = 5; // Número total de preguntas en la sección de Programación

  const answerQuestion = () => {
    const newAnswered = answeredQuestions + 1;
    setAnsweredQuestions(newAnswered);
  };

  const progress = (answeredQuestions / totalQuestions) * 100; // Calculamos el progreso en %

  return (
    <div className={Styles.container}>
      <h1>Programación</h1>
      <ProgressBar progress={progress} /> {/* Aquí usamos la barra de progreso */}
      <button onClick={answerQuestion}>Responder Pregunta</button>
    </div>
  );
};

export default Programacion;
