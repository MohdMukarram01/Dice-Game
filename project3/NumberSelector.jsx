import { useState } from "react";
import styled from "styled-components";
function NumberSelector({
 Error,setError,selectedNumber, setselectedNumber
}) {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <NumberSelectorcontainer>
         <h1>{Error}</h1>
      <div className="Flex">
        {arr.map((item, i) => (
          <Box
            isSelected={item == selectedNumber}
            key={i}
            onClick={() => setselectedNumber(item)}
          >
            {item}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorcontainer>
  );
}
export default NumberSelector;

const Box = styled.div`
  width: 65px;
  height: 65px;
  border: 2px solid black;
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 500;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;

const NumberSelectorcontainer = styled.div`
    .Flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 20px;
    font-weight: 500;
} 
`;
