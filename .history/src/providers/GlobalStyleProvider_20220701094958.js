
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
       margin: 0;
         padding: 0;
         box-sizing: border-box;
         font-family: 'Poppins', sans-serif;
         background-color: var(--main-bg);
         color: var(--font-color);
  }

  :root{
    --main-bg: ${(props)=> props.theme ? 'rgba(2, 48, 71, 0.74)' :  '#f5ebe0'};
    --font-color: ${(props)=> props.theme ? 'white' : 'black'}
    --form-color: ${(props)=> props.theme ? 'white' : '#BEE5BF'}
    
  }
`;



export default GlobalStyle;