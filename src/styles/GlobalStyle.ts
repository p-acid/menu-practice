import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
        background-color: gray;
        font-family: 'Gothic A1', sans-serif;
    }
`;

export default GlobalStyle;
