import { createGlobalStyle } from "styled-components"
import Banner from "./Components/Banner/Banner.jsx"
import Formulario from "./Components/Formulario/formulario.jsx"
import Time from "./Components/Time/time.jsx"

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
    <Time nome="Programação" />
    <Time nome="Front-End" />
    <Time nome="Data Science" />
    <Time nome="devOps" />
    </>
  )
}

export default App
