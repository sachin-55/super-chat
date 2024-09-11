import ConversationList from "./ConversationList";
import ConversationWindow from "./ConversationWindow";
import { HomepageStyled, UserContainerStyled } from "./styles";
import UserInfo from "./UserInfo";

const HomePage = () => {
  return (
    <HomepageStyled>
      <UserContainerStyled>
        <UserInfo />
        <ConversationList />
      </UserContainerStyled>
      <ConversationWindow />
    </HomepageStyled>
  );
};

export default HomePage;
