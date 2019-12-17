import { NextPage } from "next";
import Header from './Header'

const Layout: NextPage = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout