import React from "react";
import styled from "styled-components";
import { withLayout } from "../partials/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide1 from "../assets/homepage1.jpg";
import slide2 from "../assets/homepage2.jpg";
import { Link } from "react-router-dom";

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
    background-color: rgba(33, 158, 188, 0.5);
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }
  p {
    // width: 60%;
    text-align: center;
    color: white;
  }
`;

export const HomePage = () => {
  return (
    <StyledHomePage>
      <Carousel showThumbs={false}>
        <StyledStyle imgUrl={slide1}>
          <div className="text-container">
            
            <p>Kocaeli Üniversitesi Bilişim Sistemleri Mühendisliği Staj Takip Sayfasına Hoşgeldiniz.</p>
          </div>
          <div className="text-container">
            
            <p>Staj evrakları için yana kaydırınız.</p>
          </div>
        </StyledStyle>
        <StyledStyle imgUrl={slide2}>
          <div className="text-container">
            <ul className="list-group">
              <li className="list-group-item">
                Staj -I/II Çalışma Takvimi{" "}
                <a
                  target="_blank"
                  href="http://bilisim.kocaeli.edu.tr/dosyalar/staj/staj-I_II-takvimi.pdf"
                >
                  Tıklayınız
                </a>
              </li>
              <li className="list-group-item">
                İzlenecek Adımlar{" "}
                <a
                  target="_blank"
                  href="http://bilisim.kocaeli.edu.tr/dosyalar/staj/StajEsaslari_yeni.pdf"
                >
                  Tıklayınız
                </a>
              </li>
              <li className="list-group-item">
                Staj Akış Diyagramı
                <a
                  target="_blank"
                  href="http://bilisim.kocaeli.edu.tr/dosyalar/staj/StajAkisDiyagrami.pdf"
                >
                  Tıklayınız
                </a>
              </li>
              <li className="list-group-item">
                Staj I-II/İş Yeri Eğitimi Beyanı
                <a
                  target="_blank"
                  href="http://bilisim.kocaeli.edu.tr/dosyalar/staj/Staj-I_II-Isyeri-Egitimi-Beyani.pdf"
                >
                  Tıklayınız
                </a>
              </li>
              <li className="list-group-item">
                Staj Başvuru ve Kabul Formu
                <a
                  target="_blank"
                  href="dosyalar/staj/stajraporu.docx"
                >
                  Tıklayınız
                </a>
              </li>
              <li className="list-group-item">
                Staj Değerlendirme Formu
                <a
                  target="_blank"
                  href="dosyalar/staj/stajdegerlendirmeformu.doc"
                >
                  Tıklayınız
                </a>
              </li>
              <li className="list-group-item">
                Staj Raporu
                <a
                  target="_blank"
                  href="dosyalar/staj/stajraporu.docx"
                >
                  Tıklayınız
                </a>
              </li>
              <li className="list-group-item">
                Sigorta Beyan Formu
                <a
                  target="_blank"
                  href="http://bilisim.kocaeli.edu.tr/dosyalar/staj/sigorta-beyani.pdf"
                >
                  Tıklayınız
                </a>
              </li>
              <li className="list-group-item">
                Devlet Katkı Talep Formu
                <a
                  target="_blank"
                  href="dosyalar/staj/devletkatkitalepformu.xlsx"
                >
                  Tıklayınız
                </a>
              </li>
            </ul>
          </div>
        </StyledStyle>
      </Carousel>
      <div className="divider" />
    </StyledHomePage>
  );
};

export default withLayout(HomePage);
