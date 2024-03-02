import styled from "styled-components";

const Container = styled.div`
    max-width: 1440px;
    margin: ${props => props.$espacamento ? props.$espacamento : 0} auto;
    padding: 0 120px;
    @media screen and (max-width:768px) {
        padding: 0 2rem;
    }
    @media screen and (max-width: 500px) {
        padding: 0 1.5rem;
    }
`;

export default Container;
