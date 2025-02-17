import React from "react";
import styled from "styled-components";
import { Typography } from "../../../components";

type Props = {};

const TextMessage = (props: Props) => {
  return (
    <TextMessageStyled>
      <Typography fontFamily="inconsolata">
        This is my message. Sint commodo esse anim proident et eu cupidatat
        laborum cupidatat ut amet deserunt irure. Consectetur aliqua proident
        dolore exercitation labore eiusmod. Et ad enim duis ut voluptate irure
        pariatur proident pariatur aliquip cillum. Magna fugiat velit minim
        labore aliquip occaecat qui ad. Reprehenderit magna mollit adipisicing
        fugiat ut minim irure exercitation aliquip deserunt. Occaecat
        adipisicing est aliquip adipisicing. Sit labore ex minim deserunt duis
        enim excepteur consectetur labore aute nulla.
      </Typography>
    </TextMessageStyled>
  );
};

export default TextMessage;

const TextMessageStyled = styled.div`
  padding: 8px;
  background-color: #f2f2f2;
  border-radius: 8px;
  margin-bottom: 8px;
`;
