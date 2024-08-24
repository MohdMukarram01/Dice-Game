import styled from "styled-components";
import { useState } from "react";
function RoleDice( {
roleDice,CurrentDice
}){

    return(
        <DiceContainer>
            <div className="Dice"
            onClick={roleDice}
            >
                <img src={`./images/Dice/dice_${CurrentDice}.png`} />
            </div>
            <div className="heading">
                <h1>Click on Dice to roll</h1>
            </div>    
           
        </DiceContainer>
    )
}
export default RoleDice ;

const DiceContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 25px;

h1{
    font-size: 25px;
}
.Dice{
    img{

        width: 120px;

    }

}
`;