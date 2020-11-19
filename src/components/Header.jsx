import { useState } from 'react'

import SearchInput from './SearchInput'

import {
  HeaderContainer,
  Title
} from '../styles/components/Header'

const Header = () => {
  const [search, setSearch] = useState('')

  const handleSearch = value => { setSearch(value) };

  return (
    <HeaderContainer>
      <Title>Achados e Perdidos IFSP</Title>
      <SearchInput handleChange={handleSearch} placeholder="Digite sua busca" />
    </HeaderContainer>
  )
}

export default Header