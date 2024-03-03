import styled from "styled-components";
import Banner from "../../../components/Banner";
import Botao from "../../../components/Botao";
import Container from "../../../components/Container";
import ingressoBanner from "/Banner/ingresso.png";
import arrow from "/ingresso/arrow.svg";
import { useNavigate } from "react-router-dom";

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

const FormularioIngresso = ({ nome, setNome, email, setEmail, ingresso, setIngresso, nascimento, setNascimento }) => {

    const navigate = useNavigate();

    const tratamento = (evento) => {
        evento.preventDefault();
        navigate("compra");
    }

    return (
        <>
            <Banner imagemDeFundo={ingressoBanner} texto="Garanta seu Ingresso" />
            <Container $espacamento="64px">
                <SecaoIngresso>
                    <h2>Preencha o formulário a seguir:</h2>
                    <Formulario method="post" onSubmit={(e) => tratamento(e)}>
                        <label>Nome completo:
                            <Input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                        </label>
                        <label>E-mail:
                            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                        <div className="especificidades">
                            <label>
                                Tipo de ingresso:
                                <select value={ingresso} onChange={(e) => setIngresso(e.target.value)}>
                                    <option value="Pista Premium">Pista Premium</option>
                                    <option value="Pista Comum">Pista Comum</option>
                                    <option value="Cadeiras Térreo">Cadeiras Térreo</option>
                                    <option value="Cadeiras Superiores">Cadeiras Superiores</option>
                                    <option value="Rampas">Rampas</option>
                                </select>
                            </label>
                            <label>Data de nascimento:
                                <Input type="date" value={nascimento} onChange={(e) => setNascimento(e.target.value)} />
                            </label>
                        </div>
                        <Botao imagem={arrow} type="submit">
                            Avançar!
                        </Botao>
                    </Formulario>
                </SecaoIngresso>
            </Container>
        </>
    );
}

export default FormularioIngresso;
