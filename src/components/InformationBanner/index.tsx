import React from "react";
import { createAlphaFromString } from "src/utils/createColor";
import styled from "styled-components";

interface Props {
  text: string;
  onClick?: () => void;
}

const InformationBanner: React.FC<Props> = ({ text, onClick }: Props) => {
  return (
    <Container>
      <Content onClick={onClick}>
        <Text>{text}</Text>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) =>
    createAlphaFromString(theme.colors.accent.light, 0.95)};
  height: 30px;
  padding: 5px 15px;
`;

const Content = styled.div<{ onClick?: () => void }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  user-select: none;

  ${({ onClick }) =>
    onClick &&
    `
    cursor: pointer;
  `}
`;

const Text = styled.p`
  text-align: center;
  font-weight: ${({ theme }) => theme.weight.bold};
  font-size: ${({ theme }) => theme.size.normal};
  color: ${({ theme }) => theme.colors.text.darkest};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-weight: ${({ theme }) => theme.weight.bold};
    font-size: ${({ theme }) => theme.size.small};
  }
`;

export default InformationBanner;
