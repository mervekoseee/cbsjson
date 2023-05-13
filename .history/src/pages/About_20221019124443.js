import React, {useState} from "react";
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
  const bobins = [
    {
      id:"1",
      no: "bobin no1",
      about: "1. Bobin açıklaması",
      username: "1.Müşteri Adı",
      orderno: "1. Sipariş Numarası"

    },
    {
      id:"2",
      no: "bobin no2",
      about: "2. Bobin açıklaması",
      username: "2.Müşteri Adı",
      orderno: "2. Sipariş Numarası"

    },
    {
      id:"3",
      no: "bobin no3",
      about: "3. Bobin açıklaması",
      username: "3.Müşteri Adı",
      orderno: "3. Sipariş Numarası"

    },
    {
      id:"4",
      no: "bobin no4",
      about: "4. Bobin açıklaması",
      username: "4.Müşteri Adı",
      orderno: "4. Sipariş Numarası"
    }
  
  ]
  
    return (
        <StyledAboutPage>
  
        </StyledAboutPage>
    )
}
export default withLayout(About);