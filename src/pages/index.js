import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Cookies from "js-cookie";
import { FaGithub, FaBehanceSquare, FaMedium } from "react-icons/fa";
import styles from "../shared/styles/home.module.scss";

export default function Home(theme) {
  const [click, setClick] = useState();
  const handleClick = () => {
    Cookies.set("aboutVisit", "checked", { expires: 1 });
    setClick(!click);
  };

  useEffect(() => {
    if (Cookies.get("aboutVisit") !== "checked") setClick(true);
    else setClick(false);
  });

  return (
    <>
      <Head>
        <title>Anant Dhok</title>
        <meta name="description" content="Portfolio made for Anant Dhok" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.home}>
        <section className="container" style={{ height: "80vh" }}>
          <div className={styles.intro}>
            <div className="text">
              <h1 className={styles.title}>Hi there, I'm Anant &#128075;</h1>
              <p className={styles.description}>I hope you're having a great day!</p>
            </div>
            <div className={styles.wrapper}>
              <img src="/media/profile.png" alt="Anant Dhok" />
            </div>
          </div>
        </section>

        <section className="container">
          <h2>Let me introduce myself</h2>
          <p className={styles.paragraph}>
            Myself Anant Dhok, an aspiring Full-Stack developer graduated from VIT, Pune — Proficient in C++, Python,
            JavaScript(MERN Stack), and I'm also a self-taught Graphic Designing. I develop applications that people
            enjoy using and create distinctive designs that grab people's attention.
          </p>
        </section>

        <section className="container">
          <h2>Explore</h2>
          <div className="grid">
            <a href="https://github.com/anantdhok" className="card">
              <h3>
                <FaGithub className="icon" tyle={{ color: "black" }} /> Development
              </h3>
              <p>Technical Projects, Assignments and much more.</p>
            </a>
            <a href="https://www.behance.net/anantdhok" className="card">
              <h3>
                <FaBehanceSquare className="icon" style={{ color: "blue" }} /> Design
              </h3>
              <p>Creative Projects, Brandings, Illustrations and much more.</p>
            </a>
            <a href="https://medium.com/@anantdhok/about" className="card">
              <h3>
                <FaMedium className="icon" style={{ color: "orange" }} /> Writings
              </h3>
              <p>Blogs related to Programming, Development and Design.</p>
            </a>
          </div>
        </section>

        <section className="container">
          <h2>Experiences</h2>
          <div className="grid">
            <a href="https://github.com/vercel/next.js/tree/master/examples" className="card">
              <h3>
                Nexloop India <code className="code">Internship</code>
              </h3>
              <p>Full Stack Developer — 2020</p>
            </a>
            <a href="https://github.com/vercel/next.js/tree/master/examples" className="card">
              <h3>
                AstronEra <code className="code">Internship</code>
              </h3>
              <p>Graphic Designer — 2019</p>
            </a>
            <a href="https://github.com/vercel/next.js/tree/master/examples" className="card">
              <h3>
                TEDxVITPune <code className="code">Freelancing</code>
              </h3>
              <p>Head Designer — 2019-2021</p>
            </a>
          </div>
        </section>

        <section className="container">
          <h2>Academic Projects</h2>
          <div className="grid">
            <a href="https://github.com/anantdhok" className="card">
              <h3>RTEA</h3>
              <p>Real-Time Emotion Analysis during physiological therapies.</p>
              <span>
                <li>&bull; Emotion Detection</li>
                <li>&bull; Machine Learning</li>
                <li>&bull; AWS</li>
                <li>&bull; Socket</li>
                <li>&bull; Web Development</li>
              </span>
            </a>
            <a href="https://github.com/anantdhok" className="card">
              <h3>SWIR</h3>
              <p>Detection and Reconstruction model for radiometric errors.</p>
              <span>
                <li>&bull; Radiometric Errors</li>
                <li>&bull; Machine Learning</li>
                <li>&bull; Algorithm</li>
                <li>&bull; Web Development</li>
              </span>
            </a>
            <a href="https://github.com/anantdhok" className="card">
              <h3>UDHR</h3>
              <p>Unified Repository to store summarized health related reports.</p>
              <span>
                <li>&bull; Healthcare</li>
                <li>&bull; Blockchain</li>
                <li>&bull; NLP</li>
                <li>&bull; Web Development</li>
              </span>
            </a>
            <a href="https://github.com/anantdhok" className="card">
              <h3>AnantMoney</h3>
              <p>Application to implement crytocurrency within a small campus.</p>
              <span>
                <li>&bull; Crytocurreny</li>
                <li>&bull; Blockchain</li>
                <li>&bull; Web Development</li>
              </span>
            </a>
          </div>
        </section>

        <section className="container">
          <h2>Expertise</h2>
          <p className={styles.paragraph}>
            <b>Skills: </b>Full Stack Development, Web Design/Development, Programming, UI/UX Design, Graphic Designing
            <br />
            <b>Tools: </b>C/C++ Programming Language, Python, JavaScript, PHP, HTML5, CSS3, SASS, Bootstrap, React.js,
            Node.js, MySQL, MongoDB, Git, GitHub, Adobe Illustrator, Adobe InDesign, Adobe Photoshop, Figma, Microsoft
            Office
          </p>
        </section>
      </main>
    </>
  );
}
