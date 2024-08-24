import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";
import Rule1 from "./Rule1";
import Buttonstl from "./Buttonstl";
function Gameplay() {
  const [CurrentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setselectedNumber] = useState();
  const [Score, setScore] = useState(0);
  const [Error, setError] = useState("");
  const [showrule,setshowrule]=useState(false)

  const showtoggle=()=>{
    setshowrule(true);
  }

  const reset=()=>{
    setScore(0)
  }

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!selectedNumber) {
      setError("you have not selected any number");
      return
    }
    else setError("")
    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    }
     else {
      setScore((prev) => prev - 2);
    }
    setselectedNumber(undefined)
  };
  return (
    <Double>
      <div className="top_section">
        <TotalScore TotalScore={Score} />
        <NumberSelector
          Error={Error}
          setError={setError}
          selectedNumber={selectedNumber}
          setselectedNumber={setselectedNumber}
        />
      </div>
      <RoleDice CurrentDice={CurrentDice} roleDice={roleDice} />
      <div className="btn">
      <Button onClick={reset}>Reset Score</Button>

      <Button 
      onClick={()=> setshowrule(!showrule)}
      >  {showrule ? "hide": "show" } Show Rule</Button>

     {showrule && <Rule1 />} 

      </div>
    </Double>
  );
}

export default Gameplay;

const Double = styled.div`
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .btn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background:white;
    border: none;
  }
`;

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;