import Head from "next/head";
/*import emailjs from "emailjs-com";*/
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useState } from "react";
import { useEffect } from "react";

export default function Contact() {
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [information, setInformation] = useState("");

  const formSubmit = (e) => {
    {
      /*e.preventDefault();
    setIsLoading(true);

    if (name === "" || email === "") {
      setErrorMsg("Fill in required fields.");
      setIsLoading(false);
      return;
    }

    emailjs
      .send("gmail", "contact", {
        name,
        email,
        date,
        time,
        number,
        address,
        information,
      })
      .then(() => {
        setIsLoading(false);
        setEmailSent(true);
      })
      .catch((err) => {
        console.log(err);
        alert("Error!");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    emailjs.init("user_yxwOhgOsfatpJ95v1Rrjc");
  }, []);
*/
    }
  };
  return (
    <>
      <div className="container">
        <Head>
          <title>Dinky Paws | Puppy Services | Somerset</title>
        </Head>
        <div className="container">
          <Header />
          <div>
            <div className="centerbb container-offer">
              <div class="subSection">
                <h2 class="title tc white">CONTACT ME</h2>
                <h5 class="info3 white">
                  email:{" "}
                  <a class="pointer" href="mailto:thedinkypaws@gmail.com">
                    thedinkypaws@gmail.com
                  </a>
                </h5>
                <br />
                <h5 class="info3 white">
                  text or whatsapp:{" "}
                  <a class="pointer" href="tel:+447715643527">
                    07715 643527
                  </a>
                </h5>

                <h5 class="info6 white">
                  Please include: your name, service, pet name, pet type, breed,{" "}
                  <br /> location, date/days, times, any other useful
                  information{" "}
                </h5>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          {/*
          <div className="contactContainer">
            <div className="contactRow__column">
              <div className="contact-title space">DINKY PAWS</div>

              <br></br>
              <div className="contact-text">
                Taunton <br></br>Wellington<br></br> Bridgwater
              </div>

              <br></br>
              <div className="contact-text">
                <a className="fc" href="mailto:TheDinkyPaws@gmail.com">
                  TheDinkyPaws@gmail.com
                </a>
              </div>
              <br></br>
              <div className="contact-text">
                <a className="fc" href="tel:+447715643527">
                  07715643527
                </a>
              </div>
            </div>
            <div className="contactRow__column space">
              <div className="contact-title bold">
                To get in touch please fill in this form.
                <br />
                <br />
              </div>
              {!emailSent && (
                <form onSubmit={formSubmit}>
                  {errorMsg != "" && (
                    <div className="error-msg">{errorMsg}</div>
                  )}
                  <div className="contactRow space">
                    <input
                      className="input__first nf"
                      placeholder="Name"
                      required
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                    <input
                      className="input__first nf"
                      placeholder="Email"
                      required
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="contactRow">
                    <input
                      className="input__first nf"
                      placeholder="Date"
                      onChange={(e) => setDate(e.target.value)}
                      value={date}
                    />

                    <input
                      className="input__first nf"
                      placeholder="Time"
                      onChange={(e) => setTime(e.target.value)}
                      value={time}
                    />
                  </div>
                  <div className="contactRow">
                    <input
                      className="input__first nf"
                      placeholder="Pet Type"
                      onChange={(e) => setNumber(e.target.value)}
                      value={number}
                    />
                    <input
                      className="input__first nf"
                      placeholder="Location"
                      onChange={(e) => setAddress(e.target.value)}
                      value={address}
                    />
                  </div>
                  <div className="contactRow">
                    <textarea
                      className="input__last nf"
                      placeholder="Please state which service you require, and any additional information."
                      onChange={(e) => setInformation(e.target.value)}
                      value={information}
                    />
                  </div>
                  <div className="contactRow">
                    <input
                      disabled={isLoading}
                      type="submit"
                      className="input__send nf"
                      value={isLoading ? "SENDING..." : "SEND"}
                    />
                  </div>
                </form>
              )}
              {emailSent && (
                <div className="bold fz ">
                  Your email was sent. Please allow 48 hours for me to get back
                  to you.
                </div>
              )}
            </div>
              
            <div className="contactRow__column">
              <div className="contact-text">
                <div className="contact-title space">HOURS</div>
                <br />
                MON 08:00 - 22:00 <br></br>TUE 08:00 - 22:00 <br></br>WED 08:00
                - 22:00 <br></br>THU 08:00 - 22:00<br></br> FRI 08:00 - 22:00
                <br></br> SAT 09:00 - 20:00 <br></br>SUN 09:00 - 20:00
                <br></br>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>

        <div className=" bgc">
          <div className="pricing__text">
            <p>
              <div className="centerbb bold">
                {" "}
                You can also{" "}
                <a className="link bold" href="mailto:TheDinkyPaws@gmail.com">
                  email
                </a>{" "}
                or{" "}
                <a className="link bold" href="tel:+447715643527">
                  Text.
                </a>
              </div>
              <br />
              <div className="bold centerbb nf">
                {" "}
                Dinky Paws is based in Taunton, but also covers Wellington and
                Bridgwater, there may be a mileage charge depending on location
                and which serivce is required.
              </div>
            </p>
          </div>
            */}
        </div>

        <Footer />
      </div>
    </>
  );
}
