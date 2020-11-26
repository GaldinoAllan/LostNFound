import Button from './Button'
import { FaEdit, FaTrash } from 'react-icons/fa'

import {
  FoundObj,
  Container,
  Image,
  DescriptionContainer,
  DescriptionLine,
  DescriptionItem,
  DescriptionTitle,
  DescriptionText,
  Buttons
} from '../styles/components/FoundObject'

const FoundObject = ({ image, item, place, category, date, description }) => (
  <FoundObj>
    <Container>
      <Image>
        <img src={image} alt={item} />
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
    <Buttons>
      <Button
        background="teste"
        icon={
          <FaTrash />
        }
      >
        Excluir
      </Button>
      <Button
        background="teste"
        icon={
          <FaEdit />
        }
      >
        Editar
      </Button>
    </Buttons>
  </FoundObj>
)

export default FoundObject