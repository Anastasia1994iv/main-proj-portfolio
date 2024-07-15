import styled from "styled-components";
import { Icon } from "../icon/Icon";

type MenuPropsType = {
  value: "header" | "footer"
}

export const Menu = (props: MenuPropsType) => {

  switch(props.value) {
    case "header":
      return (
    <StyledMenu>
    <SocialList>
      <SocialItem>
        <SocialLink>
          <Icon iconId={"facebook"} width={"15"} height={"30"} viewBox={"2 0 30 15"}/>
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <Icon iconId={"inst"} width={"15"} height={"30"} viewBox={"2 0 30 20"} />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <Icon iconId={"twit"} width={"15"} height={"30"} viewBox={"2 0 30 15"} />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <Icon iconId={"skype"} width={"15"} height={"30"} viewBox={"2 0 30 20"} />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <Icon iconId={"in"} width={"15"} height={"30"} viewBox={"2 0 30 20"} />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <Icon iconId={"ball"} width={"15"} height={"30"} viewBox={"0 0 30 15"} />
        </SocialLink>
      </SocialItem>
    </SocialList>
  </StyledMenu>
  );
  case "footer":
    return(
      <StyledMenu>
    <SocialList>
      <SocialItem>
        <SocialLink>
          <Icon iconId={"facebookFooter"} width={"35"} height={"35"} />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <Icon iconId={"twitFooter"} width={"35"} height={"35"} viewBox={"0 0 35 30"}/>
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <Icon iconId={"skypeFooter"} width={"35"} height={"35"} viewBox={"0 3 35 30"}/>
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink>
          <Icon iconId={"inFooter"} width={"35"} height={"35"} />
        </SocialLink>
      </SocialItem>
      </SocialList>
      </StyledMenu>
    )
  }

  
  
};

const StyledMenu = styled.nav`
display: inline-flex;
  max-width: 310px;
  min-height: 40px;
 

  
`;

const SocialList = styled.ul`

    display: flex;
    gap: 30px;
    padding: 0;
    
  `;
const SocialItem = styled.li`
list-style: none;

`;
const SocialLink = styled.a``;
