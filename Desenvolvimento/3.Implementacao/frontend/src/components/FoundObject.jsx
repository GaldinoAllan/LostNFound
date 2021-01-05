// import Button from './Button'
// import { FaEdit, FaTrash } from 'react-icons/fa'

import {
  FoundObj,
  Container,
  Image,
  DescriptionContainer,
  DescriptionLine,
  DescriptionItem,
  DescriptionTitle,
  DescriptionText,
  // Buttons
} from '../styles/components/FoundObject'

const FoundObject = ({
  id,
  image,
  item,
  place,
  category,
  date,
  description
}) => {
  // const handleDelete = () => {
  //   console.log(`Delete function called for object ${id}`);
  // }

  // const handleUpdate = () => {
  //   console.log(`Update function called for object ${id}`);
  // }

  return (
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
      {/* <Buttons>
        <Button
          background="red"
          onClick={handleDelete}
          icon={
            <FaTrash />
          }
        >
          Excluir
      </Button>
        <Button
          background="grey"
          onClick={handleUpdate}
          icon={
            <FaEdit />
          }
        >
          Editar
      </Button>
      </Buttons> */}
    </FoundObj>
  )
}

export default FoundObject