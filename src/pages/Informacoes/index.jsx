import styled from "styled-components";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import info from "/Banner/info.png";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import infos from "./Info/db.json";

const SecaoInformacoes = styled.section`
    .titulo__info {
        font-family: var(--fonte-titulos);
        font-size: 48px;
        font-weight: 400;
        color: var(--branco);
        text-align: center;
    }
`;

const PerguntasContainer = styled.div`
    max-width: 996px;
    margin: 48px auto 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const CaixaTitulo = styled.div`
    background: var(--roxo-boreal);
    color: var(--branco);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    cursor: pointer;
    h2 {
        font-size: 32px;
        font-weight: 700;
    }
`;

const Bodying = styled.div`
    background: var(--azul-claro);
    padding: 16px;
    display: ${props => props.$display ? 'block' : 'none'};
    p {
        font-size: 20px;
        font-weight: 500;
        line-height: 40px;
    }
`;

const Informacoes = () => {
    document.title = "CodeChella | Informações"

    const [display, setDisplay] = useState(infos);

    const toggleBox = (id) => {
        const lista = display.filter(item => item.id === id)
        if (lista[0].display) {
            lista[0].display = false
            setDisplay([...display])
        } else {
            display.map(elemento => elemento.display = false)
            lista[0].display = !lista[0].display
            setDisplay([...display])
        }
    }

    return (
        <>
            <Banner imagemDeFundo={info} texto="Informações Gerais" />
            <Container $espacamento="64px">
                <SecaoInformacoes>
                    <h2 className="titulo__info">Perguntas Frequentes:</h2>
                    <PerguntasContainer>
                        {infos.map(campo =>
                            <div key={campo.id}>
                                <CaixaTitulo onClick={() => toggleBox(campo.id)}>
                                    <h2>{campo.titulo}</h2>
                                    <IoMdArrowDropdown size={25} />
                                </CaixaTitulo>
                                <Bodying $display={campo.display}>
                                    <p>{campo.texto}</p>
                                </Bodying>
                            </div>
                        )}
                    </PerguntasContainer>
                </SecaoInformacoes>
            </Container>
        </>
    );
}

export default Informacoes;
