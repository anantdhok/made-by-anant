import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Cookies from "js-cookie";
import { FaGithub, FaBehanceSquare, FaMedium } from "react-icons/fa";
import { Data } from "../shared/data";
import styles from "../shared/styles/home.module.scss";

export default function Home({ theme }) {
  const message = [
    "I hope you're having a great day!",
    "Welcome back, you missed anything?",
    "Woah! Thanks for visiting again.",
    "I think we're gonna be good friends!",
    "You really like me, don't you :)",
  ];
  const change = [
    "Ahh! I hope you've washed your hands.",
    "Make yourself comfortable around!"
  ];

  const [count, setCount] = useState(!Cookies.get("viewCounts") ? 0 : +Cookies.get("viewCounts"));
  const [check, setCheck] = useState(false);
  const [greet, setGreet] = useState(message[0]);
  const resetGreet = () => {
    setGreet(message[count]);
  };

  useEffect(() => {
    if (!check) {
      let visits = +Cookies.get("viewCounts");
      Cookies.set("viewCounts", visits > 3 ? 4 : count + 1, { expires: 1 });
      setGreet(message[count]);
      setCheck(true);
    }
  });

  return (
    <>
      <Head>
        <title>Anant Dhok</title>
        <meta name="description" content="Portfolio made for Anant Dhok" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.home} style={theme ? null : { color: "#fff", background: "#1a1a1a" }}>
        <section className="container" onMouseEnter={resetGreet} onMouseLeave={() => setGreet(change[1])}>
          <div className={styles.intro}>
            <div className="text">
              <h1 className={styles.title}>Hi there, I'm Anant &#128075;</h1>
              <p className={styles.description}>{greet}</p>
            </div>
            <div className={styles.wrapper} onMouseEnter={() => setGreet(change[0])} onMouseLeave={resetGreet}>
              <Image
                className={styles.image}
                src="/media/profile.jpg"
                alt="Anant Dhok"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/media/profile.jpg"
              />
            </div>
          </div>
        </section>

        <section className="container" style={{ paddingBottom: "22px" }}>
          <h2>Let me introduce myself</h2>
          <p className={styles.paragraph}>{Data.introduction}</p>
        </section>

        <section className="container">
          <h2>Explore</h2>
          <div className="grid">
            <a
              href="https://github.com/anantdhok"
              className="card"
              style={{ borderColor: theme ? "#eaeaea" : "#333" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3><FaGithub className="icon" tyle={{ color: "black" }} /> Development</h3>
              <p>Technical Projects, Assignments and much more.</p>
            </a>
            <a
              href="https://www.behance.net/anantdhok"
              className="card"
              style={{ borderColor: theme ? "#eaeaea" : "#333" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3><FaBehanceSquare className="icon" style={{ color: "blue" }} /> Design</h3>
              <p>Creative Projects, Brandings, Illustrations and much more.</p>
            </a>
            <a
              href="https://medium.com/@anantdhok/about"
              className="card"
              style={{ borderColor: theme ? "#eaeaea" : "#333" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3><FaMedium className="icon" style={{ color: "orange" }} /> Writings</h3>
              <p>Blogs related to Programming, Development and Design.</p>
            </a>
          </div>
        </section>

        <section className="container">
          <h2>Experiences</h2>
          <div className="grid">
            {Data.experiences.map((item, id) => (
              <a
                href={item.link}
                className="card"
                style={{ borderColor: theme ? "#eaeaea" : "#333" }}
                target="_blank"
                rel="noopener noreferrer"
                key={id}
              >
                <h3>
                  <span className="icon">
                    <Image src={item.src} alt="Anant Dhok" width={item.size} height={item.size} layout="fixed" />
                  </span>
                  {item.title} <code className="code">{item.subtitle}</code>
                </h3>
                <p>{item.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="container">
          <h2>Academic Projects</h2>
          <div className="grid">
            {Data.projects.map((item, id) => (
              <a
                href={item.link}
                className="card"
                style={{ borderColor: theme ? "#eaeaea" : "#333" }}
                target="_blank"
                rel="noopener noreferrer"
                key={id}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>
                  {item.tags.map((item, id) => (
                    <li key={id}><em style={{ color: item.color }}>&bull;</em> {item.title}</li>
                  ))}
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="container">
          <h2>Expertise</h2>
          <p className={styles.paragraph}>
            <b>Skills: </b>{Data.skills}
            <br /><br />
            <b>Tools: </b>{Data.technologies}
          </p>
        </section>
      </main>
    </>
  );
}
