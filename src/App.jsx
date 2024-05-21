import "./App.css";
import { CardContenedor } from "./componentes/card/cardContenedor/CardContenedor";

import { RollBoton } from "./componentes/card/rollBoton/RollBoton";
import { useState } from "react";
function App() {
  const [numDado, setNumDado] = useState(5);
  const girarDado = () => {
    let num = parseInt(Math.random() * 6 + 1);
    setNumDado(num);
    console.log(numDado);
  };
  return (
    <>
      <RollBoton numDado={numDado} rollDadoFuncion={girarDado} />
      <CardContenedor numDado={numDado} />
    </>
  );
}

export default App;
