import ConversationList from "./ConversationList";
import ConversationWindow from "./ConversationWindow";
import { HomepageStyled, UserContainerStyled } from "./styles";

const HomePage = () => {
  return (
    <HomepageStyled>
      <UserContainerStyled>
        <ConversationList />
      </UserContainerStyled>
      <ConversationWindow />
    </HomepageStyled>
  );
};

export default HomePage;
