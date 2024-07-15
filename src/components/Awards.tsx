import styled from 'styled-components'
import { FlexWrapper } from './FlexWrapper'

type AwardsInfoPropsType = {
  year?: string 
  title: string 
  text: string 
  
}

export const AwardsInfo = (props: AwardsInfoPropsType) => {
  return(
    <FlexWrapper direction={"column"} align={"flex-start"}>
      <AwardsYear>{props.year}</AwardsYear>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </FlexWrapper>
  )
}

const AwardsYear = styled.span`
  
`
const Title = styled.h3`
  
`
const Text = styled.p`
  
`