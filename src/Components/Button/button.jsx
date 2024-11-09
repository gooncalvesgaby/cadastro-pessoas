import * as S from "./buttonStyle.jsx"

function Button(props) {
    return(
        <S.Button>
            {props.children}
        </S.Button>
    )
        
}

export default Button