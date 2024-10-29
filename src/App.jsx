import { createGlobalStyle } from "styled-components"
import Banner from "./Components/Banner/Banner.jsx"

const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
`


function App() {

  return (
    <>
    <Banner />
    <GlobalStyle />
    </>
  )
}

export default App
