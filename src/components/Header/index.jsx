import styled from "styled-components";
import Container from "../Container";
import codechellaLogo from '/codechella-logo.svg';
import { Link, NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useState } from "react";


const Cabecalho = styled.header`
    width: 100%;
    background-color: var(--roxo-boreal);
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0;
    nav {
        position: relative;
        .menu-dropdown {
            display: none;
        }
        ul {
            display: flex;
            gap: 32px;
            .active {
                text-decoration: none;
                color: var(--branco);
                font-family: var(--fonte-principal);
                font-size: 20px;
                font-weight: 700;
                line-height: 40px;
                position: relative;
                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 2px;
                    background: var(--branco);
                }
            }
            .link {
                text-decoration: none;
                color: var(--branco);
                font-family: var(--fonte-principal);
                font-size: 20px;
                font-weight: 700;
                line-height: 40px;
                position: relative;
                overflow: hidden;
                &::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    bottom: 0;
                    width: 0;
                    height: 2px;
                    background: var(--branco);
                    transition: all .3s ease-in-out;
                }
                &:hover {
                    &::before {
                        width: 100%;
                        left: 0;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        ul {
            gap: 3rem;
            .link {
                font-size: 18px;
            }
        }
    }

    @media screen and (max-width: 500px) {
        flex-direction: row;
        nav {
            .menu-dropdown {
                display: block;
            }
            ul {
                background: var(--roxo-boreal);
                position: absolute;
                right: 0;
                width: 193px;
                padding: 16px;
                display: ${props => props.$mostrarDrop ? 'flex' : 'none'};
                flex-direction: column;
                gap: 5px;
                .active {
                    text-align: center;
                    padding: .7rem 0;
                    &::before {
                        height: 1px;
                    }
                }
                .link {
                    text-align: center;
                    position: relative;
                    padding: .7rem 0;
                    &::before {
                        content: '';
                        width: 146px;
                        height: 1px;
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        margin-left: -73px;
                        color: var(--branco);
                    }
                    &:last-child {
                        &::before {
                            width: 0;
                        }
                    }
                }
            }
        }
    }
`;

const Header = () => {
    const menu = [
        {
            id: 1,
            titulo: "A experiência",
            caminho: "experiencia"
        },
        {
            id: 2,
            titulo: "Mapa de Setores",
            caminho: "setores"
        },
        {
            id: 3,
            titulo: "Informações",
            caminho: "informacoes"
        },
        {
            id: 4,
            titulo: "Ingresso",
            caminho: "ingresso"
        }
    ];

    const [ligaDesliga, setLigaDesliga] = useState(false);

    const dropdown = () => {
        setLigaDesliga(!ligaDesliga);
    };

    return (
        <Cabecalho>
            <Container>
                <HeaderContainer $mostrarDrop={ligaDesliga}>
                    <Link to="/">
                        <img src={codechellaLogo} alt="Codechella Logo" />
                    </Link>
                    <nav>
                        <div className="menu-dropdown" onClick={dropdown}>
                            <MdMenu color="var(--branco)" size={30} />
                        </div>
                        <ul>
                            {menu.map(item =>
                                <NavLink
                                    key={item.id}
                                    to={item.caminho}
                                    className={({ isActive }) => isActive ? "active" : 'link'}
                                >
                                    {item.titulo}
                                </NavLink>
                            )}
                        </ul>
                    </nav>
                </HeaderContainer>
            </Container>
        </Cabecalho>
    );
}

export default Header;
