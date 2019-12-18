import { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from 'styled-components'
// import utils
import { getDefaultData } from '../utils/getData';
import ShopCard from "../components/ShopCard";

const Home: NextPage<{userAgent: string}> = ({userAgent}) => {
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  const [randomRest, setRandomRest] = useState();
  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(() => {
    getPosition()
    setWindowHeight(window.innerHeight);
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
  const requestRestaurant = async() => {
    const response = await getDefaultData(lat, lon)
    const randomNum = Math.floor( Math.random() * (response.rest.length + 1));
    setRandomRest(response.rest[randomNum])
  }
  
  return (
    <>
      {
        windowHeight && 
          <HomeContainer height={windowHeight}>
          {
            randomRest && <ShopCard randomRest={randomRest} />
          }
          <ButtonWrapper>
            <Button onClick={requestRestaurant}>めしめし！</Button>
          </ButtonWrapper>
        </HomeContainer>
      }
    </>
  )
}

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};

const HomeContainer = styled.div<{height: number}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 44px;
  height: ${props => props.height - 44}px;
`

const ButtonWrapper = styled.div`
  margin-bottom: 6px;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 212px;
  height: 44px;
  color: #fff;
  background-color: #FF9900;
  font-size: 16px;
`

export default Home