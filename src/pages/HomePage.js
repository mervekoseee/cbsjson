import React from "react";
import styled from "styled-components";
import { withLayout } from "../partials/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../assets/homepage1.jpg";
import slide2 from "../assets/homepage2.jpg";

const StyledHomePage = styled.div`
  height: 90vh;
  align-items: center;
  font-size: 30px;
  .divider {
    height: 10px;
    background-color: rgba(33, 158, 188, 1);
  }
`;

const StyledStyle = styled.div`
  background-image: url(${(props) => props.imgUrl});
  display: flex;
  height: 90vh;
  background-position: center center;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;

  .text-container {
    background-color: rgba(33, 158, 188, 0.8);
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
  p {
    // width: 60%;
    text-align: center;
    color: black;
  }
`;

export const HomePage = () => {
  return (
    <StyledHomePage>
      <Carousel showThumbs={false}>
        <StyledStyle imgUrl={slide1}>
          <div className="text-container">
            <p>
              Coğrafi Bilgi Sistemi - JSON Sistemine Hoşgeldiniz
            </p>
          </div>
        </StyledStyle>
        <StyledStyle imgUrl={slide2}>
          <div className="text-container">
            Noktalar, çokgenler, çizgiler, dikdörtgenler ve daireler çizmek için çizim araçlarını kullanın.
            <br/>
            <br/>
            Çizmiş olduğunuz geometrik çizimlerin JSON Formatındaki verileri haritanın yan kısmında size sunulacaktır.
            <br/>
            <br/>
            Bu sistem CBS Teknolojileri ve Bilgi Teknolojileri ile entegre olarak çalışanlar için hazırlanmıştır.
            
          </div>
        </StyledStyle>
      </Carousel>
      <div className="divider" />
    </StyledHomePage>
  );
};

export default withLayout(HomePage);
