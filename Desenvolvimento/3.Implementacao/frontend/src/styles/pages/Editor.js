import styled from 'styled-components'

export const FormContainer = styled.div`
  margin: 36px;
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