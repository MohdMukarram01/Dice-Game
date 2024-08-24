import styled from "styled-components";
function TotalScore({TotalScore}) {
  return (
    <main>
      <ScoreContainer>
        <h1>{TotalScore}</h1>
        <p>Total Score</p>
      </ScoreContainer>
    </main>
  );
}
export default TotalScore;

const ScoreContainer = styled.div`
  margin:  0 auto;
 border:2px solid black;
 width: 150px;
 line-height: 15px;
 display: flex;
 flex-direction: column;
 align-items: center;
 h1{
    font-size:60px;
    line-height: 100px;
 }
 p{
    font-size: 20px;
    text-align: center;
    font-weight: 600;
 }
`;