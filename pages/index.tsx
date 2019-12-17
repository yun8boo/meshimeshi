import { NextPage } from "next";
import fetch from 'isomorphic-unfetch';
import { useEffect, useState } from "react";
import styled from 'styled-components'

const Home: NextPage<{userAgent: string}> = ({userAgent}) => {
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  const [randomRest, setRandomRest] = useState();
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

  const requestRestaurant = async() => {
    const hitPerPage = 100
    const URL = `https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=${process.env.GURUNAVI_API_KEY}&latitude=${lat}&longitude=${lon}&range=3&hit_per_page=${hitPerPage}`
    const response = await fetch(URL);
    const resJson = await response.json()
    const randomNum = Math.floor( Math.random() * (resJson.rest.length + 1));
    setRandomRest((resJson.rest[randomNum]))
  }
  
  return (
    <HomeContainer>
      <ButtonWrapper>
        <Button onClick={requestRestaurant}>めしめし！</Button>
      </ButtonWrapper>
      {
        randomRest && 
          <RestWrapper>
            <p>店舗名：<a href={randomRest.url}>{randomRest.name}</a></p>
            <p>予算：{randomRest.budget}</p>
            <p>PR：{randomRest.pr.pr_short}</p>
          </RestWrapper>
      }
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
  margin-top: 44px;
  height: calc(100vh - 44px);
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

const RestWrapper = styled.div`

`

export default Home