import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
position: fixed;
display: flex;
bottom: 0;
left: 0;
width: 100%;
justify-content: center;
height: 3%;
background-color: rgba(202, 240, 248, 0.70)

`;

export const Footer = () => {
    return (
        <StyledFooter>
            Hoşgeldiniz.
        </StyledFooter>
        
    ) 
}
export default Footer;