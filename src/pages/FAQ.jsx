import {
  FAQContainer,
  Title,
  QuestionsContainer,
  QuestionTitle,
  Answer,
  MoreQuestions,
} from '../styles/pages/FAQ'

const FAQ = () => {
  return (
    <FAQContainer>
      <Title>Dúvidas frequentes:</Title>
      <QuestionsContainer>
        <QuestionTitle>
          Dúvida X?
        </QuestionTitle>
        <Answer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesen.
        </Answer>
        <QuestionTitle>
          Dúvida X?
        </QuestionTitle>
        <Answer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesen.
        </Answer>
        <QuestionTitle>
          Dúvida X?
        </QuestionTitle>
        <Answer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesen.
        </Answer>
        <QuestionTitle>
          Dúvida X?
        </QuestionTitle>
        <Answer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesen.
        </Answer>
      </QuestionsContainer>
      <MoreQuestions>
        Se tiver mais dúvidas entre em contato pelo email: ajudaperdidos@ifsp.com, pelo número: (00) 00000 0000 ou diretamente na secretária do campus: rua x, blablblabla
      </MoreQuestions>
    </FAQContainer>
  )
}

export default FAQ