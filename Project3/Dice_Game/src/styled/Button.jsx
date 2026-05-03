import styled from "styled-components";
 
export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 18px;
  border-radius: 5px;
  width: 100%;
  max-width: 220px; /* instead of min-width */
  border: 1px solid transparent;
  font-size: 16px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;