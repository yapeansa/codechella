import { styled } from "styled-components";

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

export { SecaoCompra, Ingresso };