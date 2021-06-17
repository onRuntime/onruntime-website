import styled from "styled-components";

export default styled.button<{ outline?: boolean }>`
  background-color: ${(props) => {
    if (props.outline) return "transparent";
    return props.theme.colors.accent.light;
  }};
  color: ${(props) => {
    if (props.outline) return props.theme.colors.text.lightest;
    return props.theme.colors.text.darkest;
  }};
  padding: 12px 24px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.family.primary};
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  outline: none;
  border: ${(props) => {
    if (props.outline) return `1px solid ${props.theme.colors.accent.light}`;
    return "none";
  }};
  transition: all 0.2s;
  line-height: 1;
  user-select: none;

  :hover {
    filter: brightness(0.8);
  }
`;
