import * as S from "./formularioStyle.jsx"

function Form() {
    return(
            <S.Div>
                <S.Form>
                    <S.H1>Preencha os dados para criar o card do colaborador.</S.H1>
                    <S.Input placeholder="Digite seu nome" />
                    <S.Input placeholder="Digite seu cargo" />
                    <S.Input placeholder="Informe o endereço da imagem" />
                </S.Form>
            </S.Div>
    )
}

export default Form