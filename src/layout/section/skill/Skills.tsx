import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./Skill";
import { AwardsInfo } from "../../../components/Awards";

export const Skills = () => {
  return (
    <FlexWrapper justify={"space-around"}>
      <FlexWrapper direction={"column"} align={"flex-start"}>
        <SectionTitle>Skills</SectionTitle>
        <Skill name={"Photoshop"} progress={"360px"} />
        <Skill name={"Illustrator"} progress={"360px"} />
        <Skill name={"Figma"} progress={"460px"} />
        <Skill name={"HTML/ CSS"} progress={"430px"} />
        <Skill name={"JQuery"} progress={"430px"} />
      </FlexWrapper>
      <FlexWrapper direction={"column"} align={"flex-start"}>
        <SectionTitle>Awards & Recognitions</SectionTitle>
        <AwardsInfo
          year={"2004"}
          title={"Designer of the month"}
          text={
            "iacentem substantiales um se sed esse haec Possit facis qui a a a patriam."
          }
        />
        <AwardsInfo
          year={"2006"}
          title={"Design of the week"}
          text={
            "iacentem substantiales um se sed esse haec Possit facis qui a a a patriam."
          }
        />
      </FlexWrapper>
    </FlexWrapper>
  );
};


