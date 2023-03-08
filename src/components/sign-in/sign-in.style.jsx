import styled from "styled-components";

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2{
        margin-top: 10px 0;
    }

    @media(max-width:1024px){
        width:100%;
    }
`;

export const ButtonsContainer = styled.div`
        display: flex;
        justify-content: space-between;
`;