import styled from "styled-components";
import Banner from "../../../components/Banner";
import Botao from "../../../components/Botao";
import Container from "../../../components/Container";
import ingresso from "/Banner/ingresso.png";
import arrow from "/ingresso/arrow.svg";
import { Link } from "react-router-dom";

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

const FormularioIngresso = () => {

    const tratamento = (evento) => {
        evento.preventDefault()
    }

    return (
        <>
            <Banner imagemDeFundo={ingresso} texto="Garanta seu Ingresso" />
            <Container $espacamento="64px">
                <SecaoIngresso>
                    <h2>Preencha o formulário a seguir:</h2>
                    <Formulario method="post" action="ingresso/compra" onSubmit={(e) => tratamento(e)}>
                        <label>Nome completo:
                            <Input type="text" required />
                        </label>
                        <label>E-mail:
                            <Input type="email" required />
                        </label>
                        <div className="especificidades">
                            <label>
                                Tipo de ingresso:
                                <select>
                                    <option>Pista Premium</option>
                                    <option selected>Pista Comum</option>
                                    <option>Cadeiras Térreo</option>
                                    <option>Cadeiras Superiores</option>
                                    <option>Rampas</option>
                                </select>
                            </label>
                            <label>Data de nascimento:
                                <Input type="date" />
                            </label>
                        </div>
                        <Link to="/ingresso/compra" style={{ textDecoration: 'none' }}>
                            <Botao imagem={arrow}>
                                Avançar!
                            </Botao>
                        </Link>
                    </Formulario>
                </SecaoIngresso>
            </Container>
        </>
    );
}

export default FormularioIngresso;
