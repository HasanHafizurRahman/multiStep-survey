import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
/* @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    body {
        background: ${({ theme }) => theme.color.white};
        font-family: 'Poppins', sans-serif;
        color: #000;
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;

        @media (max-width: ${({ theme }) => theme.mobile}) {
            font-size: 55.5%;
        }
    }

    img {
        width: 100%;
        height: 100%;
    }

`