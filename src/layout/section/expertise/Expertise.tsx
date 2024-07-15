import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";



export const Expertise = () => {
  return (
    <StyledExpertise>
      <SectionTitle>Expertise</SectionTitle>
      {/* <FlexWrapper justify={"space-around"} direction={"row"} align={"center"}> */}
      <StyledNumber>
        <li></li>
        <li></li>
        <li></li>
      </StyledNumber>
      <StyledText>
        <li>Web Design</li>
        <li>Web programming</li>
        <li>Illustrations</li>
      </StyledText>
      {/* </FlexWrapper> */}
      
    </StyledExpertise>
    
  );
};

const StyledExpertise = styled.section`
  background-color: #fcfc6178;
`;
const StyledNumber = styled.ol`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: Roboto;
  font-size: 230px;
  font-weight: 400;
  line-height: 170px;
  list-style: none;
  counter-reset: item;
  /* position: relative; */

  li{
    counter-increment: item;
  }

  li::before {
  content: "0" counter(item) ". ";
  }
`;
const StyledText = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

