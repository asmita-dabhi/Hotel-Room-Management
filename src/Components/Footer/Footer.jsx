import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Beach Resort | Hotel Room Book</h2>
      <p>
        &copy; <span>{year}</span> BeachResort.com - All Rights Copyright
        Reserved To{" "}
        <a
          target="_blank"
          rel="noreferrer"
          // href="https://www.facebook.com/SamiurRahmanMukul"
          href="https://www.nh-hotels.com"
        >
          Dabhi Asmita 
        </a>
      </p>
    </footer>
  );
}
