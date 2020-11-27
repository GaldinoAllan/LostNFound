import { useState, useEffect } from 'react'
import { FaRegQuestionCircle, FaPlus } from 'react-icons/fa'
import Paginator from 'react-hooks-paginator'

import InfoModal from '../components/InfoModal'
import FoundObject from '../components/FoundObject'

import getById from '../utils/getById';

import api from '../server/api'

import {
  LandingContainer,
  Title,
  Info,
  LandingHeader,
  Content,
  ButtonContent,
  ButtonContainer
} from '../styles/pages/Landing'
import Button from '../components/Button'

const Landing = () => {
  const pageLimit = 8

  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [items, setItems] = useState([])
  const [categories, setCategories] = useState([])
  const [places, setPlaces] = useState([])
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    api.get('items').then(response => {
      setItems(response.data)
    })
    api.get('places').then(response => {
      setPlaces(response.data)
    });
    api.get('categories').then(response => {
      setCategories(response.data)
    });
  }, [])

  useEffect(() => {
    setCurrentData(items.slice(offset, offset + pageLimit));
  }, [offset, items]);

  const handleOpenModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const handleAddItem = () => {
    console.log('Add Item function called');
  }

  return (
    <LandingContainer>
      <LandingHeader>
        <Title>Objetos encontrados</Title>
        <Info onClick={handleOpenModal}>
          <FaRegQuestionCircle />
        </Info>
      </LandingHeader>
      {modalIsOpen && (
        <InfoModal isOpen={modalIsOpen} setIsOpen={handleOpenModal} />
      )}
      <Content>
        {currentData.map(({
          id,
          image,
          name,
          placeId,
          categoryId,
          date,
          description
        }) => (
            <FoundObject
              key={id}
              id={id}
              image={image}
              item={name}
              place={getById(placeId, places)}
              category={getById(categoryId, categories)}
              date={date}
              description={description}
            />
          ))}
      </Content>
      <Paginator
        totalRecords={items.length}
        pageLimit={pageLimit}
        pageNeighbours={1}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <ButtonContainer>
        <ButtonContent>
          <Button
            background='add'
            icon={<FaPlus />}
            onClick={handleAddItem}
          >
            Adicionar Item
          </Button>
        </ButtonContent>
      </ButtonContainer>
    </LandingContainer>
  )
}

export default Landing