import styled from "styled-components";
import Banner from "../../../components/Banner";
import Container from "../../../components/Container";
import comprando from "/Banner/comprando.png";
import codechellaLogoi from "/ingressoComprado/code-chella.svg";
import codechellaLogoiA from "/ingressoComprado/code-chella-abreviado.svg";
import qrCodeIngresso from "/ingressoComprado/qr-code-ingresso.svg";
import { SecaoCompra, Ingresso } from "./EstilosCompra";

const IngressoCompra = () => {

    const completo = JSON.parse(localStorage.getItem("meusIngressos")) || [];

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
                                <h2>{completo[0].nome}</h2>
                                <div>
                                    <p>Ingresso Costesia</p>
                                    <p>Tipo de ingresso: {completo[0].tipo}</p>
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
