import React, { useState } from "react";
import { withLayout } from "../partials/Layout";
import styled from "styled-components";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  Table,
} from "reactstrap";
import FormInput from "../components/FormInput";
import ModalForm from "../components/ModalForm";
import ButtonForm from "../components/ButtonForm";

const StyledAboutPage = styled.div`
  padding: 50px;
`;

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const [showBModal, setShowBModal] = useState(false);
  const [selectedOgr, setSelectedOgr] = useState({
  
  });
  const ogr = [
    {
        ogr_no: "1",
        ogr_ad: "bobin no1",
        s1_bas: "1. Bobin açıklaması",
        s1_bit: "1.Müşteri Adı",
        durum_id: "1. Sipariş Numarası",
    },
    {
      id: "2",
      no: "bobin no2",
      about: "2. Bobin açıklaması",
      username: "2.Müşteri Adı",
      orderno: "2. Sipariş Numarası",
    },
    {
      id: "3",
      no: "bobin no3",
      about: "3. Bobin açıklaması",
      username: "3.Müşteri Adı",
      orderno: "3. Sipariş Numarası",
    },
    {
      id: "4",
      no: "bobin no4",
      about: "4. Bobin açıklaması",
      username: "4.Müşteri Adı",
      orderno: "4. Sipariş Numarası",
    },
  ];
  const clickEventsOpen = () => {
    setShowModal(true);
    console.log(selectedOgr);
  };
  
  const clickEventsClose = () => {
    setShowModal(false);
    setShowBModal(false);
  };
  const downloadbutton = () =>{
    setShowBModal(true);
    console.log("İçeride");
  }
 
  return (
    <StyledAboutPage>
      <div className="content pb-0">
        <Row style={{ height: "100%" }}>
          <Col md="10">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Öğrenci Listesi</CardTitle>
              </CardHeader>
              <CardBody>
                <Row className="col-12">
                  <Table>
                    <thead className="text-primary">
                      <tr style={{ background: "#f5efff ", color: "#7371fc" }}>
                        <th className="text-center">Öğrenci Adı</th>
                        <th className="text-center"> Numarası{""}</th>
                        <th className="text-center"> Staj Başlama Tarihi </th>
                        <th className="text-center"> Staj Bitiş Tarihi </th>
                        <th className="text-center"> Durumu </th>
                        <th className="text-center"> Dosyayı İndir </th>
                      </tr>
                    </thead>
                    <tbody>
                      {ogr.map((bobin, i) => (
                        <tr
                          key={bobin.about}
                          style={{ fontSize: 14 }}
                         
                        >
                          <td className="text-center"  onClick={() => {
                            clickEventsOpen();
                          }}id="no">
                            {bobin.no}
                          </td>
                          <td className="text-center"  onClick={() => {
                            clickEventsOpen();
                          }}id="about">
                            {bobin.about}
                          </td>
                          <td className="text-center"  onClick={() => {
                            clickEventsOpen();
                          }} id="username">
                            {bobin.username}
                          </td>
                          <td className="text-center"  onClick={() => {
                            clickEventsOpen();
                          }} id="orderno">
                            {bobin.orderno}
                          </td>
                          <td className="text-center"  onClick={() => {
                            clickEventsOpen();
                          }} id="orderno">
                            {bobin.orderno}
                          </td>
                          <td className="text-center" id="orderno">
                           <button type="button" onClick={() => {
                            downloadbutton();
                          }} className="btn btn-primary">İndir</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <ModalForm
          className="card-user"
          show={showModal}
          handleClose={clickEventsClose}
          Title={"Bobin Bilgileri"}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Row>
            <Col>
              <FormInput
                name="no"
                key={ogr.id}
                text="Bobin Numarası"
                value={ogr.no}
                type="text"
                required={true}
                disabled
              />
            </Col>
            <Col>
              {" "}
              <FormInput
                name="about"
                text="Açıklaması"
                value={ogr.map((bobin, i) => bobin.no)}
                onChange={(input) => {
                  selectedOgr(input);
                }}
                type="text"
                required={true}
                disabled
              />
            </Col>
          </Row>
        </ModalForm>
        <ButtonForm 
        className="card-user"
          show={showBModal}
          handleClose={clickEventsClose}
          Title={"Bobin Bilgileri"}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter">

        </ButtonForm>
      </div>
    </StyledAboutPage>
  );
};
export default withLayout(About);
