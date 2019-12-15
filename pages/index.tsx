import { NextPage } from "next";

const Home: NextPage<{userAgent: string}> = (props) => {
  const { userAgent } = props
  return (
    <div>
      <h1>meshimeshi</h1>
      <p>user agent: {userAgent}</p>
    </div>
  )
}

Home.getInitialProps = async ({req, res}) => {
  console.log(req, res);
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent
  return { userAgent }
}

export default Home