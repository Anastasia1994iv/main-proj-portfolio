import styled from "styled-components";


export const Logo = () => {
  return (
    <StyledLogo>
      <h2>Richard Max</h2>
      <h1>UI/UX designer</h1>
    </StyledLogo>
  );
};

const StyledLogo = styled.div`
  display: inline-flex;
  gap: 10px;
color: #FFFFFF;

  

  h2 {
    font-family: Roboto;
    font-size: 28px;
    font-weight: 900;
    /* line-height: 33px; */
    letter-spacing: -0.06em;
    margin: 40px 0px 0px 190px;
  }

  h1 {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    /* line-height: 60px; */
    letter-spacing: 0.5em;
    margin: 50px 30px 0 0;

  }
`;
// подключить шрифт
//выровнять 
