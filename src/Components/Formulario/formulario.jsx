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

    const salvar = (evento) => {
        evento.preventDefault()
        console.log('Salvei meu formulário')
    }

    return(
            <S.Div>
                <S.Form onSubmit={salvar}>
                    <S.H1>Preencha os dados para criar o card do colaborador.</S.H1>
                    <S.Label>Nome</S.Label>
                    <S.Input placeholder="Digite seu nome" />
                    <S.Label>Cargo</S.Label>
                    <S.Input placeholder="Digite seu cargo" />
                    <S.Label>Imagem</S.Label>
                    <S.Input placeholder="Informe o endereço da imagem" />
                    <Lista itens={times} label="Time" />
                    <Button>
                        Criar Card
                    </Button>
                </S.Form>
            </S.Div>
    )
}

export default Form