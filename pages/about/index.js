import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Link from "next/link";

export default function Aboutme() {
  return (
    <>
      <Head>
        <title>
          Dinky Paws | Dog Walking | Cat Sitting | Uckfield | Sussex
        </title>
      </Head>
      <div className="container">
        <Header />

        <div className="aboutMe">
          <div className="aboutMe__size--image1"></div>
          <div className="aboutMe__column aboutMe__column-padding">
            <div className="aboutMe__column--title1">ABOUT ME</div>
            <p className="nf">
              Hello there, my name is Zoe and I am the proud owner of a
              wonderful 3-year-old dalmatian named Pongo. A year ago, we moved
              from Somerset to Sussex and we love it and all the wonderfull
              walks. I started Dinky Paws nearly three years ago in Somerset and
              it had to come with me to Sussex as it's the best job ever! We
              have enjoyed exploring the area and make lots of new furry
              friends.
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
          <div className="aboutRow">
            <div className="main-textAbout nf">
              One of my favorite services to offer is group walks, I started
              group walks a few months ago - previously only offering solo
              walks. I have loved every group I have created which is thought
              out very carefully based on breed, size, age etc. It is so
              rewarding to see dogs having so much fun on their walk. Atleast
              one solo walk will take place first, I believe that building trust
              is key to ensuring they fully enjoy their walk.
              <br />
              <br />I still offer solo walks - spaces are very limited. The hope
              is to build confidence for them to then be introduced to groups. I
              have gained a lot of experience working with different breeds and
              ages, including helping reactive dogs by providing calm and
              relaxing walks, along with some training to discourage their
              reactivity.
              <br />
              <br />
              In addition to dog walking, I also offer cat sitting services. I
              enjoy giving them cuddles and playing with them while their owners
              are away. I also offer overnight sitting, although I am limited to
              a maximum of three nights due to my commitment to caring for
              Pongo.
              <br />
              <br />I am excited to meet new furry friends and provide them with
              the same level of care and attention that I give to my own pets.
              Please feel free to contact me if you have any questions.
            </div>
            <br></br>
          </div>
          <div className="aboutMe__size--image222"></div>
        </div>

        <Footer />
      </div>
    </>
  );
}

