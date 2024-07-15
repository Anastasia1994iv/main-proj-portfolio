import styled from "styled-components";
import { MiniSectionTitle } from "../../../components/MiniSectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Testemony = () => {
  return (
    <StyledTestemony>
      <FlexWrapper align={"center"} direction={"column"} justify={"flex-start"}>
        <MiniSectionTitle>Testimonials</MiniSectionTitle>
        <Content>
          <Icon
            iconId={"testemonia"}
            width={"168"}
            height={"126"}
            viewBox={"0 0 168 126"}
          />
          <Review>
            Richard is so good at what he does. Excellent communication skills
            made things much simpler and faster. Will continue working with him.
          </Review>
          <Copyright>
            Dr. Steve Watson, <span>Greenland Studio in.</span>
          </Copyright>
        </Content>
      </FlexWrapper>
    </StyledTestemony>
  );
};

const StyledTestemony = styled.section`
  background-color: #ece7e7;
`;
const Review = styled.p`
  font-family: Roboto;
  font-size: 32px;
  font-weight: 500;
  line-height: 51px;
`;
const Copyright = styled.small`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;

  span {
    font-family: Roboto;
    font-size: 18px;
    font-weight: 700;
    line-height: 32px;
  }
`;

const Content = styled.div`
  /* min-height: 190vh; */
  max-width: 830px;
  text-align: center;
`;
