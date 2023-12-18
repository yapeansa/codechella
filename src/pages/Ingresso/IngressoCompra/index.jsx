import styled from "styled-components";
import Banner from "../../../components/Banner";
import Container from "../../../components/Container";
import comprando from "/Banner/comprando.png";

const SecaoCompra = styled.section`
    max-width: 792px;
    margin: 0 auto;
    h2 {
        font-size: 32px;
        font-weight: 700;
        text-align: center;
        color: var(--branco);
    }
`;

const IngressoCompra = ({ nome, ingresso, nascimento }) => {
    return (
        <>
            <Banner imagemDeFundo={comprando} texto="Seu ingresso está aqui!" />
            <Container $espacamento="64px">
                <SecaoCompra>
                    <h2>Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h2>
                    <p>{nome}</p>
                    <p>{ingresso}</p>
                    <p>{nascimento}</p>
                </SecaoCompra>
            </Container>
        </>
    );
}

export default IngressoCompra;
