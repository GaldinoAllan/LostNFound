import {
  Container,
  Image,
  DescriptionContainer,
  DescriptionLine,
  DescriptionItem,
  DescriptionTitle,
  DescriptionText
} from '../styles/components/FoundObject'

const FoundObject = ({ image, item, place, category, date, description }) => (
  <Container>
    <Image>
      <img src={image} alt="bird" />
    </Image>
    <DescriptionContainer>
      <DescriptionLine>
        <DescriptionItem>
          <DescriptionTitle>Item</DescriptionTitle>
          <DescriptionText>{item}</DescriptionText>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionTitle>Categoria</DescriptionTitle>
          <DescriptionText>{category}</DescriptionText>
        </DescriptionItem>
      </DescriptionLine>
      <DescriptionLine>
        <DescriptionItem>
          <DescriptionTitle>Local</DescriptionTitle>
          <DescriptionText>{place}</DescriptionText>
        </DescriptionItem>
        <DescriptionItem>
          <DescriptionTitle>Data</DescriptionTitle>
          <DescriptionText>{date}</DescriptionText>
        </DescriptionItem>
      </DescriptionLine>
      <DescriptionItem>
        <DescriptionTitle>Descrição</DescriptionTitle>
        <DescriptionText>{description}</DescriptionText>
      </DescriptionItem>
    </DescriptionContainer>
  </Container>
)

export default FoundObject