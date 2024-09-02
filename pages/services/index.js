import Head from "next/head";
import Link from "next/link";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>
          Dinky Paws | Dog Walking | Cat Sitting | Uckfield | Sussex
        </title>
      </Head>
      <div className="container">
        <Header />

        <section class="section1">
          <h2 class="title margt2 ">SERVICES</h2>

          <h5 class="info3 black ">
            {" "}
            Professional friednly dog walker who will love your dog no matter
            waht breed
          </h5>

          <div class="subSection">
            <div class="catSection">
              <div className="groupCol">
                <div class="dogImageD"></div>
                <div class="dogImageC"></div>
              </div>
              <div class="subSection2 pink">
                <h3 class="subTitle1"> GROUP DOG WALKING </h3>
                <h3 class="subbyTitle1">£15 - 1 hour </h3>
                <h5>* * *</h5>

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
                <h5>* * *</h5>

                <h4 className="groupSpace"> Groups walks are Weekdays only </h4>
                <h5>£10 - per additional dog from the same household</h5>
              </div>
              <div className="groupCol">
                <div class="dogImageB"></div>
                <div class="dogImageA"></div>
              </div>
            </div>
          </div>
          <div className="pricing__background">
            <div className="pricing__text nf">
              <p>
                <div className="bold of">Weekend + Bank Holiday Rates</div>
                Dogs : Additional £10 per service/hour <br />
                Cats : Additional £3 per service
                <br />
                <br />
              </p>
              <p>
                <div className="bold of">Before 8am and after 5pm</div>
                Dogs : Additional £5 per visit/hour
                <br />
                Cats : No additional charge
                <br />
                <br />
              </p>
              <p>
                <div className="bold of">Milage Fees</div>
                £1 per mile one way from TN22 1UY area.
              </p>

              <p>
                <div>* Please contact me for further information *</div>
              </p>
            </div>
          </div>
          <div class="subSection">
            <div class="catSection">
              <div class="subSection222  orange">
                <h3 class="subTitle2">SOLO DOG WALKS/VISITS</h3>

                <h4> 1 hour : small - £20 * medium/large - £25</h4>
                <h4> 45 minutes : small - £17 * medium/large - £21 </h4>
                <h4> 30 minutes : small - £15 * medium/large - £17 </h4>
                <h5>£10 - per additional dog</h5>
                  <h5>small breeds carried out by Amanda
            </h5>
                  <h5>medium/large breeds carried out by Zoe</h5>
              </div>
              <div class="sitImage"></div>

              <div class="subSection222  teal">
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

          <div class="subSection">
            <div class="catSection mb">
              <div class="nightImage"></div>
              <div class="subSection2 ssw blue34">
                <h3 class="subTitle2">OVERNIGHT SITTING</h3>
                <h4>£55 - 9pm till 7am</h4>
                <h4>£5 - additional consecutive hours either side</h4>
                <h4> non consecutive hours please enquire</h4>
                <h4>£10 - per additional dog</h4>
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
