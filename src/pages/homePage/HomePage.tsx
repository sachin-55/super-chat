import ConversationList from "./ConversationList";
import ConversationWindow from "./ConversationWindow";
import { ConversationHeader } from "./ConversationHeader";
import { HomepageStyled, UserContainerStyled } from "./styles";

const HomePage = () => {
  return (
    <HomepageStyled>
      <UserContainerStyled>
        <ConversationHeader />
        <ConversationList />
      </UserContainerStyled>
      <ConversationWindow />
    </HomepageStyled>
  );
};

export default HomePage;
