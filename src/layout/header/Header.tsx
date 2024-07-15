import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Contact } from "../section/contact/Contact";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Header = () => {
  return (
    <StyledHeader>
      <FlexWrapper justify={"space-between"}>
        <HeaderMenu>
          <Logo />
          <Menu value={"header"} />
          <Contact />
        </HeaderMenu>
      </FlexWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #222222;
  display: flex;
  gap: 20px;
  /* justify-content: space-between; */
`;
const HeaderMenu = styled.nav``;
