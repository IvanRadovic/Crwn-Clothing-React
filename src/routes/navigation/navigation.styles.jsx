import styled from "styled-components";
import { Link } from "react-router-dom";

 export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex; 
  justify-content: center;
  align-items: center;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer; 
`

// .navigation {
    
  
//     .logo-container {
//       height: 100%;
//       width: 70px;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }
  
//     .nav-links-container {
      // width: 50%;
      // height: 100%;
      // display: flex;
      // align-items: center;
      // justify-content: flex-end;
  
//       .nav-link {
//         padding: 10px 15px;
//         cursor: pointer; 
//       }
//     }
//   }
  