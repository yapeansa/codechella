import styled from "styled-components";
import Banner from "../../../components/Banner";
import Container from "../../../components/Container";
import comprando from "/Banner/comprando.png";
import codechellaLogoi from "/ingressoComprado/code-chella.svg";
import codechellaLogoiA from "/ingressoComprado/code-chella-abreviado.svg";
import qrCodeIngresso from "/ingressoComprado/qr-code-ingresso.svg";

const SecaoCompra = styled.section`
    max-width: 792px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 32px;
    color: var(--branco);
    h2 {
        font-size: 32px;
        font-weight: 700;
        text-align: center;
        color: var(--branco);
    }
    p {
        line-height: 40px;
        font-size: 20px;
        font-weight: 500;
    }
`;

const Ingresso = styled.div`
    max-width: 792px;
    padding: 32px;
    background: var(--gradiente-boreal);
    display: flex;
    flex-direction: column;
    gap: 32px;
    box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.15);
    .ingresso__header {
        display: flex;
        justify-content: space-between;
    }
    .detalhes__ingresso {
        display: flex;
        gap: 48px;
        .qr-code {
            max-width: 189px;
        }
        .ingresso__textos {
            display: flex;
            flex-direction: column;
            gap: 24px;
            align-items: flex-start;
            h2 {
                font-size: 32px;
                font-weight: 700;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .detalhes__ingresso {
            flex-direction: column;
            align-items: center;
            text-align: center;
            justify-content: center;
            h2 { margin: 0 auto; }
        }
    }
`;

const IngressoCompra = ({ nome, ingresso, nascimento }) => {
    return (
        <>
            <Banner imagemDeFundo={comprando} texto="Seu ingresso está aqui!" />
            <Container $espacamento="64px">
                <SecaoCompra>
                    <h2>Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento e divirta-se!</h2>
                    <Ingresso>
                        <div className="ingresso__header">
                            <img src={codechellaLogoi} alt="Pequena Logo CodeChella" />
                            <img src={codechellaLogoiA} alt="Logo CodeChella Abreviado" />
                        </div>
                        <div className="detalhes__ingresso">
                            <img src={qrCodeIngresso} className="qr-code" alt="QR code do ingresso" />
                            <div className="ingresso__textos">
                                <h2>{nome}</h2>
                                <div>
                                    <p>Ingresso Costesia</p>
                                    <p>Tipo de ingresso: {ingresso}</p>
                                    <p>Data: 11/03</p>
                                    <p>Local: São Paulo - SP</p>
                                </div>
                            </div>
                        </div>
                    </Ingresso>
                </SecaoCompra>
            </Container>
        </>
    );
}

export default IngressoCompra;
