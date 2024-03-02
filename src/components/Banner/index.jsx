import styled from "styled-components";

const ContainerBanner = styled.div`
    width: 100%;
    height: 407px;
    background: url(${props => props.$background}) no-repeat center / cover;
    display: flex;
    justify-content: center;
    align-items: center;
    h2 {
        width: 670px;
        color: var(--branco);
        font-family: var(--fonte-titulos), serif;
        font-weight: 400;
        font-size: 64px;
        text-align: center;
    }
    @media screen and (max-width: 500px) {
        h2 {
            font-size: 34px;
        }
    }
`;

const Banner = ({ imagemDeFundo, texto }) => {
    return (
        <ContainerBanner $background={imagemDeFundo}>
            <h2>{texto}</h2>
        </ContainerBanner>
    );
}

export default Banner;
