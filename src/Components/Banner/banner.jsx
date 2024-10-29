import * as S from "./bannerStyle.jsx"
import Logo from "../Banner/banner.png"

function Banner() {
    return(
        <S.Banner>
            <S.Img src={Logo} alt="imagem de fundo" />
        </S.Banner>
    )
}

export default Banner