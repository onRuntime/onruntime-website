import styled from "styled-components";

export default styled.button`
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  padding: 10px 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.2s;
  line-height: 1;
  user-select: none;

  :hover {
    filter: brightness(0.8);
  }
`;