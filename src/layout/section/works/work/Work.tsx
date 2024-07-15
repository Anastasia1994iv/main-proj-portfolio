import styled from "styled-components";
import { FlexWrapper } from '../../../../components/FlexWrapper';

type WorkPropsType = {
  src: string;
  title: string;
};

export const Work = (props: WorkPropsType) => {
  return (
    <FlexWrapper direction={"column"} align={"center"}>
      <Image src={props.src} alt='' />
      <Title>{props.title}</Title>
    </FlexWrapper>
  );
};

const Image = styled.img`
  width: 450px;
  height: 300px;
  
`;
const Title = styled.h3`
width: 230px;
height: 30px;
font-family: Roboto;
font-size: 18px;
font-weight: 600;
line-height: 30px;
`;
