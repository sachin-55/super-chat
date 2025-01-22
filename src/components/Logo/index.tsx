import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LANDING_ROUTE } from "../../routes/routes";

type Props = {
  size?: number;
  onClick?: () => void;
  gotoLandingPage?: boolean;
};

const Logo = ({ size = 20, onClick, gotoLandingPage = true }: Props) => {
  const navigate = useNavigate();

  const handleLogoAction = () => {
    navigate(LANDING_ROUTE);
  };

  return (
    <LogoStyled
      $size={size}
      onClick={onClick || handleLogoAction}
      $isPointer={!!onClick || gotoLandingPage}
    >
      Super Chat
    </LogoStyled>
  );
};
export default Logo;

const LogoStyled = styled.div<{ $size?: number; $isPointer?: boolean }>`
  color: #fff;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.sansita};
  cursor: ${({ $isPointer }) => ($isPointer ? "pointer" : "default")};
  display: inline;
  font-size: ${({ $size }) => $size}px;
  &:hover {
    text-shadow: 2px 2px 10px ${({ theme }) => theme.colors.secondary};
  }
`;
