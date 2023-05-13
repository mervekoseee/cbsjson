import React from "react";
import { withLayout } from "../partials/Layout";
import styled from "styled-components";
import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

const stylecontact =styled.div`

.home-about-social {
  text-align: center !important;
  padding-top: 25px;
  color: white !important;
}

.home-about-social-links {
  justify-content: center !important;
  padding-top: 15px !important;
  display: inline-block !important;
  position: relative !important;
  padding-inline-start: 0 !important;
}

.home-social-icons {
  position: relative !important;
  display: inline-block !important;
  width: 40px !important;
  height: 40px !important;
  text-align: center !important;
  font-size: 1.2em !important;
  line-height: 2em !important;
  background: rgba(255, 255, 255, 0.972) !important;
  border-radius: 50% !important;
  transition: 0.5s !important;
}

`

export const ContactPage = () => {
    return (
      <stylecontact>

     
        <div>         
            <div className="text-center">
            <h2 className="section-heading text-uppercase">Benimle iletişime Geçmek İçin</h2>
            <h3 className="section-subheading text-muted">Aşağıdaki linklerden bana ulaşabilirsiniz.</h3>
        </div>
        <Row>
          <Col md={12} className="home-about-social">
   
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mervekoseee"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/merve-mira%C3%A7-k%C3%B6se-4906301a8/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        
          
        </div>
        </stylecontact>
     
    )
}
export default withLayout(ContactPage);