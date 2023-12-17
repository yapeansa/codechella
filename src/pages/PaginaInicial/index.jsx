import styled from "styled-components";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import home from "/Banner/home.png";
import bandPlaying from "/inicio/band-playing.svg";
import Botao from "../../components/Botao";
import Titulo from "./Titulo";
import BannerBottom from "./BannerBottom";
import Secao from "../../components/Secao";
import comprar from "/inicio/comprar-btn.svg";

const LineUp = styled.section`
    margin: 96px 0 0;
    h2 {
        font-family: var(--fonte-titulos);
        font-size: 64px;
        font-weight: 400;
        color: var(--branco);
        text-align: center;
    }
`;

const BoxLineUp = styled.div`
    padding: 56px 0;
    text-align: center;
`;

const Lines = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 32px;
    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 32px;
        color: var(--branco);
    }
    .line__one {
        font-size: 48px;
        font-weight: 800;
    }
    .line__two {
        font-size: 38px;
        font-weight: 700;
    }
    .line__three {
        font-size: 32px;
        font-weight: 700;
    }
    .line__four {
        font-size: 32px;
        font-weight: 500;
    }
`;

const PaginaInicial = () => {
    const lineups = [
        {
            id: 1,
            classname: 'line__one',
            nomes: ["System of a DOM"]
        },
        {
            id: 2,
            classname: 'line__two',
            nomes: ["Python Maiden", "Apollo Client 2001", "Bon Java", "NickCallback"]
        },
        {
            id: 3,
            classname: 'line__three',
            nomes: ["Linkin Promises", "Fullstack Fighters", "Papa React", "Angular in Chains"]
        },
        {
            id: 4,
            classname: 'line__four',
            nomes: ["Agnostic Front-end", "SlipkNode", "Pink Flutter", "Kiss"]
        }
    ];

    const lineups2 = [
        {
            id: 1,
            classname: 'line__one',
            nomes: ["Lana Del Ploy"]
        },
        {
            id: 2,
            classname: 'line__two',
            nomes: ["Dua Lib", "The Backnd", "CSS Styled", "DJ Query", "ArrayAna Grande"]
        },
        {
            id: 3,
            classname: 'line__three',
            nomes: ["Miley Cypress", "The Bootstrap Boys", "Json Derulo", "CloudPlay", "Dev Lovato"]
        },
        {
            id: 4,
            classname: 'line__four',
            nomes: ["Kylie MiLOG", "Jenkins Brothers", "Rubycat Dolls"]
        }
    ];

    return (
        <>
            <Banner imagemDeFundo={home} texto="Boas vindas ao #CodeChella2023!" />
            <Container $espacamento="64px" $interno="120px">
                <Secao>
                    <img src={bandPlaying} alt="Uma imagem aqui" />
                    <div>
                        <h2>&lt; 11 e 12 de Março &gt;<br />Aluródromo de São Paulo</h2>
                        <p>
                            Hora de programar nossa memória com novas lembranças! Uma nova experiência sobre música, linguagens e, claro, tecnologia! Somos um festival diverso, com vários artistas e referências. Divirta-se!
                        </p>
                        <Botao imagem={comprar}>
                            Comprar ingresso!
                        </Botao>
                    </div>
                </Secao>
                <LineUp>
                    <h2>/Line-Up/</h2>
                    <BoxLineUp>
                        <Titulo>SÁBADO &lt;11/03&gt;</Titulo>
                        <Lines>
                            {lineups.map(line =>
                                <div key={line.id} className={line.classname}>
                                    {line.nomes.map(nome =>
                                        <p>{nome}</p>
                                    )}
                                </div>
                            )}
                        </Lines>
                    </BoxLineUp>
                    <BoxLineUp>
                        <Titulo>DOMINGO &lt;12/03&gt;</Titulo>
                        <Lines>
                            {lineups2.map(line =>
                                <div key={line.id} className={line.classname}>
                                    {line.nomes.map(nome =>
                                        <p>{nome}</p>
                                    )}
                                </div>
                            )}
                        </Lines>
                    </BoxLineUp>
                </LineUp>
            </Container>
            <BannerBottom />
        </>
    );
}

export default PaginaInicial;
