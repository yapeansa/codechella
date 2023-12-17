import styled from "styled-components";
import Container from "../Container";
import footerLogo from "/footer-logo.svg";
import { FaWhatsapp, FaTwitch, FaInstagram, FaTwitter } from "react-icons/fa";

const Rodape = styled.footer`
    width: 100%;
    background: var(--roxo-boreal);
`;

const ContainerFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 72px 0;
    color: var(--branco);
    .social {
        .links-sociais {
            display: flex;
            align-items: center;
            gap: 8px;
            .p-social {
                font-size: 20px;
                line-height: 40px;
            }
            .social-group {
                display: flex;
                gap: 8px;
                .social-icon {
                    color: var(--branco);
                    text-decoration: none;
                    outline: none;
                }
            }
        }
    }
    .texto-rodape {
        max-width: 326px;
        font-size: 20px;
        line-height: 40px;
        font-weight: 500;
    }
`;

const Footer = () => {
    return (
        <Rodape>
            <Container>
                <ContainerFooter>
                    <div className="social">
                        <img src={footerLogo} alt="Logo CodeChella rodapé" />
                        <div className="links-sociais">
                            <p className="p-social">
                                Acesse nossas redes:
                            </p>
                            <div className="social-group">
                                <a href="https://web.whatsapp.com" target="_blank" className="social-icon">
                                    <FaWhatsapp size={25} />
                                </a>
                                <a href="https://twitch.tv" target="_blank" className="social-icon">
                                    <FaTwitch size={25} />
                                </a>
                                <a href="https://instagram.com" target="_blank" className="social-icon">
                                    <FaInstagram size={25} />
                                </a>
                                <a href="https://twitter.com" target="_blank" className="social-icon">
                                    <FaTwitter size={25} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <p className="texto-rodape">
                        Desenvolvido por Yago.<br />Projeto fictício sem fins comerciais.
                    </p>
                </ContainerFooter>
            </Container>
        </Rodape>
    );
}

export default Footer;
