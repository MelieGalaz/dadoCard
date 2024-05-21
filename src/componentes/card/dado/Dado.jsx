import {
  GiInvertedDice1,
  GiInvertedDice2,
  GiInvertedDice3,
  GiInvertedDice4,
  GiInvertedDice5,
  GiInvertedDice6,
} from "react-icons/gi";

export const Dado = ({ numDado }) => {
  return (
    <>
      {numDado === 1 && <GiInvertedDice1 />}
      {numDado === 2 && <GiInvertedDice2 />}
      {numDado === 3 && <GiInvertedDice3 />}
      {numDado === 4 && <GiInvertedDice4 />}
      {numDado === 5 && <GiInvertedDice5 />}
      {numDado === 6 && <GiInvertedDice6 />}
    </>
  );
};
