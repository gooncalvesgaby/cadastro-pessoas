import * as S from "./listaStyle.jsx"

function Lista(props) {
    return(
        <S.Div>
            <S.Label>{props.label}</S.Label>
            <S.Select>
                {/* minha linha abaixo: pra cada item retorna uma option */}
                {props.item.map(item => <option>{item}</option>)}
            </S.Select>
        </S.Div>
    )
}

export default Lista