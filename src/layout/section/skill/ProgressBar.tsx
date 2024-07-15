import styled from "styled-components";


type ProgressBarPropsType = {
  progress: string;
  color?: string;
};

export const ProgressBar = (props: ProgressBarPropsType) => {
  return (
    <Container>
      <Bar progress={props.progress} color={props.color}/>
    </Container>
  );
};

const Container = styled.div`
  width: 490px;
  height: 3px;
  background-color: #CCCCCC;
  border-radius: 50px;
  overflow: hidden;
`;
const Bar = styled.div<ProgressBarPropsType>`
  height: 3px;
  width: ${props => props.progress};
  background-color: ${props => props.color || "#FF5B5B"};
`;

