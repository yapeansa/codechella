import styled from "styled-components";
import guitar from "/inicio/guitar.png";

const BannerBottom = styled.div`
    width: 100%;
    background: url(${guitar}) no-repeat center / cover;
    mix-blend-mode: multiply; 
    height: 340px;
    @media screen and (max-width: 768px) {}
`;

export default BannerBottom;
