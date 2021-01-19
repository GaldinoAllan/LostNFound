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
          Como faço para retirar meu item?
        </QuestionTitle>
        <Answer>
          Dirija-se a secretaria com a descrição do seu objeto e a data de quando perdeu.
        </Answer>
        <QuestionTitle>
          Onde devo levar um item que encontrei?
        </QuestionTitle>
        <Answer>
          Até a secretaria do Instituto ou entregue a algum coordenador presente no campus. Aviso: Tenha certeza de descrever onde e como o encontrou.
        </Answer>
        <QuestionTitle>
          Meu item não está no site, como faço pra saber se perdi no Instituto?
        </QuestionTitle>
        <Answer>
          Os itens são cadastrados assim que apresentados à secretaria. Se o item que você perdeu não está no site, ele pode ter sido levado por alguém e não apresentado para a secretaria. Considere também tê-lo perdido em outro local.
        </Answer>
        <QuestionTitle>
          Preciso agendar para retirar meu item?
        </QuestionTitle>
        <Answer>
          Não, é só comparecer á secretaria do Campus com a as descrições do objeto e a data em que perdeu.
        </Answer>
      </QuestionsContainer>
      <MoreQuestions>
        Se tiver mais dúvidas entre em contato pelo email: ajudaperdidos@ifsp.com, pelo número: (00) 00000 0000 ou diretamente na secretária do campus: rua x, blablblabla
      </MoreQuestions>
    </FAQContainer>
  )
}

export default FAQ