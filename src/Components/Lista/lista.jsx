import * as S from "./listaStyle.jsx"

function Lista(props) {
    return(
        <S.Div>
            <S.Label>{props.label}</S.Label>
            <S.Select onChange={(evento) => props.aoAlterado(evento.target.value)} value={props.value}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </S.Select>
        </S.Div>
    )
}

export default Lista