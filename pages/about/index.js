import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";

export default function Aboutme() {
  return (
    <>
      <Head>
        <title>Dinky Paws | Uckfield Dog Walking | East Sussex</title>
      </Head>
      <div className="container">
        <Header />

        <div className="aboutMe">
          <div className="aboutMe__size--image1"></div>
          <div className="aboutMe__column aboutMe__column-padding">
            <div className="aboutMe__column--title1">ABOUT ME</div>
            <p className="nf">
              Hello there, my name is Zoe and I am the proud owner of a
              wonderful 2-year-old dalmatian named Pongo. Recently, we moved
              from Somerset to Sussex, where I had previously started my
              business called Dinky Paws. Although it was difficult to leave
              behind all the dogs and cats I had built strong relationships
              with, I am excited to offer my range of services to new furry
              friends in the area.
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
            One of my favorite services to offer is solo walks, as I love
            exploring with dogs and building a strong bond with them. I also
            enjoy helping to train puppies. To ensure the utmost control in any
            situation, I only offer solo walks or multiple dogs from the same
            household. I treat every dog as if they were my own, and I believe
            that building trust is key to ensuring they fully enjoy their walk.
            <br />
            <br />I have gained a lot of experience working with different
            breeds and ages, including helping reactive dogs by providing calm
            and relaxing walks, along with some training to discourage their
            reactivity.
            <br />
            <br />
            In addition to dog walking, I also offer cat sitting services. I
            enjoy giving them cuddles and playing with them while their owners
            are away. I also offer overnight sitting, although I am limited to a
            maximum of three nights due to my commitment to caring for Pongo.
            <br />
            <br />I am excited to meet new furry friends and provide them with
            the same level of care and attention that I give to my own pets.
            Please feel free to contact me if you have any questions.
          </div>
          <br></br>

          <div className="aboutMe__size--image2"></div>
        </div>

        <Footer />
      </div>
    </>
  );
}

