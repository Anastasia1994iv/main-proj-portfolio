import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";

export const Contact = () => {
  return (
    <StyledContact>
      <Card>
        <Icon iconId={"letter"} width={"15"} height={"30"} viewBox={"0 0 30 1"}/>
        <ContactLink>lee.tommy22@gmail.com</ContactLink>
      </Card>
      <Card>
        <Icon iconId={"pods"} width={"15"} height={"30"} />
        <ContactLink>+001 235 1245 2356</ContactLink>
      </Card>
    </StyledContact>
  );
};

const StyledContact = styled.section`
  color: #ffffff;
  /* display: flex; */
  /* justify-content: end; */
  /* gap: 10px; */
  display: inline-flex;
  gap: 30px;
  justify-content: end;
  padding-left: 150px;
`;
const ContactLink = styled.a``;
const Card = styled.div``;
