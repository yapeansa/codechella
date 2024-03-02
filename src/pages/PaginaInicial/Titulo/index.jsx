import styled from "styled-components";

const TituloEstilizado = styled.h3`
    font-family: var(--fonte-titulos);
    font-size: 48px;
    font-weight: 400;
    color: var(--branco);
    padding: 16px;
    background: var(--verde-escuro);
    display: inline-block;
    position: relative;
    margin-bottom: 48px;
    &::before {
        content: '';
        position: absolute;
        width: 360px;
        height: 1px;
        top: 50%;
        margin-top: -0.5px;
        left: -392px;
        background: var(--verde-escuro);
    }
    &::after {
        content: '';
        position: absolute;
        width: 360px;
        height: 1px;
        top: 50%;
        margin-top: -0.5px;
        right: -392px;
        background: var(--verde-escuro);
    }
    @media screen and (max-width: 768px) {
        &::before {
            width: 84px;
            left: -124px;
        }
        &::after {
            width: 84px;
            right: -124px;
        }
    }
`;

const Titulo = ({ children }) => {
    return (
        <TituloEstilizado>
            {children}
        </TituloEstilizado>
    );
}

export default Titulo;
