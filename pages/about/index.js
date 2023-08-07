import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";

export default function Aboutme() {
  return (
    <>
      <Head>
        <title>Dinky Paws | Puppy Services | Somerset</title>
      </Head>
      <div className="container">
        <Header />

        <div className="aboutMe">
          <div className="aboutMe__size--image1"></div>
          <div className="aboutMe__column aboutMe__column-padding">
            <div className="aboutMe__column--title1">ABOUT ME</div>
            <p className="nf">
              Hello, I'm Zoe, I have a wonderful young dalmatian called Pongo.
              We have just moved to East Sussex from Somerset, where I first
              started Dinky Paws. It has been hard to leave all my dogs and cats
              behind as I had built a strong relationship with them all and
              their family too.
              <br />
              <br />I loved dog walking and cat sitting back in Somerset so it
              was a no brainer that I had to restart up here, although it will
              be diffcult starting in a new area, I know that I will love
              meeting and walking your dogs and cats.
            </p>
          </div>
        </div>
        <div className="aboutMe-photos-container">
          <div className="aboutMe-photos aboutMe-photo1"></div>
          <div className="aboutMe-photos aboutMe-photo4"></div>
          <div className="aboutMe-photos aboutMe-photo3"></div>
        </div>
        <div className="container-about">
          <div className="aboutMe__column--title1">ABOUT DINKY PAWS</div>

          <div className="main-text nf">
            I offer a range of different services. Solo walks are one of my
            favourites as I enjoy being out exploring with dogs, I also enjoy
            helping with training puppies. I only offer solo walks or multiple
            dogs from the same household, due to the importance of having the
            most control possible in any situation, I care for the dogs as if
            they are my own. I think it's a great way to build trust and for
            them to fully enjoy a solo walk where its all about them.
            <br />I have helped quite a few dogs with their reactvity, by
            providing calm and relaxing walks with some training to try and
            discourage the reactiveness, I have gained alot of experience, with
            different breeds and ages.
            <br />I enjoy cat sitting, I love to give them cuddles and play with
            them whilst you go away. I also offer overnight sitting, however due
            to not being able to leave Pongo for too many nights I can only
            offer a maximum of three nights. I can not wait to meet lots of new
            dogs and cats and other furry animals. If you have any questions
            please do not hesitate to contact me.
          </div>
          <br></br>

          <div className="aboutMe__size--image2"></div>
        </div>

        <Footer />
      </div>
    </>
  );
}
