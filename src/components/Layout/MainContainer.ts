import styled from "styled-components";

export default styled.main`
  animation-duration: 1s;
  animation-name: fadeIn;
  animation-fill-mode: both;
  opacity: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 15px;
  width: calc(100% - 15px * 2);
  max-width: ${({ theme }) => theme.breakpoint.laptop};
`;
