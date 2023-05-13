import React from "react";
import { Header } from "./header";
import { Footer } from "./Footer";


export const withLayout =(Component) => (props) =>{
    return(
        <div>
            <Header/>
            <Component/>
            <Footer/>
        </div>
    )
}