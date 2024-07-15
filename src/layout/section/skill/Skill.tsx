import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { ProgressBar } from './ProgressBar';


type SkillPropsType = {
  name: string;
  progress: string;
  color?: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <FlexWrapper direction={"column"} align={"flex-start"}>
      <Name>{props.name}</Name>
      <ProgressBar progress={props.progress} color={props.color}/>
    </FlexWrapper>
  );
};

const Name = styled.p`
  color: #333333;
  font-family: Roboto;
  font-size: 15px;
  font-weight: 700;
  /* line-height: 27px; */
  letter-spacing: 0.2em;
  /* text-align: left; */
`;
