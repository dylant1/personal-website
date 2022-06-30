import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle<any>`
  body {
    margin: 0;
    padding: min(0vmin, env(safe-area-inset-left));
    font-family: 'Poppins', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  
`;
export default GlobalStyle;
