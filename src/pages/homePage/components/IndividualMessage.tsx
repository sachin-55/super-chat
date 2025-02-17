import { format } from "date-fns";
import { Avatar, Divider, Flex, Typography } from "../../../components";
import { IndividualMessageStyled } from "./style";
import TextMessage from "./TextMessage";

export const IndividualMessage = ({
  isMine,
  message,
}: {
  message: string;
  isMine: boolean;
}) => {
  const mDate = new Date();
  return (
    <IndividualMessageStyled>
      <div className="headers">
        <Flex>
          <Avatar size={"xsm"} />
          <div>
            <Typography fontWeight="bold" color="primary">
              Username
            </Typography>
          </div>
        </Flex>
        <Typography className="date-time" size="sCaption" color="invertedText">
          {format(mDate, "eeee, MMMM d yyyy, hh:mm a")}
        </Typography>
      </div>
      <Divider margin="0px 0px 6px" bgColor="accent" />
      <TextMessage />
    </IndividualMessageStyled>
  );
};
