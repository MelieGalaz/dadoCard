// import React, { useState } from "react";
// import "./Card.css";

// export const Card = ({
//   cardHeader,
//   cardFooter,
//   cardImg,
//   cardBoton,
//   numDado,
//   getPrediction,
// }) => {
//   const [showExtraCard, setShowExtraCard] = useState(false);
//   const [prediction, setPrediction] = useState("");

//   const handleButtonClick = () => {
//     setPrediction(getPrediction(numDado));
//     setShowExtraCard(true);
//   };

//   return (
//     <div className="card">
//       <h3 className="card-titulo"> hola soy card {numDado}</h3>

//       {cardHeader && <p className="card-header">{cardHeader}</p>}
//       {cardImg && <img src={cardImg} alt="perrito" className="card-img" />}
//       {cardFooter && <p className="card-footer">{cardFooter}</p>}
//       {cardBoton && (
//         <button className="card-button" onClick={handleButtonClick}>
//           {cardBoton}
//         </button>
//       )}
//       {showExtraCard && (
//         <div className="extra-card">
//           <h3>{prediction}</h3>
//         </div>
//       )}
//     </div>
//   );
// };
import React, { useState } from "react";
import "./Card.css";

export const Card = ({
  cardHeader,
  cardFooter,
  cardImg,
  cardBoton,
  numDado,
  getPrediction,
}) => {
  const [showExtraCard, setShowExtraCard] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState("");

  const handleButtonClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setPrediction(getPrediction(numDado));
      setIsLoading(false);
      setShowExtraCard(true);
    }, 2000);
  };

  return (
    <div className="card">
      {isLoading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : showExtraCard ? (
        <div className="extra-card">
          <h3>{prediction}</h3>
        </div>
      ) : (
        <>
          <h3 className="card-titulo"> hola soy card {numDado}</h3>

          {cardHeader && <p className="card-header">{cardHeader}</p>}
          {cardImg && <img src={cardImg} alt="perrito" className="card-img" />}
          {cardFooter && <p className="card-footer">{cardFooter}</p>}
          {cardBoton && (
            <button className="card-button" onClick={handleButtonClick}>
              {cardBoton}
            </button>
          )}
        </>
      )}
    </div>
  );
};
