import Head from "next/head";
import Header from "../../components/header";
import Footer from "../../components/footer";
import React, { useEffect, useState } from "react";
import images from "../../constants/images";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Dinky Paws | Puppy Services | Somerset</title>
      </Head>

      <Header />
      <div className="backgroundportfolio">
        <div className="portfoliotitle">East Sussex Dogs and Cats</div>
        <div class="grid-wrapper">
          <div className="port onesus big"></div>
          <div className="port threesus tall"></div>
          <div className="port twentysevensus tall"></div>
          <div className="port sevensus"></div>
          <div className="port fivesus tall"></div>
          <div className="port sixsus tall"></div>
          <div className="port eightsus tall"></div>
          <div className="port ninesus tall"></div>
          <div className="port twosus big"></div>
          <div className="port elevensus"></div>
          <div className="port twelvesus tall"></div>
          <div className="port thirteensus tall"></div>
          <div className="port fourteensus tall"></div>
          <div className="port tensus "></div>
          <div className="port fifteensus tall "></div>
          <div className="port sixteensus tall"></div>
          <div className="port seventeensus tall"></div>
          <div className="port eighteensus tall"></div>
          <div className="port nineteensus tall"></div>
          <div className="port thirtytwosus big"></div>
          <div className="port twentysus tall"></div>
          <div className="port twentyonesus tall"></div>
          <div className="port twentyninesus big"></div>
          <div className="port twentytwosus tall"></div>
          <div className="port thirtysus"></div>
          <div className="port twentyfivesus tall"></div>
          <div className="port twentysixsus tall"></div>
          <div className="port foursus tall "></div>
          <div className="port thirtyonesus tall"></div>
          <div className="port twentyeightsus tall"></div>
          <div className="port twentythreesus"></div>
          <div className="port twentyfoursus"></div>
        </div>
        <br />
        <br />
        <div className="portfoliotitle">Somerset Dogs and Cats</div>
        <div class="grid-wrapper">
          <div className="port onesom tall"></div>
          <div className="port twosom tall"></div>
          <div className="port threesom big "></div>
          <div className="port foursom tall "></div>
          <div className="port fivesom "></div>
          <div className="port sixsom tall"></div>
          <div className="port sevensom tall"></div>
          <div className="port elevensom wide"></div>
          <div className="port ninesom tall "></div>
          <div className="port tensom tall"></div>
          <div className="port twelvesom tall"></div>
          <div className="port thirteensom tall "></div>
          <div className="port seventeensom big"></div>
          <div className="port fourteensom tall"></div>
          <div className="port fifteensom tall "></div>
          <div className="port sixteensom  "></div>
          <div className="port eighteensom tall"></div>
          <div className="port nineteensom "></div>
          <div className="port twentysom tall "></div>
          <div className="port twentyonesom  "></div>
          <div className="port eightsom wide "></div>
          <div className="port twentytwosom big "></div>
          <div className="port twentythreesom  "></div>
          <div className="port twentyfoursom "></div>
          <div className="port twentyfivesom  "></div>
          <div className="port twentysixsom tall "></div>
          <div className="port twentysevensom big"></div>
          <div className="port twentyeightsom tall "></div>
          <div className="port twentyninesom tall "></div>
          <div className="port thirtysom  "></div>
          <div className="port thirtyonesom  "></div>
          <div className="port thirtytwosom tall"></div>
          <div className="port thirtythreesom  wide"></div>
          <div className="port thirtyfoursom  tall"></div>
          <div className="port thirtyfivesom  tall"></div>
          <div className="port thirtysixsom  "></div>
          <div className="port thirtysevensom big"></div>
          <div className="port thirtyeightsom "></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

