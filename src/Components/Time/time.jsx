import * as S from "./timeStyle.jsx"

function Time(props) {
    return(
        <S.Section style={{backgroundColor: props.corSecundaria}}>
            <S.H3 style={{borderColor: props.corPrimaria}} >{props.nome}</S.H3>
        </S.Section>
    )
}

export default Time