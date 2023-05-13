import React from "react";
import { withLayout } from "../partials/Layout";
import styled from "styled-components";

const StyledAboutPage = styled.div`
padding: 50px;

`;

const About = () => {
    const [showModal, setShowModal] = useState(false);
  const [selectedBobin, setSelectedBobin] = useState({
      id:"",
      no: "",
      about: "",
      username: "",
      orderno: ""

  });
    return (
        <StyledAboutPage>
  
        </StyledAboutPage>
    )
}
export default withLayout(About);