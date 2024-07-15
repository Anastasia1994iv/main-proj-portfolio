import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";

export const Form = () => {
  return (
    <StyledForm>
      <FlexWrapper justify={"space-around"}>
        <FlexWrapper direction={"column"} align={"flex-start"}>
          <Title>
            I’m available for a exciting new project.{" "}
            <a href='https://www.figma.com/design/ICS5szrNTWkc6iDCGNEEhT/Portfolio-templates?node-id=27-2449&t=ChGxa3s5c63lc7OK-0'>
              Let’s Talk.
            </a>
          </Title>
          <Text>
            You can send me a message here OR contact me on any social networks.
            We can grab a coffee and talk it over a phone.
          </Text>
        </FlexWrapper>
        <FlexWrapper direction={"column"} align={"flex-start"}>
          <ContactForm>
            <StyledContactForm>
              <Field placeholder={"Name *"} />
              <Field placeholder={"Email Address *"} />
              <Field placeholder={"Address *"} />
              <Field placeholder={"Phone"} />
              <Field as={"textarea"} placeholder={"Your message *"} />
            </StyledContactForm>
          </ContactForm>
          <Button type={"submit"}>submit</Button>
        </FlexWrapper>
      </FlexWrapper>
    </StyledForm>
  );
};

const StyledForm = styled.section`
  background-color: #4d4a46d1;
`;
const Title = styled.h2``;
const Text = styled.p``;
const Field = styled.input``;
const ContactForm = styled.section`
  max-width: 350px;
`;
const StyledContactForm = styled.form`
width:100%;
width: 100%;
display: flex;
flex-direction: row;
align-content: stretch;
flex-wrap: wrap;
gap: 10px;
margin: 0 auto;
`
