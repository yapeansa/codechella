import styled from "styled-components";
import Container from "../Container";
import codechellaLogo from '/codechella-logo.svg';
import { Link, NavLink } from "react-router-dom";

const Cabecalho = styled.header`
    width: 100%;
    background-color: var(--roxo-boreal);
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 0;
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
                left: -100%;
                bottom: 0;
                width: 100%;
                height: 2px;
                background: var(--branco);
                transition: all .3s ease-in-out;
            }
            &:hover {
                &::before {
                    left: 0;
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

    return (
        <Cabecalho>
            <Container>
                <HeaderContainer>
                    <Link to="/">
                        <img src={codechellaLogo} alt="Codechella Logo" />
                    </Link>
                    <nav>
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
