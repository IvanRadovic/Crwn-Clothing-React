import styled from "styled-components";

export const AuthenticationContainer = styled.div`
    width: 900px;
    display: flex;
    justify-content: space-between;
    margin: 30px  auto;

    @media(max-width:1024px){
        width:100%;
        flex-direction: column;
        gap: 30px;
        justify-content: center;
        align-items: center;
    };
`;