import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const Button = styled.button`
  width: 150px;
  background-color: #d3d3d3;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 5px;
  border-color: 1px solid gray;
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  transition: 350ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 3px 3px 2px 0px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #f7f7f7;
    transform: scale(1.1);
  }
`;
