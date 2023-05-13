import React, {useState} from "react";
import { withLayout } from "../partials/Layout";
import styled from "styled-components";
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
    Table
  } from "reactstrap";
  import FormInput from '../components/FormInput';
  import ModalForm from '../components/ModalForm';
  

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
  const clickEventsOpen = () => {
    setShowModal(true);
    console.log(selectedBobin)
    
  };
  const clickEventsClose = () => {
    setShowModal(false);
  };

    return (
        <StyledAboutPage>
              <div className="content pb-0">
    <Row style={{ height: "100%" }}>
      <Col md="10">
        <Card>
          <CardHeader>
            <CardTitle tag="h4">
              Bobin Listesi
            </CardTitle>
          </CardHeader>
          <CardBody>
            <Row className="col-12">
              <Table>
                <thead className="text-primary">
                  <tr style={{ background: "#f5efff ", color: "#7371fc" }}>
                    
                    <th className="text-center">
                     Bobin No
                    </th>
                    <th className="text-center">
                        {" "}
                      Malzeme Açıklaması{""}
                    </th>
                    <th className="text-center">
                    {" "} Müşteri Adı{" "}
                    </th>
                    <th className="text-center">
                    {" "} Sipariş No{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bobins.map((bobin, i) => (
                  <tr key={bobin.about}
                  style={{ fontSize: 14 }}
                   onClick={()=> {clickEventsOpen()}}>
                    <td className="text-center" id="no" >{bobin.no}</td>
                    <td className="text-center" id="about">{bobin.about}</td>
                    <td className="text-center" id="username">{bobin.username}</td>
                    <td className="text-center" id="orderno">{bobin.orderno}</td>
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
show = {showModal}
handleClose = {clickEventsClose}
Title={"Bobin Bilgileri"}
size="lg"
aria-labelledby="contained-modal-title-vcenter">
   <Row>
          <Col>
            <FormInput
              name="no"
              key = {bobins.id}
              text="Bobin Numarası"
              value={bobins.no}
              onChange={handleClick()}
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
              value={bobins.map((bobin, i) => (bobin.no))}
              onChange={(input) => {selectedBobin(input)}}
              type="text"
              required={true}
              disabled
            />
          </Col>
        </Row>
</ModalForm>
  </div>
        </StyledAboutPage>
    )
}
export default withLayout(About);