import React from "react";
import styled from "styled-components";

type Props = {};

const Header = (props: Props) => {
  return (
    <HeaderStyled>
      <LogoStyled>Super Chat</LogoStyled>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.div`
  background: ${({ theme }) => theme.main.primary};
  padding: 10px 30px;
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: 2px;
`;

const LogoStyled = styled.div`
  color: #fff;
  color: ${({ theme }) => theme.main.hard.primary};
`;
