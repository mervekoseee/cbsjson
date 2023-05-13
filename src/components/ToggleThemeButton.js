import React, { useCallback, useContext } from "react";
import { ThemeContext } from "../providers/ThermeProvider";
import sunIcon from "../assets/lightmode.png";
import moonIcon from "../assets/darkmode.png";
import styled from "styled-components";
import { useLocalStorage } from "../hooks/useLocalStorage";

const StyledToggleThemeButton = styled.div`
position: fixed;
bottom: 40px;
right: 10px;

button {
    background-color: rgba(202, 240, 248, 0.70);
    border: none;
    padding: 5px;
    curser: pointer;
    img{
        width:40px;
        height: auto;
    }
    
}

`;

export const ToggleThemeButton = () => {

    const { state, dispatch } = useContext(ThemeContext);
    const[theme, setTheme] = useLocalStorage('theme', false);

    const handleClick = useCallback(
        () => {
            dispatch({ type: "CHANGE_THEME", payload: !state });
            setTheme(!state);
        }, [dispatch, state, setTheme]);

    return (
        <StyledToggleThemeButton>
            <button onClick={handleClick}>
                {state ? (
                    <img alt="sun" src={sunIcon} />
                ) : (
                    <img alt="moon" src={moonIcon} />
                )
                }
            </button>
        </StyledToggleThemeButton>
    );

};