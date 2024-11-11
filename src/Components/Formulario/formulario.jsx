import * as S from "./formularioStyle.jsx"
import Lista from "../Lista/lista.jsx"
import Button from "../Button/button.jsx"
import { useState } from "react"

function Form() {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Mobile',
        'Inovação'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const salvar = (evento) => {
        evento.preventDefault()
        console.log({ nome, cargo, imagem, time })
    }


    return(
            <S.Div>
                <S.Form onSubmit={salvar}>
                    <S.H1>Preencha os dados para criar o card do colaborador.</S.H1>
                    <S.Label>Nome</S.Label>
                    <S.Input 
                        value={nome}
                        onChange={(evento) => setNome(evento.target.value)}
                        placeholder="Digite seu nome"
                    />
                    <S.Label>Cargo</S.Label>
                    <S.Input
                        value={cargo}
                        onChange={(evento) => setCargo(evento.target.value)}
                        placeholder="Digite seu cargo"
                    />
                    <S.Label>Imagem</S.Label>
                    <S.Input
                        value={imagem}
                        onChange={(evento) => setImagem(evento.target.value)}
                        placeholder="Informe o endereço da imagem" 
                    />
                    <Lista 
                        itens={times}
                        label="Time"
                        value={time}
                        // aoAlterado={(valor) =>(valor)}
                        aoAlterado={(valor) => setTime(valor)}
                    />

                    <Button>
                        Criar Card
                    </Button>
                </S.Form>
            </S.Div>
    )
}

export default Form
