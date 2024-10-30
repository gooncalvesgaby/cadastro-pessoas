import { createGlobalStyle } from "styled-components"
import Banner from "./Components/Banner/Banner.jsx"
import Formulario from "./Components/Formulario/formulario.jsx"

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
    <GlobalStyle />
    <Banner />
    <Formulario />
    </>
  )
}

export default App
