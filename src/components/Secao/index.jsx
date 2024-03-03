import styled from "styled-components";

const Secao = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${props => props.$vacuo ? props.$vacuo : '48px'};
    color: var(--branco);
    text-align: ${props => props.$alinhamento_texto ? props.$alinhamento_texto : 'center'};
    img {
        flex: auto;
        max-width: 100%;
    }
    div {
        flex: auto;
        display: flex;
        flex-direction: column;
        align-items: ${props => props.$alinhar_itens ? props.$alinhar_itens : 'center'};
        gap: 24px;
        h2 {
            font-size: 32px;
            font-weight: 700;
        }
        p {
            max-width: 100%;
            line-height: 40px;
            font-size: 20px;
        }
    }
    .ordem-um { order: 2; }
    .ordem-dois { order: 1; }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        text-align: center;
        div {
            order: 2;
            align-items: center;
        }
        .ordem-um { order: 1; }
        .ordem-dois { order: 2; }
    }
    @media screen and (max-width: 500px) {
        .banda-tocando {
            height: 381px;
            object-fit: cover;
            border-radius: 16px;
        }
    }
`;

export default Secao;
