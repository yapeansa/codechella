import styled from "styled-components";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Secao from "../../components/Secao";
import experiencia from "/Banner/experiencia.png"
import woman from "/experiencia/happy-woman.svg";
import recycle from "/experiencia/recycle.svg";
import diversao from "/experiencia/diversao.svg";

const ExperienciaContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 128px;
`;

const Experiencia = () => {
    return (
        <>
            <Banner imagemDeFundo={experiencia} texto="A Experiência" />
            <Container $espacamento="64px">
                <ExperienciaContainer>
                    <Secao $alinhamento_texto="left" $alinhar_itens="flex-start">
                        <img src={woman} alt="Mulher feliz" />
                        <div>
                            <h2>Acessibilidade e Inclusão</h2>
                            <p>
                                Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!
                            </p>
                        </div>
                    </Secao>
                    <Secao $alinhamento_texto="right" $alinhar_itens="flex-end">
                        <img src={recycle} alt="Pessoa reciclando" style={{ order: 2 }} />
                        <div style={{ order: 1 }}>
                            <h2>Sustentabilidade</h2>
                            <p>
                                Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo.
                            </p>
                        </div>
                    </Secao>
                    <Secao $alinhamento_texto="left" $alinhar_itens="flex-start">
                        <img src={diversao} alt="Mulher feliz" />
                        <div>
                            <h2>Atrações</h2>
                            <p>
                                Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!
                            </p>
                        </div>
                    </Secao>
                </ExperienciaContainer>
            </Container>
        </>
    );
}

export default Experiencia;
