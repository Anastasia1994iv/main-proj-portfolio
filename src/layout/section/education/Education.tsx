import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { AwardsInfo } from "../../../components/Awards";

export const Education = () => {
  return (
    <StyledEducation>
      <FlexWrapper justify={"space-around"}>
        <FlexWrapper direction={"column"} align={"flex-start"}>
          <SectionTitle>Education</SectionTitle>
          <AwardsInfo
            year={"1998 - 2004"}
            title={"Bachelors in Engineering"}
            text={"Harvard School of Science and management"}
          />
          <AwardsInfo
            year={"2004 - 2006"}
            title={"Masters in Data Analysis"}
            text={"Harvard School of Science and management"}
          />
        </FlexWrapper>
        <FlexWrapper direction={"column"} align={"flex-start"}>
          <SectionTitle>Experiences</SectionTitle>
          <AwardsInfo
            year={"2007 - 2012"}
            title={"Creative Agency Inc.: Design head"}
            text={
              "iacentem substantiales um se sed esse haec Possit facis qui a a a patriam."
            }
          />
          <AwardsInfo
            year={"2013 - present"}
            title={"Studio Alpha.: Project Manager"}
            text={
              "iacentem substantiales um se sed esse haec Possit facis qui a a a patriam."
            }
          />
        </FlexWrapper>
      </FlexWrapper>
    </StyledEducation>
  );
};

const StyledEducation = styled.section``;
