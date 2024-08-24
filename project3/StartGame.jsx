import styled from 'styled-components'
const Container = styled.div`
width: 1182px;
height: 522px;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
padding-top: 80px;

.dice{
    img{
        width: 60%;
        display: flex;
        flex-direction: column;
    }
}
.dice{
    display: flex;
    justify-content: center;
}
h1{
    font-size:70px;
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    color: black;
}

`;
const Button=styled.button`
background-color: black;
color: white;
border: none;
width: 50%;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: center;

.play{
    display: flex;
    align-items: end;
}

`;


function StartGame({togglebtn}){
    return(
        <Container>
            <div className='dice'>
                <img src='./images/dices 1.png' />
            </div>
            <div>
                <h1>Dice Game</h1>
                <Button onClick={togglebtn}>
                    Play Now
                    </Button>
            </div>
        </Container>
    )
}
export default StartGame;


