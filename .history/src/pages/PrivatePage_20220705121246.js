import React from "react";
import { withLayout } from "../partials/Layout";
import Map from "../components/Map";




export const PrivatePage = () =>{
return(
  <div>
    <Map/>
  </div>
);


}
export default withLayout(PrivatePage);