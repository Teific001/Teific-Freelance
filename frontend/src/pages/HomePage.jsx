import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero/Hero.jsx";
import Template from "../utils/Template";
import { HomePageContent } from "../static/data";
import Footer from "../components/Footer";
import Main from "../components/Main/Main";
import gsap from "gsap";
import SplitType from "split-type";
import "./main.css";
import { ReactComponent as Mouse } from "../Assets/images/magic-mouse_1.svg";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mn = useRef();
  const proHead = useRef();

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();
    let mysplittext = new SplitType(proHead.current, { type: "chars" });
    let chars = mysplittext.chars;

    mm.add("(max-width: 1000px)", () => {
      var tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: mn.current,
          start: "50% 50%",
          end: "55% 50%",
          scrub: 2,
          pin: true,
        },
      });
      // this setup code only runs when viewport is at least 800px wide
      tl1
        .to(
          ".top",
          {
            y: "-100vh",
            duration: 1,
          },
          "a"
        )
        .to(
          ".bottom",
          {
            y: "100vh",
            duration: 1,
          },
          "a"
        )
        .to(
          ".action_perform",
          {
            bottom: "-100%",
            opacity: 0,
            duration: 1.5,
          },
          "a"
        )
        .to(
          ".header",
          {
            duration: 0.1,
            opacity: 1,
            zIndex: 100000,
          },
          "b"
        );
    });
    return () => mm.revert();
  }, []);

  return (
    <>
   
    {
      isMobile &&  
      <div>
        <div className="main_head" ref={mn}>
          <div className="top">
            <h1 id="head_top_heading">
              Te<span>i</span>fic
            </h1>
          </div>
  
          <div className="bottom">
            <h1 id="head_bottom_heading">
              Te<span>i</span>fic
            </h1>
          </div>
          <div className="action_perform">
            <Mouse className="mouse"> This</Mouse>
            <p>Scroll Down</p>
          </div>
        </div>
  
        <div className="overflow-x-hidden absolute top-12 ">
         
            <div className="mobile-size">
              <Hero />
            </div>
        
  
          <div className="header ">
            <Header />
          </div>
          {HomePageContent.map((item) => (
            <Template
              key={item.id}
              id={item.id}
              bgText={item.bgText}
              heading={item.heading}
              content={item.content}
              imageUrl={item.imageUrl}
            />
          ))}
          <Footer />
        </div>
      </div>
    }
    {
   !isMobile && <div className="overflow-x-hidden">
         <Main/>
          {HomePageContent.map((item) => (
            <Template
              key={item.id}
              id={item.id}
              bgText={item.bgText}
              heading={item.heading}
              content={item.content}
              imageUrl={item.imageUrl}
            />
          ))}
          <Footer />
   </div>
    }
    </>
  );
};

export default HomePage;
