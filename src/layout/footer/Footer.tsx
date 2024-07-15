import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { TextMenu } from "../../components/menu/TextMenu";
import { Menu } from "../../components/menu/Menu";

const socialMedia = ["Twitter", "Facebook", "Instagram", "Linkedin"];
const anotherInfo = ["About", "Contact", "Blog", "Policy", "Terms"];

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterMenu>
        <FlexWrapper direction={"row"} justify={"space-around"}>
          <FlexWrapper direction={"column"} align={"flex-start"}>
            <TextMenu menuItems={socialMedia}></TextMenu>
          </FlexWrapper>
          <FlexWrapper direction={"column"} align={"flex-start"}>
            <TextMenu menuItems={anotherInfo}></TextMenu>
          </FlexWrapper>
          <FlexWrapper direction={"column"} align={"flex-start"}>
            <TextMenu menuItems={anotherInfo}></TextMenu>
          </FlexWrapper>
          <FlexWrapper direction={"column"} align={"flex-start"}>
            <TextMenu menuItems={anotherInfo}></TextMenu>
          </FlexWrapper>
          <FooterInfo>
            <EmailLink href=''>hello@templatesjungle.com</EmailLink>
            <Address>15Th Street Avenue, New York, USA</Address>
            <Num>011-554-8798-6556</Num>
            <Social>
              <Menu value={"footer"}></Menu>
            </Social>
          </FooterInfo>
        </FlexWrapper>
        <FlexWrapper justify={"space-between"}>
          <Copyright>©2022 Richard Max. All rights reserved.</Copyright>
          <Design>Design by <span>TemplatesJungle</span>.</Design>
        </FlexWrapper>
      </FooterMenu>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #d82323b8;
`;
const FooterMenu = styled.div``;
const FooterInfo = styled.div``;
const EmailLink = styled.a``;
const Address = styled.p``;
const Num = styled.p``;
const Social = styled.p``;
const Design = styled.small``
const Copyright = styled.small``