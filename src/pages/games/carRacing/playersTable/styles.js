import styled from "styled-components";

export const PlayerTable = styled.table`
  margin-top: 20px;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  
  table {
    width: 100%;
    border-collapse: collapse;
  }

  tbody {
    display: block; 
    width: 100%;
    max-height: 200px;      
    overflow: hidden;        
    overflow-y: auto;       
  }
  thead,  tbody tr {
    display: table;         
    width: 100%;
  }
  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  td {
    width: 33%;
    vertical-align: top;
    box-shadow: rgb(204, 219, 232, 0.25) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.25) -3px -3px 6px 1px inset;
  }
  tbody::-webkit-scrollbar {
    width: 8px; 
  }

  tbody::-webkit-scrollbar-track {
    background: #f1f1f1;  
    border-radius: 10px;  
  }

  tbody::-webkit-scrollbar-thumb {
    background-color: #888; 
    border-radius: 10px;     
    border: 2px solid #f1f1f1; 
  }

  tbody::-webkit-scrollbar-thumb:hover {
    background-color: #555;  
  }

  td:hover {
    background-color: rgb(204, 219, 232, 0.25); 
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
              rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;