//import "materialize-css/dist/css/materialize.min.css";
// import "../custom-components/Footer.css";
import { Row, Col } from "react-bootstrap";
import React from "react";
import FooterContent1 from "./FooterContent1";
import FooterContent2 from "./FooterContent2";
import FooterContent3 from "./FooterContent3";

const FooterContainer = (props) => {
  // console.log("Footer", props);
  // const { fields } = props.module;
  return (
    <footer>
      <Row className="ft-main">
        <Col className="ft-main-item">
          <FooterContent1 module={props.module} />
          {/* <button className="btn">On Click</button> */}
        </Col>
        <Col className="ft-main-item">
          <FooterContent2 module={props.module} />
        </Col>
        <Col className="ft-main-item">
          <FooterContent3 module={props.module} />
        </Col>
      </Row>
    </footer>
  );
};

export default FooterContainer;
