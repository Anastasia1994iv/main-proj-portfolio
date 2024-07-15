import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { MiniSectionTitle } from "../../../../components/MiniSectionTitle";

export const TextWork = () => {
  return (
    <StyledWorks>
      <FlexWrapper align={"center"} direction={"column"}>
        <Content>
          <MiniSectionTitle>My recent works</MiniSectionTitle>
          <SectionSlogan>
            Building designs that work purely driven by Passion for art and
            Design
          </SectionSlogan>
          <SectionText>
            Labore accusam in modo compungi, iacentem substantiales um se sed
            esse haec. Possit facis qui a a a patriam Dianae sibi aperit
            honestate doctrinam
          </SectionText>
        </Content>
      </FlexWrapper>
    </StyledWorks>
  );
};

const Content = styled.div`
  min-height: 80vh;
  max-width: 520px;
  text-align: center;
`;
const StyledWorks = styled.section`

`;

const SectionSlogan = styled.h3`
  font-family: Roboto;
  font-size: 48px;
  font-weight: 900;
  line-height: 60px;
`;
const SectionText = styled.p``;
