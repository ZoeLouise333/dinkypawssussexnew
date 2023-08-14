import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useState } from "react";
import { useEffect } from "react";

export default function Contact() {
  return (
    <>
      <div className="contactcontainer">
        <Head>
          <title>Dinky Paws | Uckfield Dog Walking | East Sussex</title>
        </Head>
        <div className="container">
          <Header />

          <div className="contactContainer">
            <div className="contactRow__column">
              <div className="contactRow__column ">
                <div className="contact-title bold">
                  To get in touch please email/text/whatsapp
                  <br />
                  <div className="contact-title">
                    <a className="fc" href="mailto:TheDinkyPaws@gmail.com">
                      TheDinkyPaws@gmail.com
                    </a>
                  </div>
                  <div className="contact-title">
                    <a className="fc" href="tel:+447715643527">
                      07715643527
                    </a>
                  </div>
                </div>
              </div>
              <div className="contact-title bold">
                UCKFIELD & surrounding areas
              </div>
              <br></br>
              <div className="contact-text">
                £1 per mile from Tn22 1uy
                <br></br>
                For an additional charge I will travel too: <br />
                <br></br>Maresfield<br></br> Buxted <br></br>
                Newick <br></br> Framfield <br></br> Black Boys
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

