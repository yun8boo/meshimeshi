import { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from 'styled-components'

const Home: NextPage<{userAgent: string}> = ({userAgent}) => {
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  useEffect(() => {
    getPosition()
  }, [])
  const getPosition = () => {
  if( 'geolocation' in　navigator ){
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
    })
  } else{
    alert( "あなたの端末では、現在位置を取得できません。" ) ;
  }
  }
  return (
    <HomeContainer>
      <Title>meshimeshi</Title>
      <Button onClick={() => console.log('search')}>今すぐ！</Button>
      <p>緯度：{lat} 経度：{lon}</p>
    </HomeContainer>
  )
}

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 44px;
  height: calc(100vh - 44px);
`

const Title = styled.h1`
  font-size: 24px;
`

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 212px;
  height: 44px;
  color: #fff;
  background-color: #FF9900;
`

export default Home