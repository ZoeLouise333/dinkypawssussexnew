import Head from "next/head";
import Link from "next/link";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Dinky Paws | Uckfield Dog Walking | East Sussex</title>
      </Head>
      <div className="container">
        <Header />

        <section class="section1">
          <h2 class="title ">SERVICES</h2>
          <h5 class="info3 black">mileage fees may apply</h5>
          <h6 class="info4">*£1 per mile*</h6>
          <div class="subSection">
            <div class="catSection">
              <div class="subSection2 pink">
<h3 class="subTitle1">GROUP DOG WALKING</h3>

                <h4>£17 - 1 HOUR</h4>
              

                <h5> * 1 hour of walking/ running/ playing *</h5>
                <h5> * professional secured dog cages *</h5>
                <h5>
                  {" "}
                  * fresh drinking water and non slip mats in each cage *
                </h5>
                <h5> * a hose and dry off for the wetter / muddier walks *</h5>
                <h5> * a shampoo for those poop roller *</h5>
                <h5>
                  * i use my own waterproof leads which are cleaned between dogs
                  *
                </h5>
                <h5>
                  {" "}
                  * Air conditioned van which is great for the hot days *
                </h5>

                <h5>* tasty kibble as treats *</h5>
             

                <h4 className="groupSpace"> Groups walks are Weekdays only </h4>
                <h5>£10 - per additional dog from the same household</h5>
              </div>
              <div class="dogImage"></div>
            </div>
          </div>

          <div class="subSection">
            <div class="catSection">
              <div class="sitImage"></div>
              <div class="subSection2  orange">
                <h3 class="subTitle2">DOG/PUPPY SITTING</h3>

                <h4>£14 - 30 minutes</h4>
                <h4>£17 - 45 minutes</h4>
                <h4>£20 - per hour</h4>
                <h4>£17 - per hour 4+ hours</h4>
                <h5>£10 - per additional dog</h5>

                <h5>*can include a walk if required*</h5>
              </div>
            </div>
          </div>

          <div class="subSection">
            <div class="catSection">
              <div class="subSection2  teal">
                <h3 class="subTitle3">CAT SITTING</h3>
                <h4 class="white">£9 - 20 minutes</h4>
                <h4 class="white">£11 - 30 minutes</h4>
                <h5 class="white">
                  No aditional charge for more than one cat <br />
                </h5>
              </div>
              <div class="catImage"></div>
            </div>
          </div>
          <div className="pricing__background">
            <div className="pricing__text nf">
              <p>
                <div className="bold of">Before 8am and after 5pm</div>
                Dogs : Additional £3 per visit/hour
                <br />
                Cats : No additional charge
              </p>
              <p>
                <div className="bold of">Weekend + Bank Holiday Rates</div>
                Dogs : Additional £5 per service/hour <br />
                Cats : Additional £3 per service
              </p>
              <p>
                <div className="bold of">Milage Fees</div>
                £1 per mile one way from TN22 area.
              </p>

              <p>
                <div>* Please contact me for further information *</div>
              </p>
            </div>
          </div>
          <div class="subSection">
            <div class="catSection mb">
              <div class="nightImage"></div>
              <div class="subSection2 ssw blue34">
                <h3 class="subTitle2">OVERNIGHT SITTING</h3>
                <h4>£55 - 9pm till 7am</h4>
                <h4>£5 - additional consecutive hours either side</h4>
                <h4>£10 - additional non consecutive hour</h4>
                <h4>£10 - per additional dog</h4>
                <h4> 3 nights - friday/saturday/sunday only </h4>
                <h4> week nights - one night only</h4>
                <h5>* Please contact me for further information*</h5>
                <h5>
                  Dogs can only be left up to 4 hours at a time under Dinky Paws
                </h5>

                <div id="reviews"></div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
