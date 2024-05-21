import amor from "../../../assets/amor.jpg";
import finanza from "../../../assets/finanzas.webp";
import bienestar from "../../../assets/bienestar.png";
import viaje from "../../../assets/aventuras.gif";
import creatividad from "../../../assets/creatividad.jpg";
import espiritual from "../../../assets/espiritual.jpg";
import { Card } from "../Card";
import { Dado } from "../dado/Dado";

import "./cardContenedor.css";

export const CardContenedor = ({ numDado }) => {
  const getPrediction = (numDado) => {
    switch (numDado) {
      case 1:
        return "En un futuro cercano, experimentarás un renacimiento en tus relaciones. Viejas amistades se fortalecerán y un amor del pasado podría regresar para ofrecerte una segunda oportunidad.";
      case 2:
        return "Se avecinan grandes cambios en tu vida profesional. Un proyecto ambicioso te permitirá destacar y recibirás una oferta que transformará tu carrera. Es el momento de tomar riesgos calculados.";
      case 3:
        return "Presta atención a tu salud en los próximos meses. Incorporar una nueva rutina de ejercicios o un cambio en tu dieta te proporcionará una energía renovada y te ayudará a evitar problemas de salud a largo plazo.";
      case 4:
        return "Un viaje inesperado te llevará a descubrir lugares fascinantes y culturas diferentes. Este viaje no solo será una aventura emocionante, sino que también te proporcionará nuevas perspectivas sobre la vida.";
      case 5:
        return "Tu creatividad estará en su punto más alto. Es el momento ideal para iniciar ese proyecto que has estado postergando. Las ideas fluirán con facilidad y encontrarás el apoyo necesario para llevarlas a cabo.";
      case 6:
        return "Un periodo de introspección te llevará a un mayor entendimiento de ti mismo. Practicar la meditación o el yoga te ayudará a conectar con tu ser interior y descubrir nuevas pasiones y propósitos en la vida.";
      default:
        return "";
    }
  };

  return (
    <div className="card-contenedor">
      <h2 className="titulo-card-contenedor">
        El resultado es :
        <Dado numDado={numDado} />
      </h2>
      {numDado === 1 && (
        <Card
          cardHeader=""
          cardImg={amor}
          cardFooter={"Amor y Relaciones"}
          cardBoton="Acá tu predicción"
          numDado={numDado}
          getPrediction={getPrediction}
        />
      )}
      {numDado === 2 && (
        <Card
          cardHeader=""
          cardImg={finanza}
          cardFooter={"Carrera y Finanzas"}
          cardBoton="Acá tu predicción"
          numDado={numDado}
          getPrediction={getPrediction}
        />
      )}
      {numDado === 3 && (
        <Card
          cardHeader=""
          cardImg={bienestar}
          cardFooter={"Salud y Bienestar,"}
          cardBoton="Acá tu predicción"
          numDado={numDado}
          getPrediction={getPrediction}
        />
      )}
      {numDado === 4 && (
        <Card
          cardHeader=""
          cardImg={viaje}
          cardFooter={"Viajes y Aventuras"}
          cardBoton="Acá tu predicción"
          numDado={numDado}
          getPrediction={getPrediction}
        />
      )}
      {numDado === 5 && (
        <Card
          cardHeader=""
          cardImg={creatividad}
          cardFooter={"Creatividad y Proyectos"}
          cardBoton="Acá tu predicción"
          numDado={numDado}
          getPrediction={getPrediction}
        />
      )}
      {numDado === 6 && (
        <Card
          cardHeader=""
          cardImg={espiritual}
          cardFooter={"Espiritualidad y Crecimiento Personal"}
          cardBoton="Acá tu predicción"
          numDado={numDado}
          getPrediction={getPrediction}
        />
      )}
    </div>
  );
};
