import styled from 'styled-components';
import { TextWork } from "./TextWork/TextWork";
import { Work } from './work/Work';
import agency from '../../../assets/img/webp/1.webp'
import { FlexWrapper } from '../../../components/FlexWrapper';
import lifestyle from '../../../assets/img/webp/2.webp'
import saas from '../../../assets/img/webp/3.webp'
import lucas from '../../../assets/img/webp/4.webp'
import serene from '../../../assets/img/webp/5.webp'
import sajna from '../../../assets/img/webp/6.webp'


export const Works = () => {
  return (
    <StyledWorks>
      <TextWork />
      <FlexWrapper justify={"space-around"} wrap={'wrap'}>
      <Work src={agency} title={"Agency Template"}/>
      <Work src={lifestyle} title={"Lifestyle Blog Template"}/>
      <Work src={saas} title={"Saas Landing Page"}/>
      <Work src={lucas} title={"Lucas Portfolio Template"}/>
      <Work src={serene} title={"Serene Product Template"}/>
      <Work src={sajna} title={"Sajna eCommerce Template"}/>
      </FlexWrapper>
    </StyledWorks>
  );
};
const StyledWorks = styled.section`
  background-color: #008cff97;
  min-height: 100vh;
`;
