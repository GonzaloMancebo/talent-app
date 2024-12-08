import { useState, useEffect } from 'react';

const ProgressBar = ({ section, totalQuestions, answeredQuestions }) => {
  const [progress, setProgress] = useState(0);

  // Cargar el progreso guardado en localStorage cuando la sección cambia
  useEffect(() => {
    let savedProgress = localStorage.getItem(`${section}-progress`);
    if (savedProgress) {
      setProgress(Number(savedProgress));
    }
  }, [section]);

  // Actualizar el progreso basado en la cantidad de preguntas respondidas
  useEffect(() => {
    const newProgress = (answeredQuestions / totalQuestions) * 100;
    setProgress(newProgress);
    localStorage.setItem(`${section}-progress`, newProgress);  // Guardar en localStorage
  }, [answeredQuestions, totalQuestions, section]);

  return (
    <div className="progressBarContainer">
      <div className="progressBar" style={{ width: `${progress}%` }}>
        <p className="progressText">Progreso {Math.round(progress)}%</p>
      </div>
    </div>
  );
};

export default ProgressBar;
