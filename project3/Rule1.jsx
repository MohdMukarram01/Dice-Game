import styled from "styled-components";
function Rule1() {
  return (
    <Rulecontainer>
      <div className="text">
      <h1>How to play dice game</h1>
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        after click on dice if selected number is equal to dice number you will
        get same point as dice.
      </p>
      <p>if you get wrong guess then 2 point will be dedcuted</p>
    </div>
    </Rulecontainer>

  );
}

export default Rule1 ;

const Rulecontainer=styled.div`
 text-align: start;
 background-color:#d68d9a;
 border-radius:25px;
 padding: 10px;
 `;

