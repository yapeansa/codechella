import styled from "styled-components";

const Container = styled.div`
    max-width: 1440px;
    margin: ${props => props.$espacamento ? props.$espacamento : 0} auto;
    padding: 0 120px;
`;

export default Container;
