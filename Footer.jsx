import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Kunjeti Gowtham @ {currYear} </p>
    </footer>
  );
}

export default Footer;
