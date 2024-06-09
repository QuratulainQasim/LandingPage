import React from "react";
import Head from 'next/head';
import Image from 'next/image';

import "./land.css";
import ContantButton from "../components/actions/ContantButton";

const LendingPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Our Leaders</title>
        <meta
          name="description"
          content="A team of cool-headed professionals and warm-hearted innovators changing the world with innovative products and outstanding services that people simply love to use."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <h1>Our Leaders</h1>
        <p>
          A team of cool-headed professionals and warm-hearted innovators changing the world with innovative products and outstanding services that people simply love to use.
        </p>
      </header>

      <div className="leaders">
        <div className="leader">
          <Image src="/anOfficeBoy.webp" alt="Adam Smith" width={150} height={150} className="image" />
          <h2>Adam Smith</h2>
          <p>Head of Creative</p>
        </div>
        <div className="leader">
          <Image src="/girl1.jpg" alt="Mary Brown" width={150} height={150} className="image" />
          <h2>Mary Brown</h2>
          <p>Co-Founder</p>
        </div>
        <div className="leader">
          <Image src="/girl2.jpg" alt="Ann Richmond" width={150} height={150} className="image" />
          <h2>Ann Richmond</h2>
          <p>Creative Leader</p>
        </div>
      </div>

      <section className="description">
        <p>
          Donec et odio pellentesque diam volutpat commodo sed egestas. Nisl condimentum id venenatis a. Proin nibh nisl condimentum id. Dictumst vestibulum rhoncus est pellentesque elit.
        </p>
        <br />
      </section>

      <footer className="footer">
      <ContantButton/>
      </footer>
    </div>
  );
};

export default LendingPage;
