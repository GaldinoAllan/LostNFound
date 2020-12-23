import styled from 'styled-components'

export const FormContainer = styled.div`
  margin: 36px;
`

export const RowTwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
`

export const RowTwoColumnsItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 24px;
`

export const RowThreeColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
`

export const RowColumn = styled.div`
  align-self: center;

  select option{
    color: #f00;
  }
`

export const ImageInputBlock = styled.div`
  margin: 8px;

  input {
    width: 100%;
    background: #F5F8FA;
    border: 1px solid #D3E2E5;
    border-radius: 20px;
    outline: none;
    color: #5C8599;
    height: 64px;
    padding: 0 16px;
  }
`

export const ImageLabel = styled.label`
  display: flex;
  color: grey;
  margin-bottom: 8px;
  line-height: 24px;
`

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 8px;

  img {
    width: 56px;
    height: 56px;
    object-fit: cover;
    border-radius: 20px;
  }
`

export const NewImageLabel = styled.label`
  width: 56px;
  height: 56px;
  background: #F2F2F2;
  border: 1px dashed #9369D9;
  border-radius: 20px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ImageInput = styled.input`
  display: none;
`

export const ButtonsGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const ButtonsContainer = styled.div`
  width: 320px;
  height: 48px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap:8px;
`

export const SearchContainer = styled.div`
  margin: 36px;
`

export const ThreeSearchContainers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;
  margin: 36px;
`

export const TableContainer = styled.div`
  margin: 36px;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9em;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);

  thead tr {
    background-color: #563887;
    color: #ffffff;
    text-align: left;
  }

  th, td {
    padding: 12px 15px;
  }

  tbody tr {
    border-bottom: thin solid #dddddd;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  tbody tr:last-of-type {
    border-bottom: 2px solid #563887;
  }

  td:last-child{
    max-width: 150px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px;
    height: 50px;
  }

  @media (max-width: 767px) {
    display: block;
    position: relative;
    width: 100%;

    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }
    
    td,
    th {
      height: 35px;
    }

    thead {
      float: left;
    }

    tbody {
      width: auto;
      position: relative;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      white-space: nowrap;
    }

    tbody tr {
      display: inline-block;
    }

    td:last-child {
      border-right: #999999 solid 1px;
    }
  }
`

export const Actions = styled.th`
  width: 150px;
`