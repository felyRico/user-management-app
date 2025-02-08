import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

export const StyledTableHead = styled.thead`
  background: linear-gradient(to right, #8b5cf6, #ec4899);
  color: white;

  th {
    padding: 0.75rem;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px;
  overflow: hidden; 

  td {
    padding: 1rem;
    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.1);
  }
`;

export const AddButton = styled.button`
  background: linear-gradient(to right, #8b5cf6, #ec4899);
  border: none;
  color: white;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
`;

export const EditButton = styled(Link)`
  background: none;
  color: #3c2cfb;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 0.5rem;
  text-decoration: none;
  font-size: 0.9rem;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #fb2c5b;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
`;

export const FieldContainer = styled.div`
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  box-sizing: border-box;
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 0.8rem;
`;