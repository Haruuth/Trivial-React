import { useEffect, useState } from "react";

export default function Trivial() {
  const [trivial, setTrivial] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [numQuestion, setNumQuestion] = useState(0);
  const [typeAnswer, setTypeAnswer] = useState("multiple");
  const [answerLevel, setAnsewrLevel] = useState("easy");

  // LLAMADA A LA API
  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=${numQuestion}&type=${typeAnswer}&difficulty=${answerLevel}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setTrivial(res.results);
      });
  }, [numQuestion, typeAnswer, answerLevel]);

  // CREAMOS LA PRIMERA FUNCION PARA PODER DARLE FUNCIONALIDAD AL BOTON DE LA RESPUESTA CORRECTA
  const clickCorrectAnswer = (answer, triviale) => {
    if (answer === triviale.correct_answer) {
      alert("¡Nice one!");
      setCorrectAnswer(correctAnswer + 1);
    } else {
      alert("Keep trying");
    }
  };

  // CREAMOS UN NUEVO ARRAY PARA EMPUJAR LO OBTENIDO DEL BUCLE DENTRO, QUE SERÍAN PARA ELEGIR HASTA LAS 50 PREGUNTAS DEL TRIVIAL
  //EN RESUMEN, PODER ELEGIR EN NUESTRO SELECTOR CUANTAS PREGUNTAS QUEREMOS QUE NOS PINTE PARA EMPEZAR A JUGAR
  let numQuestionArray = [];
  for (let i = 1; i <= 50; i++) {
    numQuestionArray.push(i);
  }

  //LA FUNCION QUE LE DARÁ VIDA A NUESTRO SELECTOR, QUE ES EL QUE NOS SACARÁ LAS PREGUNTAS QUE LE PONGAMOS AL SELECTOR
  const chooseNumbQuestions = (event) => {
    setNumQuestion(event.target.value);
    setCorrectAnswer(0);
  };

  //CREAMOS UN OBJETO CON LOS TIPOS DE RESPUESTAS PARA PODER RECIBIR QUE TIPO DE RESPUESTA OBTENDREMOS, EN ESTE CASO SOLO HAY 2.
  const optionsType = {
    
    Multiple: "Multiple",
    Boolean: "Boolean",
  };

  //CREAMOS LA FUNCION QUE NOS HAGA EL EVENTO PARA SELECCIONAR QUE TIPO DE RESPUESTAS QUEREMOS
  const answerTypeFunction = (event) => {
    setTypeAnswer(event.target.value);
    setCorrectAnswer(0);
  };

  //CREAMOS EL OBJETO CON LOS NIVELES DE DIFICULTAD PARA POSTERIORMENTE RECORRERLOS Y PODER SELECCIONAR ALGUNO CON EL SELECTOR
  const level = {
    Easy: "easy",
    Medium: "medium",
    Hard: "hard",
  };
  //CREAMOS LA FUNCION QUE PERMITIRÁ SELECCIONAR LOS NIVELES DE DIFICULTAD
  const levelOfAnswers = (event) => {
    setAnsewrLevel(event.target.value);
    setCorrectAnswer(0);
  };

  return (
    <div className="container">
      {/* SELECTOR CORRESPONDIENTE DEL NUMERO DE PREGUNTAS */}
      <h3>Chooste number of questions:</h3>
      <select value={numQuestion} onChange={chooseNumbQuestions}>
        {numQuestionArray.map((options, index) => (
          <option key={index} value={options}>
            {options}
          </option>
        ))}
      </select>

      {/* SELECTOR CORRESPONDIENTE DE LA DIFICULTAD DE LAS PREGUNTAS */}
      <h3>Choose the level of your knowledge:</h3>
      <select value={answerLevel} onChange={levelOfAnswers}>
        {Object.keys(level).map((options, index) => (
          <option key={index} value={options}>
            {options}
          </option>
        ))}
      </select>
      {/* SELECTOR CORRESPONDIENTE DE LOS TIPOS DE RESPUESTA */}
      <h3>Choose the type of answers:</h3>
      <select value={typeAnswer} onChange={answerTypeFunction}>
        {Object.keys(optionsType).map((options, index) => (
          <option key={index} value={options}>
            {options}
          </option>
        ))}
      </select>

      <p> Total Correct Answers: {correctAnswer}</p>


      {/* AQUI PINTAMOS LOS DATOS DEL FETCH MEDIANTE .MAP */}
      {trivial.map((triviale, index) => {
        const respuestas = [triviale.correct_answer,...triviale.incorrect_answers];
        
        respuestas.sort(() => Math.random() - 0.5);

        return (
          <div key={index}>
            <h4> {triviale.question} </h4>
            {respuestas.map((answer, index) => (
              <button onClick={() => clickCorrectAnswer(answer, triviale)} key={index}>{answer} </button>
            ))}
          </div>
        );
      })}
    </div>
  );
}
