import styled from "styled-components";

export const GameContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h4`
  font-size: 24px;
`;

export const Text = styled.p`
  margin-bottom: 0px;
  font-size: 14px;
  color: #333;
`;

export const Input = styled.input`
  padding: 10px;
  margin: ${(props) => props?.margin || '5px 0'};
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid ${(props) => props?.error ? 'red' : '#ccc'};
  outline: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
              rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &:focus {
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    border-color: #4d90fe;
  }
`;


export const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #28a745;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
              rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &:disabled {
    background-color: #ccc;
  }
`;

export const Select = styled.select`
  padding: 5px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 200px;
  appearance: none;
  outline: none;

  &:focus {
    border-color: #4d90fe;  
  }
`;


export const ErrorMessage = styled.p`
  color: red;
  font-size: 10px;
`;

export const WordContainer = styled.div`
  margin: 20px 0;
`;

export const GameOverText = styled.h2`
  color: red;
`;

export const PlayerTable = styled.table`
  margin-top: 20px;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  
    table {
      width: 100%;
      border-collapse: collapse;
    }

  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  td {
    width: 33%;
    vertical-align: top;
    box-shadow: rgb(204, 219, 232, 0.25) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }

  td td:hover {
    background-color: #f1f1f1; 
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
              rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;


export const PlayerName = styled.div`
  cursor: pointer;
  padding: 5px;
  &:hover {
    background-color: #f1f1f1;
  }
`;