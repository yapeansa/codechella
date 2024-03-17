import { styled } from "styled-components";

const SecaoIngresso = styled.section`
    color: var(--branco);
    h2 {
        font-family: var(--fonte-titulos);
        font-size: 48px;
        font-weight: 400;
        text-align: center;
    }
`;

const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    max-width: 795px;
    margin: 0 auto;
    font-size: 32px;
    font-weight: 700;
    margin-top: 48px;
    label {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    .especificidades {
        width: 100%;
        display: flex;
        gap: 24px;
        label {
            flex: 1;
            select {
                height: 48px;
                border: none;
                padding: 0 10px;
                line-height: 40px;
                font-size: 20px;
                outline: none;
            }
        }
    }
    @media screen and (max-width: 768px) {
        .especificidades {
            flex-direction: column;
        }
    }
`;

const Input = styled.input`
    height: 48px;
    font-size: 20px;
    font-weight: 500;
    line-height: 40px;
    outline: none;
    padding: 0 10px;
    display: block;
    width: 100%;
    border: none;
`;

export { SecaoIngresso, Formulario, Input };
