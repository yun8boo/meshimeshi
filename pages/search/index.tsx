import styled from 'styled-components'

const search = () => {
  return(
    <SearchContainer>
      <p>search page</p>
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 44px;
  height: calc(100vh - 44px);
`

export default search