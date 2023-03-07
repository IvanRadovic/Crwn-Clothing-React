import styled from "styled-components";

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    column-gap: 20px;
    row-gap: 50px;

    @media(max-width:775px){
        grid-template-columns:repeat(2,1fr) ;
    };

    @media(max-width:375px){
        grid-template-columns:1fr ;
    }

    
`;

export const CategoryTitle = styled.div`
    font-size: 38px;
    margin-bottom: 25px;
    text-align: center;
`;



