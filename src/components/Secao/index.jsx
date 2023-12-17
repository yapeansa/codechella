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
`;

export default Secao;
