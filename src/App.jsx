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

const times = [
  {
    nome: 'Programação',
    corPrimaria:'#57C278',
    corSecundaria: '#D9F7E9'
  },
  {
    nome: 'Front-End',
    corPrimaria:'#82CFFA',
    corSecundaria: '#E8F8FF'
  },
  {
    nome: 'Data-Science',
    corPrimaria:'#A6D157',
    corSecundaria: '#F0F8E2'
  },
  {
    nome: 'devOps',
    corPrimaria:'#E06869',
    corSecundaria: '#FDE7E8'
  },
  {
    nome: 'UX e Design',
    corPrimaria:'#DB6EBF',
    corSecundaria: '#FAE9F5'
  },
  {
    nome: 'Mobile',
    corPrimaria:'#FFBA05',
    corSecundaria: '#FFF5D9'
  },
  {
    nome: 'Inovação',
    corPrimaria:'#FF8A29',
    corSecundaria: '#FFEEDF'
  }
]


function App() {

  return (
    <>
    <GlobalStyle />
    <Banner />
    <Formulario />

    {times.map(time => <Time key={time.nome}
    nome={time.nome}
    corPrimaria={time.corPrimaria}
    corSecundaria={time.corSecundaria} />)}
    </>
  )
}

export default App
