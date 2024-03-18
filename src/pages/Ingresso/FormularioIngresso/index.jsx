import styled from "styled-components";
import Banner from "../../../components/Banner";
import Botao from "../../../components/Botao";
import Container from "../../../components/Container";
import ingressoBanner from "/Banner/ingresso.png";
import arrow from "/ingresso/arrow.svg";
import { useNavigate } from "react-router-dom";
import { SecaoIngresso, Formulario, Input } from "./FormularioEstilos";

const FormularioIngresso = ({ infos, acoes }) => {

    const navigate = useNavigate();

    const tratamento = (evento) => {
        evento.preventDefault();
        const meuIngresso = {
            id: undefined,
            nome: infos.nome,
            email: infos.email,
            tipo: infos.tipo,
            nascimento: infos.nascimento 
        };
        const ingressos = JSON.parse(localStorage.getItem("meusIngressos")) || [];
        if (ingressos.length > 0) {
            meuIngresso.id = ingressos[ingressos.length - 1].id + 1;
            ingressos[ingressos.length] = {...meuIngresso};
        } else {
            meuIngresso.id = 1;
            ingressos[0] = {...meuIngresso};
        }
        localStorage.setItem("meusIngressos", JSON.stringify(ingressos));
        navigate("compra");
    };

    return (
        <>
            <Banner imagemDeFundo={ingressoBanner} texto="Garanta seu Ingresso" />
            <Container $espacamento="64px">
                <SecaoIngresso>
                    <h2>Preencha o formulário a seguir:</h2>
                    <Formulario method="post" onSubmit={(e) => tratamento(e)}>
                        <label>Nome completo:
                            <Input type="text" value={infos.nome} onChange={(e) => acoes.setNome(e.target.value)} required />
                        </label>
                        <label>E-mail:
                            <Input type="email" value={infos.email} onChange={(e) => acoes.setEmail(e.target.value)} />
                        </label>
                        <div className="especificidades">
                            <label>
                                Tipo de ingresso:
                                <select value={infos.ingresso} onChange={(e) => acoes.setTipo(e.target.value)}>
                                    <option value="Pista Premium">Pista Premium</option>
                                    <option value="Pista Comum">Pista Comum</option>
                                    <option value="Cadeiras Térreo">Cadeiras Térreo</option>
                                    <option value="Cadeiras Superiores">Cadeiras Superiores</option>
                                    <option value="Rampas">Rampas</option>
                                </select>
                            </label>
                            <label>Data de nascimento:
                                <Input type="date" value={infos.nascimento} onChange={(e) => acoes.setNascimento(e.target.value)} />
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
};

export default FormularioIngresso;
