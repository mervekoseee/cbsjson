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
  const students = [
    {
        ogr_no: "181307073",
        ogr_ad: "merve",
        s1_bas: "10/02/2022",
        s1_bit: "10/03/2022",
        durum_id: "devam ediyor",
    },
    {
        ogr_no: "181307073",
        ogr_ad: "merve",
        s1_bas: "10/02/2022",
        s1_bit: "10/03/2022",
        durum_id: "devam ediyor",
    },
    {
        ogr_no: "181307073",
        ogr_ad: "merve",
        s1_bas: "10/02/2022",
        s1_bit: "10/03/2022",
        durum_id: "devam ediyor",
    },
    {
      ogr_no: "181307073",
        ogr_ad: "merve",
        s1_bas: "10/02/2022",
        s1_bit: "10/03/2022",
        durum_id: "devam ediyor",
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
                      {students.map((student, i) => (
                        <tr
                          key={student.about}
                          style={{ fontSize: 14 }}
                         
                        >
                          <td className="text-center"  onClick={() => {
                            clickEventsOpen();
                          }}id="name">
                            {student.ogr_ad}
                          </td>
                          <td className="text-center"  onClick={() => {
                            clickEventsOpen();
                          }}id="no">
                            {student.ogr_no}
                          </td>
                          <td className="text-center"  onClick={() => {
                            clickEventsOpen();
                          }} id="sdate">
                            {student.s1_bas}
                          </td>
                          <td className="text-center"  onClick={() => {
                            clickEventsOpen();
                          }} id="edate">
                            {student.s1_bit}
                          </td>
                          <td className="text-center"  onClick={() => {
                            clickEventsOpen();
                          }} id="status">
                            {student.durum_id}
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
          Title={"Öğrenci Düzenle"}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Row>
            <Col>
              <FormInput
                name="name"
                key={students.ogr_ad}
                text="Öğrenci Adı"
                value={students.ogr_ad}
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
                value={students.map((student, i) => student.no)}
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
          Title={"Düzenle"}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter">

        </ButtonForm>
      </div>
    </StyledAboutPage>
  );
};
export default withLayout(About);
