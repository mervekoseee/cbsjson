import React from "react";
import { withLayout } from "../partials/Layout";
import styled from "styled-components";


const StyledPrivate = styled.div`
body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
  
  .places-container {
    position: absolute;
    top: 10px;
    left: 100%;
    transform: translateX(-50%);
    z-index: 10;
    width: 300px;
  }
  
  .map-container {
    width: 80%;
    height: 100vh;
    }
  
  .combobox-input {
    width: 100%;
    padding: 0.5rem;
  }
  #map { height: 180px; };
`;

export const PrivatePage = () =>{
return<div>kdjfkdj</div>

function Map (){
    return(
    <div id = "map">

    </div>
    );
}
}
export default withLayout(PrivatePage);