import styled from "styled-components";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import bannerMapa from "/Banner/mapa.png";
import mapa from "/mapa/mapa.svg";
import pista from "/mapa/pista.svg";
import premium from "/mapa/premium.svg";
import cadeiras from "/mapa/cadeiras.svg";

const ContainerMapa = styled.section`
    display: flex;
    gap: 48px;
    align-items: center;
    color: var(--branco);
    div {
        display: flex;
        flex-direction: column;
        gap: 24px;
        h2 {
            font-size: 32px;
            font-weight: 700;
        }
        ul {
            list-style-type: none;
            display: flex;
            flex-direction: column;
            gap: 24px;
            li {
                font-size: 20px;
                font-weight: 500;
                line-height: 40px;
                position: relative;
                padding-left: 48px;
                display: flex;
                align-items: center;
                &::before {
                    content: '';
                    position: absolute;
                    width: 32px;
                    height: 32px;
                    left: 0;
                    background: ${props => props.$fundo_legenda};
                }
            }
            .bullet__one {
                &::before { background: var(--bullet-one); }
            }
            .bullet__two {
                &::before { background: var(--bullet-two); }
            }
            .bullet__three {
                &::before { background: var(--bullet-three); }
            }
            .bullet__four {
                &::before { background: var(--bullet-four); }
            }
            .bullet__five {
                &::before { background: var(--bullet-five); }
            }
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const DetalhesSetores = styled.section`
    color: var(--branco);
    text-align: center;
    padding: 80px 0 0;
    h3 {
        font-size: 40px;
        font-weight: 700;
        line-height: normal;
    }
    .detalhes_setores {
        margin-top: 48px;
        display: flex;
        justify-content: center;
        gap: 24px;
    }

    @media screen and (max-width: 768px) {
        .detalhes_setores {
            flex-direction: column;
            align-items: center;
        }
    }
`;

const Detalhes = styled.div`
    max-width: 383px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: ${props => props.$margin_topo? props.$margin_topo : 0};
    .detalhes_interior {
        display: flex;
        flex-direction: column;
        gap: 24px;
        h2 {
            font-size: 32px;
            font-weight: 700;
        }
        p {
            max-width: 100%;
            font-size: 20px;
            font-weight: 500;
            line-height: 40px;
        }
    }
    .espec { margin-top: 106px; }
    @media screen and (max-width: 768px) {
        max-width: 648px;
        img {
            max-width: 382px;
            margin: 0 auto;
        }
    }
`;

const MapaDeSetores = () => {
    document.title = "CodeChella | Mapa de Setores"

    return (
        <>
            <Banner imagemDeFundo={bannerMapa} texto="Mapa de Setores" />
            <Container $espacamento="64px">
                <ContainerMapa>
                    <img src={mapa} alt="Mapa de Setores" />
                    <div>
                        <h2>Legenda:</h2>
                        <ul>
                            <li className="bullet__one">Pista Premium</li>
                            <li className="bullet__two">Pista Comum</li>
                            <li className="bullet__three">Cadeiras Térreo</li>
                            <li className="bullet__four">Cadeiras Superiores</li>
                            <li className="bullet__five">Rampas</li>
                        </ul>
                    </div>
                </ContainerMapa>
                <DetalhesSetores>
                    <h3>Mais detalhes sobre os setores:</h3>
                    <div className="detalhes_setores">
                        <Detalhes>
                            <img src={pista} alt="Pista" />
                            <div className="detalhes_interior">
                                <h2>Pista</h2>
                                <p>
                                    Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade.
                                </p>
                            </div>
                        </Detalhes>
                        <Detalhes $margin_topo="106px">
                            <img src={premium} alt="Pista Premium" />
                            <div className="detalhes_interior">
                                <h2>Pista Premium</h2>
                                <p>
                                    Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área.
                                </p>
                            </div>
                        </Detalhes>
                        <Detalhes>
                            <img src={cadeiras} alt="Cadeiras" />
                            <div className="detalhes_interior">
                                <h2>Cadeiras</h2>
                                <p>
                                    Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas.
                                </p>
                            </div>
                        </Detalhes>
                    </div>
                </DetalhesSetores>
            </Container>
        </>
    );
}

export default MapaDeSetores;
