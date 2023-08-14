import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import { init } from "ityped";
import { useEffect, useRef } from "react";

import { useState } from "react";

export default function Home() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      backSpeed: 40,
      strings: ["Fully Insured", "Dbs Checked", "First Aid Trained"],
    });
  }, []);

  return (
    <>
      <Head>
       <title>Dinky Paws | Uckfield Dog Walking | East Sussex</title>
      </Head>
      <div className="container">
        <Header />
        <div className="groupImage"></div>
        <div className="testimonials">
          <h1 className="margt">PROFESSIONAL PET SERVICES</h1>

          <h1 className="small">
            <span ref={textRef}></span>
          </h1>

          <h2 className="gap">uckfield and surounding areas</h2>

          <div className="container-test space mobile-reviews">
            <div className="card featured-four ">
              <div className="center ofz ">TRUSTWORTHY</div>
              <div className="bottom">
                <h3>
                  We know that it is important for pets to have physical and
                  mental stimulation every day. So we are here to help week
                  days, weekends, evenings, nights, bank holidays and school
                  holidays.
                </h3>
              </div>
            </div>
            <div className="card featured-four">
              <div className="center ofz">SATISFACION GUARANTEED</div>
              <div className="bottom">
                <h3>
                  We offer an initial free meet and greet so we can get to know
                  you and your pets and speak about their needs and
                  requirements, to give you confidence that they will be in the
                  best hands. Your pets health and saftey are our priority,
                  their needs will be met before we leave them.
                </h3>
              </div>
            </div>

            <div className="card featured-four ">
              <div className="center ofz">QUALITY CARE</div>
              <div className="bottom">
                <h3>
                  We will build a great relationship with your pet so that they
                  feel safe and happy when we visit. They are not just a pet,
                  they are part of your family, and so we will care for them as
                  if they were our own.
                </h3>
              </div>
            </div>
            <div className="card featured-four">
              <div className="center ofz">RELIABLE</div>
              <div className="bottom">
                <h3>
                  Life is very busy and plans do change, it is hard to always be
                  able to provide the attention and care that your pet needs.
                  Therefore we are flexible and adaptable to yours and your pets
                  needs.
                </h3>
              </div>
            </div>
          </div>

          <div className="line"></div>
        </div>{" "}
        <div className="testimonials space ">
          <div className="centerbb container-offer5">
            <div class="subSection5">
              <h2 class="title tc white margb">CONTACT ME</h2>
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
                <br /> location, date/days, times, any other useful information{" "}
              </h5>
            </div>
          </div>{" "}
          {/* <div className="centerbb container-offer">
            <div className="offer">
              Write a Google review and a Facebook review for your pet/pets to
              recieve a gift from Dinky Paws.{" "}
            </div>
          </div>
          
              <h1 className="space opacity">Reviews</h1>

            <a
              href="https://www.facebook.com/Dinky-Paws-103010098823249/reviews/?ref=page_internal"
              target="_blank"
              className="line"
            >
              <h1 className="space help">Click Here</h1>
            </a><h1 className="space center opacity">Services</h1>
        <h1 className="center small">
          Free meet and greet before each service
        </h1>
        <div className="container-test mobile-reviews mr">
            <div className="works" id="works">
              <div
                className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
              >
                {data.map((d) => (
                  <div className="containera">
                    <div className="container-test space mobile-reviews">
                      <div className="card featured-reviews">
                        <div className="top">
                          {" "}
                          <div className="">
                            <img src={d.imgone} alt="" className="user" />
                          </div>
                        </div>
                        <div className="bottom">
                          <div className="container-star">
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                          </div>
                        </div>
                        <div className="center">{d.descone}</div>
                        <div className="bottom">
                          <h3>{d.titleone}</h3>
                        </div>
                      </div>
                      <div className="card featured-reviews">
                        <div className="top">
                          {" "}
                          <div className="">
                            <img src={d.imgtwo} alt="" className="user" />
                          </div>
                        </div>
                        <div className="bottom">
                          <div className="container-star">
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                          </div>
                        </div>
                        <div className="center">{d.desctwo}</div>
                        <div className="bottom">
                          <h3>{d.titletwo}</h3>
                        </div>
                      </div>
                      <div className="card featured-reviews">
                        <div className="top">
                          {" "}
                          <div className="">
                            <img src={d.imgthree} alt="" className="user" />
                          </div>
                        </div>
                        <div className="bottom">
                          <div className="container-star">
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                            <div className="star"></div>
                          </div>
                        </div>
                        <div className="center">{d.descthree}</div>
                        <div className="bottom">
                          <h3>{d.titlethree}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <img
                alt=""
                className="arrow left"
                onClick={() => handleClick("left")}
              />
              <img
                alt=""
                className="arrow right"
                onClick={() => handleClick()}
              />
            </div>
          </div> 
          <div className="centerbb container-offer">
          <h1 className="space opacity">Reviews</h1>

          <a
            href="https://www.facebook.com/Dinky-Paws-103010098823249/reviews/?ref=page_internal"
            target="_blank"
            className="line"
          >
            <h1 className="space help">Click Here</h1>
          </a>
          <div className="offer">
            Write a Google review and a Facebook review for your pet/pets to
            recieve a gift from Dinky Paws.{" "}
          </div>
        </div>
        */}
          <h1 className="space center opacity">
            Solo dog walks, dog/cat sitting, puppy Services
          </h1>
          <h1 className="center small">
            Free meet and greet before each service
          </h1>
        </div>
        <div className="imagesRow  ">
          <Link href="/services" className="imagesRow__size imagesRow__size--1">
            <div className="imagesRow__title"> SOLO DOG WALKS</div>
          </Link>
          <Link href="/services" className="imagesRow__size imagesRow__size--2">
            <div className="imagesRow__title">PUPPY/DOG SITTING</div>
          </Link>
          <Link href="/services" className="imagesRow__size imagesRow__size--3">
            <div className="imagesRow__title"> CAT SITTING</div>
          </Link>
          <Link href="/services" className="imagesRow__size imagesRow__size--4">
            <div className="imagesRow__title"> OVERNIGHT STAYS</div>
          </Link>
        </div>
        <div className="wrapper">
          <div className="imageAwards">
            <div className="imageAwards__size imageAwards__size--1"></div>
            <div className="imageAwards__size imageAwards__size--2"></div>
            <div className="imageAwards__size imageAwards__size--3"></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
