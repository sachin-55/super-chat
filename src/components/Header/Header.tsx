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
  background: purple;
`;

const LogoStyled = styled.div`
  color: #fff;
`;
