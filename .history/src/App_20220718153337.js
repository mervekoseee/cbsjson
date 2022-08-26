import React, { useContext } from "react";
import { Routes } from "./components/Routes";
import { AppProvider } from "./providers/AppProvider";
import styled from "styled-components";
import GlobalStyle from "./providers/GlobalStyleProvider";
import { ThemeContext } from "./providers/ThermeProvider";
import { ToggleThemeButton } from "./components/ToggleThemeButton";

const StyledApp = styled.div`
.hide-desktop{
  @media(min-width: 768px){
    display: none;
  }
}`;


export const App = () => {
const {state} = useContext(ThemeContext);

  return (
    <StyledApp>
    <AppProvider>
      <Routes />
      </AppProvider>

    <GlobalStyle theme = {state}/>
    <ToggleThemeButton/>
    </StyledApp>
    
  );
};
export default App;