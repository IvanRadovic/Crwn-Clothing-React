import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  
    .title {
      font-size: 28px;
      margin-bottom: 25px;
      cursor: pointer;
    }
  
    .preview {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 20px;
    }

    @media(max-width:710px){
      .preview{
        grid-template-columns: repeat(2, 1fr);
        row-gap:20px
      }
    };

    @media(max-width:375px){
      .preview{
        grid-template-columns:1fr;
        row-gap:25px;
      }
    }
`;
  