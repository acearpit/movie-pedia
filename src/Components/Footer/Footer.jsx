import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="#daa520" className="font-small darken-3 pt-0">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          Copyright &copy; {new Date().getFullYear() + " "}
          <a href="https://www.MDBootstrap.com"> Arpit Gupta </a>. All Rights Reserved
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default Footer;
