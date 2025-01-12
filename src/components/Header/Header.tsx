import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LANDING_ROUTE } from "../../routes/routes";
import Logo from "../Logo";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();
  const handleLogoAction = () => {
    navigate(LANDING_ROUTE);
  };

  return (
    <HeaderStyled>
      <Logo onClick={handleLogoAction} />
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.div`
  background: ${({ theme }) => theme.light?.whiteSmoke};
  padding: 10px 30px;
  font-size: ${({ theme }) => theme.fontSize.heading};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 2px;
  box-shadow: 0px 1px 5px 0px ${({ theme }) => theme.colors.main?.hard?.primary};
`;
