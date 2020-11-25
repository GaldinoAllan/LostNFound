// import { useState } from 'react'

import SearchInput from './SearchInput'

import {
  HeaderContainer,
  Title
} from '../styles/components/Header'

const Header = () => {
  // const [search, setSearch] = useState('')

  const handleSearch = e => {
    console.log(`${e.target.value}`);
    // setSearch(value)
  };

  return (
    <HeaderContainer>
      <Title to="/">Achados e Perdidos IFSP</Title>
      <SearchInput handleSearch={handleSearch} placeholder="Digite sua busca" />
    </HeaderContainer>
  )
}

export default Header