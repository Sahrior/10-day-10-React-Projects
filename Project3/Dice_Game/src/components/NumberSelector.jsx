import React, { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber}) => {
  

  const arrNumber = [1,2,3,4,5,6]

  const numberSelectorHandler = (value) =>{
    setSelectedNumber(value)
    setError("")
  }

  return (
    <Container>
      <p className='error' > {error} </p>
      <div className='flex'>
        {arrNumber.map((value, i) => (
          <Box
            key={i}
            isSelected={value === selectedNumber}
            onClick={ ()=> numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>

      <p>Select Number</p>
    </Container>
  )
}

export default NumberSelector

const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: end;

  
  .flex {
    display: flex;
    gap: 24px;
  }

  .error{
    color: red;
    font-weight: 300;
  }

  p {
    font-size: 24px;
    font-weight: 700; /* remove px */
  }
`

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;

  background-color: ${(props) =>
    props.isSelected ? "black" : "white"};

  color: ${(props) =>
    props.isSelected ? "white" : "black"};
`