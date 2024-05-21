import "./rollBoton.css";
import { Dado } from "../dado/Dado";
export const RollBoton = ({ numDado, rollDadoFuncion }) => {
  return (
    <button className="roll-boton" onClick={rollDadoFuncion}>
      <Dado numDado={numDado} />
      Roll !!!!
    </button>
  );
};
