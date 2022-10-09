import React from "react";
import Nav from "../Nav/Nav";
import "../Bio/Bio.css";

export default function Bio() {
  const details = document.querySelectorAll("details");
  details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open");
        }
      });
    });
  });

  return (
    <div className="bioContainer">
      <Nav />
      <h1>Hello this is my bio page</h1>
      <div className="bios">
        <details className="short">
          <summary>Learn about me super quick.</summary>
          I'm a classically trained French horn player turned Developer. I
          currently work at Shopify as a Front End Engineering Intern on the
          Theme Design Team.
        </details>
        <details className="medium">
          <summary>You've got a minute or two...</summary>
          I'm a classically trained French horn player turned Developer. My
          interest in programming came from a young age, as I was almost always
          on a computer or playing video games on a handheld device. I attended
          Baldwin Wallace University for undergrad musical studies, but I also
          took a Web Development course there in my free time to properly learn
          about the web and building webpages. I continued my musical studies at
          Carnegie Mellon University, and stuck around in Pittsburgh to
          freelance as a musician. When the pandemic hit, I took a step back to
          think about where I was in life and realized it might be a good time
          to revisit programming. I enrolled in{" "}
          <a href="https://turing.edu/">Turing School of Software and Design</a>
          's 8 month Front End program, where I learned all about modern Front
          End Development. Since graduating, I've had the opportunity to work
          for Shopify as a Front End Engineering Intern on the Theme Design
          team, making contributions to the Storefront theme editor and helping
          millions of merchants with their small businesses.
        </details>
        <details className="long">
          <summary>
            You really want to know <i>all</i> about me
          </summary>
          I'm a classically trained French horn player turned Developer. My
          interest in programming came from a young age, as I was almost always
          on a computer or playing video games on a handheld device. If I wasn't
          practicing horn, I was slowly learning how to use CSS and HTML to
          redesign my Neopets pet pages, or Myspace bio. While I ultimately
          continued to pursue French horn performance in undergrad at Baldwin
          Wallace University, I took a Web Development course there in my free
          time to properly learn about the web, and building webpages. I ended
          up building my own musician website that served as my "business card"
          when promoting myself for gigs. I moved to Pittsburgh to continue my
          musical studies at Carnegie Mellon University, with the hopes of also
          taking some computer science classes from their illustrious CS
          program. Unfortunately, because I was not a CS student, I was unable
          to secure a spot in any programming classes during my graduate
          program. I spent the next few years working for educational nonprofits
          by day, and freelancing in/around the greater Pittsburgh region at
          night. In late-2019, the pandemic hit, and ravaged the music industry.
          I took a step back and thought long and hard about where I wanted to
          be in 5 years. I decided to return to CMU as an employee in the hopes
          of once again taking a few CS courses. This time, I was able to enroll
          in{" "}
          <a href="https://www.cs.cmu.edu/~112/">
            15-112: Fundamentals of Programming and Computer Science
          </a>{" "}
          and{" "}
          <a href="https://courses.ideate.cmu.edu/53-353/m2022/">
            53-353: Understanding Game Engines
          </a>{" "}
          and really loved everything I was learning. I quit my job and enrolled
          I enrolled in{" "}
          <a href="https://turing.edu/">Turing School of Software and Design</a>
          's intensive 8 month Front End program, where I learned all about
          modern Front End Development. 1500 hours and 15+ web applications
          later, I successfully received an offer to join Shopify as a Front End
          Engineering Intern with their Theme Design team. Since joining
          Shopify, I've had the opportunity to build out features and polish up
          the Storefront Theme Editor, helping millions of merchants grow their
          small businesses.
        </details>
      </div>
    </div>
  );
}
