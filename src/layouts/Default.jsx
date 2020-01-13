import React from "react";
import { Head, Header, Footer } from "../includes";

const Default = props => {
  return (
    <html>
      <Head />
      <body>
        <Header />
        <main class="page-content" aria-label="Content">
          <div class="wrapper">
            <Content />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default Default;
