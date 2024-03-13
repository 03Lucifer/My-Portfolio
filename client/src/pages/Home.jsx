import React from "react";
import Analytics from "../components/Analytics";

export default function Home() {
  return (
    <>
      <main>

        {/* 1st Section */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>My name is Prateek Redkar</p>
              <h1>Prateek's Corner</h1>
              <p>
                Collaborative and result-oriented individual with an ability to
                use specialized and proven I.T skills with strong analytical,
                problem-solving and decision-making abilities to help an
                organization achieve its technology and business goals
              </p>
              <div className="btn-btn-group">
                <a href="/contact">
                  <button className="btn">Connect Now</button>
                </a>
                <a href="/contact">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>

            {/* Hero Images */}
            <div className="hero-image">
              <img src="/images/home.png" alt="Coding Together" width="400" height="500"/>
            </div>
          </div>
        </section>
      </main>

      {/* 2nd Section */}
      <Analytics/>

      {/* 3rd Section */}
      <section className="section-hero">
          <div className="container grid grid-two-cols">
            {/* Hero Images */}
            <div className="hero-image">
              <img src="/images/design.png" alt="Coding Together" width="400" height="500"/>
            </div>

            <div className="hero-content">
              <p>I am here to help you</p>
              <h1>Get started with me</h1>
              <p>
                Collaborative and result-oriented individual with an ability to
                use specialized and proven I.T skills with strong analytical,
                problem-solving and decision-making abilities to help an
                organization achieve its technology and business goals
              </p>
              <div className="btn-btn-group">
                <a href="/contact">
                  <button className="btn">Connect Now</button>
                </a>
                <a href="/contact">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
