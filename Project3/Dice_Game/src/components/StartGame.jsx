import React from 'react'
import styled from "styled-components"
import { Button } from '../styled/Button'

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div><img src="/images/dices.png" alt="pupui" /></div>
        <div className='content' >
            <h1>DICE GAME</h1>
            <Button onClick ={toggle} >Play Now</Button>
            

        </div>
    </Container>
  )
}

export default StartGame


const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  min-height: 100vh;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  /* allow wrapping on small screens */
  flex-wrap: wrap;

  .content {
    flex: 1;

    h1 {
      font-size: clamp(36px, 8vw, 96px); 
      /* responsive font instead of fixed 96px */
      white-space: normal; /* remove nowrap for mobile */
    }
  }

  /* tablet */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }

  /* mobile */
  @media (max-width: 480px) {
    padding: 10px;

    .content h1 {
      font-size: 32px;
    }
  }
`;

