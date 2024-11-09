import * as S from "./formularioStyle.jsx"
import Lista from "../Lista/lista.jsx"
import Button from "../Button/button.jsx"

function Form() {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Mobile',
        'Inovação'
    ]

    return(
            <S.Div>
                <S.Form>
                    <S.H1>Preencha os dados para criar o card do colaborador.</S.H1>
                    <S.Label>Nome</S.Label>
                    <S.Input placeholder="Digite seu nome" />
                    <S.Label>Cargo</S.Label>
                    <S.Input placeholder="Digite seu cargo" />
                    <S.Label>Imagem</S.Label>
                    <S.Input placeholder="Informe o endereço da imagem" />
                    <Lista itens={times} label="Time" />
                    <Button />
                </S.Form>
            </S.Div>
    )
}

export default Form