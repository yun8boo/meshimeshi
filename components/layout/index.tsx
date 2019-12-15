import { NextPage } from "next";
import Footer from './Footer'

const Layout: NextPage = ({children}) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}

export default Layout