import styled, { createGlobalStyle } from "styled-components";

const EstilosGlobais = createGlobalStyle`
    :root {
        --fonte-principal: 'Raleway';
        --fonte-titulos: 'Calistoga';
        --gradiente-boreal: linear-gradient(180deg, #304968 0%, #36C1A0 52.6%, #4650BD 100%);
        --roxo-boreal: #4650BD;
        --azul-claro: #C8DEEF;
        --secundaria-azul: #304968;
        --terciaria-coral: #36C1A0;
        --roxo-claro: #B6BCFF;
        --verde-escuro: #008364;
        --branco: #FFFFFF;
        --bullet-one: #0E7DF1;
        --bullet-two: #FE016E;
        --bullet-three: #01A89E;
        --bullet-four: #3F51B5;
        --bullet-five: #0E7DF1;
        --btn-hover: #2E7BA2;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: var(--fonte-principal), sans-serif;
        font-weight: 500;
        background: var(--gradiente-boreal);
        background-size: cover;
        background-repeat: no-repeat;
    }
`;

export default EstilosGlobais;
