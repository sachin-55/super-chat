import styled from "styled-components";
import { addOpacityToHex } from "../../../theme/colors";

export const IndividualMessageStyled = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 8px;
  margin: 8px 10px;

  & .headers {
    border-radius: 8px 8px 0px 0px;
    padding: 4px 10px 8px;
    background: ${({ theme }) =>
      `linear-gradient(22deg,${addOpacityToHex(
        theme.colors.secondary,
        60
      )},${addOpacityToHex(theme.colors.primary, 80)})`};

    display: flex;
    align-items: center;
    justify-content: space-between;
    & .date-time {
      flex-shrink: 0;
    }
  }
`;
