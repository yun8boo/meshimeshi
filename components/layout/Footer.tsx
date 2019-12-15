import Link  from "next/link";
import styled from 'styled-components'

const Footer = () => {
  return (
    <HeaderContainer>
      <Link href='/'>
        <Li>
          <a >home</a>
        </Li>
      </Link>
      <Link href='/search'>
        <Li>
          <a >search</a>
        </Li>
      </Link>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.ul`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 44px;
  background-color: #fff;
`

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d5d5d5;
  width: 100%;
  height: 100%;
`

export default Footer