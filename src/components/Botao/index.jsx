import styled from "styled-components";

const BotaoEstilizado = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    background: var(--roxo-boreal);
    padding: 8px 16px;
    box-shadow: 4px 4px 0px 0px #444;
    border: none;
    border-radius: 16px;
    max-width: 261px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    &:hover {
        background-color: var(--btn-hover);
    }
    p {
        font-size: 20px;
        line-height: 40px;
        font-weight: 700;
        color: var(--branco);
    }
`

const Botao = ({ children, imagem }) => {
    return (
        <BotaoEstilizado>
            <p>{children}</p>
            <img src={imagem} alt="Comprar ingresso!" />
        </BotaoEstilizado>
    );
}

export default Botao;
