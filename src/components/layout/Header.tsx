import Link from "next/link";
import styled from "styled-components";

const Footer = () => {
  return (
    <HeaderContainer>
      <Li>
        <Link href="/">
          <a>MeshiMeshi</a>
        </Link>
      </Li>
      <Li>
        <Link href="/search">
          <a>search</a>
        </Link>
      </Li>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.ul`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  height: 44px;
  background-color: #fff;
`;

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 18px;
  width: 100%;
  height: 100%;
`;

export default Footer;
