import styled from 'styled-components'

export const FAQContainer = styled.div`
  margin: 80px auto;
  max-width: 1275px;
  background-color: #FCFCFC;
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 50px;

  @media screen and (max-width: 800px){
    margin: 8px 8px 16px;
  }
`

export const Title = styled.h1`
  margin: 48px auto 0 80px;
  font-size: 30px;

  @media screen and (max-width: 800px){
    margin: unset;
  }
`

export const QuestionsContainer = styled.div`
  margin: 56px 180px;

  @media screen and (max-width: 800px){
    margin: 42px 0;
  }
`

export const QuestionTitle = styled.h3`
  font-size: 24px;
`

export const Answer = styled.p`
  margin-top: 8px;
  font-size: 16px;
  margin-bottom: 56px;

  &:last-child{
    margin-bottom: 0;
  }
`

export const MoreQuestions = styled.p`
  margin: 56px 80px;
  font-size: 14px;
  
  @media screen and (max-width: 800px){
    margin: 56px 0;
  }
`
