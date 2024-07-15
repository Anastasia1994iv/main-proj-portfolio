import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import photo from "../../../assets/img/webp/photo.jpeg"

export const Main = () => {
  return (
    <MainSection>
      <FlexWrapper align={"center"} justify={"space-around"}>
        <TextSection>
          <Title>
            Building designs that work purely driven by Passion for art and
            Design
          </Title>
          <Text>
            Labore accusam in modo compungi, iacentem substantiales um se sed
            esse haec. Possit facis qui a a a patriam Dianae sibi aperit
            honestate doctrinam
          </Text>
        </TextSection>

        <Photo src={photo} alt='Photo' />
      </FlexWrapper>
    </MainSection>
  );
};

const MainSection = styled.main`
  background-color: #ff00005c;
`;
const Title = styled.h2``;
const Text = styled.p``;
const TextSection = styled.section``;

const Photo = styled.img`
  width: 960px;
  height: 840px;
  object-fit: cover;
  opacity: 0.8;
`;
