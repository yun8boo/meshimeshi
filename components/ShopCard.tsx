import styled from 'styled-components'
const ShopCard = (props: {randomRest: any}) => {
  const { randomRest } = props
  return (
    <RestWrapper>
      <ImageWrapper>
        {
          !randomRest.image_url.shop_image1
          ? <Image src='/noimage.png' />
          : <Image src={randomRest.image_url.shop_image1} alt={randomRest.name} />
        }
      </ImageWrapper>
      <ShopDetailContainer>
        <Div>
          <p>店舗名：</p>
          <a href={randomRest.url}>{randomRest.name}</a>
        </Div>
        {
          randomRest.budget && <P>予算：{randomRest.budget}円</P>
        }
        {
          randomRest.pr.pr_short && <P>PR：{randomRest.pr.pr_short}</P>
        }
      </ShopDetailContainer>
    </RestWrapper>
  )
}

const RestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ImageWrapper = styled.div`
`

const Image = styled.img`
  width: 100%;
`

const ShopDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 0;
  width: 100%;
`

const Div = styled.div`
  display: flex;
`

const P = styled.p`
  width: 100%;
  word-wrap: break-word;
`

export default ShopCard